---
title: '快显机制'
---

快显机制允许有选择地显示和以相对于锚点定位的内容区块。它由几个部分组成：

* [状态条目](StateMechanism) 记录一个弹出窗口目前显示与否
* RevealWidget 有选择性地显示弹出窗口的内容
    * <<.from-version "5.2.4">> 弹出窗口的定位，可以使用相对或绝对座标。关于用法和格式的详细信息，请参阅[座标系统](Coordinate Systems)。
    * "sticky" 弹出窗口 — 当点击里面的一个而其本身不关闭 — 将 **class** 属性设为 `tc-popup-keep`
* ButtonWidget 通过适当地设置状态条目来触发弹出窗口的显示
