---
title: Shiraz宏包
---

## 安装

参考[安装插件](#%E5%AE%89%E8%A3%85%E6%8F%92%E4%BB%B6)，从 CPL 插件源安装即可。

## 介绍

就像 LaTeX 有很多美化样式的宏包，太微也有很多宏包，[Shiraz](https://kookma.github.io/TW-Shiraz/) 是其中的佼佼者，它除了提供样式美化，例如：

```tid
<<alert primary "美化样式的封装了CSS的宏" width:60%>>
```

<<alert primary "美化样式的封装了CSS的宏" width:60%>>

还提供自动化操作宏包，例如我们在[待开始任务列表](#%E5%BE%85%E5%BC%80%E5%A7%8B%E4%BB%BB%E5%8A%A1%E5%88%97%E8%A1%A8)里用的 dynamic-table 宏：

```tid
<$macrocall $name=table-dynamic caption="共建待办列表" filter="[tag[任务]]-[tag[done]]" fields="title tags" class="w-100"/>
```

<<reuse-tiddler "待开始任务列表">>

## 使用

安装的插件只包含宏定义，不包含使用手册（为了减小安装大小），你需要到官网 <https://kookma.github.io/TW-Shiraz/> 了解有哪些宏、每个宏的参数有哪些，里面也有很多复制黏贴就可以抄过来美化自己知识库的例子。