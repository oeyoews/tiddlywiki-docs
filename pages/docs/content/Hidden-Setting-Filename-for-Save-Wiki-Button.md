---
title: '隐藏设置：用于保存维基按钮的文件名称'
---

<<.from-version "5.1.19">> 当点击 <<.button save-wiki>> 按钮保存 ~TiddlyWiki 时，默认以网址的文件名部分为保存的文件名称。

使用的值为 `{{$:/SiteTitle}}.html` 形式，则由网站标题与 `.html` 扩展名构成文件名称。

如果创建了名为 [$:/config/SaveWikiButton/Filename](#%24%3A/config/SaveWikiButton/Filename) 的条目，则该条目的内容将用于保存 ~TidlyWiki 的默认文件名称。