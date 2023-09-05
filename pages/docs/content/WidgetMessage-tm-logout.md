---
title: 'tm-logout'
---

注销消息试图注销用户于当前服务器端主机。条目 [$:/status/IsLoggedIn](#%24%3A/status/IsLoggedIn) 的值为 "yes" 或 "no" 反映当前登录状态，且 [$:/status/UserName](#%24%3A/status/UserName) 反映当前的用户名。

注销消息是由 TiddlyWiki 核心 SyncMechanism 调用当前的 [SyncAdaptorModule](SyncAdaptorModules) 来处理。（通常是 **tiddlywiki/tiddlywebadaptor** 插件）。
