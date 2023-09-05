---
title: '使用外部 JavaScript 模板'
---

<!--
此条目也包含在 "server-external-js" 版本中。在编辑或移动它之前要小心。
-->

您可使用一个特殊的模板，外化 ~TiddlyWiki 的内核代码为一个单独的文件。此配置允许浏览器缓存内核，以提高效率。

# 背景知识

单一文件配置中的 ~TiddlyWiki，通常将所有内容打包到一个文件中：您的数据，以及组成 ~TiddlyWiki 本身的 ~JavaScript、CSS 和 HTML。这种缺乏依赖性，通常是非常方便的：这意味着 ~TiddlyWiki 的各个部分不可能分离，并且大幅改善了它在未来仍可运作的可能性。

然而，这种安排存在一些低效率，因为每次保存维基内容时，都会重复加载和保存内核代码。当运作于主从式配置时，这种低效率得到了部分改善，因为一旦浏览器加载了维基，同步过程只会向服务器来回传输个别条目。

运作于主从式配置时，剩下的低效率之处是，最初加载的单页维基将包含 ~TiddlyWiki 的整个内核代码的副本，这使得浏览器无法对其进行缓存。

# 使用带有主从式配置的外部 ~JavaScript 模板

通过设置 [root-tiddler](WebServer Parameter: root-tiddler) 参数为 `$:/core/save/all-external-js`，来启动该机制。此模板外化 ~TiddlyWiki 的内核 ~JavaScript 成一个单独的文件。例如，以下命令将激活缓存启动服务器。它将使用两个 GET 请求传输维基，内核可以由浏览器缓存。

```
tiddlywiki YOUR_WIKI_FOLDER --listen host=0.0.0.0 'root-tiddler=$:/core/save/all-external-js' use-browser-cache=yes
```

<<.tip """您可以启动浏览器的''开发人员工具：网络''选项卡，并重新加载页面以查看它是如何工作的。""">

<<.tip """在 Windows 的命令提示字符（CMD）中，用户需要将单引号 `'` 替换为双引号 `"`。""">>

## 初始化一个新维基

提供的 `server-external-js` 版本，包含使用外部的 ~JavaScript 模板所需的所有配置。例如：

```
tiddlywiki ./myNewWiki --init server-external-js
tiddlywiki ./myNewWiki --build listen
```

上面的命令运行以下操作：

* 使用外部 ~JavaScript 自定义配置，创建一个新的维基。
* 激活外部 ~JavaScript 启动服务器。服务器在端口 8080 上侦听。在您的浏览器中造访 <http://localhost:8080>。

要自定义 `--build listen` 命令，请参阅 [tiddlywiki.info Files](#tiddlywiki.info%20Files) 和 [ListenCommand](#ListenCommand)。

# 单档配置使用外部 ~JavaScript 模板

您可以使用 "external-js" 模板的单档维基，但这需要将 ~TiddlyWiki 的内核 ~JavaScript 保存在 HTML 文件旁边。例如，如果您在 ~WebDAV 服务器上有多个维基，则可能更喜欢此配置。(见: [Saving via WebDAV](#Saving%20via%20WebDAV))

<<.warning "此功能适用于高级用户：与标准单档配置相比，出现问题的方式要多得多">>

## 保存快照

如果以 "external-js" 配置启动 ~TiddlyWiki 服务器，则从维基保存的快照，也将具有 external-js 配置：

您可以点击 "云" 按钮并选择 <<.icon $:/core/images/download-button>>  **保存快照以供脱机使用**。因为 ~TiddlyWiki 内核代码已外部化，因此与常规快照相比，您保存的 html 维基的文件大小将减少但是，要使用此维基，在同一目录中，您''必须''也拥有一个 ~TiddlyWiki 的内核 ~JavaScript 副本；请参阅下文以取得该说明

"server-external-js" 版本允许您从命令行保存快照：

```
tiddlywiki YOUR_WIKI_FOLDER --build index
```

`external-5-x-x.html` 和 `tiddlywikicore-5.x.x.js` 文件将保存在维基文件夹的 `output` 目录中。

## 在浏览器中获取 ~TiddlyWiki 内核

{{$:/core/ui/ExportTiddlyWikiCore}}

## 使用 Node.js 获取 ~TiddlyWiki 内核

您也可以运行以下命令，以获取内核 ~JavaScript。`tiddlywikicore-5.x.x.js` 文件将保存在维基文件夹的夹的 `output` 目录中：

```
tiddlywiki YOUR_WIKI_FOLDER \
    --render '$:/core/templates/tiddlywiki5.js' \
    '[[tiddlywikicore-]addsuffix<version>addsuffix[.js]]' \
    'text/plain'
```

"server-external-js" 版本有一个 BuildCommand 的捷径，可以做同样的事情：

```
tiddlywiki YOUR_WIKI_FOLDER --build tiddlywikicore
```

# 升级您的单档维基

<<.warning "此过程是实验性的，请小心备份您的数据">>

在您继续之前，请先备份您的维基！按照以下步骤，使用外部 ~JavaScript 模板升级单个文件维基：

1. 进行[升级单档 ~TiddlyWikis 的处理](Upgrading)。您的维基将被转换为完整的单档 HTML。

1. 在浏览器中打开升级的维基。如果您想恢复使用常规模板，通过删除任何自定义副本，恢撤销始的影子条目 `$:/config/SaveWikiButton/Template` 。保存您的维基即可。

1. 否则，从您的维基的侧栏中选择 "工具" 选项卡，然后单击 <<.icon $:/core/images/star-filled>> **导出 tiddlywiki 内核** 按钮，从您的维基获取内核。

1. 验证 `$:/config/SaveWikiButton/Template` 仍然包含 `$:/core/save/offline-external-js`。必要时得修改。

1. 再次保存您的维基。您的维基现在已转换为使用外部内核。



