---
title: '变量属性值'
---

变量属性值用[宏调用](Macro Calls)前后以双角括号标识。例如：

```
<div title=<<MyMacro "Brian">>>
...
</div>
```
<<.warning "检索宏定义中的文本，并运行文本替换 (即 <<.param $param$>> 和 <<.param &#36;(...)&#36;>> 语法)。属性值的值将是结果文本。该文本中的任何维基语法（包含进一步的宏调用和变量引用）都将保持原样。">>