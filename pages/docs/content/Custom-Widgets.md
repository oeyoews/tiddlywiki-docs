---
title: '自定义小工具'
---

## 简介

<<.from-version "5.3.0">> <<.def "自定义小工具">>是一种特殊的[进程](Procedures)，可以使用与小工具相同的语法调用。

自定义小工具也可用于覆盖内置的 JavaScript 小工具，以自定义它们的行为。

## 定义自定义小工具

自定义小工具通常使用 [Pragma: \widget](#Pragma%3A%20%5Cwidget) 定义：

```
\widget $my.widget(attribute:"Default value")
This is the widget, and the attribute is <<attribute>>.
\end
```

小工具的名称必须以一个美元符号开头。如果它是一个不覆盖现有小工具的用户定义小工具，那么它必须在名称中至少包含一个句点（点）（例如 `$my.widget` 或 `$acme.logger`）。

## 使用自定义小工具

自定义小工具的调用方式与普通内置小工具相同：

```
<$my.widget/>

<$my.widget attribute="The parameter"/>
```

在小工具调用中指定的属性可用作参数变量。

## 访问自定义小工具的内容

在自定义小工具的定义中，调用小工具的内容可通过 `<$slot $name="ts-raw"/>` 小工具获得。如果在没有任何内容的情况下调用小工具，则 <<.wlink SlotWidget>> 小工具的内容将用作默认内容。

例如：

<<wikitext-example-without-html """\widget $my.widget(one:'Jaguar')
<$text text=<<one>>/>
<$slot $name="ts-raw">
	Whale
</$slot>
\end

<$my.widget one="Dingo">
	Crocodile
</$my.widget>

<$my.widget/>""">>

## 自定义小工具如何工作

自定义小工具实作为一种特殊的[变量](Variables)。它们与普通变量的唯一区别是，它们可以当作具有映射到参数的属性的自定义小工具来调用的方式。

## 覆盖内核 ~JavaScript 小工具

自定义小工具可以使用 <<.wlink "GenesisWidget">> 小工具来调用原始小工具，绕过覆盖。例如，这里我们覆盖了 <<.wlink CodeBlockWidget>> 小工具，以在每个文本字符串前后添加 `≤≥` 符号。

<<wikitext-example-without-html """\widget $codeblock(code)
<$genesis $type="$codeblock" $remappable="no" code={{{ [<code>addprefix[≤]addsuffix[≥]] }}}/>
\end

<$codeblock code="Kangaroo"/>

<$codeblock code={{$:/SiteTitle}}/>

```
Python
```

<$let test="Tiger">
<$codeblock code=<<test>>/>
</$let>""">>
