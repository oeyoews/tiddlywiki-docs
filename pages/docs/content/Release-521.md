---
title: '5.2.1'
---

_[此版的更新历史详见](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.2.0...v5.2.1)//

<<.banner-credits
	credit:"""恭喜 [Mohammad Rahmani](https://github.com/kookma) 和 [Elise Springer](https://www.wesleyan.edu/academics/faculty/espringer/profile.html) 赢得此版本的横幅设计 (这是[其他作品](https://groups.google.com/g/tiddlywiki/c/GU0TPGNMPvw/m/y1SyQk_nAQAJ))。
"""
	url:"https://raw.githubusercontent.com/Jermolene/TiddlyWiki5/cb43b91ab6b14c2a16af917cfab0e5b2371502c6/editions/tw5.com/tiddlers/images/New%20Release%20Banner.png"
>>

# 亮点

## <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6168">> 新的筛选器级联机制

[级联机制](Cascades)提供了一种在多个选项之间进行选择的灵活方式。至关重要的是，它以一种使插件可以轻松调整逻辑，或添加自己的选项的方式完成。

可以使用级联完成的一些操作包括：

* 将默认的条目主体模板替换为针对特定类型条目的自定义模板
* 为所有日志条目提供自定义图标
* 为某些类型的条目实现自定义编辑器

这些改变分为两部分。基础是一个新的[级联筛选器 run 前缀](Cascade Filter Run Prefix)，它取得筛选器清单，并按顺序运行之，返回第一个筛选器的结果以返回值。

第二部分是基于这种新的筛选器级联机制的一系列改进。以前隐藏在内核模板中的条件逻辑，现在可以比以前更容易扩充和调整。

选择内核用户界面的以下元素，现在使用级联进行处理：

* [故事条目模板](Story Tiddler Template Cascade)
* [条目颜色](Tiddler Colour Cascade)
* [条目图标](Tiddler Icon Cascade)
* [查看模板主体](View Template Body Cascade)
* [查看模板标题](View Template Title Cascade)
* [编辑模板主体](Edit Template Body Cascade)

级联可以在[控制台]($:/ControlPanel)的''信息'' -> **高级** -> **级联**中检查。

有关详细信息，请参阅 [级联](Cascades)。

## <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6148">> 新的 LetWidget

LetWidget 是现有 VarsWidget 的改进替代方案。建议在所有情况下，使用新的 LetWidget 而不是 VarsWidget。

主要优点是，LetWidget 以与编写变量相同的顺序运行变量赋值，并允许引用较早期的赋值。例如，在这里我们交换两个变量的值：

```
<$let temp=<<foo>> foo=<<bar>> bar=<<temp>>>
...
</$let>
```

# 错误修复

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6261">> 修复了在 Chrome 96 中拖放的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6278">> 修复了 Chrome 96 中的拖放和 [CodeMirror 插件](CodeMirror Plugin)的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6013">> 刷新 LinkWidget 属性
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6107">> 在 tiddlywiki.files 中使用 "source=basename-uri-decoded" 时崩溃
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/8ae4428332e03a1fdaee26f777a0c3a372fff401">> 使用 ActionSetFieldWidget 设置索引值时，忽略 **$timestamp** 属性
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/2af632a46d74e223f99a67c6aaa5bc6931e9466e">> 在 [CodeMirror 插件](CodeMirror Plugin)的静态渲染期间崩溃

# 可用性改进

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6015">> 主题调整中的图像选取器，在选择图像时不消失
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5998">> 一个[新的隐藏设置](Hidden Setting: Show Edit Preview per Tiddler)，用于控制以个别条目为主的，编辑器预览窗格的可视性
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/commit/b0f72d069086dee8506758c643f953f9ec55f403">> 侧边栏插件清单，显示图标和更多详细信息

# 小工具改进

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/9caba544eb04f56ed772340a2d8767974b2617c9">> CodeBlockWidget 的刷新
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6145">> EditTextWidget 提供一个新的 **actionValue** 变量到包含输入值的动作字符串

# 筛选器改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6127">> 新的三角函数操作符: [acos](acos Operator)、[asin](asin Operator)、[atan](atan Operator)、[cos](cos Operator)、[sin](sin Operator) 和 [tan](tan Operator)
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6150">> 新的 [zth Operator](#zth%20Operator)，就像 [nth Operator](#nth%20Operator) 一样运作，但是从 0 开始计数，而不是从 1 开始
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6149">> [Map Filter Run Prefix](#Map%20Filter%20Run%20Prefix)，对筛选器提供其他变量
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6164">> 筛选器 run 前缀中的宏参数

# 可编程性改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6130">> 新的 ActionSetMultipleFieldsWidget、新的 SetMultipleVariablesWidget，并扩充 ActionSendMessageWidget，用于在一次操作中与多个 变量/字段/索引/参数 工作
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6012/files">> 新的 `focus-editor` 操作到 [WidgetMessage: tm-edit-text-operation](#WidgetMessage%3A%20tm-edit-text-operation)

# 开发者改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6132">> 支持小工具访问属性定义的顺序

# Node.js 主从改进

<<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5275">> 支持使用 [tiddlywiki.files](tiddlywiki.files Files) 递归加载子目录

# 翻译改进

* 波兰语
* 华语

# 致谢

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们的时间，协助改进 TiddlyWiki：

<<.contributors """
bmann
btheado
BramChen
BurningTreeC
eiro10
EvidentlyCube
flibbles
joshuafontany
Marxsal
pmario
saqimtiaz
Telumire
tw-FRed
twMat
""">>