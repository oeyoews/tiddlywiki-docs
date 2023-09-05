---
title: '如何从个别条目构建 TiddlyWiki5'
---

首先安装 TiddlyWiki 如 [Installing TiddlyWiki on Node.js](#Installing%20TiddlyWiki%20on%20Node.js) 所描述。

1. 创建一个空的 [TiddlyWiki 文件夹](TiddlyWikiFolders)
    1. 于合适的位置创建一个新的文件夹 (例如 `~/MyWiki`)
    1. 创建文件名为 `tiddlywiki.info` 的文件包含以下文本：
        * `{"themes": ["tiddlywiki/vanilla","tiddlywiki/snowwhite"]}`
    1. 创建一个子文件夹，名为 `tiddlers`
        * 或者，从 TiddlyWiki5 保存库复制 `editions/empty` 文件夹
1. 于 `~/MyWiki/tiddlers` 创建个别的 TiddlerFiles 
1. Execute the following command from the TiddlyWiki5 root directory to build a TiddlyWiki5 file from the tiddlers:
1. 从 TiddlyWiki5 根目录运行下列命令，由这些条目生成一个 TiddlyWiki5 文件：
    1. `tiddlywiki ~/MyWiki --rendertiddler $:/core/save/all index.html text/plain`
