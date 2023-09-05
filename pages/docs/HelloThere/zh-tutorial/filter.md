---
title: 筛选器
---

## 类比

> 这东西等价于 Ob 的 dataview 和 Logseq 的 datascript ，各家的方案用起来都有一定难度，但太微毕竟有 10 年以上的历史，谷歌搜索能搜到国际上很多相关讨论和解决方案

筛选器长得类似链接 `[ ](#%20)` 尤其像图片引用 `[img[ProductHunt-Badge.svg]]`：

> 名称开头为「插」的所有条目 `[prefix[插]]` <<list-links "[prefix[插]]">>

## 使用筛选器

{{在列表微件中使用筛选器}}

{{在嵌入中使用筛选器}}

## 相关阅读列表

首先阅读[中文官方文档的教程](https://bramchen.github.io/tw5-docs/zh-Hans/#Filters)。

1. [TiddlyWiki Filter Expression：释放 TiddlyWiki 十倍威力的工具 @闷声](https://zhuanlan.zhihu.com/p/346647657)
1. [筛选器类](#%E7%AD%9B%E9%80%89%E5%99%A8%E7%B1%BB)

## 筛选器相关的概念

* 筛选器由一个或多个[运行逻辑（Run）](https://bramchen.github.io/tw5-docs/zh-Hans/#Filter%20Run)组成
    * 运行逻辑由一个或多个[逻辑步骤（Step）](https://bramchen.github.io/tw5-docs/zh-Hans/#Filter%20Step)组成
    * 运行逻辑前面可以加上[+-=~等前置码（prefix）](https://bramchen.github.io/tw5-docs/zh-Hans/#Filter%20Expression)

高级用法详见[宏变量筛选器嵌入连用](#%E5%AE%8F%E5%8F%98%E9%87%8F%E7%AD%9B%E9%80%89%E5%99%A8%E5%B5%8C%E5%85%A5%E8%BF%9E%E7%94%A8)。

<$macrocall $name="alert" type="primary" src="本条目同时添加了两个标签，基础知识和高级知识。因为筛选器比较特别，筛选器的基础知识，比如像tags标签是一定要掌握的，但像一些listtops筛选器，就很复杂了，就需要放到高级知识里去理解了。" class="bg-transparent"/>