---
title: '文档对象模型'
---

网页的 <<.dlink-ex DOM "https://en.wikipedia.org/wiki/Document_Object_Model">> 是其内容的树状模型，当用户与内容交互时，由网页浏览器内部维护。在树中每个点都称为一个 <<.def node>>。

当 ~TiddlyWiki 运行于网页浏览器，其[小工具](Widgets)被呈现染为显示的 DOM 节点。

当 ~TiddlyWiki 运行于 [Node.js](TiddlyWiki on Node.js)，则使用虚设的 DOM 来仿真浏览器的行为。
