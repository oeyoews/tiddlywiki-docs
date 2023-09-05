---
title: '配置启动条目'
---

您可以利用[首页](DefaultTiddlers)机制，将 ~TiddlyWiki 配置为使用任何单个或一组条目来启动。

在 "控制台" 的 "信息" 页签下，输入字段标记为 "默认打开的条目"，您可以列出要在启动时打开的任何条目。使用双方括弧包含空格的条目名称。例如:

```
FirstTiddler
SecondTiddler
[[Third Tiddler]]
```

你也可以使用[筛选器表达式](Filter Expression)打开多个条目。例如：

```
[tag[HelloThere]]
```

将打开标签为 <<tag HelloThere>> 的所有条目。

您还可以使用此技术以[保留在启动时打开的条目](Preserving open tiddlers at startup)

另请参阅 [StartupActions](#StartupActions)，以控制更高级的启动行为。
