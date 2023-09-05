---
title: '格式化列表结果为表格 (不用 CSS)'
---

有时您想要 ``<$list>`` 小工具的结果为多行的格式，而非只是直接列表。下面的方法，创建一个实际的表格结构，并使用 [nth 运算符](nth Operator)提供列的中断点。它是响应式的，也就是说，如果窗口太小，则重新定位以显示较少的行。

首先，外部清单结构，您必须提供一个计数，指示应该发生在项目数量的列。所以，在下面的示例中，每列在 4 个项目后中断，因此串行为 1,5,9 等等。请注意，这需要您事先知道会有的最大项目数量。还有一个内部限制是设置为 n-1 个项目，其中 n 是您想要的行数。

还要注意，您需要在内部的 `<$list>` 小工具中，重复驱动筛选器运算符。显然，此技术适合于宏实现。

其他表格制作技术也请参阅︰

* [以 CSS 格式化列表结果为表格 - 可变行数的方法](Formatting List Results as Tables with CSS - Variable Column Method)
* [以 CSS 格式化列表结果为表格 - 指定行数的方法](Formatting List Results as Tables with CSS - Specified Columns Methods)


## 少于 70 个项目的四行表格的示例代码

```
<table>
<$list filter="1 5 9 13 17 21 25 29 33 37 41 45 49 53 57 61 65" variable ="rows">
    <$list filter="[tag[Filter Operators]limit[50]] +[nth<rows>]" variable="cell">
        <tr>
        <td> <<cell>> </td>
        <$list filter="[tag[Filter Operators]limit[50]] +[allafter<cell>limit[3]]" variable="this">
            <td> <<this>> </td>
        </$list>
        </tr>
    </$list>
</$list>
</table>
```

## 结果

<table>
<$list filter="1 5 9 13 17 21 25 29 33 37 41 45 49 53 57 61 65" variable ="rows">
    <$list filter="[tag[Filter Operators]limit[50]] +[nth<rows>]" variable="cell">
        <tr>
        <td> <<cell>> </td>
        <$list filter="[tag[Filter Operators]limit[50]] +[allafter<cell>limit[3]]" variable="this">
            <td> <<this>> </td>
        </$list>
        </tr>
    </$list>
</$list>
</table>

