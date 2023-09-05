---
title: '宏定义语法'
---

<<.preamble """以下是 `\define` 编译指示的语法，使用[语法图表](Railroad Diagrams)的形式演示。另有一个[简单概述](Macro Definitions in WikiText)。""">>

<$railroad text="""
"\define" " 空格 " " 名称 " " 参数 " [:" 空格 "] " 其余 "
"""/>

<<.place 空格>>表示一个[空白字符](Filter Whitespace)串行。

[宏](Macros)<<.place 名称>>是一个除了 `(` 或 `>` 以外的非空白字符串行

参数声明清单 (<<.place 参数>>) 都有以下语法：

<$railroad text="""
"(" [:"  分隔符号  "] [:{ " 参数 " "  分隔符号  " }] ")"
"""/>

参数的<<.place 分隔符号>>是一个与<<.place 参数名称>>不匹配的任何字符串行。除其他外，包括逗号、空格和分行符号。

<<.place 参数名称>>是一个由字母 (`A`--`Z`, `a`--`z`)、数字 (`0`--`9`)、连字号 (`-`) 和底线 (`_`) 组成的字符串行。

每个<<.place 参数>>都有以下语法：

<$railroad text="""
"  参数名称  " [: [:" 空格 "] ":" [:" 空格 "] " 缺省 " ]
[: " 空格 "]
"""/>

可选的参数<<.place 缺省>>值指定的方式如下：

<$railroad text={{$:/editions/tw5.com/railroad/macro-parameter-value}}/>

定义的<<.place 其余>>具有以下语法：

<$railroad text="""
( " 片段 " | lf " 片段 " lf "\end" [:" 空格 "] ) lf
"""/>

其中 <<.place lf>> 表示一个换行符号。

<<.place 片段>>是不会结束宏定义的任何字符串行。也就是说，单行片段不能包含分行符号，而多行片段不能包含 `\end`。

片段可以包含预留位置使用以下语法：

<$railroad text="""
( "$" "名称" "$" | "$" "(" "名称" ")" "$" )
"""/>
