---
title: 'unusedtitle 宏 (示例 1)'
---

\define testCreate()
<$action-createtiddler $basetitle=<<unusedtitle template:"$count:2$-新条目">>/>
\end

\define testCreate1()
<$action-createtiddler $basetitle=<<unusedtitle baseName:"新条目" separator:"-" template:"$count:2$$separator$$basename$">>/>
\end

\define testNew()
<$action-sendmessage $message="tm-new-tiddler" title=<<unusedtitle baseName:"新条目" template:"$count:2$-$basename$">> />
\end

```
<<unusedtitle template:"$count:2$-新条目">>
```

<$button actions=<<testCreate>> >
<$action-setfield $tiddler="$:/state/tab/sidebar--595412856" text="$:/core/ui/SideBar/Recent"/>
创建条目
</$button>

```
<<unusedtitle baseName:"新条目" template:"$count:2$-$basename$">>
```

<$button actions=<<testNew>>>
<$action-setfield $tiddler="$:/state/tab/sidebar--595412856" text="$:/core/ui/SideBar/Recent"/>
添加条目
</$button>

```
<<unusedtitle baseName:"新条目" separator:"-" template:"$count:2$$separator$$basename$">>
```

<$button actions=<<testCreate1>>>
<$action-setfield $tiddler="$:/state/tab/sidebar--595412856" text="$:/core/ui/SideBar/Recent"/>
创建条目
</$button>

---

<details>
    <summary>显示代码</summary>
    <pre><code><$view><pre><code>
</details>
