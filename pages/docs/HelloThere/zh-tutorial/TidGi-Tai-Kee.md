---
title: TidGi太记
---

## 介绍

太记是一个桌面版启动器，可以用于启动太微 TiddlyWiki。启动器可以帮你自动保存、自动备份等等，太微的其它启动器还有[Tiddloid]]等，详见[[官方中文文档-开始使用](https://bramchen.github.io/tw5-docs/zh-Hans/#GettingStarted)。

TidGi 是 TiddlyWiki + Git 的缩写简称，因为太记除了可以启动太微以外，还能自动进行 Git 细粒度同步备份，在备份的同时节省硬盘空间。

## 官网

[tidgi.fun - 太记部署](https://tidgi.fun/)，但服务器可能不稳定。

如果上面的挂了，也可访问[太记官网 - Github Pages 部署](https://tiddly-gittly.github.io/TidGi-Official-Website/#:Index)

## 使用

[img[TiddlyGit-Screenshot.png]]

可以用「打开本地Wiki」功能来打开 TiddlyWiki 官方文档。

### 断网

注意太记会启动一个本地知识库服务器，如果你切换了 Wifi、断网了，太记的界面上会弹一个黄色的框提示你「网络连接断开，数据将在联网后重新同步」，但太记暂时不会自动重连（需要更多开发者帮忙开发），所以需要手动重启太记应用，就好了。

### 休眠工作区

左侧灰色的工作区是「休眠工作区」，右键工作区图标，在设置里点开「开启休眠」，可以让这个 Wiki 在未使用时不占用系统资源。例如让官方文档工作区处于休眠状态节省 CPU，等到想查看官方文档的时候，再点击工作区图标就能一键开启。