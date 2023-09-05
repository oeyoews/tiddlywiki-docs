---
title: '网页服务器基本身份验证'
---

[基本认证](https://en.wikipedia.org/wiki/Basic_access_authentication)是一个标准[机制](WebServer Authentication)，用于指示浏览器提示用户输入凭证。因其通过网络传递未加密的密码，建议与 HTTPS 一起使用。

如果通过[用户](WebServer Parameter: username)/[密码](WebServer Parameter: password)或[凭证](WebServer Parameter: credentials)参数指定凭证，则启动基本验证。

如果将[网页服务器授权](WebServer Authorization)，配置为允许匿名和身份验证过的用户访问，则默认情况下，用户将不会被提示输入凭证，并且将被授予匿名访问权限。强制提示密码的访问路由 `/login-basic` (例如，<http://127.0.0.1:8080/login-basi>c)。
