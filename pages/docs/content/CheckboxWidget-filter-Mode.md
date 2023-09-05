---
title: 'filter'
---

## <<.link "<<.attr 筛选器>>模式" "CheckboxWidget (filter Mode)">>

于筛选器模式下使用复选框小工具需要 <<.attr filter>> 属性包含一个筛选器，其输出将确定复选框的选中状态。在筛选器模式下，选中复选框不会自动更改任何条目的任何字段。相反，您可以使用 <<.attr actions>> 属性（或 <<.attr checkactions>> 和 <<.attr uncheckactions>> 属性）来指定切换复选框时，应该发生什么。您有责任确保这些操作会导致筛选器结果所依赖的条目或字段发生更改，以便在操作触发和筛选器更新后，复选框被正确选中或取消选中。

如果筛选器返回空的结果，则复选框将被取消选中。否则，如果筛选结果非空，复选框将被选中。

但是，如果指定了 <<.attr checked>> 或 <<.attr unchecked>> 属性（或两者），则将在筛选器结果中查找其值，而不是将任何非空值视为 <<.value checked>>。

此示例创建与 <<.doc-tab-link "清单模式示例" "CheckboxWidget (listField Mode)">> 中相同的复选框，在 <<.value 红>> 和 <<.value 绿>> 之间选择 <<.field colors>> 列表字段，但使用筛选器和操作进行更改。

<<wikitext-example-without-html """\define checkActions() <$action-listops $field="colors" $subfilter="-红 绿"/>
\define uncheckActions() <$action-listops $field="colors" $subfilter="红 -绿"/>
<$checkbox filter="[list[!!colors]]" checked="绿" unchecked="红" default="红" checkactions=<<checkActions>> uncheckactions=<<uncheckActions>> > "绿"在颜色列表中吗？</$checkbox>

**colors:** {{!!colors}}
""">>