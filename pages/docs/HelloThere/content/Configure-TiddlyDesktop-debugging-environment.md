---
title: 配置TiddlyDesktop调试环境
---


> 系统环境：Win10 64位
> 
> 需要软件：VScode、在vscode中安装Debugger for NWjs插件。


1. 下载最新版TiddlyDesktop-win64-v0.0.15，解压后仅保留html、images、js、tiddlywiki四个文件夹以及package.json文件。

1. 下载nwjs-sdk-v0.69.1-win-x64，放入`C:\Users\你的用户名\.nwjs`文件夹中并解压。解压后你能在`.nwjs\nwjs-sdk-v0.69.1-win-x64`文件夹中看到nw.exe程序即可说明正确。（又可以在vscode中使用Ctrl + shift + p调出命令，执行NWjs Install命令，选择版本安装）

1. 使用vscode打开TiddlyDesktop-win64文件夹。

1. 修改package.json文件中的"main"字段为 "html/main.html"

1. 点击调试，选择nwjs，自动创建laugh.json配置文件（不需要修改）。然后点击开始就可以调试啦。