---
title: 'index'
---

## <<.link "<<.attr 索引>>模式" "CheckboxWidget (index Mode)">>

要在索引模式下使用复选框小工具，请将 <<.attr index>> 属性设置为[数据条目](DataTiddlers)的属性。<<.attr checked>> 和 <<.attr unchecked>> 属性指定要分配给属性的值，并分别对应于其选中和未选中状态。如果属性未定义，则 <<.attr default>> 属性用作回传值。

<<.warning "确保正确设置 <<.attr tiddler>>，因为非[数据条目](DataTiddlers)将在没有警告的情况下被覆盖">>

以下的示例创建了一个复选框，如果当前 tiddler 名称的 tiddler [ExampleData](#ExampleData) 中的属性等于 <<.value selected>>，则选中该复选框，如果该属性为空字符串，则取消选中。如果该属性未定义，则其默认为空字符串，这意味着如果缺少该属性，该复选框将被取消选中。

<$macrocall $name="wikitext-example-without-html" src="""<$checkbox tiddler="ExampleData" index=<<currentTiddler>> checked="已选中" unchecked="" default=""> 已选中？</$checkbox>"""/>