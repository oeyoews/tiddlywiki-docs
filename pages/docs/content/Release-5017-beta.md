---
title: '5.0.17-试用版'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.0.16-beta...v5.0.17-beta)//

## 亮点

此版包含出自 [@giffmex](https://github.com/giffmex) 的欢迎和教学文档的重大改善，以及新的开发文档纳入 [@cheigele](https://github.com/cheigele) 和 [@cjrk](https://github.com/cjrk) 的 [工作](https://github.com/cjrk/saa-tw)。

## 不兼容的更动

### 改变系统标签 `$:/tags/stylesheet` 为 `$:/tags/Stylesheet`

[问题](https://github.com/Jermolene/TiddlyWiki5/issues/824) `$:/tags/stylesheet` 与其他系统标签不一致。此版添加支持 `$:/tags/Stylesheet`，且若用到 `$:/tags/stylesheet` 则增加弃用警告，于试用版之前对 `$:/tags/stylesheet` 的支持将被移除。

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/f6ff0a7f715bdf12dfba6556f72c49ea2c3016b0) `$:/tags/Stylesheet` 的支持，且当使用 `$:/tags/stylesheet` 时，有弃用警告

### 改变 ButtonWidget 的 `title` 属性为 `tooltip`

ButtonWidget 的 `title` 属性与 `tooltip` 属性的用法与 ImageWidget 及 LinkWidget 的用法不一致。此版添加支持 `tooltip` 属性至 ButtonWidget，除现有对于 `title` 属性的支持，但带有弃用警告。

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/b7f638aef3094d0552db2f72330b40a526113bd5) `tooltip` 属性至 ButtonWidget

### 移除支持正则表达式筛选器操作数

如于[相关问题](https://github.com/Jermolene/TiddlyWiki5/issues/762)所讨论的，对正则表达式筛选器运算符的支持并不完整和不一致。计划于移除对此功能的支持下个版本。已提供一个新的筛选器运算符来取代它，每当用到正则表达式筛选器运算符，会附加显示弃用警告。

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/f4fff7a33037ba9dd537379bcb44a52a280868d6) <<.olink regexp>>
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/d45c417c187fe3dcc35ee7a308e64feebc7b185b) 正则表达式筛选器运算符的弃用警告

### 存储库中重组

目标是使 TiddlyWiki 存储库更容易为新的用户所理解。

* [搬移](https://github.com/Jermolene/TiddlyWiki5/commit/6e9cd5943703f7137e819fcb85376423b9c930d5) 脚本到一个单独的 `bin` 文件夹

## 可用性改进

* 重组 [控制台]($:/ControlPanel) 使其更符合逻辑和可用

## 可编程性改进

* 开发者文档移至 <https://tiddlywiki.com/dev>
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/872e6fc2532012f0f9acfb29aa24a9cd5f340b9d) (与 [此处](https://github.com/Jermolene/TiddlyWiki5/commit/c8a131ffd4716f2b99ab508567422ff463f2849d)) 至 `serve.sh`/`serve.cmd` 脚本
* [停用](https://github.com/Jermolene/TiddlyWiki5/commit/ac54fe33263cbe48bc294f9c14257ccc146be38e) 插件于安全模式
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/c1de85838f3d0d3e6a207152ecc9d61ff08a4b05) <<.mlink timeline>> 宏
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/f16d1832aae9a7ce71dea78b16c11afaf673acf2) <<.mlink dumpvariables>> 宏
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/ba3f8002355607c8b00b7d184f01fa68bbcda152) [目录宏](Table-of-Contents Macros)，如此可以停用个别链接
* [移除](https://github.com/Jermolene/TiddlyWiki5/commit/542788bfeba98ec3bac0bb721293c16354bc1b34) (与 [此处](https://github.com/Jermolene/TiddlyWiki5/commit/487c4a40abda2b457b4015033bf1be76bd81dcc9)) 非必要的 `<p>` 标记，从编辑标签与类型的下拉式清单
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/ccd916ca7cb45468ac30eb48bfdf86bea704d810) **multiple** attribute to the BrowseWidget
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/ab944bbf02e9fae606632a11df1053a46573fa49) 查看样板，字段 **hide-body** 设为 **yes** 时隐藏条目内文

## 修复错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/c713eddbef50603e313a86f78c185753bab3d607) 草稿条目未计入未保存的修改的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/f87ce7e98a083f1bdcff5b1887b56aa95b731efe) 在 5.0.16-Beta 中的键盘快捷键的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/756e05504b33c387da7d3f81446a18f9a8fefe49) 解析在行内模式中的样式表的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/9adc30f69fba169813638021780263ff0df4e2bc) 可选扩展[目录宏](Table-of-Contents Macros)的错误

## 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@BramChen](https://github.com/BramChen)
* [@buggyj](https://github.com/buggyj)
* [@cheigele](https://github.com/cheigele)
* [@cjrk](https://github.com/cjrk)
* [@giffmex](https://github.com/giffmex)
* [@pmario](https://github.com/pmario)
* [@xcazin](https://github.com/xcazin)
