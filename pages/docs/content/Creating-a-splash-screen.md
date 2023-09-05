---
title: '创建启动画面'
---

默认情况下，TiddlyWiki 在加载时，显示空白画面。如果您愿意，可以在维基加载时，添加一个特殊的 "启动画面"。

为了在 ~TiddlyWiki 初始化或[解密](Encryption)之前，显示启动画面，它将当作静态 HTML/CSS 嵌入到 ~TiddlyWiki HTML 文件中。这是通过 [SystemTag: $:/tags/RawMarkupWikified/TopBody](#SystemTag%3A%20%24%3A/tags/RawMarkupWikified/TopBody) 完成的。

另一个在维基完成加载时，删除启动画面，HTML 应该包含在一个带有特殊类 `tc-remove-when-wiki-loaded` 的容器中。一旦维基加载，内核将自动删除具有此类的任何 DOM 元素。

这是一个简单的启动画面示例，只显示文本 _加载中..._。要使用它，将文本拷贝到一个新的条目，设其类型 `text/plain` 和标签 `$:/tags/RawMarkupWikified/TopBody`：

```
<div class="tc-remove-when-wiki-loaded">
加载中...
</div>
```

如果条目被赋予维基文本类型 `text/vnd.tiddlywiki` ，那么在保存文件时，维基化内容，允许进行转换等。例如，这是一个在加载消息中，引用网站标题的示例。要使用它，将文本拷贝到一个新的条目，设其类型 `text/vnd.tiddlywiki` 和标签 `$:/tags/RawMarkupWikified/TopBody`：

```
\rules only filteredtranscludeinline transcludeinline
<div class="tc-remove-when-wiki-loaded">
 {{$:/SiteTitle}}  加载中，请稍候
</div>
```

`\rules` 指令用于限制被识别为两种内联转换形式的维基文本语法。这避免了对条目内容的意外破坏。

使用 CSS 动画和在此维基中配置的图像，有一个更复杂的示例启动画面：请参阅 $:/SplashScreen
