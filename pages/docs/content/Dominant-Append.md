---
title: '主导追加'
---

[筛选器](Filters)操作[名称集合](Title Selection)，其中没有名称会出现不止一次。此外，他们常常需要追加一个此类集合到另一个。

在这种情况下，如果名称重复，该名称先前的副本将被丢弃。正在追加的名称占主导地位。

例如，如果所选内容包含 `Andrew Becky Clara Daniel`，然后追加`Andrew Barney Clara Daisy`，则结果为 `Becky Daniel Andrew Barney Clara Daisy`。

使用[数学运算符](Mathematics Operators)时，此行为可能会导致意外的结果。例如，`1 2 3 +[sum[]]` 一如预期，计算结果为 `6`。但 `1 1 1 +[sum[]]` 计算结果为 `1`。从每个筛检器删除 `+[sum[]]` 揭示问题：`1 2 3` 其结果为列表 `1`, `2`, `3`，而由于消除重复项，`1 1 1` 其结果为单个项 `1`。

在这种情况下，`=`前缀可用于禁用消除重复项。例如，`=1 =1 =1 +[sum[]]` 一如预期，计算结果为 `3`。或者，可使用 [split 运算符](split Operator)：`[1,1,1]split[,]sum[](#1%2C1%2C1%5Dsplit%5B%2C%5Dsum%5B)`。
