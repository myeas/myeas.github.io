<template>
<!--本组可以调用指定单个标签或分类的文章，可适用于任一页面，本组件为1行1列形式-->
<!-- 
  参考样式：
  1、调用分类文章，如下：
    <CategororTagUpdateArticle3 :currentPage="currentPage" :perPage="20" :category="'分类名称'" />
  2、调用标签文章，如下：
    <CategororTagUpdateArticle3 :currentPage="currentPage" :perPage="20" :tag="'标签名称'" />  
  3、参数说明
    1）CategororTagUpdateArticle1为一行一列，CategororTagUpdateArticle2为一行两列，CategororTagUpdateArticle3为一行三列；
    2）currentPage中的“currentPage”，为第几页，一般不动，默认为第一页；
    3）perPage中的值，必须为数字，即调用多少篇文章；
    4）:category,调整分类文章；：tag调用标签文章。 
-->
  <div class="CategorTagUpdate-article-list1">
    <!-- <div class="CategorTagUpdate-article-title1">
      <router-link :to="moreArticle || '/archives/'" class="iconfont icon-bi"
        >最近更新</router-link
      >
    </div> -->
    <div class="CategorTagUpdate-article-wrapper1">
      <dl v-for="(item, index) in sortPosts" :key="index">
        <dd>{{ getNum(index) }}</dd>
        <dt>
          <router-link :to="item.path">
            <div>
              {{ item.title }}
              <span class="title-tag" v-if="item.frontmatter.titleTag">
                {{ item.frontmatter.titleTag }}
              </span>
            </div>
          </router-link>
          <span class="date">{{ getDate(item) }}</span>
        </dt>
      </dl>

      <!-- <dl>
        <dd></dd>
        <dt>
          <router-link :to="moreArticle || '/archives/'" class="more"
            >更多文章></router-link
          >
        </dt>
      </dl> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: ''
    },
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      sortPosts: [],
      postListOffsetTop: 0
    }
  },
  created() {
    this.setPosts()
  },
  mounted() {
    // this.postListOffsetTop = this.getElementToPageTop(this.$refs.postList) - 240
  },
  watch: {
    currentPage() {
      if (this.$route.query.p != this.currentPage) { // 此判断防止添加相同的路由信息（如浏览器回退时触发的）
        this.$router.push({
          query: {
            ...this.$route.query,
            p: this.currentPage
          }
        })
      }
      // setTimeout(() => {
      //   window.scrollTo({ top: this.postListOffsetTop }) // behavior: 'smooth'
      // },0)
      this.setPosts()
    },
    category() {
      this.setPosts()
    },
    tag() {
      this.setPosts()
    }
  },
  methods: {
    setPosts() {
      const currentPage = this.currentPage
      const perPage = this.perPage

      let posts = []
      if (this.category) {
        posts = this.$groupPosts.categories[this.category]
      } else if (this.tag) {
        posts = this.$groupPosts.tags[this.tag]
      } else {
        posts = this.$sortPosts
      }

      this.sortPosts = posts.slice((currentPage - 1) * perPage, currentPage * perPage)
    },
    // getElementToPageTop(el) {
    //   if(el && el.parentElement) {
    //     return this.getElementToPageTop(el.parentElement) + el.offsetTop
    //   }
    //   return el.offsetTop
    // }
    getNum(index) {
      return index < 9 ? '0' + (index + 1) : index + 1
    },
    getDate(item) {
      return item.frontmatter.date ? item.frontmatter.date.split(" ")[0].slice(5, 10) : ''
    },
  }
}
</script>

<style lang='stylus'>
// @require '../styles/wrapper.styl'
.CategorTagUpdate-article-list1
  // @extend $wrapper
  margin-top -1rem  //自定义调整上下位置
  padding 0rem 0rem 1rem //原1rem 2rem
  @media (max-width $MQNarrow)
    padding 1rem 0rem
  &.no-article-list
    display none
  .CategorTagUpdate-article-title1
    border-bottom 1px solid var(--borderColor)
    font-size 1.3rem
    padding 1rem
    a
      font-size 1.2rem
      color var(--textColor)
      opacity 0.9
      &:before
        margin-right 0.4rem
        font-size 1.1rem
  .CategorTagUpdate-article-wrapper1

    overflow hidden
    dl
      border-bottom 1px dotted var(--borderColor)
      float left
      display flex
      padding 8px 0
      margin 0
      height 25px  //原45
      width 100%  //100%一行1列，50%一行两行，33.33%
      dd
        font-size 1.1rem
        color #F17229
        width 50px
        text-align center
        margin 0
        line-height 45px
      dt
        flex 1
        display flex
        a
          color var(--textColor)
          flex 1
          display flex
          height 45px
          align-items center
          font-weight normal
          div
            overflow hidden
            white-space normal
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
            .title-tag
              // height 1.1rem
              // line-height 1.1rem
              border 1px solid $activeColor
              color $activeColor
              font-size 0.8rem
              padding 0 0.35rem
              border-radius 0.2rem
              margin-left 0rem
              transform translate(0, -0.05rem)
              display inline-block
          &:hover
            text-decoration underline
          &.more
            color $accentColor
        .date
          width 50px
          margin-right 15px
          color #999
          text-align right
          font-size 0.9rem
          line-height 45px
</style>
