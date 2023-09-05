---
title: TidGi预设插件
---

 ! TidGi插件

> 提示；仅对插件简单介绍，详细说明请阅读插件自述文件。

# 必要插件（18）
* tiddlywiki/filesystem
* tiddlywiki/tiddlyweb（这个插件在浏览器中运行，以同步TiddlyWeb兼容的服务器（包括TiddlyWiki 5本身，在Node.js上运行）的tiddler变化。在Node.js下运行时，它是惰性的。由于该插件提供了与服务器同步设置的机制，所以通过浏览器禁用该插件不能被撤销。）
* twcloud/tiddlyweb-sse（使用SSE立即将变化从浏览器同步到TW5（node.js）。）。
* linonetwo/source-control-management（SCM、本插件利用暴露的自定义 API 实现：查看本地 NodeJS 版 TiddlyWiki 是否完全与 Github 备份云同步了。一键同步本地和云端。当点开 SCM 标签页的时候，会进行一次 git 环境检查，因为使用的 git 库 dugite 比较卡，所以只进行一次检查，如果需要刷新，需要来回切换一下 tab。）
* linonetwo/sub-wiki
* linonetwo/github-external-image（使用GitHub作为你的图像存储，为所有图像添加_canonical_uri，指向raw,github。）
* tiddlywiki/qrcode（二维码）
* linonetwo/tw-mobile-sync（手机应用 ↔ 桌面应用 ↔ 云端。本插件可以让你在基于NodeJS技术的桌面应用（例如太记）和基于HTML文件的手机端（例如Tiddloid安卓应用）之间同步数据。）
* linonetwo/open-in-external-app（Requiers TidGi，一个工具条按钮，用于在OS默认阅读器中打开PDF tiddler。）
* linonetwo/service-worker（使用service worker来缓存内容，使其即使在离线状态下也能工作，并且可以作为一个App添加到桌面。安装后，你必须将你的维基发布为一个HTTPS网站，以使其发挥作用。）
* dullroar/sitemap（网站地图：<https://zhuanlan.zhihu.com/p/354920861>）
* linonetwo/opened-tiddlers-bar（这个插件提供了VSCode风格的 "已打开的Tiddlers "顶栏）
* linonetwo/tw-react （tiddlywiki-React插件，作为许多插件的共享依赖项，减少这些插件的大小。react使创建交互式UI变得其轻而易举。为你应用的每个状态设计简洁的视图，当数据变动时React能高效更新并渲染合适的组件。）
* linonetwo/zx-script（在tw中执⾏js，类似jupyter）
* linonetwo/prevent-edit（这个插件主要是让在线部署后的 Wiki 不会弹出「有变动关闭网页前请保存」这样的对话框。）
* linonetwo/itonnote（预配置了一系列琐碎的内容，例如侧边栏的文件目录选项卡、图章按钮的文本片段，引文宏与打开GitHub图片宏，预制社区插件库以及一些太微配置等等。）
* linonetwo/pinyin-fuzzy-search（提供模糊搜索和拼音搜索的能力）
* linonetwo/commandpalette（太记侧边栏的搜索/命令。）


