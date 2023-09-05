---
title: '网页服务器'
---

当[运行于 Node.js](TiddlyWiki on Node.js)，TiddlyWiki 包括一个简单的 HTTP/HTTPS 网页服务器，允许您在同一台计算机，或网络上运行的任何浏览器中，使用它。

<<.tip """网页服务器包含一个非常简单的机制，允许多个用户，使用不同的凭证登录。该实现设计为简单易用，通常不会被认为足够健壮，无法在开放的互联网上使用。其旨在供受信任网络上的个人或小团体使用。建议公开显露在互联网上公开显露之前，使用外部代理。""">>

# 如何工作

网页服务器侦听来自网络的请求，并依次运行以下操作：

* [身份验证](WebServer Authentication) 是识别当前用户的处理。TiddlyWiki支持三种类型的身份验证：[匿名](WebServer Anonymous Access)、[基本](WebServer Basic Authentication)与[功能变量](WebServer Header Authentication)
* [授权](WebServer Authorization)是确定特定用户可以访问哪些资源的处理。TiddlyWiki 实现了一个简单的方案，即读写访问维基可以独立控制。
* 路由是将请求分派给 [API 处理](WebServer API)的过程，并返回所需数据的处理。

# 用法

## 匿名访问

网页服务器以 ListenCommand (取代较旧的 ServerCommand) 启动。所有的[命名命令参数](NamedCommandParameters)都是可选的，所以最简单的形式是：

```
tiddlywiki mywikifolder --listen
```

访问 <http://127.0.0.1:8080/> 访问维基。访问是匿名的，所以任何人都可以阅读或写入维基。

这通常仅适用于本地计算机上的用户。有关如何将实例开启到本地网络的信息，请参阅网页服务器的 [host](WebServer Parameter: host) 参数。

## 经过身份验证的访问

增加 [username](WebServer Parameter: username) 和 [password](WebServer Parameter: password) 参数对读取和写入都强制运行基本验证：

```
tiddlywiki mywikifolder --listen username=test password=tset
```

访问维基将提示输入用户和密码，如果它们与提供的凭证不匹配，则拒绝访问。

## 匿名读取、经过身份验证的写入

本示例增加[授权](WebServer Authorization)参数 [readers](WebServer Parameter: readers) 和 [writers](WebServer Parameter: writers) 授予匿名用户的读取权限，但要求身份验证为 "joe" 以获得写入权限。

> 请注意，匿名用户可以通过访问路由 `/login-basic` (例如 <http://127.0.0.1:8080/login-basi>c) ，来触发用户名/密码提示。

```
tiddlywiki mywikifolder --listen "readers=(anon)" writers=joe username=joe password=bloggs
```

请注意，包含特殊字符的参数，前后必须有双引号。

# 参数

可用的可选参数的完整列表是：

<<list-links filter:"[tag[WebServer Parameters]]">>

# 指南

有关集成的[网页服务器](WebServer)用法的更多信息：

<<list-links filter:"[tag[WebServer Guides]]">>
