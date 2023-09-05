---
title: '自定义搜索结果'
---

默认情况下，侧边栏的搜索框结果显示为条目名称的简单列表。搜索结果可通过添加插件可视化定制，以不同的方式显示搜索结果。 （如果检测到另外的搜索结果的可视化，则自动分页签显示）。

可视化搜索结果存放在条目标签为 [$:/tags/SearchResults](#%24%3A/tags/SearchResults) 的条目。默认的搜索结果列表是实现在系统条目 [$:/core/ui/DefaultSearchResultList](#%24%3A/core/ui/DefaultSearchResultList)。

若要创建一个新的搜索结果可视化：

1. 创建一个新条目，设其标签为  [$:/tags/SearchResults](#%24%3A/tags/SearchResults)
1. 使用小工具变量 **searchTiddler** 访问包含当前搜索词的条目名称

如果你想要默认显示新的可视化，创建一名为 [$:/config/SearchResults/Default](#%24%3A/config/SearchResults/Default) 的条目，包含您想要默认显示搜索可视化的条目名称。

以下是显示结果按时间倒序的另一种可视化的一个示例：

```
\define searchResults()
<$set name="resultCount" value="""<$count filter="[!is[system]search{$(searchTiddler)$}]"/>""">

{{$:/language/Search/Matches}}

</$set>
<<timeline subfilter:"!is[system]search{$(searchTiddler)$}">>
\end
<<searchResults>>
```

<<.from-version 5.1.23>> 侧边栏搜索引入了更复杂的搜索机制，让使用快捷键 <kbd><<displayshortcuts ((input-down))>></kbd> 和 <kbd><<displayshortcuts ((input-up))>></kbd> 导航搜索结果成为可能. 要将该机制添加到您自定义的搜索结果，请按照以下简单步骤操作：

1. 您的条目标签 <<tag-pill "$:/tags/SearchResults">> 可通过 the <<.var configTiddler>> 变量访问
1. 搜索字段中的用户输入，可通过 <<.var userInput>> 变量访问
1. 使用字段 <<.field first-search-filter>> 和 <<.field second-search-filter>> 保存用于搜索结果的筛选器。相关详细信息，请参阅条目 $:/core/ui/DefaultSearchResultList
1. 使用以下表单，突出显示导航的搜索结果，修改之以满足您的需求：

```
<$list filter="[<userInput>minlength[1]]" variable="ignore">
<$list filter={{{ [<configTiddler>get[first-search-filter]] }}}>
<span class={{{[<currentTiddler>addsuffix[-primaryList]] -[<searchListState>get[text]] +[then[]else[tc-list-item-selected]] }}}>
<$transclude tiddler="$:/core/ui/ListItemTemplate"/>
</span>
</$list>
</$list>
```

<$macrocall $name=".tip" _="请注意，<<.var searchTiddler>> 变量仍然包含用于对搜索结果进行排序的条目的名称。<<.var editTiddler>> 变量包含正在编辑的条目的名称。"/>
