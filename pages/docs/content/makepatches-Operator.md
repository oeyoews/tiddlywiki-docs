---
title: 'makepatches'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: [applypatches Operator](#applypatches%20Operator) 使用每个输入标题的一组补丁指令，将输入标题转换为字符串 <<.place S>>
op-parameter: 一串字符
op-parameter-name: S
op-purpose: 返回一组将输入转换为给定字符串的补丁
op-suffix: `lines` 以行模式运行，`words` 以单字模式运行。<br>如果省略（默认），算法将以字符模式运行。请参阅下面的注释。
op-suffix-name: T
tags: [Filter Operators](#Filter%20Operators) [String Operators](#String%20Operators)
title: makepatches Operator
type: text/vnd.tiddlywiki

<<.from-version "5.2.6">>

默认差异算法在字符模式下运行。这会生成最详细的差异。在 `words` 模式下，输入文本中的每个单词都被转换为一个元字符，然后算法对其进行操作。默认的字符模式下，筛选器会在 "ActionWidget" 和 "Action-Widgets" 之间找到两个补丁（连字符号和复数 s），而在 `words` 模式下，发现整个单词都被改变了。在 `lines` 模式下，元字符由整行组成，由换行符号分隔，并且发现其更改与行内的更改次数无关。

当补丁应用于原始文本以外的文本时，不同的模式会影响结果，也会影响运行时间。

<<.tip "`words` 模式下的计算比默认字符模式快大约 10 倍，而 `lines` 模式可以比默认快 100 倍以上。">>

<<.operator-examples "makepatches and applypatches">>
