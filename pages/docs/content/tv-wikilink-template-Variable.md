---
title: 'tv-wikilink-template'
---

<<.def tv-wikilink-template>> [变量](Variables)控制由 <<.wlink LinkWidget>> 小工具生成的 HTML `a` 元素的 `href` 属性值。若定义 <<.vlink tv-filter-export-link>>，则其将优先于 <<.vlink tv-wikilink-template>> 变量。

<<.this-is-static-link-variable>>

该变量被视为[宏](Macros)，使用以下参数：

**uri_encoded**
: 链接的目标条目的名称，但是 [%-编码](Percent Encoding)
**uri_doubleencoded**
: <<.param uri_encoded>> 参数的值，但再一次 %-编码，即其 `%` 字符进一步转换为 `%25`

> `\define tv-wikilink-template() ../tiddlers/$uri_encoded$.html`

变量的默认值为 `#$uri_encoded$`。

另请参阅 <<.vlink tv-get-export-link>> 变量。如果该变量与此变量皆存在，则以该变量为主。