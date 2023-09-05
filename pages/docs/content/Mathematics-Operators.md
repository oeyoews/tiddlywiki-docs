---
title: '数学操作符'
---

<<.from-version "5.1.20">> 数学筛选器操作符允许数值计算运行于筛选器之内。

# 使用数学操作符

数学操作符根据以下规则，将其参数解译为数字：

* 忽略有效数字后的任何非数字字符 (例如 `28px` 被解译为数字 28)
* 如果参数不能解译为数字，则使用值 0 (例如 `foo` 被解译为数字 0)
* 特殊值 `Infinity` 和 `-Infinity` 可以分别用来表示正无穷大和负无穷大

<$macrocall $name=".warning" _="某些筛选器操作符删除重复项，这些重复项在使用数学操作符时，可能会导致意外的结果。详细信息请参阅[主导追加](Dominant Append)。"/>

数学操作符有三种不同的形式：

* **Unary 操作符** 套用一个操作至输入清单中的每个数字 (例如 negate, truncate, sign)
    * <<.inline-operator-example "=1 =2 =3 =4 +[negate[]]">>
    * <<.inline-operator-example "=1.2 =2.4 =3.6 =4.8 +[trunc[]]">>
    * <<.inline-operator-example "=1.2 =2.4 =3.6 =4.8 +[round[]]">>
* **Binary 操作符** 套用一个操作和操作数至输入清单中的每个数字 (例如 add, multiply, remainder) 
    * <<.inline-operator-example "=1 =2 =3 =4 +[add[3]]">>
    * <<.inline-operator-example "=1 =2 =3 =4 +[multiply[8]]">>
* **Reducing 操作符** 套用一个操作于输入清单中的所有数字，返回单个结果 (例如 sum, product)
    * <<.inline-operator-example "=1 =2 =3 =4 +[sum[]]">>
    * <<.inline-operator-example "=1 =2 =3 =4 +[product[]]">>
    * <<.inline-operator-example "=1 =2 =3 =4 +[average[]]">>

# 操作符组合

可以通过在合并内部 `][` 字符的同时，连接操作来组合操作。

* <<.inline-operator-example "[355]divide[113]fixed[5](#355%5Ddivide%5B113%5Dfixed%5B5)">>
* <<.inline-operator-example "[range[100]sum[]divide[100]]">>
* <<.inline-operator-example "[tag[HelloThere]get[text]length[]sum[]]">>

有时需要将复杂的操作拆分为单独的筛选器。例如，要计算标签为 "~HelloThere" 的条目的 <<.field text>> 字段的平均长度：

<$macrocall $name='wikitext-example-without-html'
src="""<$set name="number-of-tiddlers" value={{{ [tag[HelloThere]count[]] }}}>
 <$text text=<<number-of-tiddlers>>/> 个标签为 <<tag "HelloThere">> 的条目的平均长度: <$text text={{{ [tag[HelloThere]get[text]length[]sum[]divide<number-of-tiddlers>fixed[3]] }}}/>
</$set>""" />

# 数学操作符清单

<table>
<tr>
<th align="left">操作符</th>
<th align="left">目的</th>
</tr>
<$list filter="[tag[Mathematics Operators]sort[caption]]">
<tr>
<td><$link>{{!!caption}}</$link></td>
<td>{{!!op-purpose}}</td>
</tr>
</$list>
</table>
