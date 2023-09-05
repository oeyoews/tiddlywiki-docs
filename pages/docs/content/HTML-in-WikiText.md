---
title: 'HTML 标记'
---

# HTML 标记与注释

HTML 标记与注释可于[维基文本](WikiText)中直接使用，例如：

```
<article class="hello">
这是我的很好且简单的文本区块。[[嗨，您好|HelloThere]]
<!-- 此注释不会出现于化的输出中 -->
</article>
```

## 编译指示的注释

<<.from-version 5.2.0>> 注释现在可以与编译指示自由混合，也可以在维基文本区块的主体中自由混合。

```
<!-- 新的: 描述宏的注释
 -->
\define test()
一些文本 <!-- 内联注释 -->
\end

<<test>>
```

# 重要的

## 安全性

<<.warning """请注意，任何以 `on` 为前缀的 HTML 属性都将从呈现的 HTML 内容中删除。这样做是为了防止事件处理进程（例如 “onclick”）被用作以隐秘的方式运行不受信任的 ~JavaScript。~TiddlyWiki 的一个设计目标是，确保可运行的 ~JavaScript 只能通过显式的 ~JavaScript 模块条目，或原始标记条目进入系统。这使得在多用户环境中，过滤不安全的内容成为可能，也使得复制不受信任的维基文本示例更加安全。""">> 

## 小工具

<<.tip """[小工具与 HTML 标记具有相同的语法](Widgets in WikiText)，因此以下信息也适用于它们。""">>

# 区块模式与内联模式

要获取在[区块模式](Block Mode WikiText)下[解析](WikiText Parser Modes)的 HTML 元素的内容，起始标记必须后跟两个换行符号。

如果没有这两个换行符号，标记内容将以[内联模式](Inline Mode WikiText)进行[解析](WikiText Parser Modes)，这意味着无法识别区块模式格式，例如 wikitext 表格、清单和标题。

另请参阅[维基文本解析器模式：HTML 示例](WikiText parser mode: HTML examples)和[维基文本解析器模式嵌入](WikiText parser mode transitions)。

# 自关闭元素

以下标记被视为 'void'。这意味着 `<tag>` 被视为 `<tag/>`，不需要终止标记 `</tag>` （如果提供了，则忽略之，并视为纯文本）。

* `<area>`、`<base>`、`<br>`、`<col>`、`<command>`、`<embed>`、`<hr>`、`<img>`、`<input>`、`<keygen>`、`<link>`、`<meta>`、`<param>`、`<source>`、`<track>`、`<wbr>`

如果不关闭任何其他标记，则其行为就像在条目的末尾缺少的结束标记一样。

# 属性

在常规 HTML 语法的扩充中，元素和小工具的属性可以[几种不同的方式](Widget Attributes)来指定：

* 一个[文本字符串](Literal Attribute Values)
* 一个[文本引用的嵌入](Transcluded Attribute Values)
* 一个[宏/变量的嵌入](Transcluded Attribute Values)
* 当作一个[筛选器表达式的结果](Filtered Attribute Values)
* <<.from-version "5.3.0">> 作为对[给定字符串运行筛选器和变量替换的结果](Substituted Attribute Values)

## 样式属性

<<.from-version "5.2.2">> ~TiddlyWiki 支持一般的 HTML **style** 属性，用于将 CSS 样式分配给元素：

```
<div style="color:red;">您好</div>
```

在一个 HTML 的扩充 ~TiddlyWiki 还支持访问个别 CSS 样式为独立属性。例如：

```
<div style.color="red">您好</div>
```

此语法的优点是，其简化分配计算值给 CSS 样式。例如：

```
<div style.color={{!!color}}>Hello</div>
```
