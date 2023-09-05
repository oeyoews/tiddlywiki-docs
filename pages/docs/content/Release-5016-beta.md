---
title: '5.0.16-试用版'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.0.15-beta...v5.0.16-beta)//

## 不兼容的更动

5.0.16-Beta 比任何以前的版本带来了更多不兼容的改变。这些变化都有可能破坏为以前版本的 TiddlyWiki 5 写的几乎所有插件、以及会破坏多数的客制化。

* [改变](https://github.com/Jermolene/TiddlyWiki5/issues/764) 所有 CSS 类别的前缀，从 `tw-` 改为 `tc-` (例如，`tw-tiddler-frame` 改成为 `tc-tiddler-frame`；缺掉的前缀也增加了，因此 `btn-invisible` 改成为 `tc-btn-invisible`)
* [改变](https://github.com/Jermolene/TiddlyWiki5/commit/2f69ea362cd673f59b9fadbe11f1f95549a59813) 所有消息的前缀，从 `tw-` 改为 `tm-` (例如，`tw-close-tiddler` 改成为 `tm-close-tiddler`)
* [改变](https://github.com/Jermolene/TiddlyWiki5/commit/89fd5379dd78887fc21746d792072bf5a25f0c56) 所有变量的前缀，从 `tw-` 改为 `tv-` (例如，`tw-config-toolbar-icons` 改成为 `tv-config-toolbar-icons`)
* [改变](https://github.com/Jermolene/TiddlyWiki5/commit/112a9a95d95e9f62f110c97a4faaf537c5c100b1) prefix/removeprefix 筛选器运算符区分大小写

## 与 TiddlyWikiClassic 兼容

此版本包括一个初步版本的新插件，提供创建的内容与 TiddlyWikiClassic 的兼容性：

<https://tiddlywiki.com/classicparserdemo.html>

随后的版本将包括用户迁移内容的逐步指示文档。

非常感谢 @buggyj 为此插件所作的一切。

## 可用性改进

* [改良](https://github.com/Jermolene/TiddlyWiki5/commit/e47852cb141b384ad2a9097eca795545cb5b2494) [tm-browser-refresh](WidgetMessage: tm-browser-refresh) 消息的行为，因此它不再清除网址的位置哈希（网址中 # 部份）
* [隐藏](https://github.com/Jermolene/TiddlyWiki5/commit/88c9c0c3ee115917b8c1a9126452bb0574061857) 从静态效果的工具栏按钮

## 可编程性改进

* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/48312272adb17610db96d50758e6af947cab7b1d) 筛选器 <<.olink all>> 可选择所有的源条目
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/43aeb47fc34f1ba424030c4f78ee907fe7b1d5d8) 单行宏定义不正确包括值中空格的问题。(例如，`\define mymacro() yes` 会将宏的值设置为 " yes"，伴随一个前置空格)
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/d2a5a12f2d6b6ccc36dd22a70ac2def08d1d3722) [目录宏](Table-of-Contents Macros)，若条目有 caption 字段则使用之
* [可配置性](https://github.com/Jermolene/TiddlyWiki5/commit/b437f1b450f5f2a3104a9086f7c674299b53b9bc) 在条目信息皮肤中显示的缺省页签 (请参阅 [Configuring the default TiddlerInfo tab](#Configuring%20the%20default%20TiddlerInfo%20tab))
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/dcf4e93a3283e3e93cc14e50366f9b0252870835) <<.olink suffix>> 与 <<.olink removesuffix>> 筛选器运算符

## 修复错误

* [回复](https://github.com/Jermolene/TiddlyWiki5/commit/ad40223d6b9bed435d9381611cb9de1841b53df6) 条目小工具的不正确刷新
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/44228ed9f733217557851150f5ae45d9ebb23420) 可选择展合的[目录宏](Table-of-Contents Macros)的缩进

## 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@BramChen](https://github.com/BramChen)
* [@buggyj](https://github.com/buggyj)
* [@gernert](https://github.com/gernert)
* [@pmario](https://github.com/pmario)
* [@xcazin](https://github.com/xcazin)
