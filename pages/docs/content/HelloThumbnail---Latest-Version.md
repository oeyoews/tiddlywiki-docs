---
title: 'v<<version>> 新鲜事'
---

\define prerelease-regexp() [0-9]+\.[0-9]+\.[0-9]+\-prerelease
<$list filter="[<version>!regexp<prerelease-regexp>]" variable="ignore">
~TiddlyWiki 的最新版本 v<<version>> (发布于 <$view field="released" tiddler={{{ [<version>addprefix[Release ]] }}} format="date" template="YYYY年0MM月0DD日"/>)
</$list>
<$list filter="[<version>regexp<prerelease-regexp>]" variable="ignore">
这是用于测试和审查的尝鲜版
</$list>