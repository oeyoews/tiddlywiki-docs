---
title: 'list-links 宏（示例）'
---

此示例列出名称开头为 J 的所有条目：

<$macrocall $name=".example" n="1" eg="""<<list-links filter:"[prefix[J]]">>"""/>

此示例列出核心宏的文档条目，每个皆有 <<.field caption>> 字段：

<$macrocall $name=".example" n="2" eg="""<<list-links filter:"[tag[Core Macros]]">>"""/>
