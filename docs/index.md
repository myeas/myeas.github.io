---
home: true
heroImage: ./img/logo.jpg
heroText: 零售系统应用帮助中心 #金蝶EAS系统帮助中心
tagline: 🚀持续完善 点滴进步
# actionText: 开始使用 →
# actionLink: ./list/

action: 
  - text: 新版完善中 →
    link: ./list/
  - text: 旧版手册 ↗
    link: ./pages/old/

bannerBg: background:#fff #none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量



features: # 可选的
  - title: 基础入门
    details: 了解零售系统的基本概念、基本操作，基本设置
    link: ./pages/abc/
  - title: 系统应用质量检查体系
    details: 通过规范系统应用，促进经营管理改善、促进数据统计准确、减少管理风险
    link: ./list/#整体专项
    #link: ./pages/auto4s-sdv/
  - title: 问题集锦
    details: 为您答疑解惑，让你从容使用系统
    link: ./pages/faq/

hidearticlelistblock: true  #true不显示文章分组块，flase显示文章分组块
articlelistblocklength: 10
articlelistblock: # 可选的
  - listname: 整车及二手车 #分类或标签的主题
    listauto: auto             #auto,则与分类或标签的文章对应上，如果非auto则取listlink
    listlink: ./pages/abc1/     #要与分类或标签的文章列表对应上，也可以自行指定
    categoryortag: category    #值只能是category 或 tag
    key: 整车  #分类或标签
    articleLength: 8
    icon: biaoqian1
  - listname: 增值代办
    listauto: auto
    listlink: ./pages/abc2/
    categoryortag: category    #值只能是category 或 tag
    key: 增值代办
    articleLength: 8
    icon: biaoqian1
  - listname: 精品配件
    listauto: auto
    listlink: ./pages/abc3/
    categoryortag: category    #值只能是category 或 tag
    key: 精品配件
    articleLength: 8
    icon: biaoqian1
  - listname: 维修 #分类或标签的主题
    listauto: auto             #auto,则与分类或标签的文章对应上，如果非auto则取listlink
    listlink: ./pages/abc1/     #要与分类或标签的文章列表对应上，也可以自行指定
    categoryortag: category    #值只能是category 或 tag
    key: 维修  #分类或标签
    articleLength: 8
    icon: biaoqian1
  - listname: 会员及客户权益
    listauto: auto
    listlink: ./pages/abc2/
    categoryortag: category    #值只能是category 或 tag
    key: 客户权益
    articleLength: 8
    icon: biaoqian1
  - listname: 业务报表
    listauto: auto
    listlink: ./pages/abc3/
    categoryortag: tag  #值只能是category 或 tag
    key: 业务报表
    articleLength: 8
    icon: biaoqian1

articlelistside: # 可选的
  - listname: 问题集锦 #分类或标签的主题
    listauto: auto             #auto,则与分类或标签的文章对应上，如果非auto则取listlink
    listlink: ./pages/faq/     #要与分类或标签的文章列表对应上，也可以自行指定
    categoryortag: category    #值只能是category 或 tag
    key: 问题集锦  #分类或标签
    articleLength: 20
    icon: biaoqian1
  - listname: 系统安装
    listauto: auto
    listlink: ./categories/?category=系统安装
    categoryortag: category    #值只能是category 或 tag
    key: 系统安装
    articleLength: 7
    icon: biaoqian1
  - listname: 系统应用检查体系
    listauto: auto
    listlink: ./categories/?category=检查体系
    categoryortag: category    #值只能是category 或 tag
    key: 检查体系
    articleLength: 7
    icon: biaoqian1

#文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
#postList: none
postList: none  #simple  #detailed
simplePostListLength: 12 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
# hideRightBar: true # 是否隐藏右侧边栏 (v1.11.2+)
---

<!--ClientOnly>
  <WebInfo />
  <IndexBigImg />
  <Fantasy />
</ClientOnly-->

<ClientOnly>
  <WebInfo/>
</ClientOnly>


<style>
.become-sponsor{
  padding: 8px 20px;
  display: inline-block;
  color: #11a8cd;
  border-radius: 30px;
  box-sizing: border-box;
  border: 1px solid #11a8cd;
}
</style>
<br/>

