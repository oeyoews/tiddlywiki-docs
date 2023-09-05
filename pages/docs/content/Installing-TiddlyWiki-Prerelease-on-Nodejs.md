---
title: '安装 TiddlyWiki 预览版于 Node.js'
---

1. 从 <https://github.com/Jermolene/TiddlyWiki5> 复制（clone）一份 TiddlyWiki5 的 GitHub 存储库的本机复本
1. 开启命令提示字符，且更改当前的工作目录至 TiddlyWiki5 存储库的根目录
1. 输入 `npm link` (Windows) 或 `sudo npm link` (Mac/Linux) 告诉 [npm](#npm) 使用此副本的存储库为全域安装者
1. 在其根目录，您可以启动 ~TiddlyWiki，像这样： <br/>``tiddlywiki editions/tw5.com-server --listen``

此后您可以通过 [npm](#npm) 使用 TiddlyWiki5，如同它是以一般方式 `npm install -g tiddlywiki` 安装。

时常更新复本（clone），以确保您拥有最新的代码。