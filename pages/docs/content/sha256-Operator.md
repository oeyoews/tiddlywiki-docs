---
title: 'sha256'
---

from-version: 5.1.14
modified: 20220129105504961
op-input: 一些[甄选的名称](Title Selection)
op-output: 输入的 base64 编码的 sha256，截断到指定长度
op-parameter: 返回的字符数，最多 64 个
op-parameter-name: L
op-purpose: 套用 sha256 哈希于字符串
tags: [Filter Operators](#Filter%20Operators) [String Operators](#String%20Operators)
title: sha256 Operator
type: text/vnd.tiddlywiki

哈希是一种将任意长度的字符串，转换为固定长度的混淆字符串的方法。 它们通常用于需要按名称存储的项，但不方便允许任意长度的字符串的情况。

有关 [sha256](https://en.wikipedia.org/wiki/SHA-2) 操作的详细信息，请参阅维基百科。

<<.operator-examples "sha256">>
