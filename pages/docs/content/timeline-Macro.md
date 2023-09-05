---
title: 'timeline'
---

<<.def timeline>> [宏](Macros)传回依修改日期时间 (或其他[日期字段](Date Fields)) 反向顺序的条目清单，按日期分组。

## 参数

**limit**
: 包含条目的最大数量，缺省为 100。但如果包含一个特定日期的<<.em 任何>>条目，则将包含该日期的<<.em 所有>>其他条目 -- 即使这超出限制
**format**
: 一个指定所需[日期格式](DateFormat)的字符串，缺省为 `DDth MMM YYYY`
**subfilter**
: 可选的额外的[筛选器 step](Filter Step)，例如 `tag[MyTag]`
**dateField**
: 要使用的日期字段名称，缺省为 `modified`

由[筛选器表达式](Filter Expression)选择条目，拼接其中 <<.param subfilter>> 和 <<.param limit>> 参数如下：

> `[!is[system]$subfilter$has[$dateField$]!sort[$dateField$]limit[$limit$]eachday[$dateField$]]`

<<.macro-examples "timeline">>
