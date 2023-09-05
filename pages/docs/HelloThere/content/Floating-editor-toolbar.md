---
title: 悬浮编辑器工具栏
---

新建条目，标题随意，添加系统标签 $:/tags/Stylesheet

然后下面的代码填入条目内容中，点击保存条目，即可实现此功能。

注意：在Vanilla或SnowWhite布景主题下，测试会生效，其它主题未知。

```
/* $:/themes/tiddlywiki/vanilla/sticky */


/* 编辑器工具栏 */

.tc-editor-toolbar {
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -o-sticky;
    position: -ms-sticky;
    position: sticky;
    top: 39px;
    background: #fdf6e3;
    z-index: 500;
}

.tc-tiddler-preview {
    overflow: unset;
}

```