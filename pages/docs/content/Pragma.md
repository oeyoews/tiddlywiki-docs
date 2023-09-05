---
title: '编译指示'
---

<<.def 编译指示>>是 WikiText 的一个特殊的组件，提供操控剩余的文本解析的方式。

编译指示位于行首为 `\`，他们只能出现于内文的起始处，编译指示之间允许空白的行。如果编译指示出现在内文的主体，会被当作是普通的文本一样处理。

<<.from-version "5.2.6">> 编译指示可以包含可选的前导空格字符。

下列是可用的编译指示：

**`\define`**
: 用于定义一个[宏](Macros)
**`\rules`**
: 调整用来解析文本的规则集
**`\whitespace trim` 或 `\whitespace notrim`**
: <<.from-version "5.1.15">> 控制是否裁减文本的起始和结尾的空格（默认为 **notrim**）。当由 linebreak 生成的空格会影响格式化时，此设置将非常有用
**`\import <filter-expression>`**
: <<.from-version "5.1.18">> 用于从筛选器表达式标识的条目中导入宏定义
**`\parsermode block` 或 `\parsermode inline`**
: <<.from-version "5.2.4">> 调整剩余文本是以区块模式还是内联模式解析。

请参阅 [Pragma](#Pragma)。