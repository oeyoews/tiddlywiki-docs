---
title: 在列表微件中使用筛选器
---

以列出带有「基础知识」标签的条目为例子，`<$list filter="[tag[基础知识]]"></$list>` 可以列出带有「基础知识」标签的条目。

## 例子

在[太微背景介绍](#%E5%A4%AA%E5%BE%AE%E8%83%8C%E6%99%AF%E4%BB%8B%E7%BB%8D)里，我们使用：

```tw5
<$list filter="[tag<currentTiddler>]">

!!! <$link><<currentTiddler>></$link>

 {{!!text}}

</$list>
```

来把当前条目（即「太微背景介绍」）里的所有子条目显示出来，其中 `<currentTiddler>` 是值为「当前条目」的[变量](#%E5%8F%98%E9%87%8F)（这个用法见[在筛选器中使用宏或变量](#%E5%9C%A8%E7%AD%9B%E9%80%89%E5%99%A8%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%AE%8F%E6%88%96%E5%8F%98%E9%87%8F)），然后 `[tag<currentTiddler>]` 这个[筛选器](#%E7%AD%9B%E9%80%89%E5%99%A8) 运行之后的意思就是「筛选标签为『太微背景介绍』的所有条目」，然后显示成列表。在列表里，先用一个三级标题（即「`!!!`」语法）加上链接（`<$link>` [微件](#%E5%BE%AE%E4%BB%B6)），显示条目名（「`<<currentTiddler>>`」[变量](#%E5%8F%98%E9%87%8F)），然后在标题下面[嵌入](#%E5%B5%8C%E5%85%A5)条目里的文本字段（即 text 字段；用 `{{!!xxx}}` 语法可以嵌入当前条目的 xxx 字段）。

如果希望简单使用，不涉及太多知识点，那么可以简单用：

```tw5
<$list filter="[tag[你的标签]]">

 {{!!text}}

</$list>
```

来列出加了「你的标签」的所有笔记的内容。

## 原理

list 微件的 `filter` 参数接受一个字符串，所以将「筛选器」直接作为字符串传给它，它会来执行。

这与[在微件参数中使用筛选器](#%E5%9C%A8%E5%BE%AE%E4%BB%B6%E5%8F%82%E6%95%B0%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%AD%9B%E9%80%89%E5%99%A8)不同，使用三个花括号的意思是将「筛选器的执行结果」传给参数，让这个微件不需要自己执行筛选器。