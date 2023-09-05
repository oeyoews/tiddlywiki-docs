---
title: 'unusedtitle'
---

<<.def unusedtitle>> [宏](Macros) 返回一个未使用的名称。您可以选择提供一个基础名称来生成新名称。

它使用与创建新条目按钮相同的方法，将一个数字附加到基础名称的末尾。

## 参数

**baseName**
:指定所需的基础名称的字符串，默认为 `新条目`。<br>默认的设置可在[控制台]($:/ControlPanel)'': 信息 : 基本 - 选项卡''中调整。

**separator**
: <<.from-version "5.2.0">> 一个''可选的''字符串，指定 baseName 与唯一编号之间的分隔符号。例如：`separator:"-"`。默认为空格：`" "`。如果您需要一个空的分隔符号，请使用''模板''！

**template**
: <<.from-version "5.2.0">> 一个''可选的''模板字符串，可用于使您具有最大的灵活性。如果使用模板字符串，总会有计数器。 

## 模板字符串

**`$basename$`**
: 此变量将被 **baseName** 参数替换

**`$separator$`**
: 此变量将被 **separator** 参数替换

**`$count$`**
: 此变量将自动创建，并且是从 0 开始的计数器

**`$count:4$`**
: 此变量将自动创建，并从 0000 开始
: `:4` 表示数字的位数

## 示例

<<.macro-examples "unusedtitle">>
<<list-links "[prefix[unusedtitle Macro (E]!sort[]]">>