---
title: '进程参数处理'
---

## 简介

当进程内容被维基化时，[进程](Procedures)参数供作变量提供。

## 将参数作为变量访问

当进程被维基化时，参数可以当作变量访问。

例如：

<$macrocall $name="wikitext-example-without-html" src="""\procedure say-hi(name,address)
嗨，我是<<name>>，住在<<address>>。
\end

<<say-hi name:"八哥" address:"兔子坑">>
"""/>

将参数作为变量访问，仅适用于维基化进程，例如，当进程用作属性值时。