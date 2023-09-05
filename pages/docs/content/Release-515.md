---
title: '5.1.5'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.4...v5.1.5)//

## 翻译改进

* 添加翻译专用版，使其更易于创建和维护 TiddlyWiki 的翻译
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/615425cf0634233d27f4f1ea430589b2a618feb6) 改进的日语翻译
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/8ba1a9b72ac5a4f50a4f670a24393d564c137c0c) 丹麦文翻译
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/14a64ef3effc1e4cf1098b35af6d6cb864d77ac2) 希腊文翻译

## 可用性改进

* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/09a3f94d79fc6eacbfd46c86594748e996191eb2) 提示提升亲和性
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/6fc5c70ace43219710983f6d9640f4b01d620908) 导出按钮至条目工具列、页面控制与[高端搜索]($:/AdvancedSearch)的"筛选"页签
* 改善[标签管理]($:/TagManager)的布局
* [简化](https://github.com/Jermolene/TiddlyWiki5/commit/0a986ccd995266bf3a47182fa584d79f9dd3e153) 缺省的条目工具列按钮
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/63b00fd0f80ce0c9917e233287d4a0138e8c385f) 高端搜索按钮至侧边栏的搜索结果
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/4d061d0fee959fdc5ab470dc8f8379bedfa946d9) 由匹配顶端清单标题的搜索结果
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/da1f9f7d2233eb2aacc027bc1fc1053fa8b7bc2e) 在编辑范本中指定新的字段值的输入框
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/0bb8e08edca61f415aa084327b6751c278e45108) 标签丸呈现，得以动态选择前景颜色与背景颜色的最大对比度
* 改进许多[核心图标](ImageGallery Example)
* [移除](https://github.com/Jermolene/TiddlyWiki5/commit/1dfa6f369bddd8dedba2e47dc4707eba28ccf4e1) (及[此处](https://github.com/Jermolene/TiddlyWiki5/commit/145713e7668a41320981ed87b448542cd30d13dc)、[此处](https://github.com/Jermolene/TiddlyWiki5/commit/3035badf144abb85f5d42b2b1d395cf0f65fb03e)还有[此处](https://github.com/Jermolene/TiddlyWiki5/commit/e69e2c1c91002c296e1789532ca74286fae8d5a4)) 无需确认放弃或删除未修改的条目
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/a5c7089bcfe3d2439eb082535527a7cc767891cc) 微妙的圆角到条目和页签
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/6f0d581d720e611fade3b3f346ad0409ef5e291b) 新创建的条目名称的自动聚焦
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/81481588e07ed3cb1e378a6c6f21d26dcbaa8345) 在 [$:/ControlPanel](#%24%3A/ControlPanel) 上的条目计数的高端搜索链接

## 可编程性改进

* 引进新的 ActionSetFieldWidget、ActionDeleteFieldWidget 和 ActionDeleteTiddlerWidget 用于操作条目的字段和值
* [增强](https://github.com/Jermolene/TiddlyWiki5/commit/c7971d3da3bbef4bbc81d4462ee93590adc248f8) [WidgetMessage: tm-new-tiddler](#WidgetMessage%3A%20tm-new-tiddler) 允许用附加字段指定样板
* [增强](https://github.com/Jermolene/TiddlyWiki5/commit/4a172125768e3b33c30e725e8550454a9d26c5c4) EditTextWidget 允许更好的 textarea 编辑器大小的控制
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/13726ef73157d9e9d65ae4027d9c32aaa7cdcc90) 于 [$:/AdvancedSearch](#%24%3A/AdvancedSearch) 里的最近修改的系统条目的新预制筛选器
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/c20c935faabbb63f679bc4720b52162c56b6af64) 新的影片的系统图片：[$:/core/images/video](#%24%3A/core/images/video)
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/c13cf94413c94ee56bebc60fab2d9231d1824d88) 可自订的可视化的搜索结果 - 参阅[自订搜索](Customising search results)
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/a3a50dbf6d96e7441e5e8ec183e40134bc4eb618) <<.mlink timeline>> 宏可以使用不同的日期字段
* [更新](https://github.com/Jermolene/TiddlyWiki5/commit/8260d000be1cf1caf35a557f6cd54a0fb8ccf4f0) <<.olink search>> 允许指定字段
* [更新](https://github.com/Jermolene/TiddlyWiki5/commit/73491f14dd63612d527632210d2c3873eb81188f) 高亮插件显示定位字符为空白字符
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/91a7c397911726e391ca368f96b50fbe1687d56a) 模态的处理，以允许变量传递给模态 (参阅 [WidgetMessage: tm-modal](#WidgetMessage%3A%20tm-modal))
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/853f5fd06402b16e271e8f119ef380de485aeff2) 简单的记录来帮助追踪放置/粘贴问题 (参阅 <https://tiddlywiki.com/dev/#ImportLoggin>g)
* [更新](https://github.com/Jermolene/TiddlyWiki5/commit/b520efdeb83f6ac7536a69cf5af2bab3f94cf77f) [WidgetMessage: tm-download-file](#WidgetMessage%3A%20tm-download-file) 与 [WidgetMessage: tm-save-wiki](#WidgetMessage%3A%20tm-save-wiki) 为呈现允许指定变量
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/f5055c0205d24102a36b9cf3a9dd9306e148a1f0) [分页式目录示例](Example Table of Contents: Tabbed Internal)
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/79e428757b5562bd4a925b9b0428ea4ba70ad05a) RevealWidget 使其可以使用而无需指定状态条目
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/90caf5bf42523cfb6cd603b979aadb719ddcede4) "hook" 机制，以便插件可以修改缺省的条目清单
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/b882a0dff12dc2660426de53e64d8c018f3a9d84) 支持嵌套式的快显窗口

## 修正错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/90096cbd367a7a685fb5dc5b2cbaa69a00d8199f) CodeMirror 编辑器和佚失条目的问题
* [排除](https://github.com/Jermolene/TiddlyWiki5/commit/5093cdc86047209f23b9ead5ee0f216d0414e4f2) 草稿条目，从[目录宏](Table-of-Contents Macros)
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/5599f9f9338a5f96080143b2192214a78b961509) HTML 条目的编码问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/835e3a945244dd8a07f4c7fd570eb890e9fdcc2c) sticky titles 被垂直标签覆盖的问题
* [移除](https://github.com/Jermolene/TiddlyWiki5/commit/d1bbe7253c135ceed138fd02c82b0f861d5dda6b) 自动调整文本大小时的闪烁
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/4bf6fe7fe9416f4e304036302ab5727148ae5222) JSON 解串器，使所有字段皆可导入

