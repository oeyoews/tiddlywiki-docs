---
title: 'tm-close-all-windows'
---

<<.from-version 5.2.2>>
`tm-close-all-windows` [小工具消息](Messages)关闭所有使用 [tm-open-window](WidgetMessage: tm-open-window) 打开的附加//浏览器//窗口

`tm-close-window` 小工具消息最好使用 ActionSendMessageWidget 生成，而 ActionSendMessageWidget 又由 ButtonWidget 等小工具触发，且由内核本身处理。

<$macrocall $name='wikitext-example-without-html'
src="""
<$button>关闭所有窗口
<$action-sendmessage 
  $message="tm-close-all-windows" 
/>
</$button>
""" />

