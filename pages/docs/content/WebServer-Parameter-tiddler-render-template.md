---
title: 'tiddler-render-template'
---

[网页服务器配置参数](WebServer Parameters) **tiddler-render-template**，用于[唯读单一条目视图](Using the read-only single tiddler view)，指定提供普通的非系统条目的模板 。默认值为 `$:/core/templates/server/static.tiddler.html`，其使用简单的侧边栏，呈现条目于轻量级页面中。

<$macrocall $name=".tip" _="可以由指定一个条目的 <<.field _render_template>> 字段，覆盖此设置。" />