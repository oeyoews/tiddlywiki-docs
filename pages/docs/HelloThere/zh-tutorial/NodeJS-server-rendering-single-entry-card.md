---
title: NodeJS服务端渲染单条目卡片
---

一般打开的条目 URL 里含有一个 `#`，例如 `<https://wiki.onetwo.ren/#Index>`。

去掉这个 `#` 就能打开单个卡片了，例如 `<https://wiki.onetwo.ren/Index>`。

这种方式打开的网页会非常小，所以网络传输速度会很快；不过这需要 NodeJS 在服务端渲染好 HTML 的内容，需要服务器 CPU 进行一定的运算，可能会消耗一些时间。