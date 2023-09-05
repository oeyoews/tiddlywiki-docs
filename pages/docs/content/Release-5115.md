---
title: '5.1.15'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.14...v5.1.15)//

## 新的和改进的插件

* 新的 [Amazon Web Services Plugin](#Amazon%20Web%20Services%20Plugin)，用于在云端运行 TiddlyWiki 简单的初始版本
* 新的 [External Attachments Plugin]] 允许 TiddlyDesktop 的[[外部图像](ExternalImages)自动创建

## 翻译改进

新的和改进翻译:

* 添加波斯语翻译
* 更新华语和希腊语翻译

另一个有利于翻译用户的改进，是添加了大约 800 个新的//成对音译//。这些是在将条目名称转换为文件名时运行的替换，例如，用於单一字符 "œ" 的两个字符 "oe"。详细信息，请参阅[提交](https://github.com/Jermolene/TiddlyWiki5/commit/5cdf86b3072604f8c556c84f266767be5b8e75c3)。其结果是自动生成的文件名称更易于阅读。

## 可用性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/1e9d214f67906e63758f8665091bc0ef6651f10d) "探索" 选项卡至侧边拦的 "更多" 选项卡和底层的 [tree 宏](tree Macro)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/cee7baa1831a8f236c46d8c438c2a4d9bda8a0e2) 于[主题调整]($:/themes/tiddlywiki/vanilla/themetweaks)的编辑器字体的配置选项

## 可编程性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/aa417fe899d0983ad8a3fe1fdfe9cac42364b2b6) [lookup 操作符](lookup Operator)，以简化查表的使用
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/5dd3d97760083f7c6ba9a6cd6186525edb3fb836) SetWidget，添加 **tiddler**、''field'' 和 **index** 属性
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/d966583854d7c7f4a7df25c0e2a8d6b9e217a12c) 新的 **whitespace** [编译指示](Pragma)，允许在维基文本中选择性地忽略空格
* [更新](https://github.com/Jermolene/TiddlyWiki5/commit/ef9efbc3995248d72148423bee10a1374c842926) 用于 [Beaker 浏览器](Beaker Browser) 保存的支持
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/4db950cc450ef1ea87ce8f480fe882f2b108cdb4) [日期格式](DateFormat)，以支持毫秒和 UTC 日期
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/dc295b2536cdf411893e15b6dc0d62107f50a08d) LinkCatcherWidget 以使动作字符串中的目标条目可用
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/596dfa1d5058e030a318e4a0f23d078500c3d154) (与 [此](https://github.com/Jermolene/TiddlyWiki5/commit/a4d919f45caae393f99018e0d797980b3667867f)) DropzoneWidget 和 BrowseWidget 以允许手动指定解串器
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/523280362b529ee73229001a1bcd79272f483908) `tc-btn-*` CSS 类别到工具栏按钮，允许更易于自定义样式
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/8293a77c6e6870960956dcf1501c687d2f88ea3c) **mode** 属性到 ViewWidget，允许控制维基化输出格式的解析模式
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/d7a6816307f4fd47df29cb8e0343ea39c079a2b0) [jsonstringify Operator](#jsonstringify%20Operator)

## Node.js 改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/35a7a66b019f2ea0532ba65cd5475f5cfe46a860) SaveCommand 和 RenderCommand，旨在更灵活的替代 RenderTiddlerCommand、RenderTiddlersCommand、SaveTiddlerCommand 与 SaveTiddlersCommand
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/51b1ead5c9aa5a754e7fdc0bfbf241dd98db5f7c) (和 [这个](https://github.com/Jermolene/TiddlyWiki5/commit/1b7d9d65f42e77fdceb11b0b0b9ab9a63f6762e9)) 更多颜色到命令行的输出
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/c179dc93cbd8947f92a8007d28c497b70efc4204) FetchCommand 的新的 "raw" 选项
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/e951047461c3c2c273484a759ce5fc2c388fb684) ImportCommand

## 修正错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/2821) "添加日志" 按钮清除 <<.field text>> 字段的问题
* [删除](https://github.com/Jermolene/TiddlyWiki5/commit/c069d48a2a690b333c0733328f3574ae8a76e435) PUT 保存模块里，多余的文件名 URI 编码
* [撤销](https://github.com/Jermolene/TiddlyWiki5/pull/2940) 图像选择器宏使用子筛选器的能力
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/ccac0258af9b6d8c93d41b1f170e20dbf2efe3f3) 下载保存进程，文件名包含空格、重音或其他需要 URL 编码的字符的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/2850) 导入 JSON 条目的名称中带有前导或尾端空格的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/683285d44943db2d993bd574ed2d2f8a07dfc816) 插件显示，即使没有提供其他选项卡，也会显示 "内容" 选项卡
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/2842) 筛选器操作符 `allbefore:include` 的问题
* [更新](https://github.com/Jermolene/TiddlyWiki5/commit/e471bd54d42226d3b6d070b8561f8883f44df68a) Stanford JavaScript Library 至 1.0.7 版

## 开发者错误修复和改进

* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/0bc325025a61c265dafe7ce8750ea8deed2be51b) `$tw.boot.boot()` ，添加回调参数
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/d89010752a8b169a4917bde9a9028ddd871e743d) 导航处理，传递原始事件数据
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/518f57f4bbc747c3675260eb3ffde1dc7468c805) `th-importing-files` hook

# 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@0mp](https://github.com/0mp)
* [@Arlen22](https://github.com/Arlen22)
* [@BramChen](https://github.com/BramChen)
* [@cjhunt](https://github.com/cjhunt)
* [@danielo515](https://github.com/danielo515)
* [@hoelzro](https://github.com/hoelzro)
* [@Marxsal](https://github.com/Marxsal)
* [@maxthomax](https://github.com/maxthomax)
* [@morosanuae](https://github.com/morosanuae)
* [@pmario](https://github.com/pmario)
* [@rubaboo](https://github.com/rubaboo)
* [@saqimtiaz](https://github.com/saqimtiaz)
* [@telmiger](https://github.com/telmiger)
* [@twMat](https://github.com/twMat)
* [@xcazin](https://github.com/xcazin)