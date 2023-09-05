---
title: 'toc'
---

~TiddlyWiki 提供几个宏，通过分析[标签](Tagging)生成树状的条目链接：

**<<.var toc>>**
: 简单树状链接
**<<.var toc-expandable>>**
: 所有的分枝节点可以展开和收合
**<<.var toc-selective-expandable>>**
: 可以展开和收合的非空分支
**<<.var toc-tabbed-internal-nav>> 与 <<.var toc-tabbed-external-nav>>**
: 双面板的浏览器：
:* 左边为选择性地可展合的目录，就像一组垂直选项卡
:* 右边为用户所选的于目录树中的条目内容

最后两个之间的差异为当用户点击右侧面板中的链接时，会发生什么：

**<<.var toc-tabbed-internal-nav>>**
: 目标条目显现于右侧面板中，取代包含该链接的条目
**<<.var toc-tabbed-external-nav>>**
: 目标条目以正常的方式显现（这取决于用户的 storyview 配置）

## 结构

此目录树的顶层，由具有称为<<.def "根标签">>的特定标签的条目组成。下层目录则由以那些条目为标签的条目组成，等等。

在每个层级，条目可以由父层标签条目的 <<.field list>> 字段值的[顺序](Order of Tagged Tiddlers)，还可以依该宏的 <<.param sort>> 参数来排序。

如果条目有 <<.field caption>> 字段，则目录树显示该字段，否则显示条目名称。

在树中的每一条目通常显示为一个链接。若要取消，为条目的 <<.field toc-link>> 字段设其值为 <<.value no>>。在[示例](Table-of-Contents Macros (Examples))中的 SecondThree 条目即为如此设置。点击树中的条目会使其分支展开或收合。

<<.from-version "5.1.23">> 默认情况下，这些链接会打开构成目录的条目。另外，如果条目包含 <<.field target>> 字段，则其内容将用作链接的目标。

该目录生成为 HTML 有序清单，其中 `<ol>` 元素总是具有 `tc-toc` 类别。可展合的目录树有额外的 `tc-toc-expandable` 类别。可选择展合的目录树（包括那些在双面板的浏览器中）则另有 `tc-toc-selective-expandable` 类别。

若要使一个目录出现于侧边栏中，请参阅[如何添加选项卡至侧边栏](How to add a new tab to the sidebar)。

# 参数

**tag**
: 根标签，用于标识该目录树的顶层
**sort**
: 额外的可选的[筛选器 step](Filter Step)，例如，`sort[title]`

这两个参数合并成一个单一[筛选器表达式](Filter Expression) 像这样：

> `[tag[$tag$]$sort$]`

<<.var toc-tabbed-internal-nav>> 与 <<.var toc-tabbed-external-nav>> 采用额外的参数：

**selectedTiddler**
: 用于指出当前所选条目的[状态条目](StateMechanism)名称，默认为 `$:/temp/toc/selectedTiddler`，建议此为一[系统条目](SystemTiddlers)。

**unselectedText**
: 无选定条目时，显示的文本

**missingText**
: 选定的条目不存在时，显示的文本

**template**
: 可选的作为[模板](TemplateTiddlers)的条目名称，用于嵌入选定条目于右侧面板

**exclude <<.from-version "5.3.0">>**
: 此可选参数可用于从 TOC 列表中排除条目。它允许使用 [Title List]] 或 <<.olink subfilter>>。例如：`exclude:"HelloThere [Title with spaces](#Title%20with%20spaces)"` 或 `exclude:"[has[excludeTOC]]"`。前者将排除两个条目，而后者将排除具有与其值无关的字段 <<.field excludeTOC>> 的条目。<br>请''注意'' 例如：`[prefix[H]]` 是 `[all[tiddlers]prefix[H]]` 的快捷方式，如果使用不当，可能会影响性能。所以使用 [[控制台]($:/AdvancedSearch) -> **筛选** 选项卡来测试 <<.param exclude>> 参数

## 自定义图标

<<.from-version "5.2.4">>

要更改目录宏使用的图标，请重新定义宏 `toc-open-icon` 和 `toc-closed-icon`。此设置适用于所有目录宏变体。

### 默认设置

* <<.var toc-open-icon>>: `\define toc-open-icon() $:/core/images/down-arrow`  

* <<.var toc-closed-icon>>: `\define toc-closed-icon() $:/core/images/right-arrow` 

### 自定义定义

可以使用定义编译指示或 let 小工具在代码中覆盖默认设置。<<.wlink LetWidget>> 小工具，如果您在一个条目中有多个目录宏，需要不同的图标，则可以使用 <<.wlink LetWidget>> 小工具。

**使用编译指示定义新图标**

```
\define toc-open-icon() $:/core/images/fold-button
\define toc-closed-icon() $:/core/images/folder
...
```

**使用 let-widget 定义新图标**

```
<$let toc-open-icon="$:/core/images/fold-button" toc-closed-icon="$:/core/images/folder">
...
</$let>
```

## 示例

于[目录宏示例](Table-of-Contents Macros (Examples))中，可了解更多信息
