---
title: '如何添加页签至侧边栏'
---

在侧边栏菜单中创建一个新的页签：

1. 创建一个条目，并设其标签为[系统标签](SystemTags) [$:/tags/SideBar](#%24%3A/tags/SideBar)
    * 若要创建目录，你可以可以使用[目录宏](Table-of-Contents Macros)填入新页签条目。请参阅 [TableOfContents](#TableOfContents) 
1. 缺省情况下，条目名称用作页签的标题，但您可以使用 `caption` 字段替换之
1. 若要定义的页签顺序，请使用 `list-after` 或 `list-before` 字段，如同于 [Tagging](#Tagging) 所述的
    * 例如：设置 `list-after` 到 [$:/core/ui/SideBar/Open](#%24%3A/core/ui/SideBar/Open) 可紧接于"开启"页签之后放置一个侧栏页签

请注意，您可以通过使用标签 `$:/tags/MoreSideBar` 以同样的方式创建"更多"页签下的新页签。
