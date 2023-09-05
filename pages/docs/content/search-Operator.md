---
title: 'search'
---

op-input: 一些[甄选的名称](Title Selection)
op-neg-output: <<.em 不是>>所有搜索条件可在那些输入条目被找到
op-output: 搜索 <<.em 所有>>条件可以在那些输入条目的 <<.place F>> 字段的值被找到
op-parameter: 用空格分隔的一个或多个搜索条件，或文本搜索字符串
op-purpose: 由搜索条目内容筛选输入
op-suffix: <<.op search>> 操作符使用丰富的尾码，请参阅下面的详细信息
op-suffix-name: F
tags: [Filter Operators](#Filter%20Operators) [Common Operators](#Common%20Operators) [Field Operators](#Field%20Operators) [Negatable Operators](#Negatable%20Operators)
title: search Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.18">> 在 5.1.18 中，搜索筛选器操作符显著增强。 早期版本不支持扩充语法，因此不允许搜索多个字段，或 **literal**、''casesensitive'' 选项。

<<.op search>> 操作符使用允许传递多个字段和标志的扩充语法：

```
[search:<field list>:<flag list>[<operand>]]
```

* **field list**: 用于限制搜索的字段名称的以逗号分隔的清单
    * 若空白，其默认值为 <<.field tags>>、<<.field text>> 和 <<.field title>>
    * 一个星号 `*` 而非字段清单，在每个条目上可用的所有字段中运行搜索
    * 在清单前面加上减号 `-`，则反转顺序，在列出的字段之外的所有字段上运行搜索
* **flag list**: 以逗号分隔的标志清单 (若空白，其默认值为 `words`)
* **operand**: 筛选器操作数

本示例在字段 <<.field title>> 和 <<.field caption>> 中，搜索符合区分大小写的文本字符串 <<.op-word "The first">>：

```
[search:title,caption:literal,casesensitive[The first]]
```

可用的标志有：

* Search mode - 首先要设置的以下标志，决定运行的搜索类型：
    * **literal**: 将搜索字符串视为文本字符串，并且需要完全符合
    * **whitespace**: 将搜索字符串视为文本字符串，但将所有空白的 runs 视为等同於单个空格。因此 `A B` 匹配 `A   B`
    * **regexp**: 将搜索字符串视为正则表达式。请注意，''regexp'' 选项省却对较旧的 <<.olink regexp>> 操作符的需求。
    * **words**: (默认值) 将搜索字符串视为以空格分隔的令牌清单，如果''所有令牌''都出现在字符串中, 则匹配 (无论顺序如何，且两者之间是否有其他文本)
    * **some**: <<.from-version "5.2.2">> 将搜索字符串视为由空格分隔的令牌列表，并且如果''至少一个''令牌出现在字符串中，则匹配
* **casesensitive**: 此标志强制区分大小写匹配，其中大写和小写字母被视为不同。默认情况下，大写和小写字母被认为是相同的匹配目的。
* **anchored**: <<.from-version "5.1.20">> 将搜索定位到字符串的开头 (适用于 **whitespace**、''literal'' 和 **words** 模式)


<<.operator-examples "search">>
