---
title: '将 Babel Polyfill 加至 TiddlyWiki'
---

并非所有浏览器都支持 ES2015 的最新功能。Babel 项目提供一个填充代码，让您的 TiddlyWiki 插件可以具有这些功能。为此您将需要该填充代码源码的副本。

您可由 <<.def "npm">> 或下载/保存取得源码。安装的具体信息，请参阅 [Babel Polyfill 文档](https://babeljs.io/docs/usage/polyfill/)。

请确认在您的 TiddlyWiki 版本文件夹，有一个 `plugins/babel-polyfill` 文件夹。然后创建 `plugins/babel-polyfill/plugin.info` 文件，包含以下内容：

```json
{
  "title": "$:/plugins/babel/babel-polyfill",
  "description": "Babel Polyfills for ES2015 support",
  "author": "Your Name Here",
  "core-version": ">=5.0.0"
}
```

创建 `plugins/babel-polyfill/files` 文件夹。然后创建 `plugins/babel-polyfill/files/tiddlywiki.files` 文件，包含以下内容：

```json
{
  "tiddlers": [
    {
      "file": "polyfill.min.js",
      "fields": {
        "title": "$:/plugins/babel/babel-polyfill/polyfill.min.js",
        "type": "application/javascript",
        "module-type": "library",
        "global-module": "true"
      }
    }
  ]
}
```

现在复制您已下载/保存的 `polyfill.min.js`。

<<.tip "若您经由 **npm** 下载，则其安装于 `./node_modules/babel-polyfill/dist/polyfill.min.js`.">>

最后，您需要一个初始化设置，故此创建 `plugins/babel-polyfill/plugin.js` 文件，包含以下内容：

```javascript
/*\
title: $:/plugins/babel/babel-polyfill/plugin.js
type: application/javascript
module-type: startup

Load the babel-polyfill library on startup

\*/

exports.startup = function() {
  $tw.modules.execute('$:/plugins/babel/babel-polyfill/polyfill.min.js');
}
```

<<.warning "因为该填充代码是用于浏览器中，我们需要有条件地加载 ES2016 不允许的程序库。这就是为什么它使用 TiddlyWiki 的相依解析器而不使用 ES2015 `import` 语句编写。">>

现在所有//运行时期//的 ES2015 功能，均可像 `Promise`，用于您的插件代码。

有关如何使用 ES2015 _语法_ 于您的插件代码，请参阅 [使用 ES2016 编写插件](Using ES2016 for Writing Plugins)。