## Node.js 更改

_这些更动只与在 Node.js 下使用 TiddlyWiki 的人有关_

* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/8e685e5150e636aed6655c6caa09c7b6cffdcea2) **includeWikis** 的 TiddlyWikiFolders 机制，允许唯读的引入维基
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/cea963420ca2800b86989e29d42d06ccb7ea2a00) Node.js 下的错误处理
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/17a594a97ad5655142c834dfd5fa68855a61d201) UnpackPluginCommand
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/04d26e6fae20671a6d455e113f7b0afedabc7122) EditionsCommand 以列出可用的版本

## 影响插件的作者的更动

* [停用](https://github.com/Jermolene/TiddlyWiki5/commit/f7a2849d27bb082e4bbf6b056a800a1edb30f510) 影子条目的维基变更事件
* [更新](https://github.com/Jermolene/TiddlyWiki5/commit/d93c19daaa126f0938048009a83796cb52690541) 小工具消息的结构有一个 hashmap 参数
* 支持嵌套 popups，其设计的方法上要有所改变，这会影响 popups 触发与 EditTextWidget 的 focusPopup 属性：现在必需给予小工具类别 `tc-popup-handle`。

## 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@andrey013](https://github.com/andrey013)
* Birthe C
* [@Braincoke](https://github.com/Braincoke)
* [@BramChen](https://github.com/BramChen)
* [@danielo515](https://github.com/danielo515)
* [@erwanm](https://github.com/erwanm)
* [@Evolena](https://github.com/Evolena)
* [@giffmex](https://github.com/giffmex)
* [@inmysocks](https://github.com/inmysocks)
* Makoto Hirohashi
* [@pmario](https://github.com/pmario)
* [@Skeeve](https://github.com/Skeeve)
* [@tobibeer](https://github.com/tobibeer)
* [@welford](https://github.com/welford)
