---
title: '以 CSS 格式化列表结果为表格 - 指定行数的方法'
---

有时您想要 ``<$list>`` 小工具的结果为多行的格式，而非只是直接列表。此方法使用 CSS 设置列表行数，且假定您知道要多少行。这里的方法是创建一个样式，反映您希望的表格行数，然后再套用样式到结果清单的输出。

其他表格制作技术也请参阅︰

* [以 CSS 格式化列表结果为表格 - 可变行数的方法](Formatting List Results as Tables with CSS - Variable Column Method)
* [格式化列表结果为表格 (不用 CSS)](Formatting List Results as Tables (no CSS))


### 1) 创建一个该行的条目，标签为 `$:/tags/Stylesheet`，包含︰

```
/* FOUR COLUMN MODE */
.fourcolumns {
   display:block;
   column-count:4;
   column-gap:1em;
   -moz-column-count:4;
   -moz-column-gap:1em;
   -webkit-column-count: 4;
   -webkit-column-gap:1em;
}
```

请注意您需要标明行数的不同地方

### 2) 然后格式化您的输出像这样：

```
@@.fourcolumns
<$list filter="[tag[Filter Operators]]" variable="foo">
<<foo>><br>
</$list>
@@
```

## 示例显示筛选器操作符的部分列表

@@.fourcolumns
<$list filter="[tag[Filter Operators]limit[24]]" variable="foo">
<<foo>><br>
</$list>
@@
