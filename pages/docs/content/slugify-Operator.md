---
title: 'slugify'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 转换的输入名称，以使其只包含小写字母、数字、句点、破折号和底线
op-purpose: 以人类可读的形式返回清单中的每个项目，用于网址或文件名称
tags: [Filter Operators](#Filter%20Operators)
title: slugify Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.23">> <<.olink slugify>> 运算符应用的转换遵循以下步骤：

* 如果有一个名称相同的条目，具有一个 **slug** 字段，则返回该字段而不是运行以下步骤
* 将大写字母替换为对等的小写字母
* 转译音调符号为其对等的基本小写 ASCII (例如，"Æ" 被转译为 "AE")
* 用破折号取代空格
* 删除除破折号和句点之外的所有非单字符
* 取代多个连序破折号为单一破折号
* 从开始与结束修剪破折号
* 如果结果是空字符串，则改为使用字符代码(例如。"&£@" 转换为 "38-163-64")

请注意，可能有多个标题插入到同一字符串中。<<.olink duplicateslugs>> 可用于提醒作者任何冲突。

<<.operator-examples "slugify">>
