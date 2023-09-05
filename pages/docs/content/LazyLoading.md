---
title: '延迟加载'
---

通常 TiddlyWiki 的所有条目的完整内容嵌入于主 HTML 文件。延迟加载是指仅嵌入条目有关的中继数据（也就是说 **text** 字段除外的所有的字段），并于需要时再从服务器读取条目内容的技术。

两种配置，可以使用延迟加载：

* 当运行 [TiddlyWiki on Node.js](#TiddlyWiki%20on%20Node.js)，只有图片条目或所有非系统条目可以延迟加载
* 当运行 [TiddlyWiki in the Sky for TiddlyWeb](#TiddlyWiki%20in%20the%20Sky%20for%20TiddlyWeb)，所有条目可以延迟加载

如何实现延迟加载的详细信息，请参阅[延迟加载机制](LazyLoadingMechanism) (或 [Lazy Loading Mechanism](https://tiddlywiki.com/dev/#LazyLoadingMechanism) ) 。

# 于 Node.js 延迟加载

要启动 TiddlyWiki 延迟加载图片，使用此指令：


```
tiddlywiki --listen root-tiddler=$:/core/save/lazy-images
```

要套用延迟加载到所有非系统条目，使用此指令：


```
tiddlywiki --listen root-tiddler=$:/core/save/lazy-all
```
