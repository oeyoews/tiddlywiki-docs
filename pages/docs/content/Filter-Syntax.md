---
title: '筛选器语法'
---

<<.preamble """[筛选器](Filters)遵循此处介绍的语法，使用[语法图表](Railroad Diagrams)有助于那些寻找正式的语法描述的人。总之，[您可以编写自己的筛选器](Introduction to filter notation) ，而无需了解这群条目。""">>

<<.def 筛选器>>是一个转化一个<<.def 输入>>至一个<<.def 输出>>的输送管道。输入和输出是[有序的条目名称集合](Title Selection)，有如条目和字段。

筛选器是由一些称为 [runs](Filter Run) 和 [steps](Filter Step) 的较小构建区块所组成的[表达式](Filter Expression)，每一区块也将输入转换至输出。

筛选器起始于一个空的输出，其 runs 是由左至右处理的，逐步修改输出。

还有各种的构建区块相关的详细信息：

<<list-links "[tag[Filter Syntax]]">>
