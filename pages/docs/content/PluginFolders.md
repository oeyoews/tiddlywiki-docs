---
title: '插件文件夹'
---

# 使用插件文件夹

* 将包含插件的[插件文件夹](PluginFolders)安排于一个便于共用的位置
* 使用[环境变量](Environment Variables on Node.js)告诉 ~TiddlyWiki 搜索这些文件夹。 
* 插件可以在 `tiddlywiki.info` 中通过其名称引用（例如 `tiddlytools/magic`）
* 将包含插件的[插件文件夹](PluginFolders)，放在[维基文件夹](TiddlyWikiFolders)中的一个 `plugins` 文件夹。~TiddlyWiki 将尝试将每个子文件夹当作一个插件包含在内。不要将插件名称添加到 `tiddlywiki.info`。不要在特定的命名空间下添加插件文件夹：

```
├── plugins/
│   ├── relink/
│   │   ├── js/
│   │   ├── tiddlers/
│   │   └── plugin.info
│   └── relink-markdown/
│       ├── js/
│       ├── plugin.info
│       └── readme.tid
├── tiddlers/
└── tiddlywiki.info
```

# Plugin.info 文件

在服务器上，插件可以保存为一般的 JSON 条目，但将其保存为文件夹内的个别条目文件，通常更方便。插件文件夹必须包含一个 `plugin.info` 文件，其中包含该插件的中继数据。它还可以识别插件文件夹外部应被加载为条目的文件。

`plugin.info` 文件应包含下列 JSON 结构：

插件条目的 JSON 结构如下：

```
{
	"title": "$:/plugins/publisher/name",
	"name": "name",
	"description": "An exemplary plugin for demonstration purposes",
	"author": "JeremyRuston",
	"version": "1.2.3-alpha3",
	"core-version": ">=5.0.0",
	"source": "https://tiddlywiki.com/MyPlugin",
	"plugin-type": "plugin",
	"list": "readme license history"
}
```

按照惯例，个别条目的名称前缀为从属插件的名称，但它们并不局限于如此。

请注意，如果`plugin.info` 文件省略 `version` 字段，当插件文件夹被打包时，则内核自动填入为当前内核的版号，这是为了确保所有内核插件都带有正确的版号。一般插件作者会想要明确地指定一个版号。
