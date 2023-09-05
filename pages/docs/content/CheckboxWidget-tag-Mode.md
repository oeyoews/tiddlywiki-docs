---
title: 'tag'
---

## <<.link "<<.attr 标签>>模式" "CheckboxWidget (tag Mode)">>

于标签模式下使用复选框小工具，需要 <<.attr tag>> 属性来指定标签的名称。如果 <<.attr tiddler>> 属性中指定的条目具有指定的标签，则复选框将被选中，如果没有，则取消选中。

此示例创建一复选框，于当前条目切换<<.tag 已完成''>>标签：

<<wikitext-example-without-html """<$checkbox tag="已完成"> 完成了吗？</$checkbox>""">>

当属性 <<.attr invertTag>> 设置为 <<.value yes>> 时，如果该条目<<.em 没有>>指定的标签，复选框将被选中，如果有，则取消选中。

<<wikitext-example-without-html """<$checkbox tag="已完成" invertTag="yes"> 完成了吗？</$checkbox>""">>