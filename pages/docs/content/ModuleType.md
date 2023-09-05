---
title: '模块类型'
---

\define describe() {{$:/language/Docs/ModuleTypes/$(type)$}}

一个 [JavaScript 模块](Modules)的 `module-type` 字段是一个用于标识模块类型的字符串。下列为此维基中使用的模块类型：

<dl>
<$list filter="[moduletypes[]]">
<dt>{{!!title}}</dt>
<$set name=type value=<<currentTiddler>>>
<dd><<describe>></dd>
</$set>
</$list>
</dl>
