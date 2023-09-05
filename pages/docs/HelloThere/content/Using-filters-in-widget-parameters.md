---
title: 在微件参数中使用筛选器
---

使用三个花括号 `{{{ }}}` 即可：

```tw5
<$whiteboard tiddler={{{[all[shadows+tiddlers]field:type[application/tldr]sort[modified]first[]]}}} height="calc(100vh - 35px)" />
```

在这个例子里，我们希望：

1. 通过筛选器 `[all[shadows+tiddlers]field:type[application/tldr]sort[modified]first[]]` 筛选出最近用过的第一个类型为 `application/tldr` 的条目
1. 将它的结果传给 `whiteboard` 微件的 `tiddler` 参数

所以将这个筛选器用 `{{{ }}}` 括起来，放在 `tiddler=` 这个参数的等号后即可。

总结一下，三花括号可以把筛选器的结果作为[嵌入](#%E5%B5%8C%E5%85%A5)的输入。