---
title: '筛选器符号概述'
---

<<.preamble """此条目说明撰写基本的[筛选器](Filters)选择一组条目。更多的技术摘要，请参阅[筛选器语法](Filter Syntax)。""">>

<$macrocall $name=".tip" _="""如果您只是将筛选器输入于条目，筛选器什么也不做，他们需要一个上下文。一个实验筛选器的简单方法，是将其输入于[高级搜索]($:/AdvancedSearch)的<<.advancedsearch-tab Filter>>页签。"""/>

最简单的情况是在你已经确切知道你想要的条目，在双重方括弧内输入条目名称，每个名称之间以空格或分行符号区隔：

> `[Recipe book](#Recipe%20book) [ScrambledEggs](#ScrambledEggs) [Mom's apple pie](#Mom%27s%20apple%20pie)`

当名称中并不包含任何空格时，您可以省略中括号：

> `[Recipe book](#Recipe%20book) ScrambledEggs [Mom's apple pie](#Mom%27s%20apple%20pie)`

双中括号实际上是这个的简写形式：

> `[title[ScrambledEggs]]`

... 这给了我们任何筛选器的<<.def "通用形式">>：

> `[operator[parameter]]`

例如，以下是如何选择具有标签 <<.tag Recipe>> 的所有条目：

> `[tag[Recipe]]`

我们可以经由在操作符之前添加一个惊叹号 `!` 来反转意义。例如，我们可以选择任何<<.em 不>>具有 <<.tag Recipe>> 标签的条目：

> `[!tag[Recipe]]`

条目可依其他非名称和标签的字段进行筛选：

> `[field:serving[4]]`

该示例将选择 <<.field serving>> 字段值为 <<.value 4>> 的任何条目。

当一个单字 "serving" 不是一种标准的筛选器操作符（且不太可能是），您可以安全地省略掉前置的 `field:`：

> `[serving[4]]`

# 组合

到目前为止，我们已经看的每个筛选器都只涉及单一 step。但你可以一起<<.def  运行>>数个 steps，像这样：

> `[tag[Vegetarian]!tag[soup]serving[4]]`

请注意整个 run 如何包含于一对中括号内。

一个条目必须符合一个 run 中的<<.em 所有>> steps，因此上述的例子中取回四人份的素食（不含汤）。

一串行的 runs 将选择符合 <<.em 任何>> runs 的条目。我们可以使用这个找出 3、4 或 5 人份的食谱：

> `[serving[3]] [serving[4]] [serving[5]]`

如果想要忽略 4 人份的素食食谱，可以这样：

> `[serving[3]] [serving[4]!tag[Vegetarian]] [serving[5]]`

默认情况下，每个 run 考虑维基中的每个条目。但我们可以使用 `+` 符号强制一个 run 只考虑选择由其前的 runs 所选定的条目：

> `[serving[3]] [serving[4]] [serving[5]] +[tag[Vegetarian]] +[sort[title]]`

这选择 3、4 或 5 人份的食谱，然后筛选<<.em 那些>>只保留素食食谱，且最后对剩下的名称依字母顺序进行排序。

同样的方式，我们可以使用一个 `-` 符号，从到目前为止的结果<<.em 删除>>筛选的条目。在这里，我们选择所有的素食食谱除了其中两样：

> `[tag[Vegetarian]] -[title[ScrambledEggs]] -BeansOnToast`

# 特殊参数

到目前为止，我们看到每个 step 的参数已经在中括号内，这表示 ~TiddlyWiki 将筛选括弧之间的确切字符串。但另外两种括号是可能的：

<<.def "大括号">> `{}` 表示该参数是一个[文本引用](TextReference)，且其将被另一个条目的内容所取代。例如，如果有一个名为 <<.tid Preference>> 的条目其内容是单字 <<.value Vegetarian>>，我们可以说：

> `[tag{Preference}]`

是 `[tag[Vegetarian]]` 的替代方法，这将允许偏好可随着时间改变。

以这种最简单的形式，[文本引用](TextReference)将采用条目的全部内容（在技术术语中,是条目的 <<.field text>> 字段），并以其替换[文本引用](TextReference)。这样，条目的内容将成为筛选器参数，就像您写成 `[tag[Vegetarian]]` 一样。但通过更改偏好的条目的内容来更改参数，为您提供了更大的灵活性。

<<.def  "角括弧">> `<>` 表示该参数是一个[变量](Variables)名称，其值是用来替代。在这里我们使用内置的筛选器的 <<.vlink currentTiddler>> 变量选择其内文包含当前条目名称的所有条目：

> `[search<currentTiddler>]`

请注意，这些特殊括号不能嵌套。例如，不可能写成 `[search{<currentTiddler>}]`。

# 多个参数

<<.from-version "5.1.23">> 某些步骤接受多个参数，这些参数由一个 ` , ` 字符分隔。

> 示例：`[param1],[param2]` 或 `<param1>,{param2}`