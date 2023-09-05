---
title: 在JS里获得WikiText的渲染结果
---

以渲染条目的 `caption` 字段为例：

```ts
const renderedCaption = $tw.wiki.renderText('text/plain', 'text/vnd.tiddlywiki', tiddler?.fields?.caption ?? title, {
	parseAsInline: true,
	parentWidget,
});
```

这样就算 caption 是 `{{$:/language/SideBar/Open/Caption}}` 这样的特殊 Wiki 语法，也能在 JS 里得到渲染之后的结果 `打开`。