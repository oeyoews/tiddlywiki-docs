---
title: '嵌入的属性值'
---

嵌入的属性值用 TextReference 前后以双大括号标识。例如：

```
attr={{tiddler}}
attr={{!!field}}
attr={{tiddler!!field}}
```
<<.warning "属性值的值将是从 TextReference 检索到的确切文本。该文本中的任何维基语法都将保持原样。">>