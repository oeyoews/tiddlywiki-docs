---
title: 'credentials'
---

[网页服务器配置参数](WebServer Parameters) **credentials**，包含 [CSV 文件](https://en.wikipedia.org/wiki/Comma-separated_values)的路径名，包含用户/密码组合的清单。使用该 **credentials** 参数启用[网页服务器基本验证](WebServer Basic Authentication)。

CSV 文件必须包含标题列和标记为 **username** 和 **password** 的字段。例如:

```
username,password
jane,do3
andy,sm1th
roger,m00re
```

注意事项：

* 可选的[用户](WebServer Parameter: username)/[密码](WebServer Parameter: password)参数可用于提供另一组凭证
* 路径名称是相对于维基文件夹
* 密码不能包含逗号字符 `,`
* 标题列必须存在

