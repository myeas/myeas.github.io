(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{453:function(t,s,e){},492:function(t,s,e){"use strict";e(453)},554:function(t,s,e){"use strict";e.r(s);e(29);var r={props:{category:{type:String,default:""},tag:{type:String,default:""},currentPage:{type:Number,default:1},perPage:{type:Number,default:10}},data:()=>({sortPosts:[],postListOffsetTop:0}),created(){this.setPosts()},mounted(){},watch:{currentPage(){this.$route.query.p!=this.currentPage&&this.$router.push({query:{...this.$route.query,p:this.currentPage}}),this.setPosts()},category(){this.setPosts()},tag(){this.setPosts()}},methods:{setPosts(){const t=this.currentPage,s=this.perPage;let e=[];e=this.category?this.$groupPosts.categories[this.category]:this.tag?this.$groupPosts.tags[this.tag]:this.$sortPosts,this.sortPosts=e.slice((t-1)*s,t*s)}}},a=(e(492),e(1)),i=Object(a.a)(r,(function(){var t=this,s=t._self._c;return s("div",{ref:"postList",staticClass:"article-list-page"},[s("transition-group",{attrs:{tag:"div",name:"post"}},t._l(t.sortPosts,(function(e){return s("div",{key:e.key,staticClass:"articlepost"},[s("div",{staticClass:"title-wrapper"},[s("router-link",{attrs:{to:e.path}},[t._v("\n            "+t._s(e.title)+"\n            "),e.frontmatter.titleTag?s("span",{staticClass:"title-tag"},[t._v(t._s(e.frontmatter.titleTag))]):t._e()])],1)])})),0)],1)}),[],!1,null,null,null);s.default=i.exports}}]);