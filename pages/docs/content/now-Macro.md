---
title: 'now'
---

<<.def now>> [宏](Macros)返回指定[格式](DateFormat)的当前日期和时间。

该值不会自动更新，像一个滴答的时钟。于宏调用呈现时更新，像是每当包含的条目因某些其他原因需被刷新显示。

## 参数

**format**
: 一个指定所需[日期格式](DateFormat)的字符串，默认为 `0hh:0mm, DDth MMM YYYY`

**注意**: 格式字符串 `[UTC]YYYY0MM0DD0hh0mm0ssXXX` 将返回代表 UTC 时间戳记的日期字符串，如同其用于 ~TiddlyWiki `created` 和 `modified` 时间戳字段。

<<.from-version 5.2.0>><<.tip "您现在可以将文本参数传递给筛选器中的 `now` 宏。例如，此筛选器将返回今天创建的所有条目：`[all[tiddlers]] :filter[get[created]format:date[YYYY0MM0DD]match<now YYYY0MM0DD>]`">>


<<.macro-examples "now">>
