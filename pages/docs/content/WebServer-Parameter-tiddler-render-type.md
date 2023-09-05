---
title: 'tiddler-render-type'
---

[网页服务器配置参数](WebServer Parameters) **tiddler-render-type**，用于[唯读单一条目视图](Using the read-only single tiddler view)，指定提供普通的非系统条目的呈现类型 。默认值为 `text/html`，使返回渲染输出的完整 HTML。或者，`text/plain` 可用于返回呈现条目的原始文本。

<$macrocall $name=".tip" _="可以由指定一个条目的 <<.field _render_type>> 字段，覆盖此设置。" />