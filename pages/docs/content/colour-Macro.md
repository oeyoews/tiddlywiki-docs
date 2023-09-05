---
title: 'colour'
---

<<.def colour>>（或 <<.def color>>）[宏](Macros)返回在[调色板](ColourPalettes)中的一个颜色的 [CSS](Cascading Style Sheets) 值。

如果当前调色板中没有此项目，则以[vanilla 调色板]($:/palettes/Vanilla)代替。如果 vanilla 调色板中不存在此类项目，系统将查找名为 `$:/config/DefaultColourMappings/<colour-name>` 的配置条目，并从文本字段中分离颜色。这使得插件能够为内核调色板中不存在的颜色提供默认值。

## 参数

**名称**
: 调色板项目的名称，例如 `page-background`

<<.macro-examples "colour">>
