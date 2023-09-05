---
title: TW-Locator
---

Locator 插件平时主要就是使用两点，往文件夹里放文件、展示文件夹树：

## 往文件夹里放文件

使用笔记 A 顶部的 {{$:/core/images/new-here-button}} {{$:/language/Buttons/NewHere/Caption}} 按钮来创建新笔记，等价于把笔记 A 看做文件夹，然后往里面放入新建的笔记。

你可以现在就使用当前笔记上的 {{$:/core/images/new-here-button}} 来尝试一下！

其原理就是给新的笔记加上一个标签，标签内容是笔记 A 的标题，所以给一篇别的笔记加上一个和笔记 A 的标题一样的标签，也可以把那篇笔记放入笔记 A 这个文件夹里。

## 展示文件夹树

主要是用了 `locator-view` 这个宏，它会给出以 `baseTitle` 这个笔记作为根文件夹的子文件夹树。

详见[TW-Locator例子：当前知识库的目录](#TW-Locator%E4%BE%8B%E5%AD%90%EF%BC%9A%E5%BD%93%E5%89%8D%E7%9F%A5%E8%AF%86%E5%BA%93%E7%9A%84%E7%9B%AE%E5%BD%95)