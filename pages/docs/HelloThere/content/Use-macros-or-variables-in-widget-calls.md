---
title: 在微件调用中使用宏或变量
---

直接在放微件参数的地方，使用 `<<xxx>>` 的正常的[宏](#%E5%AE%8F)的使用方法即可。

例如[中文官方教程-link 微件](https://bramchen.github.io/tw5-docs/zh-Hans/#LinkWidget)中的例子：

```tw5
<$link to=<<currentTiddler>> >
	<$view field="title"/>
</$link>
```

<$link to=<<currentTiddler>>>
	<$view field="title"/>
</$link>

`<<currentTiddler>>` 这个变量就直接传给了 `to` 这个参数，中间用「等号」 `=` 连接。

更多例子可见[变量在不同情况下的多种写法](#%E5%8F%98%E9%87%8F%E5%9C%A8%E4%B8%8D%E5%90%8C%E6%83%85%E5%86%B5%E4%B8%8B%E7%9A%84%E5%A4%9A%E7%A7%8D%E5%86%99%E6%B3%95)。