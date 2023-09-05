---
title: '影子条目'
---

\define actions()
<$action-setfield $tiddler="$:/state/tab/moresidebar-1850697562" $field="text" $value="$:/core/ui/MoreSideBar/Shadows"/>
<$action-setfield $tiddler="$:/state/tab/sidebar--595412856" $field="text" $value="$:/core/ui/SideBar/More"/>
\end
\define click(text)
<$button actions=<<actions>>>$text$</$button>
\end

[影子条目](ShadowTiddlers)是维基启动时自[插件](Plugins)加载的条目。与一般条目不同的是它们不出现在大多数清单。

## 覆盖影子条目以修改插件

[影子条目](ShadowTiddlers)可以被具有相同名称的普通条目覆写。这使影子条目完好无损，但插件将在其位置使用覆盖条目，从而有效地允许用户修改插件的行为。

用户被警告不要覆盖影子条目，因为如果在插件更新中更改了影子条目，覆盖的条目可能不再按预期运行。为了解决这个问题，可以修改或删除覆盖的条目。如果覆盖的条目被删除，那么插件会回退到使用原始的影子条目。

## 已被覆写地影子条目

<<list-links "[is[tiddler]is[shadow]sort[title]]">>

## 影子条目

可以在侧边栏的 "更多" -> "默认" 选项卡中找到一个完整的影子条目的列表
