---
title: '依数据条目名称自定义样式'
---

# 属性：data-tiddler-title

<<.from-version "5.1.16">>

~TiddlyWiki 核心为呈现的内容添加了几个''属性''。使用这些属性，可以将自定义样式套用到条目内容。

例如，此条目名为："{{!!title}}" ，因此属性如下所示：

```
data-tiddler-title="Custom styles by data-tiddler-title"
```

## 示例

下列的 CSS 在[自定义 data-styles](Custom data-styles) 中定义，并为此条目创建一个蓝色边框。

```
[data-tiddler-title="Custom styles by data-tiddler-title"] {
  border: 1px solid blue;
}
```

要为每一个名称以 `$:/` 起始的条目即系统条目，创建一个绿色边框，您需要像这样使用 CSS：(此处未套用，但您可以试用它)

```
[data-tiddler-title^="$:/"] {
  border: 1px solid green;
}
```

## 更多可能性

{{Attribute Selectors}}
