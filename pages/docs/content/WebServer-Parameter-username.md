---
title: 'username'
---

[网页服务器配置参数](WebServer Parameters) **username**，连同其伴随的 [password](WebServer Parameter: password)：

* 启用[基本验证](WebServer Basic Authentication)，并将指定的用户/密码组合，用[凭证](WebServer Parameter: credentials)参数，添加至指定的任何凭证中。
* 如果未指定 [readers](WebServer Parameter: readers) 和 [writers](WebServer Parameter: writers) ，则指定的用户，用作授权参数的默认值。

## 示例

服务匿名用户，将用户设为 "joe"：

```
tiddlywik mywikifolder --listen anon-username=joe
```

使用 "secret" 密码，限制用户 "joe" 的访问：

```
tiddlywik mywikifolder --listen username=joe password=secret
```

