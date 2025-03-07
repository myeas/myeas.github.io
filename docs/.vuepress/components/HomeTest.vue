<template>111111
  <div class="home-wrapper">
    <MainLayout>
      <template>
              11111
              <!-- 增加文章列表-->
              <template v-if="homeData.hidearticlelistblock === 'false'">
                <div class="theme-vdoing-content custom card-box"> 
                  <div class="demo-block demo-zh-CN demo-">
                    <div class="demo-content"> 

                        <div class="el-row" style="margin-left: -6px; margin-right: -6px;">
                          <h2>🎉分类文章</h2>
                          <template v-for="item in homeData.articlelistblock">
                          <div class="el-col el-col-8" style="padding-left: 6px; padding-right: 6px; margin: 0px auto auto;">
                            <div class="el-card is-hover-shadow" style="margin-bottom: 5px;">
                              <div v-if="item.listname && item.listlink" :key="item.listlink" class="el-card__header">
                                <div class="clearfix">
                                  <span><b>{{ item.listname }}</b></span> 
                                  <button v-if="item.listauto !== 'auto'" :href="item.listlink" type="button" class="el-button el-button--text" style="float: right; padding: 3px 0px;">
                                    <span><a :href="item.listlink">更多...</a></span>
                                  </button>
                                  <button v-else-if="item.listauto === 'auto' && item.categoryortag === 'tag'" type="button" class="el-button el-button--text" style="float: right; padding: 3px 0px;">
                                    <span><a :href="'/tags/?tag='+item.keyname">更多...</a></span>
                                  </button>
                                  <button v-else-if="item.listauto === 'auto' && item.categoryortag === 'category'" type="button" class="el-button el-button--text" style="float: right; padding: 3px 0px;">
                                    <span><a :href="'/categories/?category='+item.keyname">更多...</a></span>
                                  </button>
                                </div>
                              </div>
                              <div class="el-card__body" style="height: 360px;"> 
                                <div class="text item" style="overflow: hidden; text-overflow:ellipsis; white-space: nowrap;margin-left: -1.5rem;">
                                  <template v-if="item.categoryortag === 'tag'" >
                                  <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="item.articleLength" :tag="item.keyname" />
                                  </template>
                                  <template v-else-if="item.categoryortag === 'category'" >
                                  <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="item.articleLength" :category="item.keyname" /> 
                                  </template>
                                </div>
                              </div>
                            </div>
                          </div>
                          </template>
                        </div>

                    </div>
                  </div>
                </div>
              </template>

      </template>


    </MainLayout>
  </div>
</template>

<script>
import NavLink from "@theme/components/NavLink";
import BScroll from "@better-scroll/core"
import Slide from "@better-scroll/slide"
import MainLayout from '@theme/components/MainLayout'
import PostList from '@theme/components/PostList'
import UpdateArticle from '@theme/components/UpdateArticle'
import Pagination from '@theme/components/Pagination'
import BloggerBar from '@theme/components/BloggerBar'
import CategoriesBar from '@theme/components/CategoriesBar'
import TagsBar from '@theme/components/TagsBar'

const MOBILE_DESKTOP_BREAKPOINT = 720 // refer to config.styl

BScroll.use(Slide)

