---
title: '分组清单'
---

下列的侧边栏页签，给了创建嵌套式分群清单例子。

## **类型**页签

如以下所示的[类型]($:/core/ui/MoreSideBar/Types)页签，其外层清单筛选器选择在 `type` 字段中找到的每个离散的值，内层清单筛选器选择该类型的所有（非系统）条目。

<<tw-code-link "$:/core/ui/MoreSideBar/Types">>

## **最近**页签

在[最近]($:/core/ui/SideBar/Recent)页签的清单系使用 TimelineMacro 生成。这里的外层清单筛选器选择在 `modified` 的字段中找到每个日期，而内层清单筛选器选择所有条目在 `modified` 的字段都为同一天。

<<tw-code-link "$:/core/macros/timeline">>