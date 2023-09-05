---
title: '使用范本嵌入'
---

# 简介

在[嵌入基本用法](Transclusion Basic Usage)中，我们已经看到了如何引入条目 A 的内容到条目 B。现在假设条目 A 包含：

```
@@background-color:yellow;
Hello, my title is {{!!title}}
@@
```

这使得条目 A 以黄色背景显示其名称（欲了解相关 CSS 样式用法，请参阅[样式及 CSS 类别](Styles and Classes in WikiText)）。试想一下，你要以同样的方式显示条目 B 的名称，但你不想要复制/粘贴的方式，因为之后你可能希望改变背景颜色，你想保持条目之间的一致性。这看起来像嵌入的典型案例，让我们尝试以一般的方式 ``{{A}}``，于条目 B 嵌入条目 A。您应该在条目 B 看到以下内容：

> @@background-color:yellow;
> Hello, my title is A
> @@

此样式一如预期被套用，但是条目名称是错误的：我们要 ``{{!!title}}`` 参照到目标条目 B，而不是来源条目 A。

解决方式为使用 _范本_ 。在此例中，来源条目 A 称为[范本条目](TemplateTiddlers)，且使用标记语法 ``{{||A}}`` 将其//套用//到条目 B。不同的是未明确地参考指定条目的所有的[文本引用](TextReference)被套用于[当前条目](Current Tiddler)，亦即目标条目。现在条目 B 正如预期显示：

> @@background-color:yellow;
> Hello, my title is B
> @@

# 用法

经由范本嵌入就像套用遮罩：假设来源条目包含通用的参照（如遮罩中的眼孔），这些将被替换为目标条目内容（像是戴面罩的人的眼睛）。

范本可以套用于任何条目，不一定是当前条目。完整标记语法为 ``{{<目标>||<范本>}}``。缺省的 ``<目标>`` 是[当前条目](Current Tiddler) （我们使用于上面的示例中）。

# 示例

## 一个预先定义好的范本，可漂亮地呈现标签

您可以套用系统范本 ``$:/core/ui/TagTemplate`` 到一个标签，即可看到一个有下拉选菜单的标签丸：

```
{{Transclusion in WikiText||$:/core/ui/TagTemplate}}
```

显示为 {{Transclusion in WikiText||$:/core/ui/TagTemplate}}

另请参阅：

* [嵌入条目](Transclusion in WikiText)
* [嵌入基本用法](Transclusion Basic Usage)
* [文本引用](TextReference)
* [范本条目](TemplateTiddlers)
* [嵌入小工具](TranscludeWidget)
* [当前条目](Current Tiddler)
