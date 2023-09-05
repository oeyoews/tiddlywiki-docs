---
title: 'system-tiddler-render-template'
---

[网页服务器配置参数](WebServer Parameters) **system-tiddler-render-template**，用于[唯读单一条目视图](Using the read-only single tiddler view)，指定提供系统条目的模板 。默认值为 `$:/core/templates/wikified-tiddler`，其呈现条目原始文本，没有任何特殊的查看模板。

<$macrocall $name=".tip" _="可以由指定一个条目的 <<.field _render_template>> 字段，覆盖此设置。" />