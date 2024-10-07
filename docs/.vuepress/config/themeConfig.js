const nav = require('../common/nav.js');
const footer = require('../common/footer.js');
const htmlModules = require('./htmlModules.js');
const { readFileList, readTotalFileWords, readEachFileWords } = require('../webSiteInfo/readFile.js');

const { penName, link, avatar, name, slogan } = require("../common/info");

// 主题配置
module.exports = {
  nav, // 导航栏
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/index/logo.png', // 导航栏logo
  //repo: 'myeas', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '更新时间', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: 'docs', // 指定根目录
  // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
  //editLinks: true, // 启用编辑
  //editLinkText: '编辑此页',

  //*** 以下配置是Vdoing主题改动和新增的配置 ***//

  // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
  // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
  // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
  categoryText: '未归档', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
  // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

  //bodyBgImg: '/img/index/bg.jpg',  //'/img/index/bg.jpg',
  bodyBgImg: [
    '/img/index/auto-bg1.jpg',
    '/img/index/auto-bg2.jpg',
    '/img/index/auto-bg3.jpg',
    '/img/index/auto-bg4.jpg',
    '/img/index/auto-bg5.jpg',
    '/img/index/auto-bg6.jpg',
  ], // body背景大图(即整个页面的背景图)，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
  bodyBgImgOpacity: 1, // body背景图透明度，选值 0 ~ 1.0, 默认0.5
  bodyBgImgInterval: 120, // body多张背景图时的切换间隔, 默认15，单位s
  //bodyBgImgTraTimeLength: 120000,

  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

  // updateBar: { // 最近更新栏
  //   showToArticle: true, // 显示到文章页底部，默认true
  //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
  // },
  // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
  // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
    // defaultMode: 'auto',

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',
    
  // 站点配置（首页 & 文章页）
  blogInfo: {
    blogCreate: '2022-01-01', // 博客创建时间
    indexView: true,  // 开启首页的访问量和排名统计，默认 true（开启）
    pageView: true,  // 开启文章页的浏览量统计，默认 true（开启）
    readingTime: true,  // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
    eachFileWords: readEachFileWords([''], 300, 160),  // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
    mdFileCountType: 'archives',  // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
    totalWords: 'archives',  // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
    moutedEvent: '.tags-wrapper',   // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
    // 下面两个选项：第一次获取访问量失败后的迭代时间
    indexIteration: 2500,   // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
    pageIteration: 2500,    // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
    // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
  },

  // 私密文章配置
  privatePage: {
    username: 'eas',    // 用户名
    password: 'eashelp!',    // 密码
    expire: 1000 * 60 * 60 * 24,   // 有效时间：毫秒(ms)。过期后访问私密文章重新输入用户名和密码。默认一天
    loginPath: "/login/",    // 引用登录组件的 md 文章的 permalink（必须），建议支持 /vdoing/login/，无默认值
    loginKey: 'eashelp_login',    // 存储用户名信息的 key，默认是 vdoing_login。系统通过该 key 验证是否登录、是否过期
    loginSession: false,     // 开启是否在网页关闭或刷新后，清除登录状态，这样再次访问网页，需要重新登录，默认为 false（不开启）
  },
  // 首页大图片配置
  indexImg: {
    navColor: 2,    // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
    switchNavColor: true,    // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
    // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
    bgTimeColor: true,     // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
    bgTimeColorArray: ['transparent', 'transparent', 'transparent', 'transparent'],   // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效
    descFade: true,   // 是否开启图片中间描述的淡入淡出效果，默认为 false
    desc: ["持续完善，点滴进步！", "积跬步以至千里，致敬每个爱学习的你！", "没有什么比相信自己更重要"],  // 多条描述，如果填写则覆盖 index.md 的 tagline，不填写则默认读取 index.md 的 tagline，descFadeIn 为 true 生效
    descFontSize: '1.4rem',   // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
    descFadeInTime: 200,  // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
    descFadeOutTime: 100,  // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
    descNextTime: 800,  // 当有多个 desc 时，一个 desc 展示完后或准备开始时，多少时间后出现下一个 desc，默认 800 毫秒
    bubble: false,    // 是否开启图片的气泡效果，默认为 false
    bubblePosition: 0,  // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
    bubbleNum: 200,   // 气泡的个数，bubble 为 true 生效，默认 200 个
  },
  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: penName, // 必需
    link, // 可选的
  },
  // blogger: {
  //   // 博主信息，显示在首页侧边栏
  //   avatar,
  //   name,
  //   slogan, // 个性签名
  // },
  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      // {
      //   iconClass: 'icon-github',
      //   title: 'GitHub',
      //   link: 'https://github.com/kele-bingtang',
      // },
      // {
      //   iconClass: 'icon-gitee',
      //   title: 'Gitee',
      //   link: 'https://gitee.com/kele-bingtang',
      // },
      // {
      //   iconClass: 'icon-rss',
      //   title: '网站首页',
      //   link: 'https://www.youngkbt.cn',
      // },
      // {
      //   iconClass: 'icon-QQ',
      //   title: 'QQ',
      //   link: 'https://jq.qq.com/?_wv=1027&k=Y6HPvi87',
      // },
      // {
      //   iconClass: 'icon-youjian',
      //   title: '联系我',
      //   link: 'yuhui@ctcai.com',
      // },
    ],
  },
  footer,
  htmlModules // 插入hmtl模块
}