---
title: '基本用法'
---

# 简单的嵌入

包含来自 [TiddlerA](#TiddlerA) 的一些内容到 [TiddlerB](#TiddlerB)，编辑后者包括以下内容：

```
This is the content of TiddlerA: {{TiddlerA}}
```

其结果为 [TiddlerA](#TiddlerA) 的 **text** 字段的内容（即主要内容）被显示于 [TiddlerB](#TiddlerB)。

# 用法

``{{TiddlerA}}`` 是 ``{{TiddlerA!!text}}`` 的快捷方式。这是因为嵌入的缺省字段是 **text**，但可以明确地使用其他[字段](TiddlerFields)。例如，您可以显示 TiddlerA 的最近修改日期，使用：

```
TiddlerA was modified on {{TiddlerA!!modified}}
```

通过省略条目名称，嵌入语法也可以被用于显示来自当前条目的字段内容，例如：

```
The current tiddler was modified on {{!!modified}}
```

# 递归错误

请注意，使用 ``{{!!text}}`` 或 ``{{}}`` 导致错误 (_Recursive transclusion error in transclude widget_)，因为引入当前条目的内容到其本身是没有意义的。当你遇此错误消息，意味着您直接或间接地引入某些东西到其自身（例如，如果条目 A 嵌入条目 B、条目 B 嵌入条目 C，而条目 C 又嵌入条目 A）。

# 了解更多

在 TiddlyWiki，嵌入不限于包括像上述原始内容。要了解嵌入的更高端用法，请参阅[使用范本嵌入](Transclusion with Templates)。

另请参阅：

* [嵌入](Transclusion)
* [使用范本嵌入](Transclusion with Templates)
* [嵌入条目](Transclusion in WikiText)
* [文本引用](TextReference)
* [条目字段](TiddlerFields)
