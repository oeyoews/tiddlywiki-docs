---
title: '筛选器'
---

\define openAdvancedSearch()
<$action-setfield $tiddler="$:/state/tab--1498284803" text="$:/core/ui/AdvancedSearch/Filter"/>
<$action-setfield $tiddler="$:/temp/advancedsearch/input" text="[tag[Filters]]"/>
<$action-setfield $tiddler="$:/temp/advancedsearch" text="[tag[Filters]]"/>
\end

您可将 TiddlyWiki 想成是数据库，其记录则为条目。数据库通常提供一种方法，查找哪些记录符合给定的模型，而在 ~TiddlyWiki 此即以筛选器达成。

<<.def 筛选器>>是用于选择一组特定条目的简明符号，称为其<<.def "输出">>。每当 ~TiddlyWiki 遇到一个筛选器，便计算其输出，然后就用那些条目做进一步的工作。像是，对其[计数](CountWidget)或[列表](ListWidget)。

下列示例将一个筛选器传递给 <<.mlink list-links>> 宏，显示所有其<<.olink2 标签 tag>>带有单词 <<.word Filters>> 的条目列表：

<<wikitext-example-without-html """<<list-links "[tag[Filters]]">>""" >>

在维基中加入与删除条目，则筛选器的结果可能改变。~TiddlyWiki 即时重新计算结果，也自动更新任何筛选器为基础的计数或列表。

**了解更多：**

* <$linkcatcher message="tm-navigate" actions=<<openAdvancedSearch>> >[高级搜索]($:/AdvancedSearch)</$linkcatcher> -- 有一个<<.advancedsearch-tab Filter>>选项卡，可易于试验筛选器。

* [筛选的嵌入](Transclusion in WikiText) -- 如果您要在内文中使用筛选结果
