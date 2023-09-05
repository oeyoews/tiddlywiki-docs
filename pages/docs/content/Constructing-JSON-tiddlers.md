---
title: '构建 JSON 条目'
---

请参阅 [TiddlyWiki 中的 JSON](JSON in TiddlyWiki)，以获取有关在 ~TiddlyWiki 中使用 JSON 的概述。

JSON 数据只是纯文本，因此有各种各样的技术可以在维基文本中生成它。

在较高层次上，我们有几种方法能以 ~TiddlyWiki 自己的条目格式生成 JSON 数据：

* JSONTiddlerWidget
* [jsontiddler Macro](#jsontiddler%20Macro)
* [jsontiddlers Macro](#jsontiddlers%20Macro)

手动构造 JSON 数据时，[jsonstringify 操作符](jsonstringify Operator) 是确保正确转义任何特殊字符所必需的。
