---
title: 'system-tiddler-render-type'
---

[网页服务器配置参数](WebServer Parameters) **system-tiddler-render-type**，用于[唯读单一条目视图](Using the read-only single tiddler view)，指定提供系统条目的呈现类型 。默认值为 `text/plain`，使返回呈现系统条目的原始文本。或者，`text/html` 可用于返回使呈现系统条目的完整 HTML。

<$macrocall $name=".tip" _="可以由指定一个条目的 <<.field _render_type>> 字段，覆盖此设置。" />