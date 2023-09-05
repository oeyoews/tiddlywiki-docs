---
title: 嵌入内容挤成一团
---

如果你发现使用 List 微件和嵌入时，内容挤成了一团，只要加上空行就行了

```tw5
<$list filter="[<lang>search[zh]]">
	{{readme/zh-Hans}}
</$list>
```

改为这样就修好了：

```tw5
```tw5
<$list filter="[<lang>search[zh]]">

{{readme/zh-Hans}}

</$list>
```