export default {
  data() {
    return {
      isMQMobile: false,

      slide: null,
      currentPageIndex: 0,
      playTimer: 0,
      mark: 0,

      total: 0, // 总长
      perPage: 10, // 每页长
      currentPage: 1// 当前页
    }
  },
  computed: {
    homeData() {
      return {
        ...this.$page.frontmatter
      }
    },
    hasFeatures() {
      return !!(this.homeData.features && this.homeData.features.length)
    },
    homeSidebarB() {
      const { htmlModules } = this.$themeConfig
      return htmlModules ? htmlModules.homeSidebarB : ''
    },
    showBanner() { // 当分页不在第一页时隐藏banner栏
      return this.$route.query.p
        && this.$route.query.p != 1
        && (!this.homeData.postList || this.homeData.postList === 'detailed')
        ? false : true
    },
    bannerBgStyle() {
      let bannerBg = this.homeData.bannerBg
      if (!bannerBg || bannerBg === 'auto') { // 默认
        if (this.$themeConfig.bodyBgImg) { // 当有bodyBgImg时，不显示背景
          return ''
        } else { // 网格纹背景
          return 'background: rgb(40,40,45) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABOSURBVFhH7c6xCQAgDAVRR9A6E4hLu4uLiWJ7tSnuQcIvr2TRYsw3/zOGGEOMIcYQY4gxxBhiDDGGGEOMIcYQY4gxxBhiDLkx52W4Gn1tuslCtHJvL54AAAAASUVORK5CYII=)'
        }
      } else if (bannerBg === 'none') { // 无背景
        if (this.$themeConfig.bodyBgImg) {
          return ''
        } else {
          return 'background: var(--mainBg);color: var(--textColor)'
        }
      } else if (bannerBg.indexOf('background:') > -1) { // 自定义背景样式
        return bannerBg
      } else if (bannerBg.indexOf('.') > -1) { // 大图
        return `background: url(${this.$withBase(bannerBg)}) center center / cover no-repeat`
      }

    },
    actionLink() {
      return {
        link: this.homeData.actionLink,
        text: this.homeData.actionText
      };
    }
  },
  components: { NavLink, MainLayout, PostList, UpdateArticle, BloggerBar, CategoriesBar, TagsBar, Pagination },
  created() {
    this.total = this.$sortPosts.length
  },
  beforeMount() {
    this.isMQMobile = window.innerWidth < MOBILE_DESKTOP_BREAKPOINT ? true : false; // vupress在打包时不能在beforeCreate(),created()访问浏览器api（如window）
  },
  mounted() {
    if (this.$route.query.p) {
      this.currentPage = Number(this.$route.query.p)
    }

    if (this.hasFeatures && this.isMQMobile && (!this.$route.query.p || this.$route.query.p == 1)) {
      this.init()
    }

    if (this.hasFeatures) {
      window.addEventListener('resize', () => {
        this.isMQMobile = window.innerWidth < MOBILE_DESKTOP_BREAKPOINT ? true : false;
        if (this.isMQMobile && !this.slide && !this.mark) {
          this.mark++
          setTimeout(() => {
            this.init()
          }, 60)
        }
      })
    }
  },
  beforeDestroy() {
    clearTimeout(this.playTimer)
    this.slide && this.slide.destroy()
  },
  watch: {
    '$route.query.p'() {
      if (!this.$route.query.p) {
        this.currentPage = 1
      } else {
        this.currentPage = Number(this.$route.query.p)
      }

      if (this.hasFeatures && this.currentPage === 1 && this.isMQMobile) {
        setTimeout(() => {
          this.slide && this.slide.destroy()
          this.init()
        }, 0)
      }
    }
  },
  methods: {
    init() {
      clearTimeout(this.playTimer)
      this.slide = new BScroll(this.$refs.slide, {
        scrollX: true, // x轴滚动
        scrollY: false, // y轴滚动
        slide: {
          loop: true,
          threshold: 100
        },
        useTransition: true, // 使用css3 transition动画
        momentum: false,
        bounce: false, // 回弹
        stopPropagation: false, // 是否阻止事件冒泡
        probeType: 2,
        preventDefault: false
      })

      // user touches the slide area
      this.slide.on('beforeScrollStart', () => {
        clearTimeout(this.playTimer)
      })
      // user touched the slide done
      this.slide.on('scrollEnd', () => {
        this.autoGoNext()
      })
      this.slide.on('slideWillChange', (page) => {
        this.currentPageIndex = page.pageX
      })
      this.autoGoNext()
    },
    autoGoNext() {
      clearTimeout(this.playTimer)
      this.playTimer = setTimeout(() => {
        this.slide.next()
      }, 4000)
    },
    handlePagination(i) { // 分页
      this.currentPage = i
    },
    getScrollTop() {
      return window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
    },
  },

};
</script>

