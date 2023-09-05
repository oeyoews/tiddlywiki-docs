---
title: 嵌入在不同情况下的多种写法
---

## 双花括号

一般为这样，类似：

```tid
<$let title={{!!title}} type={{!!type}} key={{!!key}}> 
```

## 单花括号

[筛选器](#%E7%AD%9B%E9%80%89%E5%99%A8)里 `{{}}` 嵌入要写为 `{}`，`{!!type}` 是 `{title!!type}` 的简写，意思是字段type的值。

## 三花括号

详见[官方嵌入文档中的](https://bramchen.github.io/tw5-docs/zh-Hans/#Transclusion%20in%20WikiText)筛选器嵌入部分，在动态创建嵌入内容时，需要用三花括号。

例如：

```tid
<$let target=<<currentTiddler>> targetTitle={{{ [<target>get[draft.title]] ~[<target>get[title]] }}} search={{{ [[$:/state/search-template-list/input]get[text]] }}} draftOf={{{ [<target>get[draft.of]] }}} >
```

以及[在微件参数中使用筛选器](#%E5%9C%A8%E5%BE%AE%E4%BB%B6%E5%8F%82%E6%95%B0%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%AD%9B%E9%80%89%E5%99%A8)。

这里用筛选器动态创建出了内容。