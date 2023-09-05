---
title: 'Railroad 插件'
---

\define __(doc) $:/plugins/tiddlywiki/railroad/$(languageTitle)$/$doc$
\define __en(doc) $:/plugins/tiddlywiki/railroad/$doc$
\define __show(doc)
<$transclude tiddler=<<__ $doc$>> mode="block">
<$transclude tiddler=<<__en $doc$>> mode="block"/>
</$transclude>
\end

<<__show readme>>
<<__show syntax>>