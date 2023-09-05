---
title: 'tw5server'
---

community-author: hffqyd
created: 20230302011710789
delivery: Server-side Script
description: 用于保存和上传的网络服务器
method: save
modified: 20230721001933532
tags: Android Chrome Firefox [Internet Explorer](#Internet%20Explorer) Linux Mac Opera Safari Saving Windows iOS Edge
title: Saving via a Minimal Web Server
type: text/vnd.tiddlywiki

TiddlyWiki5 的迷你二进位本地服务器，用于保存和备份维基，并为 TiddlyWiki 上传文件，灵感来自
[tw5-server.rb](https://gist.github.com/jimfoltz/ee791c1bdd30ce137bc23cce826096da)。

tw5server 提供以下功能：

* TiddlyWiki5 的服务器，以及其他文件（例如 TW5 中使用的图像 `<img src="images/*.png">`);
* 易于通过浏览器保存维基。
* 以压缩格式 (.gz) 备份维基，节省磁盘空间。
* 自动清理备份：保留上个月最新的一个，保留当月的所有备份。
* 通过按下按钮或拖放，将文件/图像上传到服务器，以在 tiddlywiki 中用作外部链接。
* 提供 Linux、macOS、Android 和 Windows 二进位可运行文件。

在 github.com [tw5-server](https://github.com/hffqyd/tw5-server) 下载可运行的二进位文件。

# 用法

```bash
tw5server -a:192.168.0.10 -p:8000 -d:./ -b:backup

-h 使用说明
-a 网址，默认为 localhost
-p 端口，默认为 8000
-d 服务器目录，默认为 `current dir`
-b 备份目录名称，默认为 `backup`
-l 将消息保存到标准输出

备份自动清理策略：
保留当月的所有备份，只保留前几个月的最新备份。
```

在 Unix/Linux 中，也许首先 `chmod +x tw5server`，然后运行之。
对于 Android 版本，请在 Termux 或一些其他终端机中运行。

然后在您的网络浏览器中，转到 <http://localhost:8000>（或命令中指定的其他地址：端口），然后点击您的维基 html 文件。