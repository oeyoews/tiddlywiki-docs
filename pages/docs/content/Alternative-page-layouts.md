---
title: '替代页面版面'
---

<<.from-version "5.1.23">> 您可以有多个替代页面版面并在它们之间切换。若要查看可用版面的清单，并在它们之间切换，请使用快捷键 <kbd><<displayshortcuts ((layout-switcher))>></kbd>。

# 创建替代页面版面

创建替代页面版面超越了从默认界面进行[增或删除功能](Page and tiddler layout customisation)，并允许您从头开始创建全新的版面。

若要创建替代页面版面，并能够切换到该版面，您需要使用[系统标签：$:/tags/Layout](SystemTag: $:/tags/Layout) 创建替代页面模板。

[默认页面模板]($:/core/ui/PageTemplate)的调整和修改版，也可以是完全不同的版本。版面切换机制要求页面模板条目，具有在切换用户界面的清单中使用的字段 `name` 和 `description`。