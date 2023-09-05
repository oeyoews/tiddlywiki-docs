---
title: '筛选器 Run'
---

<$railroad text="""
( "[" { [step]("Filter Step") } "]"
  |
  [:{/"    [ ] 或空格以外的任何字符    "/}]
  |
  '"' [:{/'   " 以外的任何字符   '/}] '"'
  |
  "'" [:{/"   ' 以外的任何字符   "/}] "'"
)
"""/>

一个 <<.def run>> 系由一些 [steps](Filter Step) 组成，且输出[选定条目](Title Selection)，形成一个较大的[筛选器表达式](Filter Expression)。

这些 steps 的处理是由左而右。首个 step 的输入与 run 的输入相同，而每个后续 step 的输入是前一个 step 的输出。

{{Selection Constructors}}

在图中下方的三个选项匹配语法像 `HelloThere`、`"HelloThere"`、`'HelloThere'` 和 `"Filter Operators"` 是 `[title[...]]` 的简写。

可选的引号支持名称中包含方括号，例如 `"An [[[Unusual](#%5B%5BUnusual)]] Tiddler"`。
