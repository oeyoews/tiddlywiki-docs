---
title: '进程调用'
---

## 简介

这个条目描述了调用[进程](Procedures)的不同方式。

## 进程调用嵌入快捷方式

要调用[进程](Procedures)，请在名称和任何参数值前后放置 `<<`双角括号`>>`。

```
<<my-procedure param:"This is the parameter value">>
```

默认情况下，参数的列出顺序与进程定义中的顺序相同。参数可以用其名称和冒号标记，以允许它们以不同的顺串行出。

如果没有指定参数值，则使用[进程定义](Procedure Definitions)中为该参数给定的默认值。（如果未定义默认值，则该参数为空）。

每个参数值都可以用 `'`单引号`'`、`"`双引号`"`、`"""`三重双引号`"""`或`[`双方括号`](#%60%E5%8F%8C%E6%96%B9%E6%8B%AC%E5%8F%B7%60)`括起来。三重双引号允许一个值包含几乎所有内容。如果值不包含空格或单引号或双引号，则不需要分隔符号。

请参阅有关[解析器模式](WikiText parser mode: macro examples) 的讨论

## 使用 <<.wlink TranscludeWidget>> 小工具的进程调用

快捷语法扩充为 <<.wlink TranscludeWidget>> 小工具，其中 `$variable` 属性指定要嵌入的进程的名称。

```
<$transclude $variable="my-procedure" param="This is the parameter value"/>
```

小工具本身提供比快捷语法更大的灵活性，包括指定动态参数值的能力。

## 将进程调用分配给属性值

进程的文本可以直接分配给小工具或 HTML 元素的属性。该进程的结果未被维基化，这意味着[参数处理](Procedure Parameter Handling)不会发生。

```
<div class=<<myclasses>>>
...
</div>
```

## 在筛选器中使用进程调用

进程调用可用于筛选器。文本未被维基化，这再次意味着参数将被忽略。

```
<$list filter="[<my-procedure>]">
...
</$list>
```