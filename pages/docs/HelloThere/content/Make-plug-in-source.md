---
title: 制作插件源
---

首先声明，我们希望将插件源统一起来，这样用户只需要装一个插件源就能搜到所有插件了。不过如果你有 10 个以上自己的插件，可以做一个自己的插件源，并告诉我们将你的插件源添加到 Wiki 模板和中文教程里。

## 将插件放入 plugins 文件夹并启用

就像安装其它依赖 nodejs API 的插件一样，参考[修改插件文件夹](#%E4%BF%AE%E6%94%B9%E6%8F%92%E4%BB%B6%E6%96%87%E4%BB%B6%E5%A4%B9)即可。

## 在 tiddlywiki.info 文件里配置插件源构建流程

参考：

```json
  "build": {
		"library": [
      "--makelibrary",
      "$:/UpgradeLibrary",
      "--savelibrarytiddlers",
      "$:/UpgradeLibrary",
      "[prefix[$:/]] -[prefix[$:/plugins/tiddlywiki/]] -[prefix[$:/themes/tiddlywiki/]] -[prefix[$:/languages/]] -[[$:/plugins/tiddlywiki/upgrade]] -[[$:/plugins/tiddlywiki/translators]] -[tag[$:/tags/PluginLibrary]] -[prefix[$:/plugins/kookma]]",
      "recipes/library/tiddlers/",
      "$:/UpgradeLibrary/List",
      "--savetiddler",
      "$:/UpgradeLibrary/List",
      "recipes/library/tiddlers.json",
      "--rendertiddler",
      "$:/plugins/tiddlywiki/pluginlibrary/library.template.html",
      "index.html",
      "text/plain"
    ]
```

然后在 shell 里执行

```sh
tiddlywiki ${repoFolder} --output ${folderToServe}/library --build library
```

## 在自己的Wiki里放入一个插件库条目

以 [Kookma Plugin Library]($:/config/KookmaPluginLibrary) 为例，条目内容类似：

```tw5
caption: Kookma Plugin Library
tags: $:/tags/PluginLibrary
title: $:/config/KookmaPluginLibrary
type: text/vnd.tiddlywiki
url: https://kookma.github.io/TW-PluginLibrary/library/index.html

Kookma plugin library is a set of plugins, themes, and scripts, to extend functionality and add new features to Tiddlywiki. For detail information visit the library at [[GitHub|https://github.com/kookma]]. It is recommended to backup your data before installing any plugin, theme, or script. 

To use in other wikis, drag and drop this link to those wikis: [[Kookma Plugin Library|$:/config/KookmaPluginLibrary]]
```

然后搞一个指向这个条目的链接，例如 `[Kookma Plugin Library]($:/config/KookmaPluginLibrary)`，这样用户只要拖这个链接到自己的Wiki里，就安装了这个插件库了。