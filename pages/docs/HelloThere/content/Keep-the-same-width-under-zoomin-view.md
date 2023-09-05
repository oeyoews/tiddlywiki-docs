---
title: zoomin视图下宽度保持一致
---

有时zooming视图无法完全居中，左右两边宽距不一致。这种情况就可以把下面的代码复制到一个新条目里，并加上标签`$:/tags/Stylesheet`。

```
body.tc-body .tc-page-container.tc-page-view-zoomin .tc-tiddler-frame {
    width: 100%;
    width: calc(100% - 0px);
}
```
