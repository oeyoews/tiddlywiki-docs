---
title: '链接'
---

WikiText 的一个关键功能，链接到其他条目或外部网站。

# 手动链接

以条目名称链接到条目：

```
[[Tiddler Title]]
```

链接到条目且指定链接的标题：

```
[[Displayed Link Title|Tiddler Title]]
```

您也可以从编辑器工具见一个链接。点击''链接'' (<<.icon $:/core/images/link>>)，然后搜索且选择一个条目

# 驼峰式链接

条目名称符合驼峰式规则，只要输入此类名称无须双中括号即可自动生成链接，例如： CamelCase

输入前置符号 `~` 即可不生成链接，例如：

<<wikitext-example src:"* ~HelloThere is not a link
* ~<http://google.com/> is not a link">>

# 外部链接

链接到外部[资源](https://en.wikipedia.org/wiki/Web_resource)，例如一个网站或文件，输入其//完整//[网址](https://en.wikipedia.org/wiki/URL)，包括 [URI 格式](https://en.wikipedia.org/wiki/URI_scheme)，像是一个协定 (例如 `http://`, `file://`) 或 `mailto`：

```
https://tiddlywiki.com/

[[TW5|https://tiddlywiki.com/]]

[[Mail me|mailto:me@where.net]]

[[Open file|file:///c:/users/me/index.html]]
```

为使此语法得以正常工作，网址必须是可识别的 URL，包含一个协定，例如 `http://` or `file://`。您可以扩充语法强制指定外部链接：

```
[ext[Open file|index.html]]

[ext[Open file|./index.html]]

[ext[Open file|../README.md]]

[ext[Open file|c:\users\me\index.html]]
```

扩充语法仍可用于完整的 URL，虽然在此情况下，并没有必要：

```
[ext[https://tiddlywiki.com]]

[ext[TW5|https://tiddlywiki.com]]

[ext[Open file|file:///c:/users/me/index.html]]
```

您也可用扩充语法来强制生成一个外部链接：

```
[ext[Donate|bitcoin:1aabbdd....?amount=0.001]]
```

# 自定义条目链接

详细信息请参阅 LinkWidget 用于实现条目链接的底层小工具，包括可以用于自定义其行为的宏。 

# 生成动态链接

[Linking in WikiText](#Linking%20in%20WikiText) 不适合创建动态链接。原因是因为这个维基文本链接：

```
[[link to myself|Linking in WikiText]]
```
是使用 LinkWidget 和 TextWidget 的简写，如下所示：

```
<$link to="Linking in WikiText">
  <$text text="link to myself"/>
</$link>
```
由于两个链接标题 ("link to myself") 和链接目标 ("Linking in ~WikiText") 用作小工具属性，不会发生 WikiText 扩展。

例如，尝试使用[参考](TextReference)和一个[变量](Variables)，动态生成如下所示的链接：

<<.bad-example "`[{{!!caption}}](<<currentTiddler>>)`">>

与尝试使用 LinkWidget 和 TextWidget 是一样的，如下所示：

<<.bad-example """```
<$link to="<<currentTiddler>>">
  <$text text="{{!!caption}}"/>
</$link>
```""">>

这不会按预期工作。带引号的小工具属性内的内容，[[被视为字面的值|HTML in WikiText]]，并受到 WikiText 扩展的保护，因此其将呈现如下：

<<.bad-example "[[{{!!caption}}|<<currentTiddler>>]]">>

为了获得所需的结果，LinkWidget 可以直接使用：

<<wikitext-example-without-html src:"<$link to=<<currentTiddler>>>{{!!caption}}</$link>">>

另请参阅[[构造动态链接|Concatenating text and variables using macro substitution]]的另一个示例。

! 条目内链接 - "锚点链接"

在 ~TiddlyWiki 中，锚点链接可以帮助我们链接到呈现条目中的目标点和不同部分。它们可以帮助读者浏览更长的条目内容。

请参阅[[使用 HTML 的锚点链接|Anchor Links using HTML]]，了解更多信息。