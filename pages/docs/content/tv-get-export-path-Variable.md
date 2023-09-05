---
title: 'tv-get-export-path'
---

<<.def tv-get-export-path>> [变量](Variables)指定完整的路径名，用于 [Node.js](TiddlyWiki on Node.js) 环境下导出每个条目的 <<.clink rendertiddlers RenderTiddlersCommand>> 命令。

该变量应实现为 <<.js-macro-link "JavaScript 宏">>，使用以下参数：

**title**
: 条目名称

若无此宏，则条目被写入于该命令的输出文件夹中，其文件名为 [%-编码](Percent Encoding)。