---
title: '使用样式表'
---

\define tv-config-toolbar-text() yes
 
\define openCpTheme()
<$action-setfield $tiddler="$:/state/tab-1749438307" $value="$:/core/ui/ControlPanel/Appearance"/>
<$action-setfield $tiddler="$:/state/tab--1963855381" $value="$:/core/ui/ControlPanel/Theme"/>
<$action-navigate $to="$:/ControlPanel"/>
\end

# 布景主题和配色盘

改变 TiddlyWiki 外观的第一步是使用一个可用的布景主题：

* 可用主题之一：{{$:/core/ui/Buttons/theme}}
* 修改配色盘：{{$:/core/ui/Buttons/palette}}
* 实验的使用 <$button actions=<<openCpTheme>> class="tc-btn-invisible"><<.icon $:/core/images/options-button>>控制台</$button>

# 使用样式表

除了控制台之外，还可以借由设条目标签为 `$:/tags/Stylesheet` 自定义样式表。试着创建一个自定义样式表，以及下面的内容，将页面背景颜色改为红色：

```
body.tc-body {
	background: red;
}
```

然后，您可以使用自己的[维基文本中的样式和类](Styles and Classes in WikiText).

## 其他资源
 
* [Cascading Style Sheets (CSS) at mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Cascading Style Sheets (CSS) at w3scools](http://www.w3schools.com/css)

# 覆盖布景主题设置

自定义样式表独立于主题样式表被套用。因此，自定义样式表中的 css 规则，通常需要比您想要覆盖的布景主题更具体。例如，`html body.tc-body` 比 `body.tc-body` 更具体。

<<.tip "''您应该总是始于最不具体的值!''<br><br>">>

# 样式表类型

通常，样式表最好使用 `text/css` 类型。这将它们视为纯样式表，并确保 ~TiddlyWiki 不会对他们套用任何维基解析。

如果您希望在样式表中使用宏和嵌入，应改用默认的 ~WikiText 类型 `text/vnd.tiddlywiki`。这将允许运行完整的 ~WikiText 解析。以下是一个示例：

```
\rules only filteredtranscludeinline transcludeinline macrodef macrocallinline

body.tc-body pre {
	<<box-shadow "inset 0 1px 0 #fff">>
}
```

在条目最上方的 `\rules` 编译指示将限制 ~WikiText 只允许宏和嵌入。这样可以避免误触发非必要的 ~WikiText 解析。

样式条目被处理，使其先被 wikified 然后输出的文本部分被提取以套用为 CSS，因而忽略你会在你的样式表使用的任何 HTML 标记。例如，由 RevealWidget 生成的 HTML 元素将不会影响输出。如在下面的例子中，可以在 `<pre>` 标记中包裹 CSS 规则来显示其为一个代码区块，而不会影响处理，包括处理内含的宏。

```
\rules only filteredtranscludeinline transcludeinline macrodef macrocallinline html

body.tc-body pre {
 <<box-shadow "inset 0 1px 0 #fff">>
}
```

## 样式表宏

几个全域可用的宏，有助于构建的样式表。请参阅 [$:/core/macros/CSS](#%24%3A/core/macros/CSS) 这些宏的定义。

* `<<colour name>>` 与 `<<color name>>` 从当前的[调色板](ColourPalettes)中取得已命名的颜色
* `<<box-shadow shadow>>` 指定一个 box-shadow
* `<<filter filter>>` 指定一个 CSS 筛选
* `<<transition transition>>` 指定一个 CSS 转场特效
* `<<transform-origin origin>>` 指定 CSS 变换的起始
* `<<background-linear-gradient gradient>>` 指定一个线性渐层
* `<<datauri title>>` 使用 CSS `url()` 操作符取得条目的 base64 内容

## 另请参阅

<<list-links "[tag[Using Stylesheets]]">>