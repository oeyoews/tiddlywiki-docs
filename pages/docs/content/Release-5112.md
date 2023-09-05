---
title: '5.1.12'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.11...v5.1.12)//

# 主要改进

## 新的编辑器工具列

[添加](https://github.com/Jermolene/TiddlyWiki5/pull/2315) 编辑器小工具支持可扩充的格式工具列。

* 支持 Markdown 的 WikiText 格式化操作：
    * 粗体、斜体、底线、删除线、上标、下标和内联等宽的字符格式化操作
    * 等宽区块、引言、标题、编号和符号清单的列格式化操作
    * 从下拉清单中选择插入图片
    * 缺省程序化的文本片段印记
    * 剪切所选文本为一新的条目
    * 可选的自动调整大小以符合内容
* 在控制台中的完整的键盘快捷键编辑器。快捷键也会显示在工具列按钮的提示

## 改进位图编辑器

位图编辑器已增强为带有工具列支持︰

* 绘制可选的颜色、宽度和不透明度
* 清除图像
* 调整图像的大小
* 保留最近选择的颜色

## 改进插件

此版本已更新几个插件库中可用的官方插件，[升级](Upgrading)将自动更新所有已安装的插件。

* KaTeX 插件更新到 [0.60.0 版](https://github.com/Khan/KaTeX/releases/tag/v0.6.0)
* CodeMirror 插件更新到 5.13.2 版，并集成新的编辑器工具列。更新缺省配置，包括 HTML、~JavaScript、CSS、XML、TiddlyWiki 经典以及 Markdown 语法的加强显示。
* Markdown 插件包括格式工具列按钮，以及在侧边栏中的工具页签的一个新的 "添加 Markdown 条目" 按钮。
* 实验性的 Evernote 插件允许笔记和图像从 `.enex` 文件导入到 TiddlyWiki。
* 新的 `tiddlywiki/internals` 插件提供帮助理解 TiddlyWiki 内部操作的功能，包括：
* 改进语言翻译 ︰
    * 韩语
    * 正体中文和简体中文
    * 德语
    * 法语
    * 丹麦语
    * 荷兰语

* 在编辑器中显示当前条目的解析及小工具树的新预览模式。

## Text-Slicer 插件改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/176d2ccd76856b10aadd5e71af587574e7bcd447) 支持文档内的便笺
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/c98ef97d236fb023c3b5099a5fc52c1e8da7eb4d) 支持裁切文档到 Node.js
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/1335dff45013f83fb06a47453e6063b5c0e2c0b3) 文档中继数据显示
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/46800d790a6521aafba24fc9cb9e0d0e8f1a48a2) `list-children` 筛选器运算符
* 修正错误

# 其他改进

## 可用性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/7908e10488cc4280dd8e4f405bcb09f2fb6d3524) 一个禁用链接到佚失条目的设置
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/de3adf905aff80e547dc630890f0d18bd87da880) 一个等宽代码区块中的强制换行的设置
* [添加](https://github.com/Jermolene/TiddlyWiki5/issues/2351) 在创建或编辑条目名称包含问题字符时的警示消息
* 增加 “添加图像” 按钮于侧边栏的 “工具” 页签
* 引进新的通用[颜色选取器宏](colour-picker Macro)
* 引进新的通用[图像选取器宏](image-picker Macro)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/adf45b346847a81d4ed26397466daa4514035bb9) 批次删除按钮至[高端搜索]($:/AdvancedSearch)的 "筛选" 页签

## 可编程性改进

* [引进](https://github.com/Jermolene/TiddlyWiki5/issues/2337) 新的 WikifyWidget
* [引进](https://github.com/Jermolene/TiddlyWiki5/commit/126f7d60f961021b1318bd195f7005b6b8f46097) 新的 EditShortcutWidget，直接输入的键盘快捷键代码
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/7daebba46bad0e7ea3e4dfc1fc2e59e36414a683) 编辑器预览窗格，以便允许插件进一步添加预览的类型 (见新的 `tiddlywiki/internals` 插件为例)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/f8565443d7617f4d18b90ba7ce3f55b9764eccb2) 一个使用 WebDav 或 REST 服务器的简单的 HTTP PUT 保存器
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/37823f64e96809df16884c605b062f8da2453635) build 目标至服务器版
* [改进](https://github.com/Jermolene/TiddlyWiki5/pull/2364) [days Operator](#days%20Operator) 以更好地应对于昨天和今天的操作
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/3c20f2396e7c794b6e28c3e369e09230352402d0) ActionWidgets 机制允许其与 LinkCatcherWidget 和 SelectWidget 一起使用
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/19e699d3302da842c4a6596f7b9ecc4dcaf8fbc2) 适用 Android Chrome 的 `mobile-web-app-capable` meta 标记
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/3d5885f5a5ef8a395ba15285e68c19a8db115e6b) 用于 ViewWidget 的 `plainwikified` 格式

## 修正错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/54bf6c8a93f026ad1128dfc9cd745a67aaa6cda0) [目录宏](Table-of-Contents Macros)中的条目名称包含单引号的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/037cfb7cc7c1b32153e23774697e8a9045d8f36a) zoomin 查看模式的故事视图中的 modals 的 z-index 的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/2284) [has Operator](#has%20Operator) 的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/4a03dcab2031a31eb60f99b6d15a70ff0449182c) 在 EntityWidget 中的双字节 entities 的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/276074b6cfde9d916f9428b2185f795915e190ae) ScrollableWidget 在静态渲染的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/1e0d019610acd960b8c70c0b85b7bb1a25096a8f) 条目没有 `text` 字段的重复延迟加载的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/b326ba5b2c9e622f5fe99b00ab368bb484c1d4e5) 条目名称包含 Url 被解释为外部链接的问题

## Node.js 改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/2379) [自订用于条目保存的路径](Customising Tiddler File Naming)的功能
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/bf74d13df544e323066cde9a019cbf1855d3db04) 保存非 JPG 二进位文件的问题

# 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@araname](https://github.com/araname)
* [@BramChen](https://github.com/BramChen)
* [@brentmaxwell](https://github.com/brentmaxwell)
* [@Drakor](https://github.com/Drakor)
* [@edrex](https://github.com/edrex)
* [@Evolena](https://github.com/Evolena)
* [@felixhayashi](https://github.com/felixhayashi)
* [@FND](https://github.com/FND)
* [@Infurnoape](https://github.com/Infurnoape)
* [@kixam](https://github.com/kixam)
* [@Marxsal](https://github.com/Marxsal)
* [@maxthomax](https://github.com/maxthomax)
* [@mklauber](https://github.com/mklauber)
* [@nameanyone](https://github.com/nameanyone)
* [@nome](https://github.com/nome)
* [@PauDeLuca](https://github.com/PauDeLuca)
* [@pmario](https://github.com/pmario)
* [@rcrath](https://github.com/rcrath)
* [@r1chard5mith](https://github.com/r1chard5mith)
* [@sukima](https://github.com/sukima)
* [@telmiger](https://github.com/telmiger)
* [@twMat](https://github.com/twMat)
* [@webninjasi](https://github.com/webninjasi)
* [@xcazin](https://github.com/xcazin)
