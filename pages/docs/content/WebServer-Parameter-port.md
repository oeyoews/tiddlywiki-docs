---
title: 'port'
---

[网页服务器配置参数](WebServer Parameters) **port**，指定服务器将在其上侦听连接的 TCP 端口。默认值为 "8080"。

**port** 参数接受两种类型的值：

* 数值被解释为一个十进位端口
    * 特殊值 0（零）使操作系统分配可用端口
* 非数字值被解释为一个环境变量，并从其中读取端口

本示例将服务器配置为侦听端口 8090：

```
tiddlywiki mywikifolder --listen port=8090
```

本示例将服务器配置为侦听环境变量 `THE_PORT` 中指定的端口：

```
tiddlywiki mywikifolder --listen port=THE_PORT
```
