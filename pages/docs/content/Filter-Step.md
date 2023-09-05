---
title: '筛选器 Step'
---

<$railroad text="""
[:"!"]
[: [<" 操作符 ">]("Filter Operators") [:":" <" 尾码 ">] ]
[<" 参数 ">]("Filter Parameter")
"""/>

一个 <<.def step>> 为[筛选器](Filter Syntax)内的单一操作。

在编程术语中，这就像函数调用，[该 step 的输入](Filter Run)当作一个隐含参数传递。一个 step 的输出是一个 [selection](Title Selection) 提供给 [run](Filter Run)，从而为包含它的整个[筛选器表达式](Filter Expression)的输出。

step 的<<.def 操作符>> 是[预先定义名称](Filter Operators)的清单，可以通过插件扩充。任何无法识别的操作符名称被视为 <<.olink field>> 操作符的尾码。如果完全省略一个 step 的操作符，则其默认为 `title`。

<<.def 尾码>>是额外的文本，通常是[字段](TiddlerFields)的名称，为某些操作符的延伸含义。

许多 steps 需要明确的<<.def 参数>>值也称为<<.def 操作数>>，进一步定义该 step 要做什么。

<<.from-version "5.1.23">> 某些步骤接受多个参数，这些参数由一个 ` , ` 字符分隔。
