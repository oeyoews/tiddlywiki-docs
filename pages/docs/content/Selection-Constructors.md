---
title: '选择建构子'
---

一个[筛选器 Step](Filter Step) 的输出取决于其 [运算符](Filter Operators)：

* 大多数运算符的输出来自其输入。例如，其中许多其输出为其输入的子集，如此才能真正符合<<.word 筛选器>>的名称、缩小包含 [run](Filter Run) 的整体输出。这些运算符称为<<.def "选择修饰子">>。
* 一些运算符忽略其输入，并生成独立的输出。这些被称为<<.def "建构子">>：他们构建全新的[选择](Title Selection)。

<<.olink title>> 是建构子的一个好例子。`[title[A]title[B]]` 的输出是只是 <<.tid B>>。但 <<.olink field>> 运算符是一个修饰子，因此 `[title[A]field:title[B]` 无任何输出。