---
title: '使用 Node.js 反安装插件'
---

以主从式 Node.js 配置使用 TiddlyWiki 时，请按照以下说明进行操作：

1. 如果服务器正在运行，请退出服务器

1. 编辑 `tiddlywiki.info` 文件 （它是 JSON 格式），并找到 `plugins` 和 `themes` 部分（见下文）

1. 删除您要删除的插件对应的条目
    * 注意保留''逗号''来分隔项目
    * **不**要用逗号终止清单中的最后一项

1. 重新启动服务器

```
{
	"plugins": [
		"tiddlywiki/codemirror"
	],
	"themes": [
		"tiddlywiki/vanilla",
		"tiddlywiki/snowwhite"
	]
}
```

<<.note _:"可以在[插件](Plugins)条目中，找到使用插件的概述">>
