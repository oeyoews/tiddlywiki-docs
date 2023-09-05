---
title: 如何让mermaid图谱的节点可以跳转？
---

参考[论坛](https://talk.tiddlywiki.org/t/mermaid-tw5-plugin-update-to-mermaid-8-13-2-9-3-0/1117/19)的用法就可以实现。

```
\define clickactions()
<$action-navigate $to=<<dom-title>>/>
\end

<$eventcatcher selector=".node" $click=<<clickactions>>>

<$mermaid text="""
flowchart LR
    A[Links to Tiddler A] --> B[Links to Tiddler B] --> C[No link]
    click A noop "Tiddler A"
    click B noop "Tiddler B"
"""/>
</$eventcatcher>
```

需要安装mermaid插件。