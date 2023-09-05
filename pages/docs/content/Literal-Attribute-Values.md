---
title: '文本属性值'
---

文本属性值可以使用几种不同引用的风格︰

* 单引号（例如 `attr='value'`）
* 双引号（例如 `attr="value"`）
* 三重双引号（例如 `attr="""value"""`）
* 不包含空格的值，不需要引号 `attr=value`）

文本属性的值可以包含换行符号。例如：

```
<div data-address="Mouse House,
Mouse Lane,
Rodentville,
Ratland."/>
```

借由使用连续三个双引号，您可以指定属性值包含单个双引号。例如：

```
<div data-address="""Mouse House,
"Mouse" Lane,
Rodentville,
Ratland."""/>
```