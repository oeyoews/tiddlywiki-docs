---
title: '5.1.20'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.19...v5.1.20)//

## 新的条件运算符

[添加](https://github.com/Jermolene/TiddlyWiki5/commit/17711657b6028a177c8aef97f7a0a1c084d65436) [条件运算符](Conditional Operators)：[then 运算符](then Operator) 和 [else 运算符](else Operator)

## 新的数学运算符

添加一些新的[数学运算符](Mathematics Operators)，用于处理数字：[negate](negate Operator)、[abs](abs Operator)、[ceil](ceil Operator)、[floor](floor Operator)、[round](round Operator)、[trunc](trunc Operator)、[untrunc](untrunc Operator)、[sign](sign Operator)、[add](add Operator)、[subtract](subtract Operator)、[multiply](multiply Operator)、[divide](divide Operator)、[remainder](remainder Operator)、[max](max Operator)、[min](min Operator)、[fixed](fixed Operator)、[precision](precision Operator)、[exponential](exponential Operator)、[sum](sum Operator)、[product](product Operator)、[maxall](maxall Operator) 和 [minall](minall Operator)。

## 新的字符串运算符

添加一些新的字符串运算符： [length](length Operator)、[match](match Operator)、[uppercase](uppercase Operator)、[lowercase](lowercase Operator)、[titlecase](titlecase Operator)、[sentencecase](sentencecase Operator)、[trim](trim Operator)、[split](split Operator)、[splitregexp](splitregexp Operator) 和 [join](join Operator)。

## 改进了筛选器中重复项的处理

现在可以更好地控制 TiddlyWiki，从筛选器结果中删除重复项的默认行为，从而更轻松地使用新的数学和字符串运算符：

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/37bb75f0cf446d62eb45d07b9f9b0aa14814a43f) 支持新的 `=` 前缀，用于合并筛选器 runs ，而不删除重复项
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/18fe112da7d3ac210a5a0b9cf73fe9050717d4e3) [enlist 运算符](enlist Operator)的选项，不删除重复项

## 改进的键盘快捷键

借由以下新的全局快捷键，键盘快捷键处理已有显著改善

* <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd> - 用于聚焦侧边栏搜索字段的快捷键
* <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>S</kbd> - 用于切换侧边栏的可见度的快捷键 
* <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd> - 用于开启高级搜索条目的快捷键

## 保存至 ~GitHub 和 ~GitLab

