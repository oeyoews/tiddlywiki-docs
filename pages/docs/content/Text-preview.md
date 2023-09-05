---
title: '内文预览'
---

按下眼睛图标 {{$:/core/ui/EditorToolbar/preview}} 将打开或关闭编辑中的[维基文本](WikiText)的预览窗口，显示渲染维基文本的结果 (眼睛图标也将打开或关闭)。

在眼睛图标的右方有另一个图标 {{$:/core/images/chevron-down}}，点击时，显示一个下拉式菜单，让您访问六种不同类型的预览:

* _输出_ - 显示文本如同您不编辑条目时所见的。
* _html_ - 显示该输出的[原代码](https://www.w3schools.com/html/html_intro.asp)。您的网页浏览器使用此原代码来显示网页。
* _分析树_ 和 _小工具树_ - 显示两个对象树，~TidlyWiki 内部从[维基文本](WikiText)生成。//分析树// 收集有关您的[维基文本](WikiText)的基本信息。从分析树的信息、//小工具树//，然后生成扩充的信息，最后上面的 html (且小工具树也做其他事情)。
* _与当前的差异_ - 显示自上次保存条目以来的差异。删除的部分是 <span style="color:red;">红色</span>，添加的部分是 <span style="color:green;">绿色</span>。
* _与影子条目的差异 (如果有)_ - 同上，但这次它显示的是与底层[影子条目](ShadowTiddlers)的差异。


<<.tip "默认情况下，预览窗格按钮控制，是否为所有打开编辑的条目，显示预览窗格。此为一个[隐藏设置](Hidden Setting: Show Edit Preview per Tiddler)，使按钮在个别条目的基础上运作">>

<<.tip "变量 [tv-tiddler-preview](tv-tiddler-preview Variable) 可用于检测预览窗格中，是否显示内容。">> 