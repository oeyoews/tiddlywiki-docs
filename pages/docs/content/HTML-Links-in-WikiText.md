---
title: '内嵌的 HTML 链接'
---

它经常是有用的，能创建 HTML 链接到外部资源。例如，这里的 `href` 属性的值将被设为 MyLinkDestination 条目的内容：

```
<a href={{MyLinkDestination}}>link</a>
```

然而，有一个意想不到的安全问题，亦即大多数时候链接应该将 `rel` 属性设置为 `noopener noreferrer`，以维护私人 TiddlyWiki 网址（例如，在 Dropbox 上）的隐私。有关详细信息，请参阅 <https://mathiasbynens.github.io/rel-noopener/> 。

```
<a href={{MyLinkDestination}} rel="noopener noreferrer">link</a>
```
