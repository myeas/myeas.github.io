欢迎来到我的主页，请放下浮躁，细细品尝她，希望不会让你失望。

1️⃣ 主地址：<https://ctcai.eashelp.cn/>

## 目录页的front matter

``` yml
---
pageComponent: # 使用页面组件
  name: Catalogue # 组件名：Catalogue => 目录页组件 ，使用目录页时 必须 设置为Catalogue
  data: # 组件所需数据
    path:  01.学习笔记/01.前端 # 设置为`docs/`下面的某个文件夹相对路径，如‘01.学习笔记/01.前端’ 或 ’01.学习笔记‘ (有序号的要带序号)
    imgUrl: /img/web.png # 目录页内的图片
    description: JavaScript、ES6、Vue框架等前端技术 # 目录描述（可加入a标签）
title:  # 页面标题
date:  # 创建日期
permalink: /note/javascript # 永久链接
sidebar: false # 不显示侧边栏
article: false # 不是文章页 (不显示面包屑栏、最近更新栏等)
comment: false # 不显示评论栏
editLink: false # 不显示编辑按钮
---
```

## 笔记文档的front matter

```yml
---
title:     # 页面标题
date:     # 创建日期
permalink:  # 永久链接
categories:  # 所在目录
  - 
tags:    # 所属标签
  - 
---
```

## 完整的front matter 

```yml
---
title: 标题
date: 2020-02-21 14:40:19
permalink: /pages/a1bc87
private: true     # 开启文章私密，必须
#username: eashelp  # 用户名，必须
#password: 123456  # 密码，必须
#expire: 60000     # 登录状态超时清除时间，可选（不填则以全局超时时间为准，如果全局没有设置，则默认是一天）
categories:
  - 分类1
  - 分类2
tags:
  - 标签1
navbar: false
sidebar: false
article: false
comment: false
editLink: false
author:
 name: 作者
 link: https://xxx.com
sticky: 1  # 置顶，1 最高，数字越大，置顶地位越低下
---
```





