---
title: '使用 ES2016 编写插件'
---

随着 ES2015 (也称为 ES6) 的到来和 [Babel.js](http://babeljs.io/) 插件的可用性，在编写 TiddlyWiki 插件时，开发人员可以利用 ES2015 了解 TiddlyWiki 的模块沙箱与 Babel 是如何将其编译输出为模块系统之间的细微差别，就像 ~CommonJS/AMD。

请理解[插件机制](PluginMechanism)是如何工作的，因为这是所有关于使用 Babel 编写的插件，编译将包含于最终输出的 TiddlyWiki (例如 [ TiddlyWiki 于 Node.js](TiddlyWiki on Node.js))。

## 安装和配置 Babel

您可用 **npm** 安装 Babel

```
$ npm install --global babel-cli babel-presets-es2015
```

如果将您仍在开发中的插件列入到 npm 注册表 (或为方便) ，可避免全域安装，并将其保存到本地的 `package.json` 文件

```
$ npm install --save-dev babel-cli babel-presets-es2015
```

在您的插件项目中，编辑 `.babelrc` 文件，并输入以下内容：

```json
{
  "presets": [
    "es2015"
  ]
}
```

<<.tip "像是带有 `package.json` 的 **npm** 模块，通过 `npm run build` 完整编译输出，会更容易管理插件。详细信息请参阅 [npm-scripts 文档](https://docs.npmjs.com/misc/scripts)。">>

## 编译输出

选择一个文件夹来存放 ES2015 JavaScript 和输出用于 TiddlyWiki 的 JavaScript 文件夹。在这个例子中，将分别使用 `src` 和 `lib`。当 Babel 已安装且正常工作，您可以编译 `src` 文件夹中的所有 JavaScript 到 `lib` 文件夹，通过运行以下命令：

```
$ babel src -d lib
```

<<.warning "Babel _不会_复制非 JavaScript 的文件。它是由开发人员，包括所有支持的文件本身。Babel 只是从 `src` 文件夹转换 ~JavaScript 文件 (扩展名为 `.js`) 到 `lib` 文件夹。">>

## 导入和导出

在编写 pre-ES2015 插件，`require` 模块通过 TiddlyWiki，像这样：

```javascript
var Widget = require('$:/core/modules/widgets/widget.js').widget;
```

但是在 ES2015 以下会看起来像：

```javascript
import { widget as Widget } from '$:/core/modules/widgets/widget.js';
```

为方便起见，当 Babel 编译这，本质上是将输出与最先的 pre-ES2016 代码相同的 Javascript 代码。

此外，在 ES2016 您需要一开始即声明 `import`，且不能动态使用 `require`。这意味着在 `if` 区块或函数中，不能有 `import` 语句。如果需要该功能，那么您必须直接使用 `require()` 指令。但是如果这样做，可能会错失一个让您的代码更简洁的机会。

导出也是一样。您可以使用 `export` 关键字，而非指定一个 `exports` 变量的属性：

```javascript
export { MyWidget as mywidget };
```

<<.tip "导出非识别码的名称是不合法的 JavaScript，即使它可以使用非识别码 (字符串) 作为属性键值。这意味着，如果您想要一个小工具有一个破折号，那么您得使用 `exports['my-widget'] = MyWidget;` 语法。">>

理解在 ES2016 **default** 导出不支持 TiddlyWiki 是很重要的。这主要是因为核心代码预计要附加到 `exports` 变量的特定属性。Bable 的 `exports` 转换与此运作良好，//除了// **default** 导出。

## 类别

在一个小工具的示例中，ES2016 与类别继承运作良好。对比典型小工具定义，看起来像这样：

```javascript
function MyWidget() {
  Widget.call(this);
}
MyWidget.prototype = new Widget();
MyWidget.prototype.render = function(parent, nextSibling) {…};
// And so on…
```

使用类别，此式可以收紧为：

```javascript
class MyWidget extends Widget {
  render(parent, nextSibling) {…}
  // And so on…
}
```

使用类别//可//消除多数的 `Widget.execute()` 毫不相干地使用 <<.def "getter">>。相较于典型的大量指定到 `this`，这是更具可读性。其给予在属性中增加允许计算的好处，通常会混淆 `execute()` 方法。例如，开发复合属性如下：

```javascript
class NameWidget extends Widget {
  get title() { return this.getAttribute('title'); }
  get firstName() { return this.getAttribute('first'); }
  get lastName() { return this.getAttribute('last'); }
  get fullName() { return `${this.title}. ${this.firstName} ${this.lastName}`; }
}
```

### 非类别模块

对于非类别模块，您可以使用 `export` 关键字。这是一个简单的[启动模块](ModuleType)：

```javascript
export function startup() {
  // Do stuff here
}
```

或是一个[宏](https://tiddlywiki.com/dev/#JavaScript%20Macros)案例：

```javascript
export const name = 'my-macro';
export const params = {};
export function run() {…}
```

## 填充代码

ES2015 带有 JavaScript 核心对象一部分的某些功能，这些不支持所有的浏览器。在[大多数浏览器](BrowserCompatibility)中使用这些功能，您将需要 <<.def "填充代码">>。Babel 提供填充代码包，可以供您引入。如何做到这一点，请参阅 [添加 Babel 填充代码到 TiddlyWiki](Adding Babel Polyfill to TiddlyWiki)。

## 示例

以下是一个显示/更新时间的 ES2015 插件/小工具示例：

```javascript

/*\
title: $:/plugins/sukima/clock-widget.js
type: application/javascript
module-type: widget

A updating time stamp

\*/
import { widget as Widget } from '$:/core/modules/widgets/widget.js';

class ClockWidget extends Widget {
  constructor(parseTreeNode, options) {
    super(parseTreeNode, options);
    this.logger = new $tw.utils.Logger('clock-widget');
  }

  render(parent, nextSibling) {
    if (!$tw.browser) { return; }
    this.logger.log('Rendering clock DOM nodes');
    this.computeAttributes()
    this.parentDomNode = parent;
    this.domNode = $tw.utils.domMaker('div', {
      document: this.document,
      class: 'tc-clock-widget'
    });
    parent.insertBefore(this.domNode, nextSibling);
    this.tick();
  }

  tick() {
    this.logger.log('Tick!');
    if (!document.contains(this.domNode)) {
      // Apparently the widget was removed from the DOM. Do some clean up.
      return this.stop();
    }
    this.start();
    this.domNode.innerHTML = this.dateString;
  }

  start() {
    if (!this.clockTicker) {
      this.logger.log('Starting clock');
      this.clockTicker = setInterval(this.tick.bind(this), 1000);
    }
  }

  stop() {
    this.logger.log('Stopping clock');
    clearInterval(this.clockTicker);
    this.clockTicker = null;
  }

  get dateString() {
    const format = 'DDth MMM YYYY at hh12:0mm:0ss am';
    return $tw.utils.formatDateString(new Date(), format);
  }
}

export { ClockWidget as clock };
```

<<.tip "起始不带任何缩进的条目注解会使 Babel 的输出增加额外的空格。虽然不会影响 TiddlyWiki，当读取输出时，它可混淆条目信息呈现在屏幕右侧。">>
