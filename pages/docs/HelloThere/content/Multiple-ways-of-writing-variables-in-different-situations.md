---
title: 变量在不同情况下的多种写法
---

## 双尖括号

默认的写法，例如：

```tid
<$md-to-tid-button title=<<title>> typeName=<<type>> k=<<key>>/>
```

## 单尖括号

在筛选器表达式里，就像[嵌入](#%E5%B5%8C%E5%85%A5)要写成单花括号一样，变量也要变成单尖括号：

```tid
<$let target=<<currentTiddler>> targetTitle={{{ [<target>get[draft.title]] ~[<target>get[title]] }}} search={{{ [[$:/state/search-template-list/input]get[text]] }}} draftOf={{{ [<target>get[draft.of]] }}} >
```

例如判断当前条目是否和变量一样。

`[<currentTiddler>has<xxx>]`