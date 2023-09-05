---
title: 'path-prefix'
---

[网页服务器配置参数](WebServer Parameters) **path-prefix**，可用于为服务的所有路径，设置可选首码。

本示例使服务器从 <http://127.0.0.1/MyApp>，而不是默认的 <http://127.0.0.1/> 提供服务。

```
tiddlywiki mywikifolder --listen "path-prefix=/MyApp"
```

请注意：

* 需要进一步的步骤，将用户端组件配置为使用首码。请参阅[于主从式版本使用自定义路径首码](Using a custom path prefix with the client-server edition)。
* 如果不需要路径首码，则 `path-prefix` 参数应省略或设置为空字符串，而不是预期为 `\`。
