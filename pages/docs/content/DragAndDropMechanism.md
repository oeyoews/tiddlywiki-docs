---
title: '拖放机制'
---

这个条目讨论 ~TiddlyWiki 用于实现拖放功能的内部机制。有关功能的一般说明，请参阅[拖放](Drag and Drop)。

<<.warning """
~TiddlyWiki 使用 [标准的 HTML 5 拖放应用程序接口](https://www.w3.org/TR/2010/WD-html5-20101019/dnd.html)。但是，这是一个众所周知的跨浏览器兼容性问题的领域。因此，特别是您可能期望的某些功能不一定适用于所有浏览器。
""">>

以下小工具涉及拖放功能：

* DraggableWidget 创建一个可拖动元素，代表用于拖动的一个或多个条目
    * ButtonWidget 和 LinkWidget 包含 DraggableWidget 的功能
* DroppableWidget 创建一个区域于条目，使其可以通过拖动进行触发定制的操作
* DropzoneWidget 处理从文件导入外部条目或从另一个浏览器窗口拖放条目

拖放操作的一般顺序如下︰

1. 用户按下鼠标并将指针拖至一个可拖动的元素，如 DraggableWidget、ButtonWidget 或 LinkWidget
1. 可拖动元素随鼠标指针移动，直到释放点击
1. 将指针移动到可拖放元素如 DroppableWidget 上，显示高亮表示该项目可以被拖动
1. 如果拖动在可拖放元素的尾端，则运行配置的动作
