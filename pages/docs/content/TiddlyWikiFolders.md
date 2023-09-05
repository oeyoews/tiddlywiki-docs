---
title: 'TiddlyWiki 文件夹'
---

如同传统单档维基，[TiddlyWiki on Node.js](#TiddlyWiki%20on%20Node.js) 支持保存为个别条目档的文件夹的维基。

# 维基文件夹结构

维基文件夹可以包含以下文件和文件夹：

* **tiddlywiki.info** - JSON 文件包含维基的中继数据 -- 详见 [tiddlywiki.info Files](#tiddlywiki.info%20Files)
* **\tiddlers** - 此文件夹包含组成维基的条目文件的文件夹
* **\plugins** - 此文件夹包含维基中的[插件文件夹](PluginFolders)
* **\languages** - 此文件夹包含维基中的语言插件的[插件文件夹 ](PluginFolders) 
* **\themes** - 此文件夹包含维基中的布景主题插件的[插件文件夹](PluginFolders)

只有 **tiddlywiki.info** 文件是必需的；其余都是可选的。将忽略未列于上面的任何文件和文件夹。

## 插件处理

要在浏览器中使用，插件只需要包含于维基中。对于在服务器上生成的维基，TiddlyWikiFolders 可以包含一个 [tiddlywiki.info 文件](tiddlywiki.info Files)，它标识包含在此维基中的插件：

```
{
	"plugins": [
		"tiddlywiki/slider",
		"tiddlytools/chooser"
	]
}
```

插件名称是参照 TiddlyWiki5 `plugins` 文件夹中，列出的插件文件夹。也可将插件复制到维基的 `plugins` 子文件夹中，手动包含插件。

## `tiddlers` 文件夹的处理

在 `tiddlers` 文件夹中的所有[条目文件](TiddlerFiles)，于启动时读取到维基。[条目文件](TiddlerFiles)的子文件夹将被递归扫描。新创建的条目都直接存放在[条目文件](TiddlerFiles)下的 `tiddlers` 文件夹，除非[另行配置](Customising Tiddler File Naming)。

可提供一个  `tiddlywiki.files`  的 JSON 文件，覆写默认处理文件夹内的 `tiddlers` 子文件夹 -- 请参阅 [tiddlywiki.files 文件](tiddlywiki.files Files)。

```
{
	"tiddlers": [
		{
			"file": "d3.min.js",
			"fields": {
				"type": "application/javascript",
				"title": "$:/plugins/tiddlywiki/d3/d3.js",
				"module-type": "library"
			},
			"prefix": "var d3;if($tw.browser){\n",
			"suffix": "}\nexports.d3 = d3;\n"
		},
		{
			"file": "cloud/d3.layout.cloud.js",
			"fields": {
				"type": "application/javascript",
				"title": "$:/plugins/tiddlywiki/d3/d3.layout.cloud.js",
				"module-type": "library"
			}
		},
		{
			"file": "local/mytiddler.tid",
			"isTiddlerFile": true,
			"fields": {
				"title": "A different title"
			}
		}
	],
	"directories": [
		"../../mytiddlers/store"
	]
}
```
