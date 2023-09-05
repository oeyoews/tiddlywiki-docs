---
title: '使用唯读的单个条目视图'
---

TiddlyWiki 实验性地使用简化的页面配置，为单一条目提供个别页面的唯读查看，并实现条目之间的链接，但没有其他交互式功能。与完整的 TiddlyWiki 用户接口相比，它是非常羽量级的，即使在非常慢的连接上也可以使用。

除了在路径 `/` 提供完整的交互维基 ( 例如 <http://127.0.0.1:8080/> )，TiddlyWiki 为每个条目提供服务于路径 `/<url-encoded-tiddler-title>`。例如:

* <http://127.0.0.1:8080/HelloThere>
* <http://127.0.0.1:8080/Philosophy%20of%20Tiddlers>

普通的非系统条目是通过特殊查看模板呈现的，而系统条目是通过一个返回呈现输出的原始文本的模板呈现的。通过这种方式，最终用户可以浏览普通的条目，而系统条目可以包含在原始形式中，如同 JS、HTML 或 CSS 模板。另外，相应地指定 <<.field _render_type>> 和 <<.field _render_template>> 字段，可以在每个条目的基础上覆盖这些默认值。

该模板由以下参数控制:

* [system-tiddler-render-type](WebServer Parameter: system-tiddler-render-type)
* [system-tiddler-template](WebServer Parameter: system-tiddler-render-template)
* [tiddler-render-type](WebServer Parameter: tiddler-render-type)
* [tiddler-template](WebServer Parameter: tiddler-render-template)
