---
title: 提供多语言Caption标题
---

在条目的 `caption` 字段里使用[嵌入](#%E5%B5%8C%E5%85%A5)，嵌入另一个条目

```tw5
title: $:/plugins/linonetwo/tidgi-external-attachments/settings
tags: $:/tags/ControlPanel/SettingsTab
caption: {{$:/plugins/linonetwo/tidgi-external-attachments/settings/settings-caption}}
```

类似这边我们嵌入了 `$:/plugins/linonetwo/tidgi-external-attachments/settings/settings-caption` 条目。

然后在 `$:/plugins/linonetwo/tidgi-external-attachments/settings/settings-caption` 里[使用List微件让内容可以切换中英文](#%E4%BD%BF%E7%94%A8List%E5%BE%AE%E4%BB%B6%E8%AE%A9%E5%86%85%E5%AE%B9%E5%8F%AF%E4%BB%A5%E5%88%87%E6%8D%A2%E4%B8%AD%E8%8B%B1%E6%96%87)：

```tw5
title: $:/plugins/linonetwo/tidgi-external-attachments/settings/settings-caption

\whitespace trim

<$list filter="[[$:/language]get[text]removeprefix[$:/languages/]else[en-GB]]" variable="lang">
	<$list filter="[<lang>search[zh]]">
		<$transclude tiddler="$:/plugins/linonetwo/tidgi-external-attachments/settings/zh-Hans" field="caption" />
	</$list>

	<$list filter="[<lang>!search[zh]]">
		<$transclude tiddler="$:/plugins/linonetwo/tidgi-external-attachments/settings/en-GB" field="caption" />
	</$list>
</$list>
```

注意这边

1. 最好使用 `\whitespace trim` 这个[ext[Pragma|<https://tiddlywiki.com/#Pragma>]]来去掉空格
1. 并使用 `<$transclude>` 微件来形成 inline 的 HTML 结构
1. 在 `<$list>` 微件和 `<$transclude>` 微件之间也只换一次行，不要多余换行。不然可能会让产生出来的标签页变得很粗大，和设置页面里别的标签页不像。