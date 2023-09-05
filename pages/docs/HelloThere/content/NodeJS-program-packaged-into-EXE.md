---
title: NodeJS程序打包成EXE
---

1. 安装pkg软件包

> 软件包项目地址：<https://github.com/vercel/pkg>


```sh
npm install -g pkg
```

2. 打包成可执行程序

```sh
pkg -t win 启动页.js
```

注意：类似playwright 位置在用户目录下的，外置依赖程序，无法打包进去。