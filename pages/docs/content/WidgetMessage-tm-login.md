---
title: 'tm-login'
---

登录消息提示用户输入用户名和密码，并且尝试登录到当前服务端主机。条目 [$:/status/IsLoggedIn](#%24%3A/status/IsLoggedIn) 的值为 "yes" 或 "no" 反映当前登录状态，且 [$:/status/UserName](#%24%3A/status/UserName) 反映当前的用户名。

登录消息是由 TiddlyWiki 内核 SyncMechanism 调用当前的 [SyncAdaptorModule](SyncAdaptorModules) 来处理。（通常是 **tiddlywiki/tiddlywebadaptor** 插件）。

<<.from-version "5.1.23">> 登录消息可以选择接受称为 **username** 和 **password** 的参数，这些参数会立即尝试使用指定的认证登录，而不显示提示。
