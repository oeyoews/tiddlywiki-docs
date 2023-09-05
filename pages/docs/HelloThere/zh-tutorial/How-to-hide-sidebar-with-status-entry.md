---
title: 如何用状态条目隐藏侧边栏
---

你希望默认关闭侧边栏吗？

参考[Jeremy的回答](https://github.com/Jermolene/TiddlyWiki5/issues/3171)，可以创建一个标题是 `$:/state/sidebar` 的条目，内容填 `no` 就好了。

在 NodeJS 版里，以 `$:/state/` 开头的条目默认不会保存，只作为临时状态。除非你手动创建这样的条目。