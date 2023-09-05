---
title: 一键操作某标签下的所有条目
---

例如把它们都折叠：

```tid
<$button>
  <$list
      filter="[tag[x]]"
  >
        <$action-setfield
            $tiddler={{{[<currentTiddler>addprefix[$:/state/folded/]]}}}
            text="hide"
        />
  </$list>
</$button>
```