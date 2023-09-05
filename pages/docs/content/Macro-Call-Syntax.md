---
title: '宏调用语法'
---

<<.preamble """以下是宏调用的 WikiText 语法，使用[语法图表](Railroad Diagrams)的形式演示。另有一个[简单概述](Macro Calls in WikiText)。
""">>

<$railroad text="""
"<<" " 名称 " [: " 空格 " [:{" 参数值 "}] ]">>"
"""/>

<<.place 空格>>表示一个[空白字符](Filter Whitespace)串行。

[宏](Macros)<<.place 名称>>是一个除了 `(` 或 `>` 以外的非空白字符串行

每个<<.place 参数值>>都有以下语法：

<$railroad text="""
[: "  参数名称  " [:" 空格 "] ":" [:" 空格 "] ] " 参数值 " [: " 空格 "]
"""/>

<<.place 参数名称>>是一个由字母 (`A`--`Z`, `a`--`z`)、数字 (`0`--`9`)、连字号 (`-`) 和底线 (`_`) 组成的字符串行。

指定<<.place 参数值>>的方式如下：

<$railroad text={{$:/editions/tw5.com/railroad/macro-parameter-value}}/>
