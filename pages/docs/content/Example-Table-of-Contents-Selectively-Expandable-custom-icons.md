---
title: '选择性（自定义图标）'
---

<<.from-version "5.2.4">> 可以定义 `toc-open-icon` 和 `toc-closed-icon` 变量，以更改 toc 宏使用的图标。此设置适用于所有 toc-macro 变体

<$macrocall $name=".example" n="1"
eg="""<$let toc-open-icon="$:/core/images/fold-button" toc-closed-icon="$:/core/images/folder">
<div class="tc-table-of-contents">
<<toc-selective-expandable "Contents">>
</div>
</$let>"""/>
