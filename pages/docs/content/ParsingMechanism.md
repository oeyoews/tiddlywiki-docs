---
title: '解析机制'
---

# 介绍

解析机制根据一套句法规则分析条目的文本，生成一棵代表文本的结构的树。[渲染机制](RenderingMechanism)用于解析树变成小工具节点的渲染树。

TiddlyWiki5 包括 ParserModules 的几种条目类型：

* WikiText
* Raw HTML
* 纯文本
* 图像 (bitmap、SVG 和 PDF)

WikiText 分析器是最复杂的，包括分离的个别 WikiRuleModules 封装每个解析规则。

# 句法解析树

解析条目的输出是含有对应于原始文本解析节点树的对象。例如：

```
> JSON.stringify($tw.wiki.parseText("text/vnd.tiddlywiki","Some //italics// and a {{Transclusion}}.").tree)

[
	{type: "element", tag: "p", children: [
		{type: "text", text: "Some "},
		{type: "element", tag: "em", children: [
			{type: "text", text: "italics"}
		]},
		{type: "text", text: " and a "},
		{type: "tiddler", attributes:{
			tiddler: {type: "string", value: "Transclusion"}
		}, children:[
			{type: "transclude", attributes:{
				tiddler: {type: "string", value: "Transclusion"}
			}}
		]},
		{type: "text", text: "."}
	]}
]
```

解析树节点是简单的 JavaScript 对象，而没有一个原型。
