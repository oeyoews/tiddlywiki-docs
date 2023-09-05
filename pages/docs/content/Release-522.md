---
title: '5.2.2'
---

_[此版的更新历史详见](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.2.1...v5.2.2)//

<<.banner-credits
	credit:""""恭喜 [Elise Springer](https://www.wesleyan.edu/academics/faculty/espringer/profile.html) 赢得本次发布版的横幅设计 (这是[比赛的讨论串](https://groups.google.com/d/msgid/tiddlywiki/ad868177-3432-4f8c-bec5-5f6639d1aeddn%40googlegroups.com))。
"""
	url:"https://raw.githubusercontent.com/Jermolene/TiddlyWiki5/e26a4d8cb54fa60b8a47e3cef2c3a962535ca619/editions/tw5.com/tiddlers/images/New%20Release%20Banner.png"
>>

# 亮点

## <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/6427">> [Highlight Plugin](#Highlight%20Plugin) 使用 highlight.js v11.4.0

这是一个重大升级至最新版本的 highlight.js。新版本有许多改进，包括对 Fortran 的更好支持。

<<.warning """新版的 [Highlight 插件](Highlight Plugin)需要一个完全支持 JavaScript ES6（2015 年发布）的现代浏览器。旧版本仍可用作 **highlight-legacy** 插件，供需要使用旧版浏览器的用户使用。""">>

## <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6498">> 支持辅助窗口

