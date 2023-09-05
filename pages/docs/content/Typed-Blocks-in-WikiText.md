---
title: '类型区块'
---

# 类型区块

可以用明确的内容类型呈现文本区块，像这样：

```
$$$image/svg+xml
<svg xmlns="http://www.w3.org/2000/svg" width="150" height="100">
  <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="green" />
</svg>
$$$
```

显示结果：

$$$image/svg+xml
<svg xmlns="http://www.w3.org/2000/svg" width="150" height="100">
  <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="green" />
</svg>
$$$

也可将内容类型缩写成扩展名的方式，例如：

```
$$$.svg
<svg xmlns="http://www.w3.org/2000/svg" width="150" height="100">
  <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>
$$$
```

显示结果：

$$$.svg
<svg xmlns="http://www.w3.org/2000/svg" width="150" height="100">
  <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>
$$$

未知类型则以纯文本显示 ：

```
$$$text/unknown
Some plain text, which will not be //formatted//.
$$$
```

显示结果：

$$$text/unknown
Some plain text, which will not be _formatted_.
$$$

也可以指定呈现的类型，显示特定的文本呈现方式。例如：

```
$$$text/vnd.tiddlywiki>text/html
This is ''some'' wikitext
$$$

$$$text/vnd.tiddlywiki>text/plain
This is ''some'' wikitext
$$$
```

显示结果：

$$$text/vnd.tiddlywiki>text/html
This is **some** wikitext
$$$

$$$text/vnd.tiddlywiki>text/plain
This is **some** wikitext
$$$
