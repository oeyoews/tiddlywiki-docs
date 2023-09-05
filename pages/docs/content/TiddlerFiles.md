---
title: '条目文件'
---

条目可以保存于几种不同格式的文本档。文件包含单个条目也可以有一个辅助的 `.meta` 文件，其格式为成对的`名称:值`串行，例如：

```
title: TheTitle
modifier: someone
```

## ~TiddlyWeb-风格 .tid 文件

这些文件由一些行组成，包含成对的`名称：值`、一个空行、接着条目内容。例如：

```
title: MyTiddler
modifier: Jeremy

This is the text of my tiddler.
```

请注意，很多文本编辑器，需要文件包含换行符号。如果你想避免包含条目内文里的换行，可以用这个替代语法的：

```
title: MyTiddler
modifier: Jeremy
text: This is the text of my tiddler.
```

// 在内部，[内容类型](ContentType) `application/x-tiddler` 被用于这些文件//

## TiddlyWiki `<DIV>` .tiddler 文件

在 TiddlyWiki 5，`*.tiddler` 文件看起来像这样：

```
<div title="AnotherExampleStyleSheet" modifier="blaine" created="201102111106" modified="201102111310" tags="examples" creator="psd">
<pre>Note that there is an embedded <pre> tag, and line feeds are not escaped.

And, weirdly, there is no HTML encoding of the body.</pre>
</div>
```

这些 `*.tiddler` 文件并不完全与 TiddlyWiki HTML 文件里的条目一样是以 HTML 编码的。

旧的 `*.tiddler` 文件使用更加紧密匹配 TiddlyWiki 用的存放格式：

```
<div tiddler="AnotherExampleStyleSheet" modifier="JeremyRuston" modified="200508181432" created="200508181432" tags="examples">This is an old-school .tiddler file, without an embedded &lt;pre&gt; tag.\nNote how the body is &quot;HTML encoded&quot; and new lines are escaped to \\n</div>
```

//在内部，[内容类型](ContentType) `application/x-tiddler-html-div` 被用于这些文件//

## ~TiddlyWeb-风格 JSON 文件

这些文件是`名称：值`属性的简单散列数组。所有字段的值必须都指定为字符串。

例如：

```
[
	{
		"title": "First Tiddler",
		"text": "Text of first tiddler",
		"tags": "one two [[t h r e e]]"
	},{
		"title": "Second Tiddler",
		"text": "Text of second tiddler",
		"modified": "20150216171751154"
	}
]
```

在内部，[内容类型](ContentType) `application/json` 被用于这些文件

请注意，不符合条目结构的 JSON 文件，将当成包含 JSON 数据的单一条目导入。

## 新的基于 JSON 格式的 ~TiddlyWiki HTML 文件

TiddlyWiki HTML 文件的新格式将 JSON 格式的条目嵌入到脚本标记中：

```json
<script class="tiddlywiki-tiddler-store" type="application/json">[
{"title": "A","text": "One"},
{"title": "B","text": "Two"}
]</script>
```

## 用于 ~TiddlyWiki HTML 文件的基于 DIV 的旧格式

[TiddlyWiki 经典版](TiddlyWikiClassic) 和 [TiddlyWiki 5](TiddlyWiki5) 在 v5.2.0 之前的版本中，存储了以 `<DIV>` 格式编码的条目。

~TiddlyWiki 导入​​一个未加密的基于 DIV 的 HTML 文件时，该文件需有 `<div id="storeArea">`，其包含如上所述条目的 DIVs 。例如：

```
<div id="storeArea">
<div created="20130302085406905" modified="20130302084548184" tags="Examples" title="A tiddler title">
<pre>HTML encoded text of tiddler
</pre>
</div>
<div created="20140315085406905" modified="20140321084548184" tags="One Two [[Three with Space]]" title="Another title" customfield="field value">
<pre>Text of this tiddler
</pre>
</div>
</div>
```
