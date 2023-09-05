---
title: '翻译机制'
---

~TiddlyWiki 的翻译机制管理和提供 TiddlyWiki 用户界面翻译的语言插件之间进行切换。开发人员网站 <https://tiddlywiki.com/dev/> 解释翻译者如何创建和提交 TiddlyWiki 的翻译。

当前语言插件的名称是从 [$:/language](#%24%3A/language) 条目读取。如果所选择的插件改变，则任何显示可翻译文本会自动改变。

翻译插件是成捆的条目，每个条目包含独立的可翻译字符串。各该字符串依据需要被嵌入使用。

可翻译字符串通常位于命名空间中 `$:/language/`，例如：

* [$:/language/EditTemplate/Shadow/OverriddenWarning](#%24%3A/language/EditTemplate/Shadow/OverriddenWarning)
* [$:/language/Docs/ModuleTypes/isfilteroperator](#%24%3A/language/Docs/ModuleTypes/isfilteroperator)
* [$:/language/EditTemplate/Fields/Add/Value/Placeholder](#%24%3A/language/EditTemplate/Fields/Add/Value/Placeholder)
