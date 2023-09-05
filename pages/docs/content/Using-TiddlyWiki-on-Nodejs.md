---
title: '在 Node.js 上使用 TiddlyWiki'
---

~TiddlyWiki5 包含一组[指令](Commands)，用于在命令行上运行一套广泛的基于 TiddlyWikiFolders 和 TiddlerFiles 的操作。

例如，下面的指令是从 ~TiddlyWiki HTML 文件加载条目，然后保存其中之一于静态 HTML：

```
tiddlywiki --verbose --load mywiki.html --rendertiddler ReadMe ./readme.html
```

自命令行运行 `tiddlywiki` 启动 ~TiddlyWiki 内核，加载的内核插件，并创建了一个空的 wiki。然后，它依序处理从左至右的命令行参数。参数以空格分隔。

<<.from-version "5.1.20">> 首先，可以有零个或多个插件引用，前缀为 `+` 表示插件名称，或 `++` 表示插件文件夹的路径。除了 [TiddlyWiki 文件夹](TiddlyWikiFolders)中指定的插件外，还会加载这些插件。

下一个参数是要加载的可选路径 [TiddlyWikiFolder](TiddlyWikiFolders)。如果不存在，则使用目前的目录。

这些指令与其个别参数如下，每个命由前缀 `--` 分辨之。

```
tiddlywiki [+<pluginname>] [<wikipath>] [--<command> [<arg>[,<arg>]]]
```

例如：

```
tiddlywiki --version
tiddlywiki +plugins/tiddlywiki/filesystem +plugins/tiddlywiki/tiddlyweb mywiki --listen
tiddlywiki ++./mygreatplugin mywiki --listen
```

<<.from-version "5.1.18">> 诸如支持大量参数的 ListenCommand 之类的指令，可以使用[命名指令参数](NamedCommandParameters)，使事情变得不那么笨拙。例如：

```
tiddlywiki wikipath --listen username=jeremy port=8090
```

有关可用指令的完整列表，请参阅[指令](Commands)。
