---
title: '使用宏替换串联文本和变量'
---

<<.from-version "5.3.0">> 建议使用[替换属性值](Substituted Attribute Value)或[替换筛选器表达式子](substitute Operator)来连接文本和变量。

这是 ~TiddlyWiki 常见的使用案例，您会想把变量的结果与各种比特的文本串放在一起。在一些编程语言中，这个处理通常被称为 "串联" 文本。

例如，您可能希望为您的客户数据库设置模板，其中链接将自动参照有关客户的其他联系信息。在您的条目内，您可以尝试这样：

<<.bad-example "`[附加信息](<<currentTiddler>>-Contact)`">>

但这不会工作。如果您尝试此操作，该链接被逐字解译，并且尝试将您带至︰

```
<<currentTiddler>>-Contact
```

解决方式是使用宏将 `<<currentTiddler>>` 的渲染值与附加文本的一部分 `-Contact` 放在一起。

在该条目的顶端创建一个宏，像这样：

```
\define linkup(link) [[附加信息|$link$-Contact]]
```

您可能会想像这样调用新的宏：

<<.bad-example "`<<linkup <<currentTiddler>> >>`">>

但是如果您这样做，您会发现 `<<currentTiddler>>` 不会被渲染，而是逐字传递。

相反，您可以使用 <<.wlink "MacroCallWidget">> 小工具，像这样︰

```
<$macrocall $name="linkup" link=<<currentTiddler>> />
```

在这种情况下，我们将一个变量的值直接传递给我们的宏。这通常是进行此任务的一般方式。如果您想基于其他变量创建更多的链接，可以重复使用宏的每种情况。

如果，在这种情况下，您使用的唯一的变量是 `currentTiddler` ，那么您可以写一个简单的宏，像这样：

```
\define linkup() [[附加信息|$(currentTiddler)$-Contact]]
```

请注意，在这种情况下，我们不传递参数。相反，我们使用特殊语法 `$(variable)$` 引用变量。由于我们不传递参数，我们可以更简单地调用宏，而不用 `<$macrocall>` 小工具，像这样：

```
<<linkup>>
```
