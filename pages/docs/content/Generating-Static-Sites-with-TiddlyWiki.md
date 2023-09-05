---
title: '用 TiddlyWiki 生成静态网页'
---

TiddlyWiki5 可用于生成无需 JavaScript 的 TiddlyWiki 静态 HTML 形式。

此处理需要在本地系统上的 Node.js 上安装 Tidlywiki。详细信息请参阅[在 Node.js 上安装 TidlyWiki](Installing TiddlyWiki on Node.js)。

生成静态 HTML 的方式有很大的灵活性。以下方案枚举于 <https://tiddlywiki.com>。

# 维基快照和条目快照

您可于 <https://tiddlywiki.com/static.html> 探索 TiddlyWiki 主要网站的静态页面。该文件是当前 DefaultTiddlers 的静态快照。它经由如 `/static/HelloThere.html` 形式的 URL 引用链接到任何条目，其指向个别条目静态快照。该条目 HTML 文件引用了 `static.css` 样式表文件。

以下命令用于生成静态版 TiddlyWiki 网页的示例：

```
tiddlywiki wikipath --rendertiddlers '[!is[system]]' $:/core/templates/static.tiddler.html static text/plain
tiddlywiki wikipath --rendertiddler $:/core/templates/static.template.html static.html text/plain
tiddlywiki wikipath --rendertiddler $:/core/templates/static.template.css static/static.css text/plain
```

第一个 RenderTiddlersCommand 生成个别条目的 HTML 表示形式，第二个 RenderTiddlerCommand 保存 DefaultTiddlers 的静态版本，第三个保存样式表。(所有档都放在维基文件夹中的 `output` 文件夹）。

# 用内部链接的维基快照

它也可生成一个单一的 HTML 文件包含一些条目的静态呈现，并使用标准的 HTML 锚链接于它们之间跳转。

例如：<https://tiddlywiki.com/alltiddlers.html>

该示例是由下列命令创建：

```
--rendertiddler $:/core/templates/alltiddlers.template.html alltiddlers.html text/plain
```
