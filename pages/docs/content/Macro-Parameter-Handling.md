---
title: '宏参数处理'
---

## 简介

[宏](Macros)参数以两种不同的方式处理：

1. 在使用宏内容之前，始终对每个参数运行文本替换
1. 当宏内容被维基化时，参数可以当作为变量使用。变量名由参数名称用双下划线包裹组成

有点令人困惑的是，在某些情况下，这两种机制都会出现；这与[使用宏的陷阱](Macro Pitfalls)有关。

## 参数和变量的文本替换

在使用宏的文本之前进行以下替换：

* 模式 `$param$` 被替换为命名参数的值
* 模式 `$(variable)$` 被命名变量的值替换

每当调用宏时，参数或变量的实际值将替换占位符号：

<$macrocall $name="wikitext-example-without-html" src="""\define say-hi-using-parameters(name,address)
嗨，我是$name$，住在$address$。
\end

<<say-hi-using-parameters name:"八哥" address:"兔子坑">>
"""/>

下面是一个使用变量替换的例子：

<$macrocall $name="wikitext-example-without-html" src="""\define say-hi-using-variables()
嗨，我是$(name)$，住在$(address)$。
\end

\define name() 八哥

<$let address="兔子坑">
<<say-hi-using-variables>>
</$let>
"""/>

<<.warning """重要的是要注意，如果插入的文本包含任何替换标记，那么它们将依次被处理。这可能会导致意想不到的结果。""">>

## 将参数当作变量访问

当宏被维基化时，参数可以作为变量访问，参数名称用双下划线包裹。例如，参数 address 将当作变量 <u>address</u> 访问。

因此，上面的例子也可以表示为：

<$macrocall $name="wikitext-example-without-html" src="""\define say-hi-using-parameters(name,address)
嗨，我是<<__name__>>，住在<<__address__>>。
\end

<<say-hi-using-parameters name:"八哥" address:"兔子坑">>
"""/>

将参数作为变量访问仅适用于维基化的宏，例如，当宏用作属性值时。

### 将参数当作变量访问的优点

该技术的主要优点，是它避免了将参数值作为文本字符串替换到宏中，这反过来又有助于避免包含引号的参数出现问题。

例如，考虑这个宏。它使用单个参数当作参数调用另一个宏：

```
\define film-quote(line) <$macrocall $name="anothermacro" actor="Bugs Bunny" line="""$line$"""/>
```

如果使用包含三重双引号的参数调用宏，则上述代码将失败（例如 `<<film-quote 'I quote thrice """ - see!?'>>`）。使用参数变量提供了一种解决方法：

```
\define film-quote(line) <$macrocall $name="anothermacro" actor="Bugs Bunny" line=<<__line__>>/>
```

有关更多讨论，请参阅[宏陷阱](Macro Pitfalls)。