# 功能增强（46）
* linonetwo/tw-whiteboard（TW中微小的绘图应用程序，使用tldraw。提供图表部件和白板视图。）
* linonetwo/tw-calendar（日历插件。小工具和页面布局，根据创建、修改、开始日期和结束日期字段，在日历和议程上显示提示符。）
* linonetwo/inverse-link-and-folder（反向链接和文件夹）
* linonetwo/preview-glass（修改tobibeer/preview插件，使其在鼠标移出链接时自动关闭。添加自定义样式，使其像玻璃一样。）
* bimlas/kin-filter（目录树选择筛选器）
* bimlas/locator（Locator提供了一个通用接口，用于在你的tiddlers之间进行导航和搜索，过滤它们，而不需要编写过滤表达式。该插件包含一个目录小部件和一个增强的搜索引擎，其中包含一个可视化的过滤器生成器，可以通过标签和字段值过滤结果。你可以将tiddlers组织成任何数量的树，甚至按自定义字段或文本中的链接。与经典的目录、标准搜索、过滤搜索和标签列表不同，这个插件有机地处理这些功能。）
* flibbles/relink（当重命名一个tiddler时，Relink可以更新所有其他tiddler的字段、过滤器和小工具。）
* flibbles/relink-markdown（对Relink的Markdown支持。）
* flibbles/relink-titles（用来自重新链接的tiddler的标题重命名tiddlers）
* flibbles/relink-fieldnames（用与Relinked tiddlers相匹配的标题重命名字段名）
* tobibeer/appear（这个插件提供了$appear小组件，可以呈现弹出式窗口和滑块（内联或块）以及手风琴菜单。）
* wikilabs/edit-tabs（这个插件为每个标签添加了一个小链接图标。）
* felixhayashi/hotzone
* Gk0Wk/TW5-CodeMirror-Enhanced（为TiddlyWiki的CodeMirror编辑器提供一个灵活而丰富的扩展框架(包括高亮、补全、预览等功能)，任何人都可以使用此框架为编辑器编写扩展插件！）
* tiddlywiki/codemirror、codemirror-autocomplete、codemirror-closebrackets、codemirror-closetag、codemirror-keymap-sublime-text、codemirror-mode-css、codemirror-mode-htmlmixed、codemirror-mode-javascript、odemirror-mode-markdown、codemirror-mode-xml、codemirror-search-replace（提供了语法高亮、显示行号、代码编辑、自动补全等等丰富的编辑功能。）
* kookma插件
    * kookma/commander（简而言之，Commander是一个对tiddlers进行批量操作的独特工具。）
    * kookma/favorites（Favorites插件是一套用于在Tiddlywiki中创建收藏夹（书签）的工具。每个收藏夹项目都是一个Tiddler的快捷方式。收藏夹可以被组织在文件夹中。）
    * kookma/refnotes（Refnotes是一个Tiddlywiki插件，用于创建和管理脚注、缩略语、引文和参考文献。Refnotes可以创建书目，但为了获得最佳性能，以及使用导入bibtex条目，需要使用官方bibtex导入器插件。）
    * kookma/shiraz（Shiraz是一个由样式表、模板和宏组成的小框架，用于在Tiddlywiki中创建时尚内容。Shiraz具有自定义的元素，如警报、卡片、面板、图像、静态表格、动态表格、快速表格、徽章、文本等。）
    * kookma/todolist（用于创建todo列表和间隙性日记。）
    * kookma/utility（这个实用插件的目的是为作者提供一套工具。这些工具包括：简单的跨页，显示tiddlers的原始内容，读者模式，wikitext宏，在视图模式下显示字段，linkify，代码，docit，以及更多的工具。）
    * kookma/hsl（Highlight Selected Lines (HSL)）
* tiddlywiki/dynaview
* tiddlywiki/dynannotate（Dynannotate插件允许创建和显示文本内容的注释。依赖于Dynaview插件。）
* tiddlywiki/katex（这是一个用于数学和化学排版的TiddlyWiki插件。它是完全独立的，不需要互联网连接就能工作。它在浏览器和Node.js下都能工作。）
* tiddlywiki/highlight（这个插件使用Ivan Sagalaev的v9.18.1 highlight.js提供代码块的语法高亮。）
*钓鱼插件
    * oflg/fishing（可在[墨屉手册](https://tiddlymemo.org/manual/zh-Hans)查看安装使用教程。）
    * oflg/fishing-analysis
    * oflg/fishing-catchfish
    * oflg/fishing-zh-Hans
* Gk0Wk/echarts（将强大的可视化工具 ECharts 以优雅的方式与 TiddlyWiki 相结合。）
* Gk0Wk/sidebar-resizer（会在侧边栏的左侧边缘添加一个可拖动的边框，当鼠标移动到左侧边缘时会看到这个边框。拖动这个边框可以改变侧边栏的宽度，拖动到靠近窗口右侧边缘时就会自动收起侧边栏。）
* Gk0Wk/page-toc（利用条目的H1~H6标题为条目生成可导航的目录。没错，就是对单个条目生成的标题目录。而且目录是点击可导航的，就是说会滚动到标题所在的位置！）
* telmiger/PluginSize（这个插件可以计算所有已安装的插件的大小，包括主题和语言。）
* telmiger/HarveyBalls（哈维球：百分比计划圆形表意文字。PluginSize插件会用到它。哈维球是用于定性信息视觉交流的圆形表意文字。它们通常用于比较表，以表示某一特定项目符合某一标准的程度。）
* telmiger/EditorCounter（EditorCounter插件可以在编辑视图中显示单词和字符的计数器。在单页维基中，它可以在后台自动保存文本）


# 锦上添花（7）

* Gk0Wk/focused-tiddler（检测你正在浏览的Tiddler）
* Gk0Wk/notionpage-covericon（安装插件后，在每个tiddler的标题上方会有两个按钮(鼠标悬浮在上面就会显示)，分别用于添加图标(默认是emoji📒)和添加页面封面。点击图标就可以修改图标内容，点击修改封面就可以修改封面地址(可以是url或者tiddler标题)。）
* linonetwo/copy-on-select（当按住鼠标1秒时，将你在维基中选择的内容复制到剪贴板中。）
* linonetwo/slate-write（所见即所得辑模式插件）
* linonetwo/template-list（在新建条目时展示一系列可用模板）
* kookma/solution
* mat/field-value-selector（一个EditView模板，它在 "新字段 "区域下面添加了一个小箭头按钮。当你填入一个自定义字段名，然后点击这个按钮，你会得到一个下拉菜单，显示该字段名的所有现有字段值。）
