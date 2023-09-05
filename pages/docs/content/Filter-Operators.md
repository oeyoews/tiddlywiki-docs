---
title: '筛选器操作符'
---

\define .operator-rows(filter)
<$list filter="$filter$"><tr>
<td><$link>{{!!caption}}</$link></td>
<td>{{!!op-purpose}}</td>
<td align="center"><$list filter="[all[current]tag[Common Operators]]">✓</$list></td>
<td align="center"><$list filter="[all[current]tag[Negatable Operators]]">`!`</$list></td>
<td align="center"><$list filter="[all[current]tag[Selection Constructors]!tag[Selection Constructors: Conditional]]">`C`</$list><$list filter="[all[current]tag[Selection Constructors]tag[Selection Constructors: Conditional]]">`C?`</$list></td>
</tr></$list>
\end

\define .group-heading(_)
<tr class="doc-table-subheading"><th colspan="5" align="center">$_$</th></tr>
\end

<<.def "筛选器操作符">>是一个预先定义的关键字，附加于到个别的[筛选器](Filters)的 [step](Filter Step)，定义了该 step 的特定动作。

每个[筛选器运行](Filter Run)的第一[步骤](Filter Step)不给予任何输入标题接受 <$link to="all Operator">[all[tiddlers]]</$link> 的输出作为其输入。

下列表格列出所有内核操作符，最常见的是勾选 ✓。 `!` 栏标示哪些操作符允许使用 <$link to="Filter Step"> <code>!</code> 前缀 </$link> 来''反转''他们的意义。每个操作符反转输出的细节请参阅其文档。
 
大多数 steps 处理[选定的名称](Title Selection)作为其输入，但有一些是[构建一个全新的选择](Selection Constructors)取而代之，如最后一栏所示。 一个 `C?` 表示它可能构造新的选择，具体取决于使用情况。 每个操作符的选择创建的相关详细信息，请参阅其文档。

<table>
<tr>
<th align="left">操作符</th>
<th align="left">目的</th>
<th align="center">✓</th>
<th align="center">`!`</th>
<th align="center">`C`</th>
</tr>
<<.operator-rows "[tag[Filter Operators]!tag[Order Operators]!tag[Mathematics Operators]!tag[String Operators]!tag[Tag Operators]!tag[Special Operators]sort[]]">>
<<.group-heading "顺序操作符">>
<<.operator-rows "[tag[Filter Operators]tag[Order Operators]!tag[Listops Operators]!tag[Mathematics Operators]!tag[String Operators]!tag[Tag Operators]!tag[Special Operators]sort[]]">>
<<.group-heading "Listops 操作符">>
<<.operator-rows "[tag[Filter Operators]tag[Listops Operators]tag[Order Operators]!tag[Mathematics Operators]!tag[String Operators]!tag[Tag Operators]!tag[Special Operators]sort[]]">>
<<.group-heading "字符串操作符">>
<<.operator-rows "[tag[Filter Operators]!tag[Order Operators]tag[String Operators]!tag[Tag Operators]!tag[Special Operators]sort[]]">>
<<.group-heading "数学操作符">>
<<.operator-rows "[tag[Filter Operators]!tag[Order Operators]tag[Mathematics Operators]!tag[Tag Operators]!tag[Special Operators]sort[]]">>
<<.group-heading "标签操作符">>
<<.operator-rows "[tag[Filter Operators]!tag[Order Operators]!tag[Mathematics Operators]!tag[String Operators]tag[Tag Operators]!tag[Special Operators]sort[]]">>
<<.group-heading "特殊操作符">>
<<.operator-rows "[tag[Filter Operators]!tag[Order Operators]!tag[Mathematics Operators]!tag[String Operators]!tag[Tag Operators]tag[Special Operators]sort[]]">>
</table>

一个典型的 step 是写成`[操作符[参数]]`，虽然不是所有的操作符都需要[参数](Filter Parameter)。

确切的规则，请参阅[筛选器语法](Filter Syntax)。
