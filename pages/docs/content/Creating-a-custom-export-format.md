---
title: '创建自订的导出格式'
---

若要创建自订格式导出条目的原始正文：

1. 使用下列字段创建一条目：
    * **tags**: [$:/tags/Exporter](#%24%3A/tags/Exporter)
    * **description**: 此导出的说明
    * **extension**: 缺省扩展名为此导出格式 (包括句点：例如 `.tid`)
1. 设置以下内容：

```
\define renderContent()
{{{ $(exportFilter)$ ||$:/core/templates/plain-text-tiddler}}}
\end
<<renderContent>>
```

其中变量 `exportFilter` 包含筛选器定义应导出的条目。
