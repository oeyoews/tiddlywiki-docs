---
title: '宏定义'
---

## 简介

此条目描述了可以定义[宏](Macros)的不同方式。

## 宏定义编译指示

宏是在条目开始时使用 [Pragma: \define](#Pragma%3A%20%5Cdefine) 创建的。这些定义可用于定义它们的条目的其余部分以及其包含的任何条目中。

```
\define mymacro(param)
This is the macro text (param=$param$)
\end
```

## 嵌套宏定义

通过在 \end 标记中指定宏的名称，可以将宏定义嵌套到任意数量的所需级别。嵌套的宏定义必须出现在包含它们的定义的开头。例如：

<<wikitext-example-without-html src:"""\define special-button(caption:"点我")
\define actions()
<$action-sendmessage $message="tm-notify" $param="HelloThere"/>
\end actions
<$button actions=<<actions>>>
$caption$
</$button>
\end special-button

<<special-button>>
""">>

请注意，呈现外部宏时，发生的宏参数的文本替换也将应用于嵌套定义。这通常意味着不应在嵌套宏中使用宏参数的文本替换。

嵌套宏的参数也可以通过 `<<__variablename__>>` 语法访问。作为普通变量，这些参数在嵌套的子宏（和孙子等）中可用。

## 使用 <<.wlink SetWidget>> 小工具的宏定义

宏是实作为一种特殊类型的[变量](Variables)，因此在内部实际上是用 <<.wlink SetWidget>> 小工具定义的。

```
<$set name="mymacro" value="This is the macro text">
...
</$set>
```

<<.note """当前无法在使用 <<.wlink SetWidget>> 小工具定义宏时指定参数。""">>

## 导入宏定义

[Pragma: \import](#Pragma%3A%20%5Cimport) 或 <<.wlink ImportVariablesWidget>> 小工具可用于从另一个 tiddler 拷贝宏定义。

## `$:/tags/Macro` 标签

可以使用 [SystemTag: $:/tags/Macro](#SystemTag%3A%20%24%3A/tags/Macro) 定义全局宏。

标签 [SystemTag: $:/tags/Macro/View](#SystemTag%3A%20%24%3A/tags/Macro/View) 用于定义只应在主视图本和预览面板中可用的宏。

标签 [SystemTag: $:/tags/Macro/View/Body](#SystemTag%3A%20%24%3A/tags/Macro/View/Body) 用于定义只能在主视图模板主体和预览面板中可用的宏。

## JavaScript 宏

宏也可以是 <<.js-macro-link "written as JavaScript modules">>。