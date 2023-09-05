---
title: '导入条目'
---

您可以从外部文件或直接从另一个 ~TiddlyWiki 将条目导入 ~TiddlyWiki。

## 从外部文件导入内容

有几种方法可以从外部文件 (包括文本、图像、pdf 文档等) 导入内容︰

* 使用<<.button import>>按钮（在侧边栏的<<.sidebar-tab Tools>>选项卡中）选择一个本机文件
* 从 Windows 文件总管或 Mac OS X 的 Finder 拖放文件到 ~TiddlyWiki 浏览器窗口中
* 使用菜单或快捷键直接从剪贴板中粘贴内容（<kbd>Ctrl</kbd>+<kbd>V</kbd> 或 <kbd>cmd</kbd>+<kbd>V</kbd>）
    * 目前支持 Chrome、Firefox 和 Edge（但不支持 Internet Explorer）

大多数文件是以个别条目导入。例外情况是：

* 被辨识为 ~TiddlyWiki 档的 **.html** 文件被解析以提取其中的条目
* **.json** 文件被解析以提取其中的条目。他们可以从另一个 ~TiddlyWiki [导出](How to export tiddlers)来创建。 ~TiddlyWiki 接受包含单个条目字段对象或一组条目字段对象的 JSON 文件

## 从其他 ~TiddlyWiki 浏览器窗口导入内容

条目可以从其他 ~TiddlyWiki 浏览器窗口通过[拖放](Drag and Drop)被导入。将一个 ~TiddlyWiki 内部链接或一个标签，从一个 ~TiddlyWiki 浏览器窗口拖动到另一个。拖动一个内部链接将导入单个条目，拖动标签丸将导入具该标签的所有条目。

