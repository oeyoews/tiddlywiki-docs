---
title: '5.1.18'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.17...v5.1.18)//

## 主要改进

### 全域快捷键

此版本引入了新的基础架构来处理全域快捷键。核心附带以下快捷键：

* <kbd>Alt</kbd>+<kbd>I</kbd>（Mac 为 <kbd>Ctrl</kbd>+<kbd>I</kbd>）- 新图像
* <kbd>Alt</kbd>+<kbd>J</kbd>（Mac 为 <kbd>Ctrl</kbd>+<kbd>J</kbd>）- 新日志
* <kbd>Alt</kbd>+<kbd>N</kbd>（Mac 为 <kbd>Ctrl</kbd>+<kbd>N</kbd>）- 新条目

请参阅[如何创建快捷键](How to create keyboard shortcuts)

### Node.js HTTP 服务器

HTTP 网页服务器功能已有显著改进：

* 增加为匿名用户提供唯读维基的功能（隐藏编辑 UI），但允许登录的用户编辑
* 增加对经由 HTTP 提供静态文件附件的支持
* 通过包含用户/密码的 CSV 文件的基本验证，增加了多个用户凭证的支持
* 当用户只具有对维基的唯读访问权限时，隐藏 UI 功能，如添加条目按钮和编辑按钮
* 增加对通过 HTTPS 提供服务的支持，如同 HTTP
* 通过受信任的功能变量，增加对身份验证的支持，使其更易于与企业单一登录（和 Windows 身份验证）集成
* 增加对更细细微性授权的支持（即授予/拒绝单个用户对资源的读/写权限）
* 更好的调试信息
* 针对每页视图的新的纯 HTML 的单个条目的实验性支持
* 增加 [CSRF 保护](WebServer Parameter: csrf-disable)的简单级别
* 弃用现有的 `-—server` 命令，以支持新的 `—-listen` 命令，使用新的 NamedCommandParameters 支持具名参数，可按任意顺序被指定
* 重构路由为单独的模块，使其更易于扩充服务器的新功能

