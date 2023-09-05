---
title: 筛选出“标签≥2个”的表达式
---



```
[all[tiddlers]!is[system]] :filter[tags[]count[]compare:number:gteq[2]]
```


说明：

1. [all[tiddlers]!is[system]] 限定条目为普通条目。

1. compare:number:gteq[2]：判断数量大于2，可以自己修改。