[WidgetMessage: tm-open-window](#WidgetMessage%3A%20tm-open-window) 现在支持可选的 `windowID` 参数，以便已打开的窗口可以用新的 [WidgetMessage: tm-close-window](#WidgetMessage%3A%20tm-close-window) 消息。还有一个新的关闭所有辅助窗口的 [WidgetMessage: tm-close-all-windows](#WidgetMessage%3A%20tm-close-all-windows) 消息。

## <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6421">> 支持在筛选器的嵌入属性中，使用换行符号，以提高可读性

为了提高可读性，现在可以在 HTML 元素和窗口小工具的筛选嵌入属性中，使用换行符号作为空格。例如：

```
<span class={{{
	[<currentTiddler>addsuffix[-primaryList]]
	:except[<searchListState>get[text]]
	:and[then[]else[tc-list-item-selected]]
}}}>
```

## <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6383">> 标签条目的不一致顺序

这是一个长期存在的错误，以多种方式表现出来。

根本原因是，枚举条目的顺序取决于它们被添加到存储中的顺序。

效果是，基于枚举条目的清单，将显示不同的结果，具体取决于自维基重新加载以来，是否添加了新的条目。

例如，以前使用一个给定标签添加一个新的条目，会导致新的条目显示在该标签的标签丸清单的底部。保存和重新加载维基，将重新排串行表，以便将新的条目放在正确的位置。

此修复可确保枚举顺序保持一致。

## <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6553">> 一些不正确的嵌套 `<span>` 和 `<div>` 元素

~TiddlyWiki 的内核页面布局历来包含几个内联 `<span>` 元素包含区块 `<div>` 元素的实例，技术上无效的 HTML。在实务上，浏览器总是很宽容地处理这些情况，以使页面正常工作，但开发人员在与 ~TiddlyWiki 的第一次交互中，遇到无效的 HTML 结构也是无益的。

现在开始解决这些问题的直接提示是 Chrome v100 [包含一个更改](https://chromium.googlesource.com/chromium/src/+/4a76c96d2a4021257e691058c1fe1fb60d9d8327)，这会导致其中一些错误嵌套的元素在视觉上正确呈现，但在某些情况下无法点击。（此变更是在 Chrome v102 中[已还原的]](https://chromium.googlesource.com/chromium/src/+/abadd1181ca70cf3d1ac7e7878d46b1d3173a2e0)，但修复它仍然是有意义的）。

# 插件改进

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6428">> Markdown 条目中的 ~LaTeX 内容的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6457">> 菜单栏插件中下拉类的不正确处理
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/6520">> Dynannotate 插件，使用新的[查看模板主体级联](View Template Body Cascade)，避免修改默认的查看模板。

# 翻译改进

* 波兰语
* 华语
* 法语

# 可用性改进

* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/6435">> 拖放横幅的措辞 (拖 "托放到此处" 改为 "现在放下")
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/853a899c77766e47eade1dfa5822640ef9915637">> 在字段查看器中字段的包装和维基化
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/0186c6490fbd1d8fd4de7c3fa99ccf4d129fbd80">> 在 **type** 字段的编辑模板下拉清单中，描述和 MIME 类型之间缺少空格
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/c7e8c87f85b54f60302ff8e396a7569d996e3f67">> 某些系统条目器的代码查看用法不正确
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6501">> 侧边栏插件清单依名称而不是描述排序

# 小工具改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/66ae1d6930796a9eb062fdb64a755adab8f39294">> 类别至 ImageWidget，以标示其是否正在加载、已加载或是否遇到错误
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6389">> 如果缺少字段或索引，RadioWidget 不使用默认值
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6426">> 导入区块模式小工具时，ImportVariablesWidget 出现的问题
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6480">> DraggableWidget 支持可选的拖动处理

# 筛选器改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6468">> 支持 [prefix 操作符](prefix Operator)和 [suffix 操作符](suffix Operator)的不区分大小写的匹配
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/1a0c831216c397c6fef8e5685e47857193411a1b">> [sha256 操作符](sha256 Operator)
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6438">> 筛选器操作符，使用已弃用的正则表达式操作数时崩溃
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/5742">> [lookup 操作符](lookup Operator)，支持索引和字段
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6293">> [search 操作符](search Operator)，使用新的 'some' 旗标
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6478">> [untagged 操作符](untagged Operator)，将不存在的条目视为未标签
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6477">> [insertbefore 操作符](insertbefore Operator)，接受位置标题作为参数，而不是后缀中的变量名称
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6483">> [butlast 操作符](butlast Operator)与 [rest 操作符](rest Operator)保持一致

# 可编程性改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6511">> [字段编辑器级联](Field Editor Cascade)用于自定义字段在编辑模板中的显示方式
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6388">> 支持直接在 [HTML 元素](HTML in WikiText)上指定样式属性 (例如，`<div style.color={{!!color}}>`)
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/54cfda76ee353190f1cf0210b9071894fb1a5690">> 支持将 **code-body** 字段设置为 **yes**，触发以代码形式显示条目
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6410">> 支持 [WidgetMessage: tm-scroll](#WidgetMessage%3A%20tm-scroll) 无动画的卷动
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/1d16206188ebd5ca7481a7f565bf5fc4c08239fd">> 支持 [WidgetMessage: tm-relink-tiddler](#WidgetMessage%3A%20tm-relink-tiddler)
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6470">> [WidgetMessage: tm-open-window](#WidgetMessage%3A%20tm-open-window) 以支持 'top' 和 'left' 参数
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6523">> 新的 **matchSelector** 属性至 EventCatcherWidget

# 开发者改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6409">> 支持故事查看的 **renderEnd()** 方法
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6381">> sourceURL 标签到 $:/boot/boot.js 和 $:/boot/bootprefix.js，使其可以在浏览器调试器中更轻松地访问

# Node.js 改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5899">> 几个新的网页服务器选项：[admin](WebServer Parameter: admin)、[required-plugins](WebServer Parameter: required-plugins) 和 [tls-passphrase](WebServer Parameter: tls-passphrase)

# 性能改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6327">> 支持缓存 [listed Operator](#listed%20Operator)
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/6537">> 样式表处理，避免不必要的刷新

# 错误修复

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/60187dc59e6546d9ca8e6a35418f782a9627cda0">> 导入/升级加密的单一文件维基
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6376">> 如果缺少首码或尾码，使用''换行''操作，[WidgetMessage: tm-edit-text-operation](#WidgetMessage%3A%20tm-edit-text-operation) 崩溃的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6395">> $:/tags/RawMarkupWikified/TopHead 条目的处理
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6398">> 重命名标签可能导致重复标签的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6440">> 搜索结果在窄的屏幕上模糊不清
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6540">> ActionListopsWidget 输入清单项以 `-`, `+`, `~`, `:` 开头的错误，或筛选器中具有特殊含义的其他字符
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/28a91aafa74da04842dbff4b8d0eb7a8dad5dbaa">> (和[此处](https://github.com/Jermolene/TiddlyWiki5/pull/6531))，当 `default` 属性更改时，ButtonWidget 的刷新

# 致谢

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们的时间，协助改进 TiddlyWiki：

<<.contributors """
benwebber
BramChen
btheado
CodaCodr
cdruan
damscal
davout1806
EvidentlyCube
FlashSystems
flibbles
FSpark
ibnishak
jc-ose
joshuafontany
linonetwo
Marxsal
nilslindemann
oflg
pmario
rryan
saqimtiaz
slaymaker1907
tw-FRed
twMat
""">>