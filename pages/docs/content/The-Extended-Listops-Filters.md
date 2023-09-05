---
title: '扩充的筛选器操作符'
---

item1: six
item2: seven
item3: eight
list: Yesterday Today Tomorrow
marker: Thursday
modified: 20211114102716162
myfield: Monday Tuesday [Middle of the Week](#Middle%20of%20the%20Week) Thursday Friday Saturday Sunday
numbers: 1 2 3 4 five 6 7 8 9
tags: Filters
title: The Extended Listops Filters

# 简介

操作清单需要大量的扩充筛选器。

第一组筛选器旨在从清单的尾部移动项目，并将其插入清单中指定的位置。项目经常在使用这些筛选器之前追加到清单。通常这些筛选器接受一个尾码，指定移动项目的个数  (默认值为 1)。

第二组筛选器旨在将数组中所选的项目范围，从清单中添加或移除。这些筛选器最好使用一个数组中的索引存放于字段或维基的其他数据索引 (他们可能使用简单的项目清单，提供不含空白的项目)。通常这些筛选器接受一个尾码，指定移动项目的个数 (默认为全部)。

# 示例

在此示例中，我们将星期别填入字典条目 '~MyData' 的 '~DataIndex' 索引，然后清除此清单。

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

在这个例子中，我们须从 '~MyData' 条目的 'DaysOfTheWeek' 的索引，裁切填充的清单，以便于插入项目之前，并于标记项目 (Wednesday) 之后追加到清单。

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

在这个例子中，我们须从 '~MyData' 条目的 'DaysOfTheWeek' 的索引，裁切填充的清单，以追加到清单的项目，替换标记项目 (Wednesday)。再移动已先从引用的字段追加到清单中的 3 个项目到清单的最前面。

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

在这个例子中，我们须从 '~MyData' 条目的 'DaysOfTheWeek' 的索引，裁切填充的清单，以追加到从引用字段的项目截断的清单。然后删除添加项目的前两个。

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