## 🎉公告通知

- 请各门店抓紧时间上报工作流角色对应的用户清单，请于2023年2月28月前完成上报。

## 🎉最近更新

<ArticleListUpdate2 :length="20" />

::: right

[更多文章](/archives/)>

:::

## 🎖专项专题

::: cardList 3
```yaml
#- name: 业财一体化
#  desc: 🚀1️⃣哪些业务需生成凭证？如何生成凭证？
#  link: ./pages/special-102000/
#  bgColor: '#5B8982'  #'rgb(221, 237, 234)'
#  textColor: '#ffffff'  # '#2A3344'
- name: 科目及辅助规范
  desc: 🚀1️⃣确保会计科目及辅助账符合上级管理体系
  link: ./pages/special-102010/
  bgColor: '#5B8982'  #'rgb(221, 237, 234)'
  textColor: '#ffffff'  # '#2A3344'
- name: 存货账账一致
  desc: 🚀2️⃣确保业务和财务账一致,月末结账前必须核对一致
  link: ./pages/special-104011/
  bgColor: '#D47655'  #'rgb(221, 237, 234)'
  textColor: '#E1F8E1'
#- name: 存货账实一致
#  desc: 🚀3️⃣确保业务数据与实际相符，如挂单、核销、结算、价格、明细等
#  link: ./pages/special-104012/
#  bgColor: '#42586E' #'rgb(221, 237, 234)'
#  textColor: '#E3D4AF'
- name: 精品配件库存核算规范及调整
  desc: 🚀3️⃣确保精品配件库存核算准确无误，有误的及时调整
  link: ./pages/special-104000/
  bgColor: '#42586E' #'rgb(221, 237, 234)'
  textColor: '#E3D4AF'
#- name: 系统应用检查
#  desc: 🚀4️⃣日清日结、长期挂单、客户余额相符、基础数据准确
#  link: ./pages/special-101000/
#  bgColor: '#AE9AAB' # 'rgb(221, 237, 234)'
#  textColor: '#F2EBE7'
- name: 客户档案的基本维护要求
  desc: 🚀4️⃣确保客户档案及客户的规范，不重复，避免业务和财务使用混乱
  link: ./pages/basedata-200010/
  bgColor: '#AE9AAB' # 'rgb(221, 237, 234)'
  textColor: '#F2EBE7'
- name: 新车销售质量监控
  desc: 🚀5️⃣全方位链接新车销售各个环节，有效分析销售利润结构
  link: ./pages/special-103013/
  bgColor: '#417CA9' #'rgb(221, 237, 234)'
  textColor: '#EDEBE4'
- name: 预付账款管理
  desc: 🚀6️⃣规范预付账款的使用，确保记账规范、对账无差异
  link: ./pages/special-102023/
  bgColor: '#7379B0'
  textColor: '#C6EDEC'
#- name: 管理报表
#  desc: 🚀6️⃣让系统发挥价值，离不开您的积极使用
#  link: ./pages/report/
#  bgColor: '#7379B0'
#  textColor: '#C6EDEC'
- name: 车辆档案的基本维护要求
  desc: 🚀7️⃣底盘号、车牌号、车主是否准确关联匹配，深度影响业务财务
  link: ./pages/basedata-200012/
  bgColor: '#D47655'  #'rgb(221, 237, 234)'
  textColor: '#E1F8E1'
- name: 应收系统管理
  desc: 🚀8️⃣确保会计科目及辅助账符合上级管理体系
  link: ./pages/special-102022/
  bgColor: '#5B8982'  #'rgb(221, 237, 234)'
  textColor: '#ffffff'  # '#2A3344'
- name: 客户权益余额核对
  desc: 🚀9️⃣确保业务层面客户权益准确，避免产生损失
  link: ./pages/special-102021/
  bgColor: '#417CA9' #'rgb(221, 237, 234)'
  textColor: '#EDEBE4'
```
:::

<br/>

## 🎉指定分类或标签列表测试

<!--ArticleListMore :currentPage="currentPage" :perPage="20" :category="''" /-->

