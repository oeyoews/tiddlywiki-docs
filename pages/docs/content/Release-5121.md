---
title: '5.1.21'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.20...v5.1.21)//

<<.banner-credits
	credit:"""恭喜 [Sylvain Comte](https://github.com/sycom) 赢得此版本的横幅设计 (这是[其他作品](https://groups.google.com/g/tiddlywiki/c/l47ZZzWdDb8/m/a1dnyKG0AQAJ)).
"""
	url:"https://raw.githubusercontent.com/Jermolene/TiddlyWiki5/42060acb43b329036b7436ee154bf605e90efa8e/editions/tw5.com/tiddlers/images/New%20Release%20Banner.jpg"
>>

这是一个错误修复版本，解决最近 [5.1.20 版](Release 5.1.20)中引入的问题。

## 修正错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/a170210069bbec265992b365a61e0722b480ab1d) ActionDeleteFieldWidget 崩溃和一个缺少 **tiddler** 属性的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/4087) 边缘案例，当被解译为筛选器时，某些条目清单无效
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/471b73158a887d2f060194741739c1da8b5d44d8) 升级包含被覆写的内核模块的维基时，警示过多的问题
* [恢复](https://github.com/Jermolene/TiddlyWiki5/commit/83386f34b50a9d93171df133957d489b5de629ef) 无意中激活性能检测
* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/4218) 字段名称中包含 WikiText 的错误
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/dd09266b467173e45d75c172b2e82fd542f682fe) [目录宏](Table-of-Contents Macros)中的 CSS 类的问题。
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/4203) 具有 CSS 类 `tc-btn-invisible` 的按钮缺少前景颜色的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/4227) 字段输入编辑器周围的空白
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/bb036ced933ecb36f5d93693fb4f6e7aa2748df7) [翻译者应用版](Translate TiddlyWiki into your language)的布局问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/996ee52cf9f5e15d95deaf0acf4206959d34432a)  于 Windows 使用 [External Attachments Plugin](#External%20Attachments%20Plugin) 崩溃的问题
* [删除](https://github.com/Jermolene/TiddlyWiki5/pull/4245) 不一致的侧边栏中标签丸的阴影
* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/4247) [field 操作符](field Operator)和空白操作数的递归
* [恢复](https://github.com/Jermolene/TiddlyWiki5/pull/4249) v5.1.20 中错误更改清单的字符串化方式
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/4189) 侧边栏的''打开''选项卡，使用 `tv-story-list` 变量
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/4255) [保存到 GitLab](Saving to a Git service) 的问题

## Node.js 错误修正

* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/4174) [自定义条目文件命名](Customising Tiddler File Naming)的错误

# 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@bimlas](https://github.com/bimlas)
* [@BurningTreeC](https://github.com/BurningTreeC)
* [@flibbles](https://github.com/flibbles)
* [@heronils](https://github.com/heronils)
* [@hoelzro](https://github.com/hoelzro)
* [@markstegeman](https://github.com/markstegeman)
* [@StefanSTFG](https://github.com/StefanSTFG)
* [@xcazin](https://github.com/xcazin)
