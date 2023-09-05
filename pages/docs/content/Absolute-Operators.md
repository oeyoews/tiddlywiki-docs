---
title: '绝对运算符'
---

[筛选器](Filters) step 的输出取决于其[运算符](Filter Operators)：

* 大多数运算符运行其<<.def 相对的>>输入。他们依次检查每个输入的条目名称，并过滤掉任何不匹配的。这些 steps 将逐步缩小 run 的输出。

* <<.def 绝对>>运算符忽略他们的输入，并生成独立的输出。

绝对运算符的一个好例子是 <<.olink title>>。`[title[A]title[B]]` 的输出只是 <<.tid B>>。但是 <<.olink field>> 运算符是相对的，所以 `[title[A]field:title[B]` 没有任何输出。
