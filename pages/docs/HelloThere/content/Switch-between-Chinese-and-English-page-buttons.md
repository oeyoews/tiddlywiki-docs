---
title: 切换中英文的页面按钮
---

参考[CPL插件源](安装CPL插件源)网页上的按钮：

```tw5
list-after: $:/core/ui/ViewTemplate/tags
tags: $:/tags/ViewTemplate
title: LanguageSwitcher
type: text/vnd.tiddlywiki

<$list filter="[[$:/language]get[text]removeprefix[$:/languages/]else[en-GB]]" variable="lang">
<$list filter="[<lang>search[zh]]">
<$button set="$:/language" setTo="$:/languages/en-GB" style="">🇬🇧 Switch to English</$button>
</$list>
<$list filter="[<lang>!search[zh]]">
<$button set="$:/language" setTo="$:/languages/zh-Hans" style="">🇨🇳 切换至中文</$button>
</$list>
</$list>
```

效果类似

<$list filter="[$:/language]get[text]removeprefix[$:/languages/]else[en-GB](#%24%3A/language%5Dget%5Btext%5Dremoveprefix%5B%24%3A/languages/%5Delse%5Ben-GB)" variable="lang">
<$list filter="[<lang>search[zh]]">
<$button set="$:/language" setTo="$:/languages/en-GB" style="">🇬🇧 Switch to English</$button>
</$list>
<$list filter="[<lang>!search[zh]]">
<$button set="$:/language" setTo="$:/languages/zh-Hans" style="">🇨🇳 切换至中文</$button>
</$list>
</$list>