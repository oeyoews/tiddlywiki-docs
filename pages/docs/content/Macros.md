---
title: '宏'
---

## 简介

<<.def 宏>>是一些命名文本片段。它们通常使用 [Pragma: \define](#Pragma%3A%20%5Cdefine) 定义：

```
\define my-macro(parameter:"Default value")
This is the macro, and the parameter is $parameter$.
\end
```

包裹在双角[括号](Brackets)中的名称是[嵌入](Transclusion)片段的简写方式。这种嵌入被称为 <<.def "宏调用">>，每个调用都可以提供一组不同的参数：

```
<<my-macro>>
<<my-macro "The parameter">>
```

宏调用中指定的参数，将替换代码片段中的特殊占位符号：

* `$parameter-name$` 替换为命名参数的值
* `$(variable-name)$` 替换为命名的[变量e](Variables) 的值。

<<.from-version "5.3.0">> 宏已被[[进程|Procedures]、[自定义小工具](Custom Widgets)和[函数](Functions)[取代](Macro Pitfalls)，它们共同提供了更健壮和灵活的方式来封装和重用代码。现在建议仅在特别需要文本替换时才使用宏。

宏被实作为一种特殊的[变量](Variables)。它们与普通变量的唯一区别是处理参数的方式。

## 使用宏

* [宏定义](Macro Definitions)描述如何创建宏
* [宏调用](Macro Calls)描述如何使用宏
* [宏参数处理](Macro Parameter Handling)描述宏参数如何工作
* [宏陷阱](Macro Pitfalls)描述了一些使用宏的陷阱
* [内核宏](Core Macros)列出内健的内核宏