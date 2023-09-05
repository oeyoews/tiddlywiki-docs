---
title: '5.0.14-试用版'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.0.13-beta...v5.0.14-beta)//

## 主要更动

### 改善控制台的插件页签

[控制台]($:/ControlPanel)的''插件''页签已改进，加上可用来显示插件文档的文档页签。另有一个更大的可拖动区域，能将整个条目拖到其他维基。

### 可设置的按钮工具列

页面工具列和条目工具列，现在可以设置用几个新的按钮 - 详见 [控制台]($:/ControlPanel)里的''视觉外观''和''工具列''页签。

侧边栏工具页签现在显示所有可用的页控制，允许他们被调用或选用显示于工具列。条目信息区现在包括一个工具页签，内含所有条目动作的按钮。

### 升级机制介绍

有两个组成部分：

* 更灵活的[导入机制](ImportMechanism)：
    * 介绍了即将导入的条目作成一个待处理的导入清单，允许用户对其进行检查，如有必要可取消选择实际导入它们
    * 提供[升级模块](UpgraderModules)得以处理每个将导入的条目
        * [插件升级程序]($:/core/modules/upgraders/plugins.js)模块处理插件版本检查以及从特定的[升级程序库](UpgradeLibrary)插件条目将其升级
        * [系统升级程序]($:/core/modules/upgraders/system.js)模块负责排除导入某些系统条目 (目前为 [$:/StoryList](#%24%3A/StoryList) 与 [$:/HistoryList](#%24%3A/HistoryList))
        * [布景主题调整升级程序]($:/core/modules/upgraders/themetweaks.js)模块处理自其 pre-5.0.14-beta 格式迁移布景主题 (见下列说明)
* [升级插件](UpgradePlugin)和为升级标准版 TiddlyWiki 文件提供了自订、单一用途的用户接口的相关联的版本，请参阅 <https://tiddlywiki.com/upgrade.html>

### 改进驼峰式匹配的辨识

TiddlyWiki 现在采取更加保守的方法应该自动地生成连接辨识出的[驼峰式匹配](CamelCase)条件。以前，破折号和底线被当成小写字母，导致一些误判。详见 [GitHub bug #337](https://github.com/Jermolene/TiddlyWiki5/issues/337)。

### 固定链接缺省为关闭

先前的 TiddlyWiki 试用版会自动更新浏览器的网址列，因此动态地反映了当前已开启条目。如此可易于复制与粘贴固定链接至他处，但也导致许多混乱，致使一般用户总是无法了解在他们刷新页面后，为什么浏览器显示一些非预期的条目。

在 5.0.14-beta 版，已改变该设置值。可于[控制台]($:/ControlPanel) **高端**/''设置''，将此设置值切换回 "包括目标条目和当前已开启的条目串行"。

## 可用性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/f6d7d87a3d49f816ccc050bdf4a5394eed37dd51) 下拉式预览图标于[标签管理]($:/TagManager)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/56945d91d327489478fc44dce5234ece35a01abb) 未保存的更动的征兆，通过改变保存变更按钮的颜色
* [拆分](https://github.com/Jermolene/TiddlyWiki5/commit/7aa6c7c06d8b5359f183e6b9f6f57cf89611cda8) wikitext 的重点解析成单独的模块以便他们可以用 `\rules` 独立控制
* [重构](https://github.com/Jermolene/TiddlyWiki5/commit/f43cd5ba9c6e5eda221ec738174e61e34fad2b8d) (与[此处](https://github.com/Jermolene/TiddlyWiki5/commit/a3de93b4eb8b108239b2e4b496308026e9e9eef8))[版本历史](ReleaseHistory)将各版本置于垂直页签
* [停止](https://github.com/Jermolene/TiddlyWiki5/commit/3ff7462afd5414b92680c6b6e67274be79233224) 保存 [$:/HistoryList](#%24%3A/HistoryList), 从而避免失控地增加文件大小
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/73cf1bfdb3cd238ac7800162f58d44a8bb60019b) (与[此处](https://github.com/Jermolene/TiddlyWiki5/commit/d5e4b9b5d1e7db5ad4d769433cc934ef08265f57)) 移除打印样式的页面背景
* [更新](https://github.com/Jermolene/TiddlyWiki5/commit/07f13b310d300631267936ad8bc55a338369afc0) 插件条目的显示，使显示其构成的条目，而非原始的 JSON
* [搬移](https://github.com/Jermolene/TiddlyWiki5/commit/799a5b059a40a51fdeb1dae7a0eb5bf8a79f5106) 全屏幕插件的功能于核心


## 可编程性改进

* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/c23f6af4b5c59f4d09dd8d6704e1939bb9d5b2d3) TiddlerWidget 添加一个 CSS 类别，对应每个标签于显示的条目
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/d357e1706c91d17a72fb19fedf43e57071fc7dd6) 支持于条目编辑器中隐藏指定的字段
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/be040ea8a2cc8962f1a28a313e4c9ebc2d5c0e31) 支持可变操作数于筛选器 (详见 [筛选器](Filters))
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/1f16ef6fa88b51d2dad7c8e57fcff014950a7442) 支持小工具消息 [tm-permalink](WidgetMessage: tm-permalink) 与 [tm-permaview](WidgetMessage: tm-permaview)
* [添加](https://github.com/Jermolene/TiddlyWiki5/tree/master/plugins/tiddlywiki/browser-sniff) 浏览器嗅探插件，以便 tiddlywiki.com 可以显示正确的特定浏览器的文档
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/ef67cc3fd9b267a522598abccdfbb93fbfca240c) 设置选项用于指定在用主从式版本设置中保存新条目的缺省位置
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/b4d47858e587c96f3a68cc28cffff181ec45f55f) 支持 [信息机制](InfoMechanism)
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/f08f57c5d24eb0146ac2cb77472a5fc5f135f1e9) 允许 CheckboxWidget 切换字段如同可切换标签
* [重构](https://github.com/Jermolene/TiddlyWiki5/commit/21c137a66c37f010b36697bb6bed5321138fbb9f) [控制台]($:/ControlPanel)布景主题调整保存于独立的条目
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/e18d8a88661a1c2caa1b722841747c75ca6af437) <<.mlink tabs>> 宏，允许页签使用范本
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/91acad0f7ce8637945a953dfcb122cd31292626d) (与[此处](https://github.com/Jermolene/TiddlyWiki5/commit/8612bc4006e717e4fa3c562fa72a85650206b66f)) [系统标签](SystemTags)支持插入内容于已开启的条目的上端或底部
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/f793816dfa687ae7791143b33487fd5f95f3265c) [嵌入小工具](TranscludeWidget)支持嵌入插件子条目
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/c73853288c5b4b0716da94fea2f2edec09345643) (与[此处](https://github.com/Jermolene/TiddlyWiki5/commit/08f775eac8cb053d08c1c561e65a5eeb87c4c6b6)) 支持自 `*.htm` and `*.hta` 导入文件如同既有的支持导入 `*.html` 文件
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/73d7e85e11c7732080ca8bc4321ebb12afbac09c) "sticky titles" 布景主题可作用于当条目编辑模式

## 修复错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/5b3b62f93da4b7b19e24ccf72d9ce20b9edce6d5) BuildCommand 目标的运行顺序的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/d93da81671a704377209fc1871425c3a7c5db35a) 失去外部链接的悬停颜色的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/465f4ac46903070759a572d183c498c5579cb922) 刷新模块对话的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/3351ae7e29cbf3bed6fc1925ef33664bcc59fef5) 于 Firefox 停用 cookies 时发生的问题
* [放宽](https://github.com/Jermolene/TiddlyWiki5/commit/5260899d8b090e8886e41e3aa770fdcf5967ad8c) 对紧接于宏的定义结束 '\end' 的分行符号的要求

## 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@BramChen](https://github.com/BramChen) 
* [@pmario](https://github.com/pmario)
* [@ssokolow](https://github.com/ssokolow)
* [@xcazin](https://github.com/xcazin)