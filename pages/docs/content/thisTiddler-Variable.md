---
title: 'thisTiddler'
---

<<.from-version "5.3.0">> <<.def thisTiddler>> [变量](Variables)由 <<.wlink TranscludeWidget>> 小工具设置以包含被嵌入的条目名称。这意味着在嵌入 <<.def thisTiddler>> 中将包含被嵌入的条目名称。它不受宏的影响，这意味着在宏中 <<.def thisTiddler>> 将包含调用宏的条目名称。中间的嵌套宏调用将被忽略。

<<.def thisTiddler>> 有两个关键用法：

* 在嵌入的模板中，<<.def thisTiddler>> 指向模板本身，使模板可以访问存储在模板其他字段中的数据
* 在宏中，<<.def thisTiddler>> 指向调用宏的模板。如果宏被另一个宏调用，则返回调用该宏的模板，依此类推

比较 <<.vlink storyTiddler>> 和 <<.vlink currentTiddler>>。

<<.variable-examples "thisTiddler">>
