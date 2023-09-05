---
title: '用于 Node.js 的环境变量'
---

[TiddlyWiki on Node.js](#TiddlyWiki%20on%20Node.js) 支持下列操作系统环境变量，用于指定一个分隔的路径搜索插件和版本清单：

* `TIDDLYWIKI_PLUGIN_PATH` - 插件的搜索路径
* `TIDDLYWIKI_THEME_PATH` - 布景主题的搜索路径
* `TIDDLYWIKI_LANGUAGE_PATH` - 语言的搜索路径
* `TIDDLYWIKI_EDITION_PATH` - 版本的搜索路径 (适用于 InitCommand)

<<.note _:"""''1.'' 分隔符号可能因操作系统而异。在 Windows 上使用分号 `;`，Linux 则使用冒号 `:`。<br><br>''2.''在 Linux 系统上，可能需要 _''export''_ 变量，以及定义它。""">>

每个附加路径应该指到文件夹结构就像 ~TiddlyWiki5 GitHub 存储库中的等价文件夹：插件、布景主题、及语言文件夹包含 `publisher/pluginname/<files>` 而该版本文件夹包含 `editionname/<files>`

例如：

```
export TIDDLYWIKI_PLUGIN_PATH=~/MyPluginStore
tiddlywiki mywiki --build index
```
