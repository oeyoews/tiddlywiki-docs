---
title: 把筛选器结果展示在文本里
---

## 使用 Text 微件

类似[在微件参数中使用筛选器](#%E5%9C%A8%E5%BE%AE%E4%BB%B6%E5%8F%82%E6%95%B0%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%AD%9B%E9%80%89%E5%99%A8)使用三花括号获得筛选器的结果，作为[嵌入](#%E5%B5%8C%E5%85%A5)的输入。然后再把嵌入的内容作为 Text 微件的 text 参数的输入，微件会把 text 参数的内容展示出来。

```tw5
<$text text={{{ [{!!endDate}divide{!!startDate}] }}} />
```