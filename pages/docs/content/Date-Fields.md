---
title: '日期字段'
---

一个条目的某些[字段](TiddlerFields)用来存放日期和时间。~TiddlyWiki 支持从 -9999 到 9999 年的日期。

两个标准的日期字段是 <<.field created>> 和 <<.field modified>>。

日期字段的值是 17 或 18 个字符的字符串：

* 4 位数的年
* 2 位数的月
* 2 位数的日
* 2 位数的时
* 2 位数的分
* 2 位数的秒
* 3 位数的毫秒

为了避免因时区差异生成的问题，~TiddlyWiki 总是使用 [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)。

在这些字段中存储日期的[日期格式](DateFormat)模板是`[UTC]YYYY0MM0DD0hh0mm0ss0XXX`。

当作一个示例，本条目的 <<.field created>> 字段值为 <<.value """<$view field="created"/>""">>。

日期可以[转换为其他格式](DateFormat)显示：

<$macrocall $name="wikitext-example-without-html"
src="""<$view field="created" format="date" template="DDD DDth MMM YYYY"/>""">
