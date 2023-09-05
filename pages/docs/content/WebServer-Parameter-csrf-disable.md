---
title: 'csrf-disable'
---

[网页服务器配置参数](WebServer Parameters) **csrf-disable**，导致常见的[跨网站请求伪造](https://en.wikipedia.org/wiki/Cross-site_request_forgery)检查被禁用。这在异常或实验性的配置中可能是必要的。

将 **csrf-disable** 设置为 `yes` 会禁用 CSRF 检查；`no`（或任何其他值）则启用之。

当前唯一实现的检查，是使用名为 `x-requested-with` 的[自定义功能变量](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet#Protecting_REST_Services:_Use_of_Custom_Request_Headers)，必须包含字符串 `TiddlyWiki`，以便写入请求成功。