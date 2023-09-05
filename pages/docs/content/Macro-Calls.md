---
title: '宏调用'
---

## 简介

此条目描述了调用[宏](Macros)的不同方式。

## 宏调用嵌入快捷方式

调用[宏](Macros)，请于名称和所有参数值于前后加上 `<<`双角括号`>>`

```
<<mymacro param:"This is the parameter value">>
```

默认情况下，参数以宏定义中的相同顺序同列出。为清楚起见或者要修改顺序，参数可使用其名称。

如果没有为一个参数指定值，则使用[宏定义](Macro Definitions)中为该参数指定的默认值。（如果未定义默认值，则该参数为空）。

每个参数值可以包裹于`'`单引号`'`、`"`双引号`"`、`"""`三重双引号`"""`或`[`双方括弧`](#%60%E5%8F%8C%E6%96%B9%E6%8B%AC%E5%BC%A7%60)`。三重双引号允许一个值包含几乎所有内容。如果参数值未包含空格、单引号或双引号，则无须分隔符号。

此语法也有一个更正式的[陈述](Macro Call Syntax)可用。

请参阅一些[示例](Macro Calls in WikiText (Examples))，和关于[解析器模式](WikiText parser mode: macro examples)的讨论。

## 使用 <<.wlink TranscludeWidget>> 小工具的宏调用

快捷语法扩充 <<.wlink TranscludeWidget>> 小工具，其中 `$variable` 属性指定要嵌入的宏的名称。

```
<$transclude $variable="mymacro" param="This is the parameter value"/>
```

小工具本身提供比快捷语法更大的灵活性，包括指定参数值的能力。

## 将宏调用分配给属性值

宏的结果可以直接分配给小工具或 HTML 元素的属性。宏的结果没有维基化，但运行了[参数替换](Macro Parameter Handling)。

```
<div class=<<myclasses "Horizontal">>>
...
</div>
```

## 在筛选器中使用宏调用

筛选器中可以使用宏调用：

```
<$list filter="[<mymacro param:'value'>]">
...
</$list>
```