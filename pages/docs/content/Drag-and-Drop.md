---
title: '拖放'
---

~TiddlyWiki 使用拖放强化两个独立的功能：

* [导入条目](Importing Tiddlers)至 ~TiddlyWiki 
* 操纵条目于 ~TiddlyWiki 

在下列情况下，核心用户界面支持通过拖放方式操纵条目：

* 侧边栏的"开启"页签中的项目可以通过拖放来重新排序；可以通过将标题拖到清单中来开启新的条目
* 标签丸下拉清单中的项目可以通过拖放来重新排序；可以通过将标题拖放到清单中来为新条目指定标签
* [控制台]($:/ControlPanel) "视觉外观"/"工具栏"页签中的项目可以通过拖放来重新排序。（不太有用，但可以通过将其标题拖到列表中添加项目到工具栏）

默认情况下，所有条目链接都可以拖动。它们可以在浏览器窗口中拖动以操纵条目，或者拖动到不同的浏览器窗口以启动[导入操作](Importing Tiddlers)

如果要拖动链接，请先将其垂直移动，因为浏览器会将水平移动识别为文本选择。

标签丸也可拖动，相当于同时拖动所有具有该标签的个别条目。

一些常见的拖放条目操纵的场景可用作可重用的宏：

* [list-links-draggable 宏](list-links-draggable Macro)用于重新排序在条目的 [list 字段](ListField)中的项目
* [list-tagged-draggable 宏](list-tagged-draggable Macro)用于重新排序具有指定标签的条目

如何使用低级的拖和放基元以营造更复杂的交互的详细信息，请参阅 DragAndDropMechanism。

~TiddlyWiki 使用的标准 HTML 5 拖放 API，通常不适用于智能型手机或平板电脑上的行动版浏览器。[行动版拖放 Shim 插件](Mobile Drag And Drop Shim Plugin)增加了一个开源程序库，实现了许多行动版浏览器（包括 iOS 和 Android）的部分支持。