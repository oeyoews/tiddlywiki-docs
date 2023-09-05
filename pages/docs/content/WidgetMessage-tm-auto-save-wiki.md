---
title: 'tm-auto-save-wiki'
---

必要时，此维基消息会促使当前的保存模块运行背景保存。

每当对保存库进行了更改时，应生成此自动保存维基消息。例如，导览小工具生成自动保存保存维基消息作为其处理 [WidgetMessage: tm-save-tiddler](#WidgetMessage%3A%20tm-save-tiddler)、[WidgetMessage: tm-delete-tiddler](#WidgetMessage%3A%20tm-delete-tiddler) 和 [WidgetMessage: tm-perform-import](#WidgetMessage%3A%20tm-perform-import) 的一部分。

此自动保存维基消息由 TiddlyWiki 核心[同步机制](SyncMechanism)调用当前的[保存模块](SaverModules)来处理。并非所有的 SaverModules 都会处理自动保存。
