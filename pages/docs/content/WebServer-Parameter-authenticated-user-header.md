---
title: 'authenticated-user-header'
---

[网页服务器配置参数](WebServer Parameters) **authenticated-user-header**，激活[功能参数身份验证](WebServer Header Authentication)，通过指定 HTTP 功能变量，用于将用户名传递给 ~TiddlyWiki。

例如，如果 **authenticated-user-header** 设置为 **X-Authenticated-User**，则 HTTP 请求必须包含一个功能参数 **X-Authenticated-User**，其值为用户名：

```http
X-Authenticated-User: JeremyRuston
```

<<.from-version "5.3.0">> 此功能参数的值在客户端传输之前应进行 URI 编码（使用 `encodeURIComponent` JS 函数或 [encodeuricomponent Operator](#encodeuricomponent%20Operator)），并将由服务器进行 URI 解码。