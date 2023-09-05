---
title: '条件操作符'
---

<<.from-version "5.1.20">> 条件筛选器操作符，允许在筛选器中表示 **if-then-else** 逻辑。

基础是以下惯例：空列表可用于表示布尔值 <<.value false>>，而包含一个（或多个）条目的列表则表示 <<.value true>>。


条件操作符是：

* [then 操作符](then Operator) 将任何输入值替换为常数字串。例如：
    * <<.inline-operator-example "[HelloThere]is[missing]then[FOO](#HelloThere%5Dis%5Bmissing%5Dthen%5BFOO)">>
    * <<.inline-operator-example "[Missing Tiddler]is[missing]then[FOO](#Missing%20Tiddler%5Dis%5Bmissing%5Dthen%5BFOO)">>
* [else 操作符](else Operator) 如果标题清单为空，则返回常数字串，否则返回原始标题清单
    * <<.inline-operator-example "[HelloThere]is[tiddler]else[BAR](#HelloThere%5Dis%5Btiddler%5Delse%5BBAR)">>
    * <<.inline-operator-example "[Missing Tiddler]is[tiddler]else[BAR](#Missing%20Tiddler%5Dis%5Btiddler%5Delse%5BBAR)">>

这些操作符可以组合。例如：

* <<.operator-example 1 "[新条目]is[missing]then[我佚失了]else[不，我没有佚失](#%E6%96%B0%E6%9D%A1%E7%9B%AE%5Dis%5Bmissing%5Dthen%5B%E6%88%91%E4%BD%9A%E5%A4%B1%E4%BA%86%5Delse%5B%E4%B8%8D%EF%BC%8C%E6%88%91%E6%B2%A1%E6%9C%89%E4%BD%9A%E5%A4%B1)">>

<<.olink else>> 操作符可用于对佚失值套用默认值。在此示例中，我们利用以下事实：如果字段或条目不存在，或为空值，则 <<.olink get>> 操作符返回一个空清单:

* <<.operator-example 2 "[HelloThere]get[custom-field]else[默认值](#HelloThere%5Dget%5Bcustom-field%5Delse%5B%E9%BB%98%E8%AE%A4%E5%80%BC)">>

# 筛选器 run 前缀

[:then](:then Filter Run Prefix) 和 [:else](:else Filter Run Prefix) 筛选器 run 前缀与条件操作符具有类似的用途。请参阅其文档以获取更多信息。
