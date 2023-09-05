---
title: '增加 Twitter 关注按钮'
---

以下是一个宏，为特定的用户名提供一个 Twitter 关注按钮：

```
\define twitterFollowButton(username)
<iframe allowtransparency="true" frameborder="0" scrolling="no" src="//platform.twitter.com/widgets/follow_button.html?screen_name=$username$" style="width:300px; height:20px;"></iframe>
\end
```

相较于 <https://dev.twitter.com/docs/follow-button> 发布的版本，唯一的变化是删除了换行字符。

请注意，src 网址不包含协议（即 "http" 或 "https"）。这样可使其运作于无论是托管在 HTTP 或 HTTPS 网域的网站上。如果您希望 Twitter 按钮能运作于在 "file://" 网址上脱机使用的 TiddlyWiki，那么您需要手动增加协议。例如：

```
<iframe allowtransparency="true" frameborder="0" scrolling="no" src="https://platform.twitter.com/widgets/follow_button.html?screen_name=jermolene" style="width:300px; height:20px;"></iframe>
```
