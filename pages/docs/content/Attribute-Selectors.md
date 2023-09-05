---
title: '属性选择器'
---

**[attr]**
:表示具有属性名称 attr 的元素。

**[attr="value"]**
:表示具有属性名称 attr 的元素，且其值为 "value" 的元素。

**[attr~="value"]**
:表示具有属性名称 attr 的元素，且其值是以空格分隔的单词列表，其中一个单词为 "value"。

**[attr|="value"]**
:表示具有属性名称 attr 的元素。且其值可为 "value"，或者以 "value" 开头，紧接着是 “-”（U+002D）。可用于匹配语言子码。

**[attr^="value"]**
:表示具有属性名称 attr 的元素，且其第一个值以 "value" 为前缀。

**[attr$="value"]**
:表示具有属性名称 attr 的元素，且其最后的值以 "value" 为后缀。

**[attr*="value"]**
:表示具有属性名称 attr 的元素，且其值至少包含一个字符串 "value" 为子字符串。

**[attr "operator value" i]**
:在右括号之前添加一个 i（或 I）会使该值不区分大小写（对于 ASCII 范围内的字符）。

了解更多信息：[属性选择器 - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) 或 [CSS 规范](https://www.w3.org/TR/CSS22/selector.html#attribute-selectors)
