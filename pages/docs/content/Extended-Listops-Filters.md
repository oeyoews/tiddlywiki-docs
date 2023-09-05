---
title: '扩充的 Listops 筛选器操作符'
---

item1: six
item2: seven
item3: eight
list: Yesterday Today Tomorrow
marker: Thursday
modified: 20230305024232933
myfield: Monday Tuesday [Middle of the Week](#Middle%20of%20the%20Week) Thursday Friday Saturday Sunday
numbers: 1 2 3 4 five 6 7 8 9
tags: Filters
title: Extended Listops Filters

\define .operator-rows(filter)
<$list filter="$filter$"><tr>
<td><$link>{{!!caption}}</$link></td>
<td>{{!!op-purpose}}</td>
<td align="center"><$list filter="[all[current]tag[Common Operators]]">✓</$list></td>
<td align="center"><$list filter="[all[current]tag[Negatable Operators]]">`!`</$list></td>
</tr></$list>
\end

\define .group-heading(_)
<tr class="doc-table-subheading"><th colspan="4" align="center">$_$</th></tr>
\end

# 简介

操作清单需要大量的扩充筛选器。

一些筛选器旨在将项列表的尾部移出，并将其插入列表中的指定位置，例如 <<.olink putafter>> 或 <<.olink putbefore>>。在使用这些筛选器之前，项目通常会附加到列表中。通常，这些筛选器接受指定要移动的项目数的后缀（默认为 1）。

一些筛选器旨在从列表中添加或从列表中删除，从数组中选择的项目范围，例如 <<.olink append>> 或 <<.olink remove>>。这些筛选器最好与对应数组的引用一起使用，存放在维基其他地方的字段或数据索引中（它们可以与简单的项目列表一起使用，前提是这些项目不包含空格。）通常，这些筛选器接受指定要移动的项目数的后缀（默认为 All）。

<table>
<<.group-heading "Listops 操作符">>
<tr>
<th align="left">操作符</th>
<th align="left">目的</th>
<th>✓</th>
<th>`!`</th>
</tr>
<<.operator-rows "[tag[Filter Operators]tag[Listops Operators]tag[Order Operators]!tag[String Operators]!tag[Tag Operators]!tag[Special Operators]sort[]]">>
</table>

# 示例

在此示例中，我们将星期别填入字典条目 '~ListopsData' 的 '~DataIndex' 索引，然后清除此清单。

<$macrocall $name='wikitext-example-without-html'
src="""<$button>
<$action-listops $tiddler="ListopsData" $index="DataIndex" $filter="[list[Days of the Week]]"/>
取得星期别
</$button> 
<$button>
<$action-listops $tiddler="ListopsData" $index="DataIndex" $filter="[[]]"/>
清除
</$button>

{{ListopsData}}"""/>

---

在这个例子中，我们须从 '~ListopsData' 条目的 '~DataIndex' 的索引，裁切填充的清单，以便于插入项目之前，并于标记项目 (Wednesday) 之后追加到清单。

<$macrocall $name='wikitext-example-without-html'
src="""<$button>
<$action-listops $tiddler="ListopsData" $index="DataIndex" $subfilter="one two +[putbefore:2[Wednesday]]"/>
放置 2 个项目于 Wednesday 之前
</$button> 
<$button>
<$action-listops $tiddler="ListopsData" $index="DataIndex" $subfilter="four five +[putafter:2[Wednesday]] three +[putbefore[Wednesday]]"/>
放置 1 个项目于 Wednesday 之前，及 2 Items 个项目于 Wednesday 之后
</$button>

{{ListopsData}}"""/>

---

在这个例子中，我们须从 '~ListopsData' 条目的 '~DataIndex' 的索引，裁切填充的清单，以追加到清单的项目，替换标记项目 (Wednesday)。再移动已先从引用的字段追加到清单中的 3 个项目到清单的最前面。

<$macrocall $name='wikitext-example-without-html'
src="""<$button>
<$action-listops $tiddler="ListopsData" $index="DataIndex" $subfilter="[---o](#---o) [o---](#o---) +[replace:2{!!marker}]"/>
以 2 个项目替换 '!!marker'
</$button>
<$button>
<$action-listops $tiddler="ListopsData" $index="DataIndex" $subfilter="[{!!item1}] [{!!item2}] [{!!item3}] +[putfirst:3[]]"/>
放置 3 个项目于前端
</$button>

{{ListopsData}}"""/>

---

在这个例子中，我们须从 '~ListopsData' 条目的 '~DataIndex' 的索引，裁切填充的清单，以追加到从引用字段的项目截断的清单。然后删除添加项目的前两个。

<$macrocall $name='wikitext-example-without-html'
src="""|list: |<$view field="list"/> |

<$button>
<$action-listops $tiddler="ListopsData" $index="DataIndex" $subfilter="+[allbefore:include[Wednesday]] +[prepend{!!list}]"/>
预置 '!!list' 到 'Wednesday' 之前的项目
</$button> 
<$button>
<$action-listops $tiddler="ListopsData" $index="DataIndex" $subfilter="+[remove:2{!!list}]"/>
从当前清单移除 '!!list' 的前两个项目
</$button>
<$button>
<$action-listops $tiddler="ListopsData" $index="DataIndex" $subfilter="+[!remove:1{!!list}]"/>
从当前清单移除 '!!list' 的最后一个项目
</$button>

{{ListopsData}}"""/>

---

在这个例子中，我们在清单中填入数字，然后从前端至尾端逐个移动项目、在从尾端至前端 (点击下方按钮几次可看得最清楚)。

这个例子说明了 append[] 和 prepend[] 操作符不强制项目的唯一实例，而且于下个运行中，任何重复项目将被删除。

<$macrocall $name='wikitext-example-without-html'
src="""<$button>
<$action-listops $tiddler="ListopsData" $index="DataIndex" $filter="[[]]" $subfilter="+[append:3{!!numbers}]"/>
设置一些数字
</$button>
<$button>
<$action-listops $tiddler="ListopsData" $index="DataIndex" $subfilter="+[!append:6{!!numbers}]"/>
追加更多数字
</$button>

<$button>
<$action-listops $tiddler="ListopsData" $index="DataIndex" $subfilter="+[putfirst:2[]]"/>
移动最后 2 个项目到最前面
</$button>
<$button>
<$action-listops $tiddler="ListopsData" $index="DataIndex" $subfilter="+[putlast[]]"/>
移动最前面的项目到最后面
</$button>

{{ListopsData}}"""/>
