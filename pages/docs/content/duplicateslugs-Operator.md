---
title: 'duplicateslugs'
---

op-input: 一些[甄选的名称](Title Selection)
op-output: 生成重复 slugs 的输入标题
op-purpose: 查找生成重复 slugs 的标题
tags: [Filter Operators](#Filter%20Operators)
title: duplicateslugs Operator
type: text/vnd.tiddlywiki

<<.from-version "5.1.23">> <<.olink slugify>> 操作符可用于转换任意条目名称为适合在网址，或文件名中使用的人类可读的字符串。但是，多个不同的名称可能会被转换到同一字符串。<<.olink duplicateslugs>> 筛选器操作符可用于显示一个警告。例如：

<$macrocall $name='wikitext-example-without-html'
src='<$list filter="[!is[system]duplicateslugs[]limit[1]]" emptyMessage="没有重复的 slug">
以下条目有重复的 slug:

<ul>
<$list filter="[!is[system]duplicateslugs[]]">
<li><$link><$text text=<<currentTiddler>>/></$link></li>
</$list>
</ul>
</$list>'/>
