---
title: 'copy-to-clipboard'
---

<<.def copy-to-clipboard>> [宏](Macros)显示一个将指定文本复制到剪贴板的按钮。如果操作成功，则显示通知；某些浏览器不允许此操作。

## 参数

**src**
: 要复制到剪贴板的文本
**class**
: 可选的要指定给按钮的 CSS classes (缺省为 `tc-btn-invisible`)

**style**
: 可选的要指定给按钮的 CSS 样式

<<.macro-examples "copy-to-clipboard">>
