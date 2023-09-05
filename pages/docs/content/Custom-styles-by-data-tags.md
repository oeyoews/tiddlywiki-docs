---
title: '依 data-tags 自订样式'
---

# 属性：data-tags

<<.from-version "5.1.16">>

~TiddlyWiki 核心为呈现的内容，添加几个''属性''，可以将自订样式套用于条目内容。

例如, 此条目设标签为：<<tag "How to apply custom styles">> 与 <<tag "example-test">> ，所以属性看起来像这样: 

```
data-tags="[[How to apply custom styles]] example-test"
```

**重要：**条目标签是''未''排序的，所以呈现输出的顺序可能不同！

## 示例

下列的 CSS 在[自订 data-styles](Custom data-styles) 中定义，并为此条目创建一个下列的 CSS 在[自订 data-styles](Custom data-styles) 中定义，并为所有标签为 `example-test` 的条目 (包含此条目) 建立一个粉红色边框。

```
[data-tags*="example-test"] {
  border: 2px solid pink;
}
```

### 样式样式表

因此，要以一个合适的方式，显示标签为 `data-tags-styles` 的条目，可用以下代码。(本可以使用: `$:/tags/Stylesheet` , 但这将影响此维基的所有样式，此非我们本意)

**重要：** 别忘了也指定 `.tc-tiddler-body`，否则整个条目，包括条目名称都会改变！请参阅：[自订数据样式](Custom data-styles)

```
[data-tags*="data-tags-styles"] .tc-tiddler-body {
  display: block;
  padding: 14px;
  margin-top: 1em;
  margin-bottom: 1em;
  word-break: normal;
  word-wrap: break-word;
  white-space: pre-wrap;
  background-color: #f5f5f5;
  border: 1px solid #cccccc;
  padding: 0 3px 2px;
  border-radius: 3px;
  font-family: Monaco, Consolas, "Lucida Console", "DejaVu Sans Mono", monospace;
}
```

## 硬式换行

此机制对想写散文的用户，可能很方便！请参阅[使用 CSS 硬式换行](Hard Linebreaks with CSS)

## 更多可能性

{{Attribute Selectors}}
