---
title: '5.1.4'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.3...v5.1.4)//

这是一个文档改进和 [Release 5.1.3](#Release%205.1.3) 的一些重要的错误修复的小改版。

## 可用性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/6681a8e1f2fd3f39d92a1480b5b573a6c831515d) 高端搜索的工具列按钮
* [更改](https://github.com/Jermolene/TiddlyWiki5/commit/53d834c86be2f97599a9486c0eae4777c51d9093) 拖动行为，这样可以将条目名称拖到要插入此条目名称的编辑方块中，让创建链接更容易些。（此更动不会影响 TiddlyWiki 窗口之间拖动条目链接的行为）

## 可编程性改进

* [添加//](https://github.com/Jermolene/TiddlyWiki5/commit/26e50b81e579b7f2d190ca3662cadcf82764c8a7) 正文文本大小和行高度的额外主题调整
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/1b620387dda2d16bf387a89071188762455890c4) ViewWidget 使其可用于附属条目

## 修正错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/ddc74955427f8a7291ee964c42a771a112007789) 搜索计数的问题

## Node.js 更改

_这些更动只与在 Node.js 下使用 TiddlyWiki 的人有关_

* 修正佚失维基文件夹警示的问题，经由[移除](https://github.com/Jermolene/TiddlyWiki5/commit/9fedf3865778fd3aa50c2f049c2b81061c8cd778) 与 [重新实现](https://github.com/Jermolene/TiddlyWiki5/commit/e62e38d66c6eb447bbd8f16b5beec0fe0276ea0d) 自 [Release 5.1.3](#Release%205.1.3) 之后的修正
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/5d600ce31b1d1162529ae8043bb342e2165c4b13) 在 Node.js 下的彩色的警示和错误

## 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@danielo515](https://github.com/danielo515)
* [@gernert](https://github.com/gernert)

