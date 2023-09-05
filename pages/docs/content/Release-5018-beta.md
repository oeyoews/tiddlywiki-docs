---
title: '5.0.18-试用版'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.0.17-beta...v5.0.18-beta)//

这是在 9 月 20 日 TiddlyWiki 发布完整版之前的小改版。文档已完成清理与改进（将有更多的改善）。

## tiddlywiki.com 文件的布局

在 tiddlywiki.com 文件的布局进行了调整，使之更加符合逻辑。请参阅 [#823](https://github.com/Jermolene/TiddlyWiki5/issues/823) 的讨论。 你可以在 <https://github.com/Jermolene/jermolene.github.com> 找到组成 tiddlywiki.com 的来源文件。

## 可编程性改进

* 添加 <<.mlink list-links>> 宏 (已计划进一步改善)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/6d9bd4df8a1133c2ba246333edad14e6028d3ea4) 支持导入 `.markdown` 和 `.md` 文件
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/c4123ba3740f74f172468c4aa050451ebc5780d8) <<.mlink timeline>> 宏，支持子筛选器

## 修复错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/a9f46525a0b1ecf7ce6d1bdae64e6763a247106b) 对于匹配维基链接，数字被归为小写字母的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/8cc236b4dca96327c7b28ad45e1eb4c2dce174e5) 当依非名称字段排序佚失条目时崩溃
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/73a4747d05c6746476ccd9e8cb8255853f631d17) 处理 `.jpeg` 扩展名的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/775482a2428d24a475e0c7df7bea215c190b5574) RadioWidget 与佚失条目的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/2571f534aa67c7f9d423d44d36efa32480f4c370) 拖动部分选定链接的问题

## 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@BramChen](https://github.com/BramChen)
* [@buggyj](https://github.com/buggyj)
* [@Eucaly](https://github.com/Eucaly)
* [@pmario](https://github.com/pmario)
* [@xcazin](https://github.com/xcazin)
