---
title: '进程'
---

## 简介

<<.from-version "5.3.0">> <<.def 进程>>是一个命名的文本片段。它们通常用 [Pragma: \procedure](#Pragma%3A%20%5Cprocedure) 定义：

```
\procedure my-procedure(parameter:"Default value")
This is the procedure, and the parameter is <<parameter>>.
\end
```

包裹在双角[括号](Brackets)中的名称是[嵌入](Transclusion)片段的简写方式。每一个<<.def "进程调用">>都可以提供一组不同的参数：

```
<<my-procedure>>
<<my-procedure "The parameter">>
```

进程调用中指定的参数可用作变量。

## 进程如何运作

过程实作为一种特殊的[变量](Variables)。它们与普通变量的唯一区别是处理参数的方式。

## 使用进程

* [进程定义](Procedure Definitions)描述如何创建进程
* [进程调用](Procedure Calls)描述如何使用进程
* [进程参数处理](Procedure Parameter Handling)描述过程参数如何工作

