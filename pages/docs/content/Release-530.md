---
title: '5.3.0'
---

_[此版的更新纪录详见](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.2.8...5.3.0)//

<<.banner-credits
	credit:"""恭喜 [vilc](https://talk.tiddlywiki.org/u/vilc)，他们赢得此版本横幅的设计 (这是[竞赛讨论串](https://talk.tiddlywiki.org/t/banner-image-competition-for-v5-3-0/7406/10)）。
"""
	url:"https://raw.githubusercontent.com/Jermolene/TiddlyWiki5/04950452fab7d5cb86f893020355611c4711d361/editions/tw5.com/tiddlers/images/New%20Release%20Banner.jpg"
>>

# v5.3.0 概览

这个发布版引入了许多与 ~TiddlyWiki 的一些最基本组件相关的重要改进和新功能：宏、小工具、操作符和嵌入。v5.3.0 还包含其他一些错误修复和改进。

# v5.3.0 参数化包含、进程、函数和自定义小工具

<<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6666">> 这些更改的动机是修复 ~TiddlyWiki 5 的早期设计缺陷之一：依赖使用文本替换的宏作为模块化和重用维基文本和筛选器的主要方式。

经验表明，虽然宏非常适合少数任务，但对于许多常见操作来说它们很脆弱且容易出错。请参阅 [Macro Pitfalls](#Macro%20Pitfalls) 以了解伴随此方法出现的问题的讨论。多年来，我们为最严重的问题引入了缓解措施，但这些措施的代价是添加了复杂性。

此版本中的更改提供了强大的新方法来完成常见任务，并解锁了以前在维基文本中不可能实现的全新功能。

* [进程](Procedures)，本质上是宏本应有的样子；它们以完全相同的方式工作，除了参数作为简单变量公开（不带双下划线）并且没有发生文本替换
* [自定义小工具](Custom Widgets), 允许在维基文本中创建工具，以及重新定义内置小工具
* [函数](Functions)，一种使用命名参数封装筛选器表达式的新方法，包括制作自定义筛选器操作符的能力
* 参数化[嵌入](Transclusion)，允许将字符串和维基文本树传递给嵌入

此版本采用的方法是在不干扰现有功能的情况下，通过扩充和添加系统来添加新功能。因此，所有这些更改都是为了向后兼容。虽然它们代表了维基文本作者的新机会领域，但作者有可能忽略所有这些新功能并继续以他们一直使用的方式使用 ~TiddlyWiki 5。

这些更改为弃用宏和相关功能奠定了基础（建议用户不要使用旧功能，而是明确指出等效的现代功能）。

# 文本替换改进

<<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7526">> 新的嵌入架构本身并不足以让我们完全弃用宏。为了处理大多数剩余的使用案例，此版本添加了使用文本替换的便捷新方法，而无需创建宏：

首先，新的[小工具属性的文本替换语法](Substituted Attribute Values)允许为小工具属性分配字符串值，其中某些占位符被其处理后的内容替换。例如：

* 将变量名称替换为值：<$codeblock code="attr=`当前条目是 $(currentTiddler)$`"/>
* 将筛选器表达式替换为其返回的第一个值：<$codeblock code="attr=```有 ${ [tag[Done]count[]] }$ 个已完成的作业```"/>

其次，新的[substitute 操作符](substitute Operator)，允许通过筛选器操作符运行相同的文本替换，并添加使用 `$1$`、`$2$`、`$3$` 等等形式的占位符的位置参数。

```
[[https://$1$/$(currentTiddler)$]substitute<domain-name>]
```

# 维基文本中的 HTTP 请求

<<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7422">> 新的 [WidgetMessage: tm-http-request](#WidgetMessage%3A%20tm-http-request) 用于在维基文本中运行 HTTP 请求。这带来了一些令人兴奋的新机遇：

* 与基于 Web 的 API 集成。 该文档包含一个[使用 Zotero API 的示例](WidgetMessage: tm-http-request Example - Zotero) 来检索学术引文数据
* 动态内容的加载：在加载主维基后可以动态导入额外的条目

# 默认禁用驼峰式链接

<<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/7513">> 新维基现在默认禁用驼峰式链接。（请注意，此文档维基明确激活了驼峰式链接，因为很多旧内容都是依靠其编写）。

# 插件改进

* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/7554">> Google Analytics 插件，使用新的 GA4 代码。请注意，更新需要手动配置以使用新的 "measurement ID" 而非旧的 "account ID"
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/7260">> Dynannotate 插件，支持三种额外的搜索模式
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7365">> [BrowserStorage 插件](BrowserStorage Plugin)，不必要地保存影子条目的问题

* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/7398">> [BrowserStorage 插件](BrowserStorage Plugin)，请求保留浏览器存储而不逐出
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/7493">> [CodeMirror 插件](CodeMirror Plugin)，添加一个使尾随空格可见的选项

# 翻译改进

改进了以下翻译：

* 法语
* 德语
* 波兰语
* 华语

# 可用性改进

* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/7524">> [控制台]($:/ControlPanel)中的"设置"选项卡布局的一致性

<!--

# 小工具改进

-->

# 筛选器改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7511">> 新的[解串器操作符](deserialize Operator) 用于将条目的各种文本表示形式转换为 JSON 数据
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/7292">> [format 操作符](format Operator)，支持将 Unix 时间戳转换为 TiddlyWiki 的原生日期格式
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7392">> 新的 [':then' 筛选器 run 前缀](Then Filter Run Prefix)

# 可编程性改进

* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/7413">> [内核图标](Core Icons)，允许使用参数控制大小
    * <<.warning """此更改可能会导致内核图标的非标准使用出现问题，其中直接呈现文本而不是嵌入文本""">>
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7182">> 新的 [thisTiddler 变量](thisTiddler Variable)，参照到当前正在渲染的条目
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7530">> `data-tag-title`属性到所有标签丸，允许更容易[自定义标签丸样式](Custom tag pill styles)
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/7332">> [故事条目模板级联](Story Tiddler Template Cascade)，如果级联的输出无效，则处理回退到默认模板
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7378">> 缺少 "audio/mpeg" 文件的扩展名
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/7417">> [Table-of-Contents Macros](#Table-of-Contents%20Macros) 添加对 **exclude** 参数的一致支持
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/190613ad2989f70526f86eef17f524087f60eb72">> [tv-config-static Variable](#tv-config-static%20Variable) 用于标识静态渲染

# 错误修复

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7215">> 通过粘贴条目数据导入条目
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7400">> 激活自动高度的文本区域不需要 14px 底部边框
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7380">> [WidgetMessage: tm-focus-selector](#WidgetMessage%3A%20tm-focus-selector) 和 [WidgetMessage: tm-scroll](#WidgetMessage%3A%20tm-scroll) 使用无效的 CSS 选择器时崩溃
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7401">> 如果 linkcatcher 小工具触发动作导航，且 $scroll 属性设置为 "no"，则发生滚动的错误
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7409">> LTR 和 RTL 文本之间切换的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7448">> 当 CheckboxWidget 的 <<.attr listField>> 属性被赋予日期字段名称时，出现错误（如 <<.field created>> 或 <<.field modified>>）
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/7529">> 编辑器"链接"工具栏按钮下拉列表中按钮的大小
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/8e132948b6bec623d81d300fbe6dc3a0307bcc6d">> 将延迟加载的条目作为属性值包含在内时崩溃
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/7462">> DiffTextWidget 因属性缺失或为空而崩溃

# Node.js 改进

* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/7471">> [WebServer Parameter: authenticated-user-header](#WebServer%20Parameter%3A%20authenticated-user-header) 要求对经过身份验证的用户名功能变进行 URI 编码，允许用户名中包含非 ASCII 字符
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7253">> 支持 [tiddlywiki.files Files](#tiddlywiki.files%20Files) 的 `filepath` 源属性
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/48b22abdaab62c281c207127c66883b50898f9dd">> [tiddlywiki.info 文件](tiddlywiki.info Files)或 [plugin.info 文件](PluginFolders)中的 JSON 错误警告消息
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7490">> SaveWikiFolderCommand 的新 "explodePlugins" 选项

# 性能改进

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4624">> 模块运行重用相同的沙箱，节省内存并提高性能

# 致谢

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们的时间，协助改进 ~TiddlyWiki：

<<.contributors """
AnthonyMuscio
Arlen22
BramChen
btheado
buggyj
carlo-colombo
cdruan
donmor
EvidentlyCube
flibbles
GameDungeon
JoshuaFontany
kookma
linonetwo
Marxsal
mateuszwilczek
michsa
muzimuzhi
oeyoews
pmario
rmunn
saqimtiaz
tavin
twMat
xcazin
yaisog
Zacharia2
""">>