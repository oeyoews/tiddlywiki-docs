---
title: '添加目录到侧边栏'
---

~TiddlyWiki 中用于创建目录的标准机制，是统称为 "toc" [宏](Macros) 的一组宏（点击链接以了解更多宏的相关信息）。他们使用 `Tagging` 作为创建关系的手段，因此如果， `Tagging` 是一个新概念，请务必查看 [Tagging](#Tagging) 主题条目。

以下步骤可以添加自定义的[目录](Table-of-Contents Macros)到侧边栏︰

1. 创建一个名为 [TableOfContents](#TableOfContents) 的条目
1. 设其标签为 <<.tag ~$:/tags/SideBar>>
1. 其内容设为 <div><pre><code><$text text="""
<div class="tc-table-of-contents">

<<toc-selective-expandable 'TableOfContents'>>

</div>"""/></code></pre></div>
1. 添加一个 <<.field caption>> 字段，其值为 **目录**
1. 添加一个 <<.field list-after>> 字段，其值为 **~$:/core/ui/SideBar/Open**

通过创建标签为 **~TableOfContents** 的条目，添加项目至目录。一个简单的方法，是从条目工具栏选择 <<.icon $:/core/images/new-here-button>> **添加子条目** 。

（如果您没有看到"添加子条目"按钮，请点击向下箭头 <<.icon $:/core/images/down-arrow>> ，以查看更多功能选项。）

要创建子条目（来自其他条目下方的条目），请将其父条目的名称为标签。