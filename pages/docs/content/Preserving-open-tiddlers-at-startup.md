---
title: '保持在启动时开启的条目'
---

通常情况下，在启动 TiddlyWiki 时显示的条目，是在条目 [$:/DefaultTiddlers](#%24%3A/DefaultTiddlers) 中指定为一筛选条件。

有时很有用，当要重新开启保存该文件时处于开启状态的相同条目。若欲如此，请设置 [$:/DefaultTiddlers](#%24%3A/DefaultTiddlers) 为此筛选器：

```
[list[$:/StoryList]]
```

此筛选器传回在系统条目 [$:/StoryList](#%24%3A/StoryList) 中指定的条目，该系统条目是 TiddlyWiki 用以保存当前开启中的条目清单。
