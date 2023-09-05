---
title: '如何自订 TiddlyDesktop'
---

## 前言/警示：

在尝试 TiddlyDesktop 内部之前，您应该找到 “用户配置文件夹” 的位置 - 点击 TiddlyDesktop 主窗口上的 “设置” 按钮, 然后点击按钮 “开启用户配置文件夹“。然后向上移动，找到父文件夹，该文件夹应为 “TiddlyDesktop”。如果出现问题，您可以通过删除整个文件夹将 TiddlyDesktop 重置为其出厂状态。

点击 TiddlyDesktop 主窗口上的 “后台” 按钮, 打开后台维基。这是一个类似 Node.js 的 TiddlyWiki 实例，其运行 TiddlyDesktop 的用户接口和逻辑。

## 如何摆脱 “添加 ~ TiddlyWiki 文件夹” 按钮。

在后台维基中，找到条目 `WikiListToolbar` (HelloThere 中有一个链接)。点击它进入编辑模式，您将看到维基文本的所有工具栏按钮。如果您进行了修改并点击 “完成”，则更改将立即反映在主 TiddlyDesktop 窗口中。

## 如何将 "高级" 按钮更改为 "显示备份" 按钮。

您可以从条目 `$:/TiddlyDesktop/Settings` 复制 “显示备份” 按钮的代码，并将其贴到 `WikiListToolbar` 中。

## 如何更改颜色？

如同在 TiddlyWiki 中一样：您可以使用调色板，或定义自己的自定义 CSS。

## 如何更改条目列表的顺序（看似按字母顺序排列）？

开启且编辑 `WikiList` 条目，然后滚动到结尾。然后更改 **wikilist** 宏里的 `<$list>` 小工具：

```
<$list filter="[tag[wikilist]sort[title]!has[draft.of]]" emptyMessage="Add a ~TiddlyWiki file or folder to get started. Click the buttons above to browse, or drag and drop from your file Explorer/Finder" storyview="pop">
```

