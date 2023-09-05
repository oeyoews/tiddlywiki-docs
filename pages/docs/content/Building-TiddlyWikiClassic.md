---
title: '组建经典版 TiddlyWiki'
---

TiddlyWiki5 可用于从构成的组件组建旧的 2.x.x [经典版](TiddlyWikiClassic)。这样做涉及这些功能：

* `tiddlywiki/classictools` 插件，包含一个反串行化程序模块，允许条目可从 TiddlyWiki 2.x.x `.recipe` 文件加载条目
* ViewWidget 的 `stripcomments` 格式，去除行首为 `//#` 的单行 JavaScript 注解
* FieldsWidget 的 `stripTitlePrefix='yes'` 属性，从 `title` 属性消除包裹在大括号的前缀
    * 例如，`{tiddler}HelloThere` 将转化为 `HelloThere`

# 用法

TiddlyWikiClassic 是从命令行运行 [TiddlyWiki on Node.js](#TiddlyWiki%20on%20Node.js) 组建。典型的用法是：

```
node ../../tiddlywiki.js \
	--verbose \
	--load <path_to_recipe_file> \
	--rendertiddler $:/core/templates/tiddlywiki2.template.html <path_to_write_index_file> text/plain \
	|| exit 1
```