### 一行一列：

<ArticleListCategororTagUpdate1 :currentPage="currentPage" :perPage="5" :category="'二手车'" />

### 一行两列：

<ArticleListCategororTagUpdate2 :currentPage="currentPage" :perPage="6" :category="'二手车'" />

### 一行三列：

<ArticleListCategororTagUpdate3 :currentPage="currentPage" :perPage="9" :category="'二手车'" />

## 🎉分类文章

::: demo

```
<el-row :gutter="12">
  <el-col :span="8" style="margin:-10px auto auto auto">
    <el-card shadow="hover">
  <div slot="header" class="clearfix">
    <span><b>整车及二手车</b></span>
    <el-button style="float: right; padding: 3px 0" type="text"><a href="/categories/?category=整车管理">更多...</a></el-button>
  </div>
  <div class="text item">
    <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="5" :category="'二手车'" />
  </div>
    </el-card>
  </el-col>
  <el-col :span="8" style="margin:-10px auto auto auto">
    <el-card shadow="hover">
  <div slot="header" class="clearfix">
    <span><b>增值代办</b></span>
    <el-button style="float: right; padding: 3px 0" type="text"><a href="/categories/?category=增值代办">更多...</a></el-button>
  </div>
  <div class="text item">
    <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="5" :category="'增值代办'" />
  </div>
    </el-card>
  </el-col>
  <el-col :span="8" style="margin:-10px auto auto auto">
    <el-card shadow="hover">
  <div slot="header" class="clearfix">
    <span><b>精品配件</b></span>
    <el-button style="float: right; padding: 3px 0" type="text"><a href="/categories/?category=精品配件">更多...</a></el-button>
  </div>
  <div class="text item">
    <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="5" :category="'精品配件'" />
  </div>
    </el-card>
  </el-col>
  <el-col :span="8" style="margin:5px auto auto auto">
    <el-card shadow="hover">
  <div slot="header" class="clearfix">
    <span><b>维修业务</b></span>
    <el-button style="float: right; padding: 3px 0" type="text"><a href="/categories/?category=维修">更多...</a></el-button>
  </div>
  <div class="text item">
    <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="5" :category="'维修'" />
  </div>
    </el-card>
  </el-col>
  <el-col :span="8" style="margin:5px auto auto auto">
    <el-card shadow="hover">
  <div slot="header" class="clearfix">
    <span><b>会员及客服权益</b></span>
    <el-button style="float: right; padding: 3px 0" type="text"><a href="/categories/?category=客户权益">更多...</a></el-button>
  </div>
  <div class="text item">
    <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="5" :category="'客户权益'" />
  </div>
    </el-card>
  </el-col>
  <el-col :span="8" style="margin:5px auto auto auto">
    <el-card shadow="hover">
  <div slot="header" class="clearfix">
    <span><b>业务报表</b></span>
    <el-button style="float: right; padding: 3px 0" type="text"><a href="/tags/?tag=业务报表">更多...</a></el-button>
  </div>
  <div class="text item">
    <ArticleListCategororTagUpdate :currentPage="currentPage" :perPage="5" :tag="'业务报表'" />
  </div>
    </el-card>
  </el-col>
</el-row>
```

:::

## 💎 近期计划

近期拟推进完成如下内容：

- 工作流第一批流程上线。
- 组织开展会员及客户权益培训。
- 开发或优化业务报表。

如果您未找到问题的答案或需要的文章，请反馈给我们，我们将尽快予以补充！

<br/>

## 🤝 反馈与交流

如果您在使用系统过程中，遇到任何问题，欢迎通过QQ群反馈交流，以便您能快速解决问题！

也欢迎您对此平台内容提出意见和建议！您的指正，将有助于我们完善！



<!--

## ⚡️提示

::: tip
由于本部人员配置有限，本平台建设将耗时较长，在未完成前，大家可以移步旧版手册查阅。

希望大家 :sparkling_heart:支持 ，有问题请QQ群反馈……
:::

<br/>

## 🎉功能更新
* 待补充内容。

更多更新请查阅：[**更新日志**](./pages/updatelog/)

<br/>-->