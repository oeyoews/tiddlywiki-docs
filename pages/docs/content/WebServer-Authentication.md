---
title: '网页服务器身份验证'
---

**身份验证**是识别当前用户的过程。TiddlyWiki 支持三种类型的身份验证：

* [匿名访问](WebServer Anonymous Access)，允许任何用户，在不需要身份验证的情况下，访问资源。可选地，还可以指定用户名来署名编辑
* [基本认证](WebServer Basic Authentication)，要求用户输入用户名和密码组合，TiddlyWiki 对凭证的内部数据库进行验证。
* [功能变量认证](WebServer Header Authentication)，要求外部代理将当前用户的用户名，放在请求的受信任功能变量中。经常被用作 "单一登录" 功能的基础。