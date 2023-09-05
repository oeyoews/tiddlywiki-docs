---
title: '进程定义'
---

## 简介

此条目描述了可以定义[进程](Procedures)的不同方式。

## 进程定义编译指示

进程是在条目开头使用 [Pragma: \procedure](#Pragma%3A%20%5Cprocedure) 创建的。这些定义可用于定义它们的条目的其余部分，以及其包含的任何条目中。

```
\procedure my-procedure(param)
This is the procedure text (param=<<param>>)
\end
```

## 使用 <<.wlink SetWidget>> 小工具定的过程定义

进程实作为一种特殊的[变量](Variables)，因此在内部实际上是用 <<.wlink SetWidget>> 小工具定义的。

```
<$set name="my-procedure" value="This is the procedure text">
...
</$set>
```

<<.note """当前无法在使用 <<.wlink SetWidget>> 小工具定义进程，时指定参数。""">>

## 导入进程定义

[Pragma: \import](#Pragma%3A%20%5Cimport) 或 <<.wlink ImportVariablesWidget>> 小工具可用于从另一个条目拷贝进程定义。

## `$:/tags/Global` 标签

可以使用 [SystemTag: $:/tags/Global](#SystemTag%3A%20%24%3A/tags/Global) 定义全局进程。

标签[SystemTag: $:/tags/Global/View](#SystemTag%3A%20%24%3A/tags/Global/View) 用于定义只应在主视图模板，和预览面板中可用的进程。

标签 [SystemTag: $:/tags/Global/View/Body](#SystemTag%3A%20%24%3A/tags/Global/View/Body) 用于定义只应在主视图模板主体，和预览面板中可用的进程。