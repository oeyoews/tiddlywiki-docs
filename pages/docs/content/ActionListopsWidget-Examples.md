---
title: 'ActionListopsWidget (示例)'
---

在此示例中，我们将填充然后清除此条目（默认）的普通字段 (myfield) 中的列表。

<$macrocall $name='wikitext-example-without-html'
src="""<$button>
<$action-listops $field="myfield" $filter="efg hlm pqr"/>
填充 'myfield'
</$button>
<$button>
<$action-listops $field="myfield" $subfilter="abc xyz"/>
追加更多项目
</$button>
<$button>
<$action-listops $field="myfield" $subfilter="-abc -hlm"/>
删除项目
</$button>
<$button>
<$action-listops $field="myfield" $filter="[[]]"/>
清除 'myfield'
</$button>

<$list filter="[list[!!myfield]]">

</$list>"""/>

---
在此示例中，我们将于此条目（默认）的普通字段（myfield）中追加和删除列表中的项目，并对结果列表进行排序。然后我们将删除一些追加的项目，并以相反的顺序对结果列表进行排序。

<$macrocall $name='wikitext-example-without-html'
src="""<$button>
<$action-listops $field="myfield" $subfilter="-efg ijk xyz [this is a title](#this%20is%20a%20title) +[sort[]]"/>
Mangle List
</$button>
<$button>
<$action-listops $field="myfield" $subfilter="-xyz -[this is a title](#this%20is%20a%20title) +[!sort[]]"/>
Unmangle List
</$button>

<$list filter="[list[!!myfield]]">

</$list>"""/>

---
以下示例切换当前条目的标签 <<.value Examples>>。

<$macrocall $name='wikitext-example-without-html'
src="""<$button>
<$action-listops $tags="+[toggle[示例]]"/>
切换 '示例' 标签
</$button>
"""/>

---
在此示例中，我们将向此条目的 'tags' 字段（默认值）追加一些标签。然后我们将删除一些追加的标签。

<$macrocall $name='wikitext-example-without-html'
src="""<$button>
<$action-listops $tags="+[append{Days of the Week!!short}] $:/tag1 $:/tag2 $:/tag3"/>
填充 'tags'
</$button>
<$button>
<$action-listops $tags="+[!remove:2{!!tags}]"/>
删除最后两个标签
</$button>
<$button>
<$action-listops $tags="+[!prefix[$:/]]"/>
删除系统标签
</$button>
<$button>
<$action-listops $tags="-Mon -Tue"/>
删除 Mon 和 Tue
</$button>
<$button>
<$action-listops $tags="+[prefix[$:/]] ActionWidgets Widgets"/>
删除用户标签
</$button>
<$button>
<$action-listops $tags="+[[]] ActionWidgets Widgets"/>
清除标签
</$button>

<$list filter="[list[!!tags]]">

</$list>"""/>
