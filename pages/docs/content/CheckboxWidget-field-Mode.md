---
title: 'field'
---

## <<.link "<<.attr 字段>>模式" "CheckboxWidget (field Mode)">>

于字段模式下使用复选框小工具，需要 <<.attr field>> 属性指定字段的名称。<<.attr checked>> 与 <<.attr unchecked>>' 属性指定要分配给该字段的值，以分别对应于其选中和未选中状态。如果该字段缺失或包含与 <<.attr checked>> 或 <<.attr unchecked>> 属性的值不对应的值，则 <<.attr default>> 属性用作回传值。

此示例创建一复选框，若其 <<.field status>> 字段值等于 <<.value 打开>>，则选中该复选框；若该字段值等于''关闭''，则为取消选中。若该字段值未定义，则默认值为<<.value 关闭>>。

<<wikitext-example-without-html """<$checkbox field="status" checked="打开" unchecked="关闭" default="关闭"> 它是已打开吗？</$checkbox>

**status:** {{!!status}}""">>