[添加](https://github.com/Jermolene/TiddlyWiki5/commit/aa5eaa98fcb8658dbc2b93476c2e09c9207439d8) 一个 [Git 服务保存模块](Saving to a Git service) 可直接保存至 ~GitHub 和  ~GitLab

## 插件改进

新的和改进插件:

* 新的 [BrowserStorage 插件](BrowserStorage Plugin) 用于在浏览器本机存放区中保存条目
* 新的 [Innerwiki 插件](Innerwiki Plugin) 用于渲染 TiddlyWiki 屏幕截屏
* [更新](https://github.com/Jermolene/TiddlyWiki5/pull/4133) [KaTeX 插件](KaTeX Plugin) 至 ~KaTeX v0.10.2
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3131) 一个 [KaTeX 插件](KaTeX Plugin)的编辑器工具栏按钮
* [更新](https://github.com/Jermolene/TiddlyWiki5/pull/3635) [Highlight 插件](Highlight Plugin) 使用 highlight.js v9.15.6
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3898) 使用 [Highlight 插件](Highlight Plugin)支持语言别名
* 更新 [CodeMirror 插件](CodeMirror Plugin)，包含[添加](https://github.com/Jermolene/TiddlyWiki5/pull/3810) 支持智能缩进
* 更新 [Dynaview 插件](Dynaview Plugin)，包含[添加](https://github.com/Jermolene/TiddlyWiki5/commit/a9e595c3f633391003224e499440cdeb8560c055) 支持启动时从本机存放区恢复滚动位置
* 更新 [Amazon Web Services 插件](Amazon Web Services Plugin)，包含[添加](https://github.com/Jermolene/TiddlyWiki5/commit/fffd0ee9e17d6b6a561648a42f0f200d4bb04046) 支持指定凭证

## 翻译改进

新的和改进翻译:

* 加泰罗尼亚语
* 简体中文和正体中文
* 法语
* 德语
* 美式英语

## 性能改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3951) 可插拔索引模块加速 [field 运算符](field Operator) 和 [tag 运算符](tag Operator) (在一个有 60K 条目的维基上测试，通过这些优化，启动时间减少了 25％，刷新时间减少了三倍。)
* [优化](https://github.com/Jermolene/TiddlyWiki5/commit/fddc5d4ee627232441278284ed6bee2f50fe8b26) 当动画持续时间设置为零时，"Classic" 的故事视图的运行速度要快得多 (在开启 8,000 个条目的故事视图的测试中，观察到大约 50％ 的速度提升)
* [优化](https://github.com/Jermolene/TiddlyWiki5/commit/7869546fef7b2ea5fd6fd72feacd565a7f177fb6) RevealWidget 避免使用相对较慢的 `localeCompare()` 方法来比较字符串
* [更新](https://github.com/Jermolene/TiddlyWiki5/commit/e8d1fbba6c109ccbeaedc1b34e47677c0ada7529) [性能仪表板](Performance Instrumentation)显示各个筛选的计时
* [优化](https://github.com/Jermolene/TiddlyWiki5/pull/4102) 渲染和刷新子小工具

## 可用性改进

* [改进](https://github.com/Jermolene/TiddlyWiki5/pull/3832) [配色盘管理器]($:/PaletteManager) 能够删除项目，并直接编辑间接项目
* 一些新的调色板："Nord"、"Solarized Light"、"Spartan Day"、"Spartan Night" 和 "Twilight"
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/5a37a84a54f2dc9ccf106309b739cfa693bae3e3) 用于搜索所有插件字段的插件库
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/e5f3301c1c36e8add4ed89ab1bd53a9b68411d3f) 通过导入，覆盖核心 JavaScript 模块时的警告
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3654) 重命名条目时提示参考
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/0e6855eba8945e023cc5ef19809cfb6d6025627b) 一个新的筛选器默认，用于高级搜索 "此工作阶段已修改的条目"
* 添加了一些动画（其中一些已经存在，但已被破坏多年）用于以下更改：
    * [查看模板中的标签](https://github.com/Jermolene/TiddlyWiki5/pull/4142)
    * [页面控制项](https://github.com/Jermolene/TiddlyWiki5/pull/4145)
    * [左上和右上栏](https://github.com/Jermolene/TiddlyWiki5/pull/4146)
    * [页签](https://github.com/Jermolene/TiddlyWiki5/pull/4149)
    * [编辑模板中的各字段](https://github.com/Jermolene/TiddlyWiki5/pull/4148)

## 可编程性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/4051) [可配置的查看和编辑模板](Hidden Setting: ViewTemplate and EditTemplate)的支持
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/37ea659bf011b1d4a152f54171399d94f5bba3ef) [dumpvariables 宏](dumpvariables Macro)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/754c1251a9bdf45e8f64079a4bbdaed2d05be2b7) [variables 运算符](variables Operator) 和 [getvariable 运算符](getvariable Operator)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/ed67f4a88b29c5c81d4de31203dbf23d66955fb7) [小工具消息 tm-focus-selector](WidgetMessage: tm-focus-selector)
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3546) [escapecss 运算符](escapecss Operator)
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3880) [unusedtitle 宏](unusedtitle Macro)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/36e76429b1a1d4638374d513430393db5693b932) [is 运算符](is Operator) 的 `[is[variable]]` 选项 
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/90684f9f52809ff5df39629d3b161d7ff23002f4) [is 运算符](is Operator) 的 `[is[blank]]` 选项
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/94f143bf643e36e817d1dd5b678515853eed6aca) 用于 $:/AdvancedSearch (由与侧边栏搜索相同的[隐藏设置: 搜索自动对焦](Hidden Setting: Search AutoFocus)控制) 中文本输入的可选自动聚焦
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3756) 可选的 **tabindex** 属性至简单、框架和 CodeMirror 文本编辑器引擎
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3758) **tabindex** 属性至编辑模板
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3822) button、textarea 和 input 的轮廓颜色
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/477c41f84304ed83245c87068dba3695a5053d62) **tooltip** 属性至 SelectWidget
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/348a0bc8bcbf5c42d9b93e5e208696d28fc95cb7) 插件在启动时禁用初始导航的选项
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/c036c228269fc30d0df770a7c7713fd9af829df7) $:/info/browser/language 至 InfoMechanism
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/f047e7cbf50edcf4775b50bdebc3f704970b8cde) 一个使用 StartupActions 设置默认语言的示例
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/edd3156430dd94b0ced630a1b70f2e2ef0ff6c36) 导入 JSON 文件，验证它其是否为有效条目文件，如果不是，则将其当作普通 JSON 导入
* [改进](https://github.com/Jermolene/TiddlyWiki5/issues/3974) LinkWidget，如果没有内容，则使用目标条目名称作为默认值
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/2a4c60b23dc1436af6206fad5a56742550eac1a3) [tm-open-window 小工具消息](WidgetMessage: tm-open-window)，允许指定窗口标题
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/8e7c0907f8cce4708a02486fc93dcea1ab115196) **checkActions** 属性到[复选框小工具](CheckboxWidget)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/3afaa9de9aaae7654c1d03ddc22ee97724cbb159) 支持定位到字段开头的搜索

