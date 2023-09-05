---
title: 打开外部文件
---

在桌面端应用里，你可以打开外部文件。

## 太记

使用 `open://` 开头的链接可以打开文件，可以是以 `/` 开头的绝对路径：

```
[ext[open:///Users/linonetwo/Desktop/ItonNote Mobile.png]]

[ext[open:///Users/linonetwo/Desktop]]
```

也可以是以 `./` 开头的相对路径，表示文件位置相对于知识库文件夹，例如我们常常在 `tiddlywiki.info` 同一层会有一个 `files` 文件夹用于放大文件附件：

```
[ext[open://./files/ItonNote Desktop.png]]
```

太记不使用传统的 `file://` 开头，因为 Electron 框架做了一些保证用户安全的限制。

## TiddlyWikiDesktop

使用传统的 `file://` 开头即可。

```
[ext[file://~/Desktop/ItonNote Mobile.png]]
```