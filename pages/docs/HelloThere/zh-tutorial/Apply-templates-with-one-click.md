---
title: 一键应用模板
---

## 自制一个

可以通过按钮来一键应用模板：

<<reuse-tiddler "快速创建新笔记按钮">>

你可以打开[快速创建新笔记按钮](#%E5%BF%AB%E9%80%9F%E5%88%9B%E5%BB%BA%E6%96%B0%E7%AC%94%E8%AE%B0%E6%8C%89%E9%92%AE) 并进入编辑模式了解其 WikiText 具体是怎么写的，或者看下面的简化例子：

```
	<$button>
		<$action-sendmessage $message="tm-new-tiddler" title="标题填在这里" text="""这里是预置的文本
		可以换行""" tags="想法 待整理" />
	添加新想法
	</$button>
```

它首先用 `<$button>` 微件（及其带反斜杠 `</$` 的另一半）做了一个按钮，在按钮里面包上一个 `<$action-sendmessage` 微件（详见 [中文文档 action-sendmessage](https://bramchen.github.io/tw5-docs/zh-Hans/#ActionSendMessageWidget)），发送消息给太微系统，消息是 `tm-new-tiddler` 也就是 `tiddlywiki message ：新建条目` 的意思，这样就会在点击按钮时触发发送消息给太微系统新建条目。

消息的内容是：新条目的标题要填成「标题填在这里」，内容则是 `text` 里的，用三个引号括起来就可以包含换行，然后可以加多个标签。你可以点击下面的例子来看看效果：

<$button>
	<$action-sendmessage $message="tm-new-tiddler" title="标题填在这里" text="""这里是预置的文本
	可以换行""" tags="想法 待整理" />
添加新想法
</$button>

## 使用模板相关插件

可以[使用插件源](#%E4%BD%BF%E7%94%A8%E6%8F%92%E4%BB%B6%E6%BA%90)搜索「temlplate list 模板列表插件」，可以找到类似飞书文档风格的模板复用系统插件。

其原理和上面介绍的基本差不多，只不过多加了一个类似[一键操作某标签下的所有条目](#%E4%B8%80%E9%94%AE%E6%93%8D%E4%BD%9C%E6%9F%90%E6%A0%87%E7%AD%BE%E4%B8%8B%E7%9A%84%E6%89%80%E6%9C%89%E6%9D%A1%E7%9B%AE)里的 `<$list` 微件来列出所有系统里现存的模板。