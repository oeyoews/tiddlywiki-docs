---
title: '于主从式版本使用自订路径首码'
---

缺省情况下，当运行 [TiddlyWiki 于 Node.js](TiddlyWiki on Node.js)，服务器以协定、主机和端口的 URI 形式显露维基 - 例如，`<http://127.0.0.1:8080/>`。

有两个步骤运行维基在自订路径，类似 `<http://127.0.0.1:8080/path/to/my/wiki/>`:

1. 配置服务器，通过传递 `/path/to/my/wiki` 为 ServerCommand 的 **pathprefix** 参数
1. 配置用户端，通过创建包含 `$protocol$//$host$/path/to/my/wiki/` 的名为 `$:/config/tiddlyweb/host` 的条目


