---
title: '在 Node.js 上安装官方插件'
---

以主从式 Node.js 配置使用 TiddlyWiki 时，请按照以下说明进行操作：

1. 使用 <<controlPanel-plugin-link>> 的''插件''选项卡识别您要安装的插件 (但是，''不要''从这里安装插件)
    * 插件由其类型（即语言、主题或插件）以及其的发布者和标题来标识。例如，插件 `$:/plugins/tiddlywiki/internals` 被称为 **tiddlywiki/internals**

1. 如果服务器正在运行，请退出服务器

1. 编辑 `tiddlywiki.info` 文件 （它是 JSON 格式），并找到 `plugins` 和 `themes` 部分（见下文）

1. 添加您要添加的插件对应的条目
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
	],
    "languages": [
        "es-ES",
        "fr-FR",
        "en-EN"
    ]
}
```

<$macrocall $name=".note" _="可以在[插件](Plugins)条目中找到使用插件的概述。<br>另请参阅：[在 Node.js 上安装自定义插件](Installing custom plugins on Node.js)."/>

