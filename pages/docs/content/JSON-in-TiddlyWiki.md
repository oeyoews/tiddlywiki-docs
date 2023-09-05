---
title: 'TiddlyWiki 中的 JSON'
---

## Introduction

JSON（~JavaScript Object Notation）是数据结构的标准化文本表示形式，广泛用于数据存储和传输。

JSON 被用于 ~TiddlyWiki 的几个不同上下文中。例如：

* 条目在 ~TiddlyWiki HTML 文件中表示为 JSON 数据
* 条目群可被[导出](How to export tiddlers)和[导入](Importing Tiddlers)为 JSON 文件
* 插件条目将其组成影子条目，存储为 JSON 条目
* 用主从式配置使用 [JSON 消息](TiddlyWeb JSON tiddler format) 在客户端和服务器之间进行通信
* 可以使用一组筛选器操作符和操作小工具，处理和操作[数据条目](DataTiddlers)中的任意 JSON 数据

## 关于 JSON

在官方网站 <https://json.org/> 上，对 JSON 的技术描述很简洁。在这里，我们总结了主要功能。

JSON 支持两种基本数据结构：

**Arrays** 是项目清单。项目由其数字索引标识（从零开始）

数组的一个示例是：

```json
["one","two","three\"four"]
```

请注意数组的以下功能：

* 该数组由项目清单两边的方括弧表示
* 每个项目都是一个双引号中的字符串。双引号可以包含在字符串中，方法是在字符串前面加上反斜线 （`\`）
* 项目之间用逗号分隔

**Objects** 是成对的名称/值的集合。每个项目都是一个由唯一名称标识的值

对象的一个示例是：

```json
{
  "first": "This is the first value",
  "second": "This is the second value",
  "third": "This is the third value"
}
```

请注意对象的以下功能：

* 该对象由成对名称/值清单，围绕的大括弧表示
* 每对名称/值由双引号中的名称、冒号和值组成
* 名称/值成对，以逗号分隔

上面的示例都显示字符串值。实际上，JSON 支持几种不同类型的值。以下任何类型都可以用作值：

* 字符串值，如上所示
* 数值，表示为带符号小数，例如 `1`、`3.14`。也可以使用指数表示法，例如 `-1E10`
* 布尔值，由关键字 `true` 和 `false 表示`
* 特殊值 `null`，通常用于表示缺失或不完整的数据
* 对象和数组也是值，允许表示复杂的嵌套结构

## 使用数据条目

* [从 JSON 条目读取数据](Reading data from JSON tiddlers)
* [构建 JSON 条目](Constructing JSON tiddlers)
* [修改 JSON 条目](Modifying JSON tiddlers)
