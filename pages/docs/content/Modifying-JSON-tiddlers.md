---
title: '修改 JSON 条目'
---

请参阅 [TiddlyWiki 中的 JSON](JSON in TiddlyWiki)，以获取有关在 ~TiddlyWiki 中使用 JSON 的概述。

请注意 

## 使用 ActionSetFieldWidget 和 ActionListopsWidget

小工具 ActionSetFieldWidget 和 ActionListopsWidget 可以通过在 $index 属性中指示属性的名称，来操作数据条目的命名属性。

* 若要使用 ActionSetFieldWidget 创建或修改命名属性，则提供一个 $value 属性
* 若要删除具有 ActionSetFieldWidget 的命名属性，则省略 $value 属性。

ActionListopsWidget 通过其 $filter 和 $subfilter 属性构造的清单，分配命名属性。
