(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{406:function(t,e,a){},437:function(t,e,a){"use strict";a(406)},472:function(t,e,a){"use strict";a.r(e);var i=a(355),s=a(435),r=a(436),o=a(366),n=a(364),l=a(388),c=a(365),h=a(420),g=a(387),u=a(389);s.a.use(r.a);var d={data:()=>({isMQMobile:!1,slide:null,currentPageIndex:0,playTimer:0,mark:0,total:0,perPage:10,currentPage:1}),computed:{homeData(){return{...this.$page.frontmatter}},hasFeatures(){return!(!this.homeData.features||!this.homeData.features.length)},homeSidebarB(){const{htmlModules:t}=this.$themeConfig;return t?t.homeSidebarB:""},showBanner(){return!(this.$route.query.p&&1!=this.$route.query.p&&(!this.homeData.postList||"detailed"===this.homeData.postList))},bannerBgStyle(){let t=this.homeData.bannerBg;return t&&"auto"!==t?"none"===t?this.$themeConfig.bodyBgImg?"":"background: var(--mainBg);color: var(--textColor)":t.indexOf("background:")>-1?t:t.indexOf(".")>-1?`background: url(${this.$withBase(t)}) center center / cover no-repeat`:void 0:this.$themeConfig.bodyBgImg?"":"background: rgb(40,40,45) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABOSURBVFhH7c6xCQAgDAVRR9A6E4hLu4uLiWJ7tSnuQcIvr2TRYsw3/zOGGEOMIcYQY4gxxBhiDDGGGEOMIcYQY4gxxBhiDLkx52W4Gn1tuslCtHJvL54AAAAASUVORK5CYII=)"},actionLink(){return{link:this.homeData.actionLink,text:this.homeData.actionText}}},components:{NavLink:i.default,MainLayout:o.default,PostList:n.default,UpdateArticle:l.default,BloggerBar:h.default,CategoriesBar:g.default,TagsBar:u.default,Pagination:c.default},created(){this.total=this.$sortPosts.length},beforeMount(){this.isMQMobile=window.innerWidth<720},mounted(){this.$route.query.p&&(this.currentPage=Number(this.$route.query.p)),!this.hasFeatures||!this.isMQMobile||this.$route.query.p&&1!=this.$route.query.p||this.init(),this.hasFeatures&&window.addEventListener("resize",()=>{this.isMQMobile=window.innerWidth<720,!this.isMQMobile||this.slide||this.mark||(this.mark++,setTimeout(()=>{this.init()},60))})},beforeDestroy(){clearTimeout(this.playTimer),this.slide&&this.slide.destroy()},watch:{"$route.query.p"(){this.$route.query.p?this.currentPage=Number(this.$route.query.p):this.currentPage=1,this.hasFeatures&&1===this.currentPage&&this.isMQMobile&&setTimeout(()=>{this.slide&&this.slide.destroy(),this.init()},0)}},methods:{init(){clearTimeout(this.playTimer),this.slide=new s.a(this.$refs.slide,{scrollX:!0,scrollY:!1,slide:{loop:!0,threshold:100},useTransition:!0,momentum:!1,bounce:!1,stopPropagation:!1,probeType:2,preventDefault:!1}),this.slide.on("beforeScrollStart",()=>{clearTimeout(this.playTimer)}),this.slide.on("scrollEnd",()=>{this.autoGoNext()}),this.slide.on("slideWillChange",t=>{this.currentPageIndex=t.pageX}),this.autoGoNext()},autoGoNext(){clearTimeout(this.playTimer),this.playTimer=setTimeout(()=>{this.slide.next()},4e3)},handlePagination(t){this.currentPage=t},getScrollTop:()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}},m=(a(437),a(1)),p=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-wrapper"},[e("div",{staticClass:"banner",class:{"hide-banner":!t.showBanner},style:t.bannerBgStyle},[e("div",{staticClass:"banner-conent",style:!t.homeData.features&&!t.homeData.heroImage&&"padding-top: 7rem"},[e("header",{staticClass:"hero"},[t.homeData.heroImage?e("img",{attrs:{src:t.$withBase(t.homeData.heroImage),alt:t.homeData.heroAlt}}):t._e(),t._v(" "),t.homeData.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n          "+t._s(t.homeData.heroText)+"\n        ")]):t._e(),t._v(" "),t.homeData.tagline?e("p",{staticClass:"description"},[t._v("\n          "+t._s(t.homeData.tagline)+"\n        ")]):t._e(),t._v(" "),t.homeData.actionText&&t.homeData.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e(),t._v(" "),t.homeData.action?e("ul",{staticClass:"action"},[t._l(t.homeData.action,(function(a){return[a.text&&a.link?e("li",{key:a.link},[e("a",{staticClass:"nav-link action-button",attrs:{href:a.link}},[a.icon?e("i",{class:a.icon}):t._e(),t._v("\n                "+t._s(a.text)+"\n              ")])]):t._e()]}))],2):t._e()]),t._v(" "),t.hasFeatures&&!t.isMQMobile?e("div",{staticClass:"features"},t._l(t.homeData.features,(function(a,i){return e("div",{key:i,staticClass:"feature"},[a.link?e("router-link",{attrs:{to:a.link}},[a.imgUrl?e("img",{staticClass:"feature-img",attrs:{src:t.$withBase(a.imgUrl),alt:a.title}}):t._e(),t._v(" "),e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])]):e("a",{attrs:{href:"javascript:;"}},[a.imgUrl?e("img",{staticClass:"feature-img",attrs:{src:t.$withBase(a.imgUrl),alt:a.title}}):t._e(),t._v(" "),e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])],1)})),0):t._e()]),t._v(" "),t.hasFeatures?e("div",{directives:[{name:"show",rawName:"v-show",value:t.isMQMobile,expression:"isMQMobile"}],staticClass:"slide-banner"},[e("div",{staticClass:"banner-wrapper"},[e("div",{ref:"slide",staticClass:"slide-banner-scroll"},[e("div",{staticClass:"slide-banner-wrapper"},t._l(t.homeData.features,(function(a,i){return e("div",{key:i,staticClass:"slide-item"},[a.link?e("router-link",{attrs:{to:a.link}},[a.imgUrl?e("img",{staticClass:"feature-img",attrs:{src:t.$withBase(a.imgUrl),alt:a.title}}):t._e(),t._v(" "),e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])]):e("a",{attrs:{href:"javascript:;"}},[a.imgUrl?e("img",{staticClass:"feature-img",attrs:{src:t.$withBase(a.imgUrl),alt:a.title}}):t._e(),t._v(" "),e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])],1)})),0)]),t._v(" "),e("div",{staticClass:"docs-wrapper"},t._l(t.homeData.features.length,(function(a,i){return e("span",{key:i,staticClass:"doc",class:{active:t.currentPageIndex===i}})})),0)])]):t._e()]),t._v(" "),e("MainLayout",{scopedSlots:t._u([{key:"mainLeft",fn:function(){return[e("Content",{staticClass:"theme-vdoing-content custom card-box"}),t._v(" "),"flase"===t.homeData.hidearticlelistblock?[e("div",{staticClass:"theme-vdoing-content custom card-box"},[e("div",{staticClass:"demo-block demo-zh-CN demo-"},[e("div",{staticClass:"demo-content"},[e("div",{staticClass:"el-row",staticStyle:{"margin-left":"-6px","margin-right":"-6px"}},[e("h2",[t._v("🎉分类文章")]),t._v(" "),t._l(t.homeData.articlelistblock,(function(a){return[e("div",{staticClass:"el-col el-col-8",staticStyle:{"padding-left":"6px","padding-right":"6px",margin:"0px auto auto"}},[e("div",{staticClass:"el-card is-hover-shadow",staticStyle:{"margin-bottom":"5px"}},[a.listname&&a.listlink?e("div",{key:a.listlink,staticClass:"el-card__header"},[e("div",{staticClass:"clearfix"},[e("span",[e("b",[t._v(t._s(a.listname))])]),t._v(" "),"auto"!==a.listauto?e("button",{staticClass:"el-button el-button--text",staticStyle:{float:"right",padding:"3px 0px"},attrs:{href:a.listlink,type:"button"}},[e("span",[e("a",{attrs:{href:a.listlink}},[t._v("更多...")])])]):"auto"===a.listauto&&"tag"===a.categoryortag?e("button",{staticClass:"el-button el-button--text",staticStyle:{float:"right",padding:"3px 0px"},attrs:{type:"button"}},[e("span",[e("a",{attrs:{href:"/tags/?tag="+a.keyname}},[t._v("更多...")])])]):"auto"===a.listauto&&"category"===a.categoryortag?e("button",{staticClass:"el-button el-button--text",staticStyle:{float:"right",padding:"3px 0px"},attrs:{type:"button"}},[e("span",[e("a",{attrs:{href:"/categories/?category="+a.keyname}},[t._v("更多...")])])]):t._e()])]):t._e(),t._v(" "),e("div",{staticClass:"el-card__body",staticStyle:{height:"360px"}},[e("div",{staticClass:"text item",staticStyle:{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","margin-left":"-1.5rem"}},["tag"===a.categoryortag?[e("ArticleListCategororTagUpdate",{attrs:{currentPage:t.currentPage,perPage:a.articleLength,tag:a.keyname}})]:"category"===a.categoryortag?[e("ArticleListCategororTagUpdate",{attrs:{currentPage:t.currentPage,perPage:a.articleLength,category:a.keyname}})]:t._e()],2)])])])]}))],2)])])])]:t._e(),t._v(" "),"simple"===t.homeData.postList?e("UpdateArticle",{staticClass:"card-box",attrs:{length:t.homeData.simplePostListLength||10,moreArticle:t.$themeConfig.updateBar&&t.$themeConfig.updateBar.moreArticle}}):t.homeData.postList&&"detailed"!==t.homeData.postList?t._e():[e("PostList",{attrs:{currentPage:t.currentPage,perPage:t.perPage}}),t._v(" "),e("Pagination",{directives:[{name:"show",rawName:"v-show",value:Math.ceil(t.total/t.perPage)>1,expression:"Math.ceil(total / perPage) > 1"}],attrs:{total:t.total,perPage:t.perPage,currentPage:t.currentPage},on:{getCurrentPage:t.handlePagination}})]]},proxy:!0},t.homeData.hideRightBar?null:{key:"mainRight",fn:function(){return[t.$themeConfig.blogger?e("BloggerBar"):t._e(),t._v(" "),t._l(t.homeData.articlelistside,(function(a){return t.homeData.articlelistside?[e("div",{staticClass:"artlist-wrapper card-box"},[e("div",{staticClass:"title_header"},["auto"!==a.listauto?e("a",{class:"iconfont icon-"+a.icon,attrs:{href:a.listlink}},[t._v(t._s(a.listname))]):"auto"===a.listauto&&"tag"===a.categoryortag?e("a",{class:"iconfont icon-"+a.icon,attrs:{href:"/tags/?tag="+a.keyname}},[t._v(t._s(a.listname))]):"auto"===a.listauto&&"category"===a.categoryortag?e("a",{class:"iconfont icon-"+a.icon,attrs:{href:"/categories/?category="+a.keyname}},[t._v(t._s(a.listname))]):t._e()]),t._v(" "),e("div",{staticClass:"artlists"},["tag"===a.categoryortag?e("ArticleListSide",{attrs:{currentPage:t.currentPage,perPage:a.articleLength,tag:a.keyname}}):"category"===a.categoryortag?e("ArticleListSide",{attrs:{currentPage:t.currentPage,perPage:a.articleLength,category:a.keyname}}):t._e()],1)])]:t._e()})),t._v(" "),!1!==t.$themeConfig.category&&t.$categoriesAndTags.categories.length?e("CategoriesBar",{attrs:{categoriesData:t.$categoriesAndTags.categories,length:30}}):t._e(),t._v(" "),!1!==t.$themeConfig.tag&&t.$categoriesAndTags.tags.length?e("TagsBar",{attrs:{tagsData:t.$categoriesAndTags.tags,length:60}}):t._e(),t._v(" "),t.homeSidebarB?e("div",{staticClass:"custom-html-box card-box",domProps:{innerHTML:t._s(t.homeSidebarB)}}):t._e()]},proxy:!0}],null,!0)})],1)}),[],!1,null,"19152a40",null);e.default=p.exports}}]);