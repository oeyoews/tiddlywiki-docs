---
title: 'host'
---

[网页服务器配置参数](WebServer Parameters) **host**，是服务器侦听的 IP 地址。最常见的设置有：

* **127.0.0.1** (默认) - 只侦听来自同一台计算机上的浏览器的连接
* **0.0.0.0** - 侦听所有网络接口上的连接，因此从可到达的网络上的任何浏览器侦听
* **n.n.n.n** - 侦听具有指定 IP 地址的网络接口上的连接

**请注意：**不宜在公共环境 (如咖啡店、图书馆、机场) 中使用 **0.0.0.0** 或 **n.n.n.n** ，因为这将使您的系统暴露于可能的入侵。
