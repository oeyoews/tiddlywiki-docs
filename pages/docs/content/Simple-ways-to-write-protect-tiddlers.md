---
title: '简单的写入保护条目的方法'
---

有时，您想保护个别条目免受意外变更，无论是来自您自己或您 ~TiddlyWiki 文件的访客。这里有几个简单的方法。请注意，这些不会提供强化保护，以防止故意攻击。

## 使用样式表通过标签名称锁定条目

用以下内容创建一个条目，并设其标签为 `$:/tags/Stylesheet`：

```css
[data-tags*="Locked"] button[title="{{$:/language/Buttons/Edit/Hint}}"]   {display: none;}
```

_如果您的 TW 语言不是英语，那么您需要将 'title="...."' 中的文本，更改为您悬停在编辑按钮时的文本。_

现在，标签为 "Locked" 的任何条目都将隐藏编辑按钮。要取回它，您需要打开前述样式表条目，并将其中的 "none" 改为 "inline"。

## 使用嵌入，隐藏您的条目于系统条目中

* 打开您的条目进行编辑。
* 选择标题并拷贝。
* 选择所有的条目内容。
* 点击剪切工具。
* 在标题框中，输入 `$:/` ，然后粘贴原始标题。
* 使用默认值来剪切文本至一个新的条目，并将其替换为一个嵌入

现在您可以查看原来的条目的内容，但是编辑它们，您必须找到以 `$:/` 前缀的该条目。