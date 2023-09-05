---
title: '清单'
---

# 符号清单

您可以使用 `*` 生成无序的符号清单 (<<.icon $:/core/images/list-bullet>>)：

<<wikitext-example src:"* First list item
* Second list item
    * A subitem
* Third list item
">>

# 数字清单

数字清单则使用 `#` 而非 `*` (<<.icon $:/core/images/list-number>>)：

1. First item
1. Second item
1. Third item

您也可混合数字与符号清单：

<<wikitext-example src:"* To do today
    1. Eat
* To get someone else to do
    1. This
    1. That
        1. And the other
">>

此例是另一个方式，用数字作为第一级：

<<wikitext-example src:"# To do today
    * Eat
1. To get someone else to do
    * This
    * That
        * And the other
">>

# CSS 类别

您也可以指定一个 CSS 类别到此符号清单的个别成员：

<<wikitext-example src:"* List One
*.MyClass List Two
* List Three
">>

# 混合清单和引言区块

请注意，[引言区块](Block Quotes in WikiText)可以与清单混合。例如：

<<wikitext-example src:"* List One
    * List Two
**> A quote
**> Another quote
* List Three
">>

# 清单中的段落

用换行符号分隔清单中的项目，使它不可能包括清单项目内的换行符号。有几个解决方法：

您可以从另一条目嵌入段落内容。例如：

```
* First entry
* <$transclude tiddler="MyTiddler" mode="block"/>
* Third entry
```

也可以使用一个HTML "div" 元素包含多行内容。例如：

```
# Step 1
# Step 2
# Step 3<div>

前面是第一部份的几个段落。请注意，明显的本段落之前有两个换行。

接着是第二部份的几个段落。
</div>
# Step 4
# Step 5
# Step 6
```

