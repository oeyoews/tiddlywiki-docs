---
title: '变量'
---

## 简介

<<.def 变量>>是一个文本片段，可以通过名称访问。该文本称为变量的<<.def 值>>。

变量由[小工具](Widgets)定义。几个内核小工具定义了变量，最常见的是 <<.wlink SetWidget>>、<<.wlink LetWidget>> 和 <<.wlink ListWidget>> 小工具。

变量的值可用于后代小工具，包括嵌入的内容。例如，在主要故事河流中的每个条目中，变量 "currentTiddler" 被设置为条目的名称。

变量也可以被定义同名变量的后代小部件覆盖，从而将不同的片段绑定到小部件的子范围内的该名称。

## 特殊类型的变量

有几种特殊类型的变量可以扩充它们的基本功能：

* [进程](Procedures)是可以在维基化时，传递参数的文本片段
* [函数](Functions)是包含[筛选器](Filters)和可选命名参数的文本片段
* [自定义小工具](Custom Widgets)是包含自定义[小工具](Widgets)定义的文本片段
* [宏](Macros)是可以包含占位符号的文本片段，只要使用宏，这些占位符号就会用参数填充

请注意，这些特殊类型的变量，只能使用关联的快捷方式定义语法创建。

有关这些特殊类型变量的更详细比较，请参阅[变量用法](Variable Usage)。

## 定义变量

以下内核小工具通常用于定义变量：

* <<.wlink LetWidget>> 小工具 -- 定义多个变量的最简单方法
* <<.wlink SetWidget>> 小工具 -- 定义单个变量的最灵活方式
* <<.wlink ParametersWidget>> 小工具 -- 用于在[进程](Procedures)和[自定义小工具](Custom Widgets)中声明参数变量
* <<.wlink ListWidget>> 小工具 -- 定义一个循环变量和可选的计数器变量
* <<.wlink SetMultipleVariablesWidget>> 小工具 -- 允许在事先不知道名称和值的情况下，一次创建多个变量

## 使用变量

定义变量后，可以通过多种方式访问之。

### 嵌入变量

嵌入变量呈现变量的文本内容，就好像它替换了调用一样。它是具有 `$variable` 属性的 <<.wlink TranscludeWidget>> 小工具的快捷语法。

```
<<varname>>
```

参数可以传递给嵌入，如下所示：

```
<<varname "这是一个参数">>
<<varname param:"这是一个参数">>
<<varname param:"这是一个参数" second:"另一个参数">>
```

这些参数的处理取决于变量的种类：

* [进程](Procedures) 将参数分配给进程中可用的变量
* [宏](Macros)用传递给这些参数的宏的值替换特殊标记 `$param$` 的文本（有关详细信息，请参阅[[宏参数处理](Macro Parameter Handling)）

其他类型的变量将忽略这些参数。

### 宏变量替换

在使用宏的文本之前，特殊标记 `$(variable)$` 被命名变量的值替换。

### 变量属性

变量可以用作小工具或 HTML 元素的属性值：

```
<div class=<<varname>>>
```

可以传递参数：

```
<div class=<<varname "这是一个参数">>>
...
<div class=<<varname param:"这是一个参数">>>
...
<div class=<<varname param:"这是一个参数" second:"另一个参数">>>
...
```

这些参数的处理取决于变量的种类：

* [函数](Functions)将参数分配给函数内可用的变量
* [宏](Macros)用传递给这些参数的宏的值替换特殊标记 `$param$` 的文本（有关详细信息，请参阅[[宏参数处理](Macro Parameter Handling)）

其他类型的变量将忽略这些参数。

### 筛选器中的变量

可以使用角括号引用名称在[筛选器](Filters)中访问变量：

```
[<varname>]
```

参数可以通过通常的方式传递：

```
[<varname "这是一个参数">]
[<varname param:"这是一个参数">]
[<varname param:"这是一个参数" second:"另一个参数">]
...
```

## 另请参阅

* <<.mlink dumpvariables>> 宏列出了小工具树中，该位置可用的所有变量
* ~TiddlyWiki 内置[内核变量](Core Variables)的完整列表

## 示例

### 定义变量的示例

<$macrocall $name=".example" n="1"
eg="""<$set name=animal value=zebra>
<<animal>>
</$set>"""/>

### 定义宏的示例

以下[定义宏](Macro Definition)的 `\define` 编译指示称为 <<.var tags-of-current-tiddler>>。该宏返回条目的 <<.field tags>> 字段的值，并且可以从同一条目中的任何其他地方访问（或在[导入](ImportVariablesWidget)它的任何条目中）。

<$importvariables filter="$:/editions/tw5.com/macro-examples/tags-of-current-tiddler">
<$codeblock code={{$:/editions/tw5.com/macro-examples/tags-of-current-tiddler}}/>
<$macrocall $name=".example" n="2" eg="""此条目标签为： <<tags-of-current-tiddler>>"""/>
</$importvariables>

### 使用变量作为筛选器参数的示例

此示例使用 <<.olink backlinks>> [筛选器](Filter Operators)，列出所有链接到此的条目。

<$macrocall $name=".example" n="3" eg="""<<list-links filter:"[<currentTiddler>backlinks[]]">>"""/>

