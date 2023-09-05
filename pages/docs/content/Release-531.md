---
title: '5.3.1'
---

_[此版的更新纪录详见](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.3.0...v5.3.1)//

<<.banner-credits
	credit:"""恭喜 [vilc](https://talk.tiddlywiki.org/u/vilc)，他们赢得此版本横幅的设计 (这是[竞赛讨论串](https://talk.tiddlywiki.org/t/banner-image-competition-for-v5-3-0/7406/10))。
"""
	url:"https://github.com/Jermolene/TiddlyWiki5/blob/4124bbdfb3e2445d45488006dfff1925d067ab0f/editions/tw5.com/tiddlers/images/New%20Release%20Banner.png?raw=true"
>>

# v5.3.1 概览

此版本仅在 [v5.3.0](Release 5.3.0) 之后数周发布。该版本的动机是快速修复 v5.3.0 中出现的一些问题。此版本中还包含一些其他改进，特别是通过 HTTP 访问二进位资源的能力 - [演示](WidgetMessage: tm-http-request Example - Random Dog) 下载狗的随机图像或视频。

# Bug 修复和 v5.3.0 更改的还原

* 由于性能问题，还原添加的 `widget.destroy()` 方法（请参阅 <https://github.com/Jermolene/TiddlyWiki5/pull/7468>）
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7647">> 嵌入时将 **$output** 属性设置为 `text/plain` 效率低下，表现为导出时间极慢。
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7648">> 不必要的错误消息 "Global assignment is not allowed within modules on node"

# 翻译改进

改进了以下翻译：

* 华语
* 波兰语

# 小工具改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7594">> **tabindex** 属性至 SelectWidget

# 可编程性改进

* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/7611">> ImportVariablesWidget 和 [Pragma: \import](#Pragma%3A%20%5Cimport) 在解析 tiddlers 时修剪空格
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/9b2af1359614f4ad5afd05be7cf9853909334592">> [WidgetMessage: tm-http-request]] 处理二进位回应 ([[演示](WidgetMessage: tm-http-request Example - Random Dog))

# 错误修复

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7627">> 目录还原
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7595">> [WidgetMessage: tm-http-request](#WidgetMessage%3A%20tm-http-request) 的 bindStatus 和 bindProgress 参数
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7606">> 用于处理包含非单词字符的变量的属性替换
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7624">> v5.3.0 中引进的编译指示可以用空格
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7619">> 条目图标的大小
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7622">> 从类似 Chrome 的浏览器拖放到 Firefox
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7679">> checkbox 小工具的 listIndex 模式

# Node.js 改进

* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/7645">> 浏览器主控台报告 ~JavaScript 错误

# 开发者改进

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/6c7c21a87bdb0d8a00df1c14eea18912164e0b57">> Jasmine 插件中的 overeager onload 处理程序
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/08bad90e51c45233a196333e101bbbf6ecf702ce">> 影子条目列表的排序不反映插入顺序

# 致谢

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们的时间，协助改进 ~TiddlyWiki：

<<.contributors """
AnthonyMuscio
BramChen
btheado
catter-fly
cmo-pomerium
CrossEye
flibbles
hffqyd
lilscribby
linonetwo
Marxsal
mateuszwilczek
pille1842
pmario
rmunn
saqimtiaz
stevesunypoly
TiddlyTweeter
twMat
yaisog
""">>