<style lang="stylus" scoped>
.home-wrapper
  .banner
    width 100%
    min-height 450px
    margin-top $navbarHeight
    color $bannerTextColor
    position relative
    overflow hidden
    .banner-conent
      max-width $homePageWidth
      margin 0px auto
      position relative
      z-index 1
      overflow hidden
      .hero
        text-align center
        margin-top 3rem
        img
          max-width 100%
          max-height 240px
          display block
          margin 2rem auto 1.5rem
        h1
          margin 0
          font-size 3.2rem
        .description, .action
          margin 1.5rem auto
        .action
          display flex
          justify-content center
          align-content center
          list-style-type none
          li
            padding 0.8rem
        .description
          max-width 40rem
          font-size 1.1rem
          line-height 1.3
          opacity 0.9
        .action-button
          display inline-block
          font-size 1.2rem
          background-color $accentColor
          padding 0.8rem 1.6rem
          border-radius 4px
          transition background-color 0.1s ease
          box-sizing border-box
          border-bottom 1px solid darken($accentColor, 10%)
          color #fff
          &:hover
            background-color lighten($accentColor, 10%)
      // pc端features
      .features
        padding 2rem 0
        margin-top 2.5rem
        display flex
        flex-wrap wrap
        align-items flex-start
        align-content stretch
        justify-content space-between
      .feature
        flex-grow 1
        flex-basis 30%
        max-width 30%
        text-align center
        a
          // color lighten($bannerTextColor,10%)
          color inherit
          .feature-img
            width 10rem
            height 10rem
            animation heart 1.2s ease-in-out 0s infinite alternate
            animation-play-state paused
          h2
            font-weight 500
            font-size 1.3rem
            border-bottom none
            padding-bottom 0
          p
            opacity 0.8
            padding 0 0.8rem
      .feature:hover
        .feature-img
          animation-play-state running
        h2, p
          color $accentColor
    // 移动端滑动图标
    .slide-banner
      margin-top 2rem
      .banner-wrapper
        position relative
      .slide-banner-scroll
        min-height 1px
        overflow hidden
      .slide-banner-wrapper
        height 300px
        .slide-item
          display inline-block
          height 300px
          width 100%
          text-align center
          a
            // color lighten($bannerTextColor,10%)
            color inherit
            .feature-img
              width 10rem
              height 10rem
            h2
              font-size 1.1rem
              font-weight 500
              border-bottom none
              padding-bottom 0
            p
              opacity 0.8
              padding 0 0.8rem
      .docs-wrapper
        position absolute
        bottom 25px
        left 50%
        transform translateX(-50%)
        .doc
          display inline-block
          margin 0 4px
          width 8px
          height 8px
          border-radius 50%
          background var(--textColor)
          opacity 0.9
          &.active
            opacity 0.5
  // 分页不在第一页时，隐藏banner栏
  .banner.hide-banner
    display none
    & + .main-wrapper
      margin-top: ($navbarHeight + 0.9rem)
  .main-wrapper
    margin-top 2rem
    .main-left
      .card-box
        margin-bottom 0.9rem  //默认为2
      .pagination
        margin-bottom 3rem  //4
      .theme-vdoing-content
        h2 
          color var(--textColor) 
          font-size 1.6rem 
          font-weight bolder
        padding 0 2rem
        overflow hidden
        border none
        &>:first-child
          padding-top 2rem
        &>:last-child
          padding-bottom 2rem
    .main-right
      .custom-html-box
        padding 0
        overflow hidden
@keyframes heart
  from
    transform translate(0, 0)
  to
    transform translate(0, 8px)
// 1025px以下
@media (max-width 1025px)
  .home-wrapper
    .banner
      .banner-conent
        .hero
          h1
            font-size 2.5rem
          .description
            font-size 1rem
        .feature
          a
            h2
              font-size 1.1rem
            .feature-img
              width 9rem
              height 9rem
// 719px以下
@media (max-width $MQMobile)
  .home-wrapper
    .banner
      .banner-conent
        .features
          display none !important
// 419px以下
@media (max-width $MQMobileNarrow)
  .home-wrapper
    .banner-conent
      padding-left 1.5rem
      padding-right 1.5rem
      .hero
        img
          max-height 210px
          margin 2rem auto 1.2rem
        h1
          font-size 2rem
        h1, .description, .action
          margin 1.2rem auto
        .description
          font-size 1.2rem
        .action-button
          font-size 1rem
          padding 0.6rem 1.2rem
      .feature
        h2
          font-size 1.25rem
.theme-style-line
  .main-wrapper
    @media (max-width 719px)
      margin-top -1px


.artlist-wrapper
  .title_header
    border-bottom 1px solid var(--borderColor)
    color var(--textColor)
    padding-bottom 0.3rem
    // opacity 0.9
    // font-size 1.2rem
    // padding 0 0.95rem
    a
        color var(--textColor)
        opacity 0.9
        font-size 1.2rem
        padding 0 0.95rem
        &::before
          margin-right 0.3rem
  .artlists
    margin-top 0.6rem
    a
      display block
      padding 8px 0.95rem 7px 0.95rem
      color var(--textColor)
      opacity 0.8
      font-size 0.95rem
      line-height 0.95rem
      position relative
      transition all 0.2s
      border-left 2px solid transparent
      margin-top -1px
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      @media (max-width $MQMobile)
        font-weight 400
      &.more
        // color $accentColor
      &:not(.active):hover
        color $accentColor
        background #f8f8f8
        border-color $accentColor
        span
          opacity 0.8
      span
        float right
        background-color var(--textColor)
        color var(--mainBg)
        border-radius 8px
        padding 0 0.13rem
        min-width 1rem
        height 1rem
        line-height 1rem
        font-size 0.6rem
        text-align center
        opacity 0.6
        transition opacity 0.3s
      &.active
        background $accentColor
        color var(--mainBg)
        padding-left 0.8rem
        border-radius 1px
        border-color transparent
.theme-mode-dark .artlist-wrapper .artlist a:not(.active):hover, .theme-mode-read .artlist-wrapper .artlists a:not(.active):hover
  background var(--customBlockBg)
</style>
