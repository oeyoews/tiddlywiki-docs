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

## 筛选器相关的概念

* 筛选器由一个或多个[运行逻辑（Run）](https://bramchen.github.io/tw5-docs/zh-Hans/#Filter%20Run)组成
    * 运行逻辑由一个或多个[逻辑步骤（Step）](https://bramchen.github.io/tw5-docs/zh-Hans/#Filter%20Step)组成
    * 运行逻辑前面可以加上[+-=~等前置码（prefix）](https://bramchen.github.io/tw5-docs/zh-Hans/#Filter%20Expression)

## 筛选器中使用变量

* `[xxx]`就是指"xxx"字符串
* `<xxx>`是指xxx变量
* `{xxx}`是指xxx条目的text字段
* `{xxx!!yyy}`是指xxx条目的yyy字段
* `{!!yyy}`是指当前条目的yyy字段
* `[<xxx>!match[]]`是判断当前变量存不存在

详见[变量在不同情况下的多种写法](#%E5%8F%98%E9%87%8F%E5%9C%A8%E4%B8%8D%E5%90%8C%E6%83%85%E5%86%B5%E4%B8%8B%E7%9A%84%E5%A4%9A%E7%A7%8D%E5%86%99%E6%B3%95)和[嵌入在不同情况下的多种写法](#%E5%B5%8C%E5%85%A5%E5%9C%A8%E4%B8%8D%E5%90%8C%E6%83%85%E5%86%B5%E4%B8%8B%E7%9A%84%E5%A4%9A%E7%A7%8D%E5%86%99%E6%B3%95)。
