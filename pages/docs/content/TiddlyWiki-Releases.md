---
title: 'TiddlyWiki 版本信息'
---

这里有 TiddlyWiki5 的最新版本的详细信息。如何命名版本的详细信息，请参阅 [TiddlyWiki5 Versioning](#TiddlyWiki5%20Versioning)。

如果您使用 node.js，还可以安装以前的版本：

> npm install -g tiddlywiki@5.1.13

（另请参阅[试用版](BetaReleases)和[开发版](AlphaReleases)信息）。

<$list filter="[tag[ReleaseNotes]!sort[created]limit[1]]">
 <$macrocall $name="tabs" tabsList="[tag[ReleaseNotes]!sort[created]]" default={{!!title}} class="tc-vertical" template="ReleaseTemplate" />
</$list>
