---
title: '使用 TiddlyWiki5 原代码保存库'
---

# 简介

如果您想[贡献](Contributing) TiddlyWiki 的开发，而非[已常用方式安装 TiddlyWiki](Installing TiddlyWiki on Node.js)，你可以直接使用 GitHub 的保存库。

Mario Pietsch 创建一个[介绍短片](Working with the TiddlyWiki5 repository video).

# 设置

如果您计划使用 TiddlyWiki5 原始代码，请运行以下步骤：

1. 自 <https://github.com/Jermolene/TiddlyWiki5>，复刻 (fork) TiddlyWiki5 GitHub 原代码保存库
1. 自您的复刻版复制 (clone) 一份本机复本
1. 开启一个命令行终端，更改当前的工作目录到保存库的根目录
1. 输入 `npm link` (Windows) 或 `sudo npm link` (Mac/Linux) 告诉 [npm](#npm) 使用此份保存库当作全域安装的

这样你可以透过 [npm](#npm) 使用 TiddlyWiki5，如同它以一般方式被安装 `npm install -g tiddlywiki`。

也请参阅 [Scripts for TiddlyWiki on Node.js](#Scripts%20for%20TiddlyWiki%20on%20Node.js).