详细信息请参阅[网页服务器](WebServer)，或[查看 GitHub 上的更改](https://github.com/Jermolene/TiddlyWiki5/pull/2679)。

### 条目名称中的特殊字符

在 TiddlyWiki 先前的版本中，条目名称中有一些特殊的字符串行会破坏某些功能。例如，以双引号结尾的条目名称，会导致[目录宏](Table-of-Contents Macros)不正确地呈现。

从 5.1.18 开始，许多这些问题已经通过重构功能来修复，以使用维基文本的最新功能：

* [Table-of-Contents Macros](#Table-of-Contents%20Macros)
* [tree Macro](#tree%20Macro)
* [tag Macro](#tag%20Macro)
* [list-tagged-draggable Macro](#list-tagged-draggable%20Macro)
* $:/TagManager

请注意，使用条目名称中的某些字符，仍然会阻止某些功能正确使用。例如，在双大括号的嵌入语法中，使用两个垂直条形字符来将条目名称与模板名称分开：`{{title||template}}`。然而，尽管使用该语法嵌入一个名为 `title||template` 的条目是不可能的，但仍然可以使用 `<$transclude tiddler="title||template"/>` 来转换。

## 插件改进

* **KaTeX 插件** -- [KaTeX 插件]]已[[更新到 KaTeX v0.10.0](https://github.com/Jermolene/TiddlyWiki5/pull/3600)。此插件[现在合并](https://github.com/Jermolene/TiddlyWiki5/pull/3601)一个[化学公式的扩充](https://github.com/mhchem/MathJax-mhchem)。
* **评论插件** -- 此版本[添加](https://github.com/Jermolene/TiddlyWiki5/commit/acaa07a964a004759ddb8fb755484918b3322815) 一个评论插件 -- 见 $:/plugins/tiddlywiki/comments
* **AWS 插件** -- 支持将 TiddlyWiki 运行为 Lambda 函数的[改进](https://github.com/Jermolene/TiddlyWiki5/commit/d6a0b06f024e14e9c0a57df5d2b80c8a1cdbd1c2)，支持 JSON 有效负载的 GZip 压缩。

## 翻译改进

新的和改进翻译:

* 加泰隆文
* 简体中文和繁体中文
* 荷兰文
* 法文
* 德文

## 可用性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/cfb2d7c9c8d899729b67864070d1958b35cc0ca2) 支持在下载 TiddlyWiki 时，显示启动画面 -- 见[创建启动画面](Creating a splash screen)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/88664f028611162730b898025a45d29568eb205a) 重命名条目时，显示反向链接
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/3bfa9c6f100cfd7107f2c5bf4cfc5dd40a93d54d) 窗口底部显示任何隐藏草稿的持久性指示
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/7dbe117bc55a9cda91ce7b480525a2b2a70b8229) 当前用户名 (如果设置) 至草稿条目的名称，使其更易于在多用户方案中识别
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/6b14969cf60bdcad16ac5978030bf1d929a712c6) 查看模式下二进位条目的一个警告 
* [扩充](https://github.com/Jermolene/TiddlyWiki5/issues/3255) 引用链接/固定链接，将网址复制到剪贴板，以及更新网址列。可以在[控制台]($:/ControlPanel)设置中，自定义此行为。
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/d96c84426484747ab19d92b1d9f49e01c9dad985) 保存，使用 $:/SiteTitle 作为文件名称的基础
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/09112ed455e7c4be2e50e88c00f370d726d71f64) 支持 [webp](https://en.wikipedia.org/wiki/WebP)、[heic 和 heif](https://en.wikipedia.org/wiki/High_Efficiency_Image_File_Format) 图像格式
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/97b098b059aa75e9c5965cafa5973ea6d98951d7) 在创建新条目时的定位
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/55b5b6dd56d9146b39482fbd2ae0353adce037f1) 在新窗口中平滑卷动
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/c82edbe6bc9dfe6166650e4300a860c6ee625c76) 在新窗口中丢失弹出窗口的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3530) 处理已禁用的佚失链接，以便核心用户接口功能不被破坏（另请参阅[此处](https://github.com/Jermolene/TiddlyWiki5/commit/a83cd3f984c88a1ecf5861c2c25ffb483b08f0ac)) 

## 可编程性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3558) 一个筛选器首码 `~` 允许在筛选器中使用 if-then-else 逻辑 -- 见 [筛选表达式](Filter Expression)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/33dd367a6548824567995bb48e87eece755681e8) [subfilter Operator](#subfilter%20Operator)允许使用嵌套式筛选器
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/849844be12196781017b3a517839c4721771efd7) **stateTitle**、''stateField'' 和 **stateIndex** 属性至 ButtonWidget 与 RevealWidget，使其能够使用状态条目，其名称包含 `!!` 或 `##`
* [增强](https://github.com/Jermolene/TiddlyWiki5/commit/d6a0b06f024e14e9c0a57df5d2b80c8a1cdbd1c2) [search Operator](#search%20Operator)，支持搜索任意字段清单、文本搜索、容许空格搜索和正规表达式搜索
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/763f8afaf2dc7dcaa2d4a492887a944d84c4fed2) [contains 运算符](contains Operator)，用于在清单字段中搜索
* [添加](https://github.com/Jermolene/TiddlyWiki5/issues/3396) 支持导航滚动偏移，以避免导航到条目，从而使其在 `position:fixed` 的顶部功能表列中被屏蔽 -- 见 [Hidden Setting: Scroll Top Adjustment](#Hidden%20Setting%3A%20Scroll%20Top%20Adjustment)
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/3140ff9e490cc2e725c0d02edab8db93009d74b2) [WidgetMessage: tm-full-screen](#WidgetMessage%3A%20tm-full-screen) 小工具消息，支持强制状态，而非只是切换
* [重构](https://github.com/Jermolene/TiddlyWiki5/pull/2758) 侧边栏，使其可从标签 <<tag "$:/tags/SideBarSegment">> 动态构建
* [重构](https://github.com/Jermolene/TiddlyWiki5/commit/19f7287a536e48225ec706589ffb307dfc991c9e) 条目信息面板，使其可从标签 <<tag "$:/tags/TiddlerInfoSegment">> 动态构建
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3346) 用于生成数字范围的 [range 运算符](range Operator)
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3360) `<select>` 元素着色的调色板支持
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/bef3242075b6d962b7963b9c9c7042c39198fc8f) 新的文本编辑器操作 **save-selection** -- 见 [WidgetMessage: tm-edit-text-operation](#WidgetMessage%3A%20tm-edit-text-operation)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/f54a0a11bce9e47542df32610fae489f4a1dba8c) 编辑器工具栏按钮，以运行操作小工具的支持
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/2e51f08bef8656fdca83fff6163dc67cbaefa2d4) 在渲染时重订标题的支持 -- 见 [tv-adjust-heading-level Variable](#tv-adjust-heading-level%20Variable)
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3423) 实验性的支持打包 TiddlyWiki 的 JavaScript 核心到外部脚本，[用于新的网页服务器增强功能](Using the external JavaScript template)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/fe85845c3ce78ff102e411d01873912b3de8705e) `\import` [编译指示](Pragma) 作为直接使用 ImportVariablesWidget 的更简洁的替代方法
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3530) (和[这个](https://github.com/Jermolene/TiddlyWiki5/commit/a83cd3f984c88a1ecf5861c2c25ffb483b08f0ac)) 新的 [tv-show-missing-links Variable](#tv-show-missing-links%20Variable) 通过 LinkWidget 更严格地控制佚失炼接的渲染

## 修正错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/3371) 以 [WidgetMessage: tm-new-tiddler](#WidgetMessage%3A%20tm-new-tiddler) 覆盖现有条目的添加字段
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/35cbb127a3c21b7047517f1eeeff571a420b82ae) 不必要的变量替换，以 **define** 编译定义宏，通过限制变量替换的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/c72e4f01f1a3051e169593a217bffab8eec279f6) 若条目类型为 "text/vnd.tiddlywiki"，'excise' 编辑器工具栏按钮未显示的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/929b0c98330ad25aa4a32cd201274a6e89cd8902) 生成无线网络 QR 码的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3495) [$tw.platform.isLinux](#%24tw.platform.isLinux) 在最新版的 Firefox 上
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3334) 在次要窗口中使用全屏幕的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/a3a4c28143138ca2bde1b8426c910b5e3d6a7110) 当弹出窗口的状态改变时，RevealWidget 没有正确刷新的微妙错误
* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/3373) 格式错误的 HTML entities 的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/874318091e20293c6f141080cc4330eb7aa02273) 将非法参数传递给[decodeuri Operator](#decodeuri%20Operator) 和 [decodeuricomponent Operator](#decodeuricomponent%20Operator) 时，崩溃的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/457f03798c69f2053894d9971d4b187521c0d9ad) 阻止快显窗口程序阻止打开新窗口时出错
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/3aae643e140044e440673772d90ebaf0be18ec1f) 使用延迟加载的条目作为 RevealWidget 的状态条目的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/33ba69e852966d7c5449842a95636024857d7177) 模态未出现在正确窗口中的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/19c49ae18a48a368ca24bb1493fc9876fa7c7570) 在编辑模式下添加和删除标签的动画，以及一个用于"开启"侧边栏页签中的动画的[类似修复](https://github.com/Jermolene/TiddlyWiki5/pull/3578)

## 开发者错误修复和改进

* [重构](https://github.com/Jermolene/TiddlyWiki5/pull/2027) `$tw.utils.parseStringArray()` 可选地允许非唯一项目

# 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@abesamma](https://github.com/abesamma)
* [@AnthonyMuscio](https://github.com/AnthonyMuscio)
* [@Arlen22](https://github.com/Arlen22)
* [@bimlas](https://github.com/bimlas)
* [@BramChen](https://github.com/BramChen)
* [@BurningTreeC](https://github.com/BurningTreeC)
* [@Drakor](https://github.com/Drakor)
* [@EvanBalster](https://github.com/EvanBalster)
* [@flibbles](https://github.com/flibbles)
* [@G0erman](https://github.com/G0erman)
* [@hchaase](https://github.com/hchaase)
* [@hoelzro](https://github.com/hoelzro)
* [@iblech](https://github.com/iblech)
* [@jho1965us](https://github.com/jho1965us)
* [@ldorigo](https://github.com/ldorigo)
* [@Lioric](https://github.com/Lioric)
* [@Marxsal](https://github.com/Marxsal)
* [@morosanuae](https://github.com/morosanuae)
* [@pmario](https://github.com/pmario)
* [@talha131](https://github.com/talha131)
* [@TechLifeWeb](https://github.com/TechLifeWeb)
* [@tobibeer](https://github.com/tobibeer)
* [@twMat](https://github.com/twMat)
* [@yrashk](https://github.com/yrashk)
* [@xcazin](https://github.com/xcazin)
* [@xcodinas](https://github.com/xcodinas)