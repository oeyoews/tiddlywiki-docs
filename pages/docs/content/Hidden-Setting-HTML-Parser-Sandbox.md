---
title: '隐藏设置：HTML 解析器沙箱'
---

<<.from-version "5.2.0">> 默认情况下，带有类型 `text/html` 的条目，将显示在设置为空字符串的[沙箱属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox)的 iframe 中。这会导致套用所有安全限制，禁用许多功能，如 JavaScript、下载和外部档引用。这是最安全的设置。

要在全域范围内禁用沙箱，请将条目 $:/config/HtmlParser/DisableSandbox 设置为 `yes`。这将意味着 iframe 中的代码可以完全访问 TiddlyWiki 的内部内容，这意味着恶意的 HTML 页面可以从私有维基中渗出数据。

要保留沙箱，但要控制适用哪些限制，请确保 $:/config/HtmlParser/DisableSandbox 不会设置为 `yes`，然后将 $:/config/HtmlParser/SandboxTokens 设置为所需的令牌清单，[参考自 MDN 文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox) 。

请注意，这些是全域设置。要在单个条目的基础上控制沙箱，需要使用自定义的 `<iframe>` 。

