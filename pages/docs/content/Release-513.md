---
title: '5.1.3'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.2...v5.1.3)//


## 可用性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/e872f17842809e33eae177980e9ea0650b6a4c03) "添加日志" 按钮；请参阅 [Creating journal tiddlers](#Creating%20journal%20tiddlers)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/70984aa39f8a4061162d4e404bfd158e515c7e6e) "添加子条目" 按钮；请参阅 [Creating and editing tiddlers](#Creating%20and%20editing%20tiddlers)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/00cdd04edd49c2bf0e461071c0c7c50f8aab4e42) "添加子日志" 按钮；请参阅 [Creating journal tiddlers](#Creating%20journal%20tiddlers)
* [制作](https://github.com/Jermolene/TiddlyWiki5/commit/c6951ee912d1f2717a8c208cbb920e54edf9e5d9) 日期格式字符串可被翻译
* [添加](https://github.com/Jermolene/TiddlyWiki5/tree/master/languages/ru-RU) 俄语翻译
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/ef1d5310918dae088ce9361c1682ce0f99cf568a) 清除密码时确认
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/b7bbcfa05659808c1e51a4f2f5f1d6afbc2ed3a1) 设置密码时，额外的提示
* [放大](https://github.com/Jermolene/TiddlyWiki5/commit/dc9981322aeb508d5ebac0b691b0d703f8c1995e) 清除搜索按钮
* [升级](https://github.com/Jermolene/TiddlyWiki5/commit/564457de1c991df15263040d2d5526fa8ae879bb) 至 [KaTeX v0.1.1](https://github.com/Khan/KaTeX/releases/tag/v0.1.1)

## 可编程性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/2ffe53f1916e4b746cc6d7e74e8f4ac75c72e38a) 处理[音频](Audio)内容的音频"解析器"
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/0dcf54c3b59ed04645928f0ec4ced647e5a0da7f) 对 ActionWidgets 的支持
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/65504d5d41e45326ab1b1b6c0c21eea4c9772797) <<.olink addprefix>> 与 <<.olink addsuffix>>
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/0c8e5380778303cdd3308bed4a15290214841f8b) 支持自订密码提示
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/c26bd4c5a872f56c47e9f5cfc3fada468c53ddde) <<.mlink list-links>> 宏使其显示 <<.field caption>> 字段，如果存在
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/12e26009eef5e29140ba1a880ff033428d673630) ImageWidget 允许指定百分比宽度和高度

## 修复错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/cc576b052e2b05fd93fcb4f3eb8d9ee5278abf3e) <<.olink each>> 可用于佚失条目
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/5dd6ebff05a3380db2901294b2cfc89c1a0e71bf) 于 zoomin 模式下且侧边栏隐藏时条目宽度的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/09b6540998fec6bf1fb14842be8e8c53dbd5c46a) 由此 `tm-home` 消息并没有导航到条目，在 zoomin 查看模式造成的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/3ca8d7b6cca46ffa424bcf9bdc134da464fc84f4) 于 Firefox 跳转工具列图标的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/f85b07e70b71d0622a9459e4b04e2027540abda8) 未设标签的标题颜色不正确的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/b3dcd7d625ec83701ef3a77f3fb8101af57c154f) "Sticky Titles" 布景主题的条目名称背景颜色的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/5211f9c40c874a167174e8c0d439db34189d3329) <<.mlink timeline>> 宏的子筛选器参数的问题
* [排除](https://groups.google.com/d/topic/tiddlywiki/YPACpXhH9PY/discussion) 从搜索结果搜索字符串条目

## Node.js 更改

_这些更动只与在 Node.js 下使用 TiddlyWiki 的人有关_

* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/63c174d7ed56284e80ad6cd6ae966b81f9181cc9) ~Katex 插件，使其能运作于 Node.js 生成静态的 HTML
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/49dc5694a391a391264a4473e4f4422e2472a3b3) "includeWikis" 以合并建构目标
* [重构](https://github.com/Jermolene/TiddlyWiki5/issues/969) tiddlywiki.com 的建构脚本至分离的代码库 <https://github.com/Jermolene/build.jermolene.github.io>
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/744245ea3249446fd15f504190efb1d828935d01) 启动核心，如果在命令行上指定不存在的维基文件夹时，会引发错误

## 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@andrey013](https://github.com/andrey013)
* [@BramChen](https://github.com/BramChen)
* [@buggyj](https://github.com/buggyj)
* [@Eucaly](https://github.com/Eucaly)
* [@fghhfg](https://github.com/fghhfg)
* [@Marxsal](https://github.com/Marxsal)
* [@pmario](https://github.com/pmario)
* [@simonbaird](https://github.com/simonbaird)
* [@TheDiveO](https://github.com/TheDiveO)
* [@xcazin](https://github.com/xcazin)
