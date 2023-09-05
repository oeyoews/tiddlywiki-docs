---
title: 'changecount 宏（示例）'
---

<$macrocall $name=".example" n="1" eg="""<<changecount>>"""/>

如果您编辑这条目且再次存储它，就会递增其值，即使没有对其内容进行任何更改。

若要访问另一个不同条目的 <<.var changecount>>，请使用 <<.wlink TiddlerWidget>> 小工具：

<$macrocall $name=".example" n="2"
eg="""<$tiddler tiddler="Draft of '新条目'">
<<changecount>>
</$tiddler>"""/>

每当您创建、存储或删除[新条目](#%E6%96%B0%E6%9D%A1%E7%9B%AE)，显示的值就会增加。
