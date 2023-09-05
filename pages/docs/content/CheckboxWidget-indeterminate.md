---
title: 'indeterminate'
---

## <<.link "<<.attr 不确定>>复选框" "CheckboxWidget (indeterminate)">>

如果同时指定了 <<.attr checked>> 和 <<.attr unchecked>> 属性，但在指定的字段（或索引）中找不到任何一个，则结果可能不明确。复选框应该被选中还是不被选中？通常在这种情况下，复选框将被取消选中，但如果 <<.attr indeterminate>> 属性设置为 <<.value yes>>（默认为 <<.value no>>），则复选框将处于“不确定”状态。在大多数情况下，不确定的复选框被视为错误 &mdash; 如果您单击它，复选框将变为选中状态，并且 <<.attr checkactions>>（如果有）将被触发 &mdash; 但不确定的复选框在浏览器中的显示方式不同。

此示例显示不确定的复选框用于购物清单中的类别（也可以是待办事项列表中的子任务，或许多其他内容）。如果仅选择了类别中的某些项目，则类别复选框是不确定的。您可以单击类别复选框，以查看不确定状态如何被视为与未选中状态相同，然后单击复选框选中它，并应用其选中操作（在这种情况下，选中该类别中的所有复选框）。尝试编辑此条目上的 <<.field fruits>> 和 <<.field vegetables>> 字段，看看当您这样做时，示例会发生什么。

<<wikitext-example-without-html """\define check-all(field-name:"items") <$action-listops $field="selected-$field-name$" $filter="[list[!!$field-name$]]" />
\define uncheck-all(field-name:"items") <$action-listops $field="selected-$field-name$" $filter="[[]]" />

<$checkbox filter="[list[!!selected-fruits]count[]]" checked={{{ [list[!!fruits]count[]] }}} unchecked="0" checkactions=<<check-all fruits>> uncheckactions=<<uncheck-all fruits>> indeterminate="yes"> 水果</$checkbox>
<ul style="list-style: none">
<$list variable="fruit" filter="[list[!!fruits]]">
<li><$checkbox listField="selected-fruits" checked=<<fruit>>> <<fruit>></$checkbox></li>
</$list>
</ul>
<$checkbox filter="[list[!!selected-vegetables]count[]]" checked={{{ [list[!!vegetables]count[]] }}} unchecked="0" checkactions=<<check-all vegetables>> uncheckactions=<<uncheck-all vegetables>> indeterminate="yes"> 蔬菜</$checkbox>
<ul style="list-style: none">
<$list variable="veggie" filter="[list[!!vegetables]]">
<li><$checkbox listField="selected-vegetables" checked=<<veggie>>> <<veggie>></$checkbox></li>
</$list>
</ul>

<p>选定的蔬菜：{{!!selected-vegetables}}<br/>
选定的水果：{{!!selected-fruits}}</p>""">>
