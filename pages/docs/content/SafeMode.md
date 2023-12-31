---
title: '安全模式'
---

# 简介

安全模式提供了一种方法来禁用 TiddlyWiki 大部分的客制功能。这是很有用的，因为如果是客制功能错误，TiddlyWiki 可能变得不能工作。一个特殊的问题是，当升级到 TiddlyWiki 较​​新的核心版本（尤其是在试用版）导致一些客制功能失效。

<<.warning "安全模式应仅用于 TiddlyWiki 的单档配置，且仅用于不自动保存的保存模块。在主从式配置中使用安全模式，可能会导致数据丢失。">>

# 启用安全模式

在浏览器中启用安全模式，开启 TiddlyWiki 的 URL 哈希值设置为字符串 `#:safe` 。例如：

<https://tiddlywiki.com/#:safe>

# 安全模式如何工作的原理

安全模式触发两个变化︰

* 所有的插件都暂时禁用。您可以使用 <<.icon $:/core/images/options-button>> [控制台]($:/ControlPanel)禁用单个插件
* 在安全模式下，任何覆写默认条目的条目将被改名为加上前缀 `SAFE: `，并撤销原始的默认条目。
* 某些配置选项会被忽略，并使用默认设置：
    * [维基解析规则配置](WikiParserRuleConfiguration)

将显示一个报告条目，让您可以检查被重命名的条目。
