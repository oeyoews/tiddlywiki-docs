---
title: 目录导航栏
---

【卡片集】

* Author：机杼
* 描述：目录导航栏，又名卡片图书。可以自定义卡片高度、图书的根条目（根目录，可以参考[目录导航栏实例](#%E7%9B%AE%E5%BD%95%E5%AF%BC%E8%88%AA%E6%A0%8F%E5%AE%9E%E4%BE%8B)理解根条目的意思）。本目录下有三个条目，目录导航栏使用说明、Tabs加强版、目录导航栏实例。
* 使用方法：参考[目录导航栏使用说明](#%E7%9B%AE%E5%BD%95%E5%AF%BC%E8%88%AA%E6%A0%8F%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E)、[目录导航栏实例](#%E7%9B%AE%E5%BD%95%E5%AF%BC%E8%88%AA%E6%A0%8F%E5%AE%9E%E4%BE%8B)，拖放宏[tabs加强版](#tabs%E5%8A%A0%E5%BC%BA%E7%89%88)到你的wiki中。


```
条目标题：tabs加强版
标签：$:/tags/Macro
条目类型：text/vnd.tiddlywiki
```


<$let selected-tiddler="tabs加强版">
	<$macrocall $name="code" language={{{[<selected-tiddler>get[type]]}}} src={{{[<selected-tiddler>get[text]]}}} caption={{{[<selected-tiddler>get[title]]}}} />
</$let>

<$let selected-tiddler="目录导航栏实例">
	<$macrocall $name="code" language={{{[<selected-tiddler>get[type]]}}} src={{{[<selected-tiddler>get[text]]}}} caption={{{[<selected-tiddler>get[title]]}}} />
</$let>