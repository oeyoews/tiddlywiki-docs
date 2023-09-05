---
title: '以 CSS 格式化列表结果为表格 - 可变行数的方法'
---

有时您想要 ``<$list>`` 小工具的结果为多行的格式，而非只是直接列表。此方法使用 CSS 设置列表行数。它是响应式的，也就是说，如果窗口太小，则重新定位以显示较少的行。

您不直接指定固定的行数，而是指定列表的最大宽度（可以是嵌入条目的宽度）和每个项目的宽度。其从左到右列出，然后换行到新行。

其他表格制作技术也请参阅︰

* [以 CSS 格式化列表结果为表格 - 指定行数的方法](Formatting List Results as Tables with CSS - Specified Columns Methods)
* [格式化列表结果为表格 (不用 CSS)](Formatting List Results as Tables (no CSS))


## 使用现有的 50个 ~TiddlyWiki 标签的示例清单

```
<div class="dynamic-table">
  <$list filter="[has[tags]tags[]sort[title]first[50]]">
    <span class="item">
      <$transclude tiddler="$:/core/ui/TagTemplate"/>
    </span>
  </$list>
</div>
```

## 用于清单的示例样式表

```
<style>
.dynamic-table {
  max-width:700px; /* could transclude tiddler width instead */
  -ms-box-orient: vertical; /* might be unnecessary */
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: inline-flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  flex-direction: row;
}

.item {
  max-width:160px; min-width:160px;
  flex: 0 0 2em; /* -grow, -shrink, -basis */
}
</style>
```

## 结果

<div class="dynamic-table">
  <$list filter="[has[tags]tags[]sort[title]first[50]]">
    <span class="item">
      <$transclude tiddler="$:/core/ui/TagTemplate"/>
    </span>
  </$list>
</div>

<style>
.dynamic-table {
  max-width:700px; /* could transclude tiddler width instead */
  -ms-box-orient: vertical;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: inline-flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  flex-direction: row;
}

.item {
  max-width:160px; min-width:160px;
  flex: 0 0 2em; /* -grow, -shrink, -basis */
}
</style>

