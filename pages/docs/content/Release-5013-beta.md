---
title: '5.0.13-试用版'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.0.12-beta...v5.0.13-beta)//

## 无障碍改进

此版本包含诸多功能旨在改善与屏幕阅读器的 TiddlyWiki 的经验。特别感谢 [@domasofan](https://github.com/domasofan) 的回馈意见

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/34e4166dc5f24519b000de66853d5b1aee8f1648) 显示/隐藏 侧边栏按钮的标题和提示
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/346b2f86111815c746c993fa09b7f677fa0b4b37) 高端搜索链接的标题和提示
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/6f859c8d447a477a9120bdc308d1524558a80f20) "开启" 页签里的关闭按钮的标题和提示
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/06b0f9adb7209870b46d42f832c1f7ad7a78976f) **aria-label** 支持 LinkWidget
* [更换](https://github.com/Jermolene/TiddlyWiki5/commit/bc9b67cbc3f363d48aafea86c077fcd5a9c0ca64) H1 标记用于页面标题，且 H2 标记用于条目名称
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/eeedcb6d94a25d02e8fec45c89b30c7f2bcdde73) 条目与页面工具列按钮的标题和提示

## 可用性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/9ab0c84140bbc0f31cf65e632bddac616bbadbda) 支持全域 [宏](Macros in WikiText) 借由新的 ImportVariablesWidget
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/3182a2d599f0e4b70a73fe369df4f398587dc1a9) SelectWidget
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/f131c378934a86b741ab5b808437c95694dc5503) `text/html` 条目的行为，使其可显示于 HTML iframe 元素之内
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/9b576f2a8d39dcca37bcb709183a8f9b27f33ccf) 分组标题于编辑模式中的内容类型的下拉式菜单
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/4d70d5780e51cf0918fba15954cd47549e4e1a9f) 使用选项按钮的高端导览设置于 [控制台]($:/ControlPanel)
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/f7b8813a27141a78980eefa03df70a4a2de9d10b) (以及 [此处](https://github.com/Jermolene/TiddlyWiki5/commit/3f25db0abe8cd28712c020f218506710cec004b6)) 固定链接的行为，因此现在 [ext[<https://tiddlywiki.com/#HelloThere>]] 只开启单一指定的条目
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/0c48502e8ed214cee23537d06e7e87efd53592c7) 支持 `"""` 多行属性于 [宏](Macros in WikiText)、[小工具](Widgets in WikiText) 以及 [HTML 元素](HTML in WikiText)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/32099b85d3b12f9e590274cb7550e3e531131706) [目录](TableOfContents) 页签于 tw5.com 版

## 可编程性改进

* [恢复](https://github.com/Jermolene/TiddlyWiki5/commit/1b37d660ea7cd576cfeadfe8b782fe6c62dc9048) **escape** 为放弃编辑的快捷键
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/9547a1f01c144c604c294f394a68d7dc6dbe4e5d) 支持以 URI 引用[外部图片](ExternalImages)，且不存放于 TiddlyWiki HTML 文件内
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/d2796d0c9c7ed7a971ae6b0752d7418384072bb5) [SetField](SetFieldCommand) 命令
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/305617b632fd6ecf25cd4be85f4dfb5a5a65dfef) [SaveTiddlers](SaveTiddlersCommand) 命令
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/f14ecf4eb8965f2e407ccac51d4277330221efe3) 支持系统页签 [$:/tags/RawMarkup](#%24%3A/tags/RawMarkup)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/0bdc5b5c70fbbf34aa459afcf0499fc9c8ae6374) 编辑器类型于控制台中的高端页签
* [重构](https://github.com/Jermolene/TiddlyWiki5/commit/1717c93d001ad184a08ca66d1bffb33fb5d32b3a) CodeMirror (https://tiddlywiki.com/codemirrordemo.html) 插件更简易的组态
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/b2e48d00e9ea068a22b5ac5c0a4c93e8ddbb4a8a) 支持 [Environment Variables on Node.js](#Environment%20Variables%20on%20Node.js)
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/eee3a0cf8e5aa047f8596df06e28194409f38b01) ServerCommand 允许路径前缀
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/4238af2a405c14d22937d7c47a70bfb3d4e6f22d) <<.olink listed>> 使用任何列表字段

## 修复错误

* 修正 [此处](https://github.com/Jermolene/TiddlyWiki5/commit/6fb992690d33940d3509d7d4d74538e7f458e063) 以及 [此处](https://github.com/Jermolene/TiddlyWiki5/commit/0fae9ee99200e7eca30b9db0584c479d58841349) 状态条目无意中保存的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/a03a15e7de32a1b41618146ac334b5cd7d432e91) TextWidget 未正确刷新的错误
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/d8a142fed5b22a8273d93ba05095e5f9c6929cb3) 于 Safari 垂直页签的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/b8aedf2ca3cfc870be5a46accbb2dc0ddbb6d451) Markdown 里的图片问题

## 贡献者

[@Jermolene](https://github.com/Jermolene) 要感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@BramChen](https://github.com/BramChen)
* [@buggyj](https://github.com/buggyj)
* [@csugden](https://github.com/csugden)
* [@danielo515](https://github.com/danielo515)
* [@IreneKnapp](https://github.com/IreneKnapp)
* [@jayfresh](https://github.com/jayfresh)
* [@mwfogleman](https://github.com/mwfogleman)
* [@xcazin](https://github.com/xcazin)
