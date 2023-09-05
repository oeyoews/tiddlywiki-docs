---
title: '从 JSON 条目读取数据'
---

请参阅 [TiddlyWiki 中的 JSON](JSON in TiddlyWiki)，以获取有关在 ~TiddlyWiki 中使用 JSON 的概述。

## 用于访问 JSON 数据的筛选器操作符

以下筛选器操作符允许从 JSON 数据中读取值：

* <<.olink jsonget>> 检索 JSON 数据中的属性值
* <<.olink jsontype>> 检索 JSON 值的类型
* <<.olink jsonindexes>> 检索 JSON 对象的字段名称或 JSON 数组的索引
* <<.olink jsonextract>> 检索 JSON 值为 JSON 字符串的形式

## 用于访问 JSON 数据的文本引用

[文本引用](TextReference)是查找命名属性值的简单快捷语法。 例如，若一名为 `MonthDays` 的[字典条目](DictionaryTiddlers)包含：

```
oct:31
nov:30
dec:31
```

... 则 `{{MonthDays##nov}}` 将解析为 `30` 的值。

同样是如此，若 `MonthDays` 为一[JSON 条目](JSONTiddlers) 其内容如下：

```
{"oct":31,"nov":30,"dec":31}
```
