---
title: '性能'
---

TiddlyWiki 默认为最适用于从智能手机到台式机的现代设备。如果您需要工作在较旧的、不够强大的设备，或使用大量的内容，有几个你能采取的步骤来提高性能。

## 用法

* **避开 "最近" 页签**。它计算缓慢来生成和更新以回应条目变更。
* **使用 "Vanilla" 主题**。默认的 "Snow White" 主题包括像阴影、透明度和模糊的视觉效果，在较旧的设备上呈现，可能会很慢
* **避免大型条目**。较大的位图会显著降低 TiddlyWiki 的性能。例如，现代智能手机拍摄的图像经常会是 5 MB 或更多。尽可能的使用[外部图像](ExternalImages)。
* **不要一次打开太多条目**。已打开的每个条目将需要处理，以保持即时更新（例如，当您于草稿条目输入）。一个最显而易见的例子，当使用 **zoomin** 查看模式关闭数十列于边栏中的''打开''页签的条目。养成使用 <<.icon $:/core/images/close-all-button>> **全部关闭**按钮定期关闭所有已打开条目的习惯。

## WikiText

* **使用内置的性能检测**。研究[性能检测](Performance Instrumentation)结果，有助于突出性能问题
* 利用索引筛选器操作符。在筛选器运行开始时，以下构造经过优化的运行速度，比其他方式快许多倍：
    * `[all[tiddlers]tag[x]...`
    * `[all[shadows]tag[x]...`
    * `[all[tiddlers+shadows]tag[x]...`
    * `[all[shadows+tiddlers]tag[x]...`
    * `[all[tiddlers]field:y[x]...`
    * `[all[shadows]field:y[x]...`
    * `[all[tiddlers+shadows]field:y[x]...`
    * `[all[shadows+tiddlers]field:y[x]...`
    * 请注意，字段索引器目前默认为索引字段值小于 128 个字符；仍可搜索较长的值，但不会建构索引
    * 另请注意，当操作符名称为字段名称时，也会使用 **field** 操作符，例如，`[all[shadows+tiddlers]caption[x]...` 已经过优化。
* 使用[刷新机制](RefreshMechanism)的[节流](RefreshThrottling)功能
* 请记住，''比起大量使用宏，嵌入单独的条目更有效''，并且在某些情况下，差异可能会很大。如果条目未更改，则解析每个条目的结果，将被缓存并于下次重复使用。宏不能使用相同的技术，并且每次都必须重新解析它们，因为它们不是全局的，而是局部于小工具树。
    * <<.from-version "5.1.23">> 分析树现在缓存宏，而''不''通过参数或变量（即`$parameter$` `或 `$(variable)$`）运行任何文本替换。
* 在可能的情况下，''使用带有筛选器的 SetWidget 或 VarsWidget，而不是 WikifyWidget''，来声明变量和字符串连接。因为没有机会缓存解析树或小工具树，Wikify 机制的性能相对较差。
