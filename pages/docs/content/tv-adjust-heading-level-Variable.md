---
title: 'tv-adjust-heading-level'
---

<<.def tv-adjust-heading-level>> [变量](Variables)允许对[标题](Headings in WikiText)级别进行调整。其被解译为正数或负数 (例如 "2" or "-3") ，加至显示的标题级别。

请注意，如果生成的标题级别小于 1，则会使用级别 1。这意味着，指定较大的负向调整因子，将重置所有标题以显示为级别 1。.同样地，大于 6 的标题级别，将被限制为最大的 HTML 标题级别 6 。

<<.variable-examples "tv-adjust-heading-level">>
