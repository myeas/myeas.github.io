//const baidutj = require("../common/baidutj.js");

// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'shortcut icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹

  ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css' }], // 阿里在线矢量库
  ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],  // 解决 Chrome 网站统计不准确问题

  ['noscript', {}, '<meta http-equiv="refresh" content="0; url=https://flyyhui.github.io/noscript"><style>.theme-vdoing-content { display:none }'],  // 私密文章模块需要

  [
    'meta',
    {
      name: 'keywords',
      content: '金蝶EAS,汽车4S,经销商集团,整车管理,维修管理,会员管理,精品,装潢',
    },
  ],
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色

  // 下面四个 script 是 demo-block 插件用到，但是因为导航栏兼容问题，不再使用
  //['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
  //['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
  //['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
  //['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
  // Twikoo 评论系统
  ['script', { src: 'https://cdn.staticfile.org/twikoo/1.6.16/twikoo.all.min.js' }],
  
  // 百度统计 js
  //['script', {}, baidutj],

  /*  [
     'script',
     {
       'data-ad-client': 'ca-pub-7828333725993554',
       async: 'async',
       src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
     },
   ], */ // 网站关联Google AdSense 与 html格式广告支持
]
