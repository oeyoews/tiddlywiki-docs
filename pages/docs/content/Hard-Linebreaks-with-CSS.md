---
title: '使用 CSS 硬式换行'
---

自 TiddlyWiki 5.1.16 版开始，可以使用 `data-` 属性套用样式。请参阅：[如何套用自定义样式](How to apply custom styles)

[自定义数据样式](Custom data-styles)样式表条目包含以下定义：

```
[data-tags*="example-hardlinebreaks"] .tc-tiddler-body {
  word-break: normal; 
  word-wrap: break-word;
  white-space: pre-wrap;
}
```

如果在没有该标签的情况下呈现，则会像下面这样显示 "使用 CSS 硬式换行 - 范例" 的内容:

>{{Hard Linebreaks with CSS - Example}}

----

开启条目查看套用的自订 CSS 规则：[使用 CSS 硬式换行 - 范例](Hard Linebreaks with CSS - Example)
