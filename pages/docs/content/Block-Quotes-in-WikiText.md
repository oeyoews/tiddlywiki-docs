---
title: '引言'
---

有两种方法在 TiddlyWiki5 生成 HTML 引言区块，一个是多行内容，以及单行的内容。

# 多行引言区块

多行引言区块的语法 ({{$:/core/images/quote}})：

<<wikitext-example src:"<<<
This is a block quoted paragraph
written in English
> ">>
> 
> ## 引用
> 
> 引用可加入到引言区块：
> 
> <<wikitext-example src:"<<<
> Computers are like a bicycle for our minds
">>

## CSS 类别

CSS 类别可加入到引言区块：

<<wikitext-example src:"<<<.myClass.another-class
Operating systems are like a brick wall for our minds
> ">>
> 
> 核心包含 `tc-big-quote` CSS 类别，用特大双引号呈现区块引言：
> 
> <<wikitext-example src:"<<<.tc-big-quote
> A dramatic quote
">>

# 单行引言区块

单行引言区块其实是[清单](Lists in WikiText)的扩充语法，例如：

<<wikitext-example src:"> Quoted text
> Another line of quoted text
">>

嵌套式引言：

```
> A top quote
>> A subquote
> Another top quote
```

结果显示为：

> A top quote
>> A subquote
> Another top quote

引言与其他清单项目混用，例如：

<<wikitext-example src:"* List One
    * List Two
**> A quote
**> Another quote
* List Three
">>
