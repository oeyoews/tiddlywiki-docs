---
title: '图片'
---

# 图片

显示保存于条目的图片，只需嵌入该条目：

```
{{Motovun Jack.jpg}}
[img[https://tiddlywiki.com/favicon.ico]]
```

您也可以从编辑器工具栏插入图片条目。点击''图片'' (<<.icon $:/core/images/picture>>) 且选择一个图片。

如果图片来源为图片条目名称，则直接显示条目。否则它被解译为一个 URL 和生成一个 HTML `<img>` 标记包含值为 URL 的 `src` 属性。

可以指定提示消息：

```
[img[An explanatory tooltip|Motovun Jack.jpg]]
```

可以提供属性以指定 CSS 类别的图片宽度和高度：

```
[img width=32 [Motovun Jack.jpg]]
[img width=32 class="tc-image" [Motovun Jack.jpg]]
```

请注意，可以将属性指定为嵌入或为变量引用：

```
[img width={{!!mywidth}} class=<<image-classes>> [Motovun Jack.jpg]]
```

图片的语法是援引 ImageWidget 的简写形式。

# 嵌入显示图像

您还可以嵌入方式显示存储在条目的图片。这种方法的缺点是没有直接的方法来控制图片的大小。

```
{{Motovun Jack.jpg}}
```

显示结果：

{{Motovun Jack.jpg}}

# 图片作为链接
```
<$link to="HelloThere" tooltip="自定义工具提示">{{$:/core/icon}}</$link>
```

显示结果：

<$link to="HelloThere" tooltip="自定义工具提示">{{$:/core/icon}}</$link>

# 导入图像

使用 <<.button import>> 按钮 (在侧边栏的 <<.sidebar-tab Tools>> 选项卡中)，或拖放。
详见 [导入条目](Importing Tiddlers)。

<<.from-version "5.2.0">> 您还可以通过拖放或粘贴图像到条目编辑器中，导入图像。