## 修正错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/8b04cfd4d5142a957f2e3da80c3f079e215b9e75) 主要的 HTML 文件模板的长期问题，即使未通过保存筛选器选择，也会包含原始标记条目
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3572) 启用粘性标题的重叠下拉清单
* [删除](https://github.com/Jermolene/TiddlyWiki5/pull/3749) 在文本编辑器中明显过时的选择包装限制
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3745) 缺少 `stateTitle` 条目时，在 RevealWidget 中的错误
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/72f2a9425197b013ab3664e1679c6763d92d4382) 动画持续时间为空的错误
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3806) 在侧边栏的 "开启" 页签中的拖放占位符的 Firefox 问题
* [改进](https://github.com/Jermolene/TiddlyWiki5/pull/3809) 在拖放操作过程中，黏着占位符的 Firefox 问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3819) [CodeMirror Plugin](#CodeMirror%20Plugin) 使用 **tiddler-editor-border** 颜色
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/8012a3508f209fbbe68484e30ed65832cf5146b9) 使用 TiddlySpot 保存模块且禁用 cookie 的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3611) 框架文本编辑器使用正确的背景颜色
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/f5b25994322e58de84cae70ab67a68b1413db27f) 在侧边栏的两个不同区域使用类别 `tc-sidebar-lists` ，使其无法在 CSS 选取器中区分它们的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/7f78065992baf290ae221fb12c63e52e0f8da403) 重命名条目时，创建不必要的 "list" 字段的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/394725f00cd8f38089d2840aa026d72c88627bff) 修正 EditBitmapWidget 和佚失条目的崩溃

## Node.js 错误修正和改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/373afd72c804b0ffa2779849ba0d278d53e65df4) SaveWikiFolderCommand，将一个维基保存为[维基文件夹](TiddlyWikiFolders)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/5b09881679200dc78e5962a0588c8f214ddedbbb) DeleteTiddlersCommand
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/8c72a28f0c70e6a62387ccdd1431f9225a5fd2de) (和 [此处](https://github.com/Jermolene/TiddlyWiki5/commit/feab75a6d1723cd6db5912b2902f0ec33c550fb6)) 在命令行上指定插件的功能 (详见[使用 TiddlyWiki 于 Node.js](Using TiddlyWiki on Node.js))
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3677) 支持对 WebServer ListenCommand 的紧缩和 gzip 压缩
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/12630d4a91b4cc7b1eb846c3afbeda16858df05a) 一个 LoadCommand 的选项，忽略加载错误
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/7fcd2f132e91aa375a1fece501b14e991ba1bd4c) 由文件系统配接器处理 JSON 文件：
    * 对于其字段的值包含不能存放为 .tid 文件的任何条目，使用 `.json` 文件 (而不是 `.tid`) 
    * 保存 `application/json` 条目为 `.json` 文件

## 开发者错误修复和改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/e52a616891977bde142334df2a72c7dd121efb82) 小工具子类化的支持 -- 详见 <https://tiddlywiki.com/prerelease/dev/#WidgetSubclassingMechanism>

# 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@00SS](https://github.com/00SS)
* [@admls](https://github.com/admls)
* [@benwebber](https://github.com/benwebber)
* [@bimlas](https://github.com/bimlas)
* [@BramChen](https://github.com/BramChen)
* [@BurningTreeC](https://github.com/BurningTreeC)
* [@diego898](https://github.com/diego898)
* [@dnebauer](https://github.com/dnebauer)
* [@inmysocks](https://github.com/inmysocks)
* [@flibbles](https://github.com/flibbles)
* [@jdjdjdjdjdjd](https://github.com/jdjdjdjdjdjd)
* [@JesseWeinstein](https://github.com/JesseWeinstein)
* [@joshuafontany](https://github.com/joshuafontany)
* [@Kartiku](https://github.com/Kartiku)
* [@kyrias](https://github.com/kyrias)
* [@MarxSal](https://github.com/MarxSal)
* [@MidnightLightning](https://github.com/MidnightLightning)
* [@pmario](https://github.com/pmario)
* [@rmunn](https://github.com/rmunn)
* [@talha131](https://github.com/talha131)
* [@telmiger](https://github.com/telmiger)
* [@the-kenny](https://github.com/the-kenny)
* [@xcazin](https://github.com/xcazin)
