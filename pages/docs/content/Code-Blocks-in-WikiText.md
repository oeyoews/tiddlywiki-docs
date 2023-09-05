---
title: '代码'
---

您可使用三个连续反引号 <code>&#96;&#96;&#96;</code> 标示代码区块 (<<.icon $:/core/images/mono-block>>)：

<pre>&#96;&#96;&#96;
This will be monospaced
&#96;&#96;&#96;
</pre>

显示结果：

```
This will be monospaced
```

若要正确解译，三个连续反引号必须要在行的开头并后紧跟一个分行符号。

请注意，任何前面的段落内容应以双换行符号正确结束。所以，这个例子是错的：

<pre>This is an ordinary paragraph
&#96;&#96;&#96;
This will be monospaced
&#96;&#96;&#96;
</pre>

正确的版本是：

<pre>This is an ordinary paragraph

&#96;&#96;&#96;
This will be monospaced
&#96;&#96;&#96;
</pre>

注意有些键盘配置会将反引号当成 [dead key](https://en.wikipedia.org/wiki/Dead_key)，造成无法输入反引号。诀窍是输入三个反引号后再输入一个空格，或者一次输入六个反引号后再输入一个空格，然后将光标往回移动三个字符，再输入或粘贴内容。
