---
title: '自定义标签丸样式'
---

# 属性: data-tag-title

<<.from-version "5.2.0">> 属性 <<.attr data-tag-title>> 被添加到条目视图模板中可见的标签丸。

<<.from-version "5.3.0">>  该属性已添加到标准 ~TiddlyWiki UI 中可见的每个标签丸。特别是编辑模板标签列表、标签选择器下拉功能表、右侧栏 -> 更多 -> 标签选项卡和 $:/TagManager

The <<.attr data-tag-title>> HTML 属性只包含在标签丸中可见的标签标题。它可用于设置标签丸的样式。

如果你想为整个条目设置样式，请查看：[依数据条目名称自定义样式](Custom styles by data-tiddler-title)

## 示例

如果您在标签为 `$:/tags/Stylesheet` 的新条目中使用以下 CSS，则每个以 `#` 开头的标签都将具有新的边框半径。因此，这些标签默认标签形成鲜明对比。

**您必须定义两个 CSS 规则**，由于现有的 UI 结构可以捕获现有 TW UI 中的所有标签丸。

```
[data-tag-title^="#"] .tc-tag-label,
[data-tag-title^="#"].tc-tag-label {
   border-radius: 3px;
}
```

## 更多可能性

{{Attribute Selectors}}
