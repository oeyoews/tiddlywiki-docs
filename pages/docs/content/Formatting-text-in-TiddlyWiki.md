---
title: '格式化文本'
---

在条目的文本中可以使用称为 WikiText 的特殊格式来控制文本的显示方式。

WikiText 可以使用[编辑器工具栏](Editor toolbar)输入，或手动键入。虽然前者很方便，但是当您知道 WikiText 标记代码时，后者会更快。

# 简单的格式

简单来说，WikiText 可让您使用熟悉的文本处理功能，如粗体、斜体、清单和表格。例如：

```
The ''quick'' brown ~~flea~~ fox //jumps// over the `lazy` dog
```

显示为：

The **quick** brown ~~flea~~ fox _jumps_ over the `lazy` dog

# 和条目一起工作

WikiText 允许您链接到条目使用双重方括弧，或利用驼峰匹配单词自动链接：

```
这是一个链接到 HelloThere，一个到 [[History of TiddlyWiki]]
```

显示为：

这是一个链接到 HelloThere，一个到 [History of TiddlyWiki](#History%20of%20TiddlyWiki)

# 宏

宏让你打包重复片段的 WikiText，以便您可以轻松地重用它们。

例如，下列宏的定义，从其唯一识别码生成一个 YouTube 视频的 URL ：

```
\define youtube(video)
https://www.youtube.com/watch?v=$video$
\end
```

有此定义，`<< YouTube的1g66s7UbyuU >>` 生成 URL <https://www.youtube.com/watch?v=1g66s7UbyuU>

# 高级的 WikiText

高级 WikiText 的功能，可以自动生成列表和像是下拉列表的交互功能。实际上，TiddlyWiki 本身的整个用户接口即是以 WikiText 写成的，因此在 TiddlyWiki 看到的任何功能可在您自己的维基改写使用。

某些高级功能要求复杂编码。TiddlyWiki 包含一些内置宏简化一般的用户接口任务，像是页签、目录和条目清单。

# 了解更多

有关详细介绍写作 WikiText，请参阅 [WikiText](#WikiText)。

