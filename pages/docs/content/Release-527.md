---
title: '5.2.7'
---

_[此版的更新纪录详见](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.2.6...v5.2.7)//

<<.banner-credits
	credit:"""恭喜 [StS](https://talk.tiddlywiki.org/u/StS) 他们赢得此版本横幅的设计 (这是[竞赛讨论串](https://talk.tiddlywiki.org/t/new-release-banner-competition-for-tiddlywiki-v5-2-6/6403/3)和[票选讨论串](https://talk.tiddlywiki.org/t/vote-for-the-tiddlywiki-banner-v5-2-6/6469))。
"""
	url:"https://raw.githubusercontent.com/Jermolene/TiddlyWiki5/7926af85419ef2f813276a05833598d6d65e2ecd/editions/tw5.com/tiddlers/images/New%20Release%20Banner.png"
>>

这是一个错误修复版本，旨在解决 v5.2.6 中发现的向后兼容性问题。相关背景，请参阅[此 GitHub ticket](https://github.com/Jermolene/TiddlyWiki5/issues/7371)。

问题是宏定义中的尾随换行符号被忽略，这影响了内容是以内联模式还是区块模式解析的。

由于 v5.2.7 取代了仅发布不到一周的 v5.2.6，这里是 [v5.2.6 的发行说明](Release 5.2.6)。

# v5.2.6 发行说明

{{Release 5.2.6}}
