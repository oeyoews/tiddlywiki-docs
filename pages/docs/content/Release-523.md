---
title: '5.2.3'
---

_[此版的更新纪录详见](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.2.2...v5.2.3)//

<<.banner-credits
	credit:"""恭喜 [feedthegood](https://talk.tiddlywiki.org/u/feedthegood)，他们赢得此版本横幅的设计 (这是[竞赛讨论串](https://talk.tiddlywiki.org/t/new-release-banner-competition-for-v5-2-3)和[票选讨论串](https://talk.tiddlywiki.org/t/banner-competition-voting-for-v5-2-3))。
"""
	url:"https://raw.githubusercontent.com/Jermolene/TiddlyWiki5/5d9b71771aaf00ee141028d3bb0e7908c4656a30/editions/tw5.com/tiddlers/images/New%20Release%20Banner.png"
>>

# 插件改进

* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/commit/2f817e42935a3ab15cad697a7b8200dd8152eb9f">> (和 <<.link-badge-here "https://github.com/Jermolene/TiddlyWiki5/commit/bbae2ab6da6c6cd1facab37fb7b9fd42e1d73169">>) [KaTeX 插件](KaTeX Plugin)至 ~KaTeX v0.16
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6625">> [BrowserStorage 插件](BrowserStorage Plugin)能够删除现有的条目，以及修改或添加条目
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6691">> (和 <<.link-badge-here "https://github.com/Jermolene/TiddlyWiki5/pull/6691">>) [Markdown 插件](Markdown Plugin)，添加 **link** 和 **linkify** 编辑器工具栏按钮
    * **linkify** 按钮只是插入 `[]()`。如果选择了任何文本，其将位于方括弧内：`[选定的文本]()`
    * **link** 按钮将打开一个弹出式菜单，您可以在其中粘贴网址或搜索现有的条目
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6689">> [Markdown 插件](Markdown Plugin)，添加 **codeblock** 编辑器工具栏按钮
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6696">> [Markdown 插件](Markdown Plugin)，添加 <kbd>ctrl-M</kbd> (Mac) 或 <kbd>alt-M</kbd>（其他平台）创建新的 Markdown 条目
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6675">> 浏览器嗅探 插件，显露 [$:/info/browser/is/mobile](#%24%3A/info/browser/is/mobile)
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6701">> [BrowserStorage 插件](BrowserStorage Plugin)，如果本地存储不可用则崩溃
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/commit/df7416d16bf8fe39d7a2a8a4a917248d45506ba1">> (和 <<.link-badge-here "https://github.com/Jermolene/TiddlyWiki5/commit/0391e1855cd5c770928a3b4252aef54ed0a51385">>) Dynannotate 插件选择跟踪器，可以更轻松地向文本选择添加弹出式菜单

# 翻译改进

* 华语
* 法语
* 德语
* 日语
* 波兰语

# 辅助功能改进

* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/6742">> [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) 支持侧边栏和故事河
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/6743">> [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) 支持通知，以便屏幕阅读器自动读取它们
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/6749">> [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) 支持编辑模板

# 可用性改进

* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/issues/5916">> ActionSetFieldWidget 以避免无意中更改当前条目
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/6589">> "put" 和 "upload" 保存程序 (如 [TiddlyHost](Saving on TiddlyHost) 使用的)，显示来自服务器的错误回应
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/6655">> (和 <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6661">>) 各种调色板可与 **color-scheme: dark** 配合使用
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6698">> 等宽区块和区块引号编辑器按钮，以便可以通过再次按键来还原
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/6740">> 字段和标签编辑器，以修剪空格
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/6778">> 样式表条目的格式化，如果安装了 [Highlight 插件](Highlight Plugin)，则使用语法突出显示

# 小工具改进

* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/issues/6593">> CheckboxWidget 支持不确定状态
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6561">> CheckboxWidget 支持 **listField** 和 **filter** 属性
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6581">> DraggableWidget 支持 **enabled** 属性
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6582">> DraggableWidget 传递额外的上下文变量至 **dragstartactions** 操作字符串
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/6787">> DraggableWidget 的刷新
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6786">> DraggableWidget 的脆弱选择器实现
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/6809">> ImageWidget 支持[延迟加载图像](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading)

# 筛选器改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6771">> 新的 [insertafter 操作符](insertafter Operator) 匹配现有的 [insertbefore 操作符](insertbefore Operator)
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/35b0833e0cafc477e402309c006a163eb59a94ca">>  `{!!title}` 的处理在没有 currentTiddler 变量集的筛选器中
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6806">> 新的 "flat" 选项至 [Map Filter Run Prefix](#Map%20Filter%20Run%20Prefix)，允许从每次调用筛选器 run 中，返回多个项目

# 可编程性改进

* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/6779">> 条目副标题渲染，允许个别元素，由[系统标签: $:/tags/ViewTemplate/Subtitle](SystemTag: $:/tags/ViewTemplate/Subtitle)控制
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/f3bf5b6e850691b6bff430b0575387a09f6aaf97">> 支持[系统标签: $:/tags/Macro/View/Body](SystemTag: $:/tags/Macro/View/Body)
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6624">> <<.mlink colour>> 宏，允许指定特定调色板的回退颜色
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/6578">> <<.mlink tabs>> 宏的空格和缩进，以提高可读性
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6659">> **color-scheme** CSS 属性到基础主题的根
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6681">> EventCatcherWidget 支持 `tv-widgetnode-width` 和 `tv-widgetnode-height`
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6776">> <<.mlink  list-links-draggable>> 宏，支持在清单为空时，显示的消息

# 错误修复

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6789">> 在行动版 Chrome 浏览器上运行拖放操作的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6628">> 在编辑器中切换字段，导致其值被清除时出现问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6656">> 带有框架编辑器的 iframe 内容的不正确的 **color-scheme** 元标记
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6649">> 使用 SaveCommand 尝试保存缺少的字段时崩溃
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6614">> 格式化 UTC 日期字符串的错误
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6603">> SaveCommand 在尝试保存佚失的条目时崩溃的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6599">> 修复损坏[样式块行为](Styles and Classes in WikiText)
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6594">> 图像系统条目不正确地显示为文本
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/1c16f12d6f5b81d86f79c3e687eec05b3a8d45bf">> 在 <<.mlink list-links>> 宏中的标题的错误链接呈现
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/758d590837c30ddde9cc7b8171273756680f1545">> 在 <<.mlink list-links-draggable>> 宏中的标题的错误链接呈现
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6644">> JavaScript 模块和延迟加载的错误
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6679">> 条目标题的缩进差异
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6697">> 编号清单编辑器按钮无法还原 Markdown 条目中的标记的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6700">> 显示重复项目的调色板管理器
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/7e4722f07a81fadc419738d2c2a55a090a830f8c">> 缺少调色板条目的崩溃问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/d5030eb87b7a21c5b76978aeed819eedc4740245">> (和 <<.link-badge-here "https://github.com/Jermolene/TiddlyWiki5/commit/a29889a7412fcba45d7779e8a8ee9ca91b499946">>) 搜索输入不触发 Chrome 的密码自动完成弹出窗口
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6755">> 嵌入的 SVG [foreignObject](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) 命名空间
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6757">> 当使用永久链接更新地址栏，且动画持续时间设置为零时，锚点链接不起作用
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/issues/6767">> 服务器页面控件下拉列表的位置
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6832">> 功能表栏中的"保存变更"按钮，当维基有更改未保存时不变红
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6825">> 于 [Table-of-Contents Macros](#Table-of-Contents%20Macros) 中的硬编码的空格
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6840">> 于 <<.mlink "tabs">> 宏中的状态处理
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/34b1b8128f4832e111a5d71af36d5ca2e2a1e0d4">> 通过 ListenCommand 和 ServerCommand 修复了 IPv6 URL 的格式
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/667da96c970283cbf0fc2b3672fba3812886be65">> 关闭多个插件程序库时崩溃

# 开发者改进

* 许多内核条目已被重构为使用 `\whitespace trim` 以提高可读性。这项工作拆分成一些拉取请求：[#6257](https://github.com/Jermolene/TiddlyWiki5/pull/6257)、[#6265](https://github.com/Jermolene/TiddlyWiki5/pull/6265)、[#6269](https://github.com/Jermolene/TiddlyWiki5/pull/6269)、[#6270](https://github.com/Jermolene/TiddlyWiki5/pull/6270)、[#6272](https://github.com/Jermolene/TiddlyWiki5/pull/6272)、[#6275](https://github.com/Jermolene/TiddlyWiki5/pull/6275)、[#6276](https://github.com/Jermolene/TiddlyWiki5/pull/6276)、[#6587](https://github.com/Jermolene/TiddlyWiki5/pull/6587)、[#6600](https://github.com/Jermolene/TiddlyWiki5/pull/6600)、[#6604](https://github.com/Jermolene/TiddlyWiki5/pull/6604)、[#6611](https://github.com/Jermolene/TiddlyWiki5/pull/6611)

# Node.js 改进

* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6746">> RenderCommand 支持 `storyTiddler` 变量

# 性能改进

* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/6402">> 筛选器处理，以允许缓存已编译的筛选器

# 致谢

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们的时间，协助改进 ~TiddlyWiki：

<<.contributors """
Arlen22
BramChen
btheado
BurningTreeC
damscal
es-kha
EvidentlyCube
FlashSystems
flibbles
FSpark
fu-sen
ibnishak
jeremyredhead
joshuafontany
kookma
linonetwo
Marxsal
MaxGyver83
ndarilek
oflg
pmario
rmunn
saqimtiaz
simonbaird
Telumire
tobibeer
twMat
tw-FRed
xcazin
""">>