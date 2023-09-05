---
title: TiddlyWiki 出现 ResizeObserver loop limit exceeded 错误的解决方案
---

经 @oeyoews 的分析，导致该问题的原因可能为浏览器翻译插件所致（DeepL 翻译插件），禁用插件后问题解决

在 [talk](https://talk.tiddlywiki.org/t/error-screen-resizeobserver-loop-limit-exceeded/5785) 和 [GitHub](https://github.com/Jermolene/TiddlyWiki5/discussions/5821) 上关于这个问题的讨论