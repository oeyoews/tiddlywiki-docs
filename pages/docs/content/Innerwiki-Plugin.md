---
title: 'Innerwiki 插件'
---

Innerwiki 插件使 TiddlyWiki 能够嵌入修改过的自身副本（一个 "innerwiki"）。主要动机是能够制作屏幕画面截屏，随着时间的推移，TiddlyWiki 的外观会自动更新，或者以不同的语言生成相同的截屏。

在浏览器中，innerwikis 显示为嵌入式 iframe。在 Node.js 下 [Google 的 Puppeteer](https://pptr.dev/) 用于将 innerwikis 加载为画面以外的网页，然后将其快照为 PNG 图像。

观看[演示]($:/plugins/tiddlywiki/innerwiki/examples)于 [ext[<https://tiddlywiki.com/plugins/tiddlywiki/innerwiki>|https://tiddlywiki.com/plugins/tiddlywiki/innerwiki]]
