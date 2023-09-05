---
title: 自定义字段内容
---

video-link: <https://www.bilibili.com/video/BV1Bu4y1d79i>

这里主要是用筛选器做文本拼接，进行自定义字段内容，并搭配button按钮来新建条目。

先看[文学编程与TiddlyWiki](#%E6%96%87%E5%AD%A6%E7%BC%96%E7%A8%8B%E4%B8%8ETiddlyWiki)和[字段到底是什么呢？](#%E5%AD%97%E6%AE%B5%E5%88%B0%E5%BA%95%E6%98%AF%E4%BB%80%E4%B9%88%E5%91%A2%EF%BC%9F)的介绍，有个基本理解。

<$list filter="[tag<currentTiddler>]">

### <$link><<currentTiddler>></$link>

 {{!!text}}

</$list>