---
title: '5.1.8'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.7...v5.1.8)//

此版包括许多对于 TiddlyWiki 文档的改进。非常感谢所有协助的人，但尤其是对于令我们惊讶的新参与者 Astrid Elocson。

## 翻译改进

* 改善法语、丹麦文、汉语和日语翻译

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/cb8caf6a01aeeac480bf28661888961657b0dbd8) 捷克文翻译
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/d6918d737f5d1b663346ad9a35421a5ae0ffb9a7) [国际语](https://en.wikipedia.org/wiki/Interlingua)翻译
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/6721a5eb1b77935226ccc8559008af3a0a05d0cb) 葡萄牙文翻译
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/b845751d3c549366adb2f6e5c58b0114fa95ba30) 旁遮普文和印度文翻译
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/49a9a2c44ca3a71fff3062709f06940aaca4a574) 斯洛伐克文翻译
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/5d947ed582fb9d68c01d82a334ab75498a8724ef) 西班牙文翻译
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/2c367c5476da70ce9c2b37838febcdf437b9aca4) 本地化加密提示

## 可用性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/987bfcfd5b49b992e5fd45f3428497f6f55cae53) [设置页面背景图像](Setting a page background image)的用户界面
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/3df341621d30b205775288e324cef137c48e9f6e) 在启动时的不必要卷动的问题
* [升级](https://github.com/Jermolene/TiddlyWiki5/commit/ae001a19e5b3e43cf5388fd4e8d99788085649fe) [KaTeX Plugin]] 使用 [[KaTeX v0.2.0](https://github.com/Khan/KaTeX/releases/tag/v0.2.0)，具有更好的符号支持
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/70e419824fab107aab58f87780dbb5a1de70c248) [说明插件](Help Plugin)提供浮动的说明皮肤
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/8643278a452d1a300cec8d3425c1b18699a17dca) 支持线插件程序库
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/ea6e60e66983ee1184f09c5796ef6c8bceae703a) 在启动时，自动聚焦于搜索框中
* [介绍](https://github.com/Jermolene/TiddlyWiki5/commit/4f3cb8b9aebfc4f65f40c96ef99730887d746b41) Astrid Elocson 的[铁道图插件](Railroad Plugin) (可于新的[筛选器语法](Filter Syntax)文档看到它)
* [迁移](https://github.com/Jermolene/TiddlyWiki5/commit/230066eeae9ace8336612e02c78f8cdaa3f717e4) "Sticky Titles" 布景主题的功能于一个可选的 "Vanilla"/"Snow White" 布景主题调整。这意味着支持 `position: sticky` 的浏览器 (例如： Safari 与 Firefox) 在卷动期间，条目名称将固定于窗口顶端。
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/8cb7090c40489c81e8c5dfb8cbbdee2c60998c3e) 图标至 [$:/AdvancedSearch](#%24%3A/AdvancedSearch)、[$:/ControlPanel](#%24%3A/ControlPanel) 和 [$:/TagManager](#%24%3A/TagManager)
* [改变](https://github.com/Jermolene/TiddlyWiki5/commit/21b6ce71ffc617f61d4da0065a3ee695be535e2a) 条目的 "save" 按钮的用语为 "confirm" 
* [添加](https://github.com/Jermolene/TiddlyWiki5/issues/1103) 自动链接系统条目，例如 $:/ControlPanel
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/9c7936413a8c50817044eb409661a575f7f97563) 新的标签下拉式功能表到只列出匹配的条目名称
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/aae56f20af35e7be6f3839a8c727e3f43174efe9) 通知用户的警示横幅，当修改插件后需要刷新页面
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/0bd2ec50e1514ef247182816f9f9e421f52f67bb) 初步的 "stacked" 查看模式
* [改变](https://github.com/Jermolene/TiddlyWiki5/commit/421ac16389cf07e8c00611ef5a858da0b89f7584) 默认解析模态的页眉和页脚为 inline 模式 (避免不必要的 `<p>` 标记)

## 可编程性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/d340277cb219ffebd212fbf409e8ea804121d105) [resolvepath 宏](resolvepath Macro)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/718ce3e4aa04f7af5e9310f90d3415c0d82bee6f) `class` 属性至 CheckboxWidget
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/bb10e2b02900ece4701c44c3a7e7c03304e813b7) 当主要故事河为空时，显示特殊消息的支持
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/6e0c7d90221771ae384d620984f08a2090c500dc) 在 Mac OS X 下的字体渲染
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/a2493f80a973b24ad3d3affda945c437b98c2d2e) 对嵌入 ZIP 档的支持
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/1808b1597e5a61379e4e5381d6d78bb73fa3a523) 支持 RevealWidget 带有自定义的元素
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/bd6472c1d10bc86eaf1b317c35b86f84086ee3c8) **style** attribute to RevealWidget
* [Fixed](https://github.com/Jermolene/TiddlyWiki5/commit/0b4ed3c72de16148ffe62abf1c5c06f2d2ce47f1) text inputs to use palette colours
* 几个新的[内核图标](ImageGallery Example): <span style="fill:#aaa;"><span title="$:/core/images/github">{{$:/core/images/github}}</span> <span title="$:/core/images/help">{{$:/core/images/help}}</span> <span title="$:/core/images/mail">{{$:/core/images/mail}}</span> <span title="$:/core/images/tip">{{$:/core/images/tip}}</span> <span title="$:/core/images/warning">{{$:/core/images/warning}}</span> <span title="$:/core/images/twitter">{{$:/core/images/twitter}}</span> <span title="$:/core/images/video">{{$:/core/images/video}}</span> <span title="$:/core/images/up-arrow">{{$:/core/images/up-arrow}}</span> <span title="$:/core/images/left-arrow">{{$:/core/images/left-arrow}}</span></span>

## 修正错误

* [Fixed](https://github.com/Jermolene/TiddlyWiki5/pull/1520) the [sameday Operator](#sameday%20Operator) and [eachday Operator](#eachday%20Operator) to accept TW5 date strings
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/1249) 插件的版本编号兼容性检查
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/1adfe20508116da0ee4b5c9e72ea9742f24b60c9) 重复取消草稿的问题
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/050b643948e24d1d93a83766a23a0d693616d01e) 生成 `<iframe>` 元素的沙箱
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/b166632bbb76a7a033cd8fc3af14e5dadddfc631) 在 Firefox 上的模态背景的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/1b87d9134bd0b45be671eebfdcac1d7acadcecf4) 在其原始的窗口内非预期拖动条目的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/c9ab873ba393753647f2b0b3b3aa1a8bcf6b1c28) 拖动某些插件与 Safari 的问题
* [部分修正](https://github.com/Jermolene/TiddlyWiki5/commit/2f8837a44508687223c4d78e718cf82a9b35c97b) SVG 图标右侧和底部裁切了 1 个像素的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/f3ed9bf7e4936dd9bbe3e237673828bbe89326f9) 一个新的字段值中的双引号的问题

## Node.js 更改

_这些更动只与在 Node.js 下使用 TiddlyWiki 的人有关_

* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/cc85368fd48f1e5878018a4e00b6c17d436e67a9) [Highlight Plugin](#Highlight%20Plugin) 运作于 Node.js 生成的静态文件
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/c296f14210545374124df5d4ae9ffb402ed73561) 不区分大小写的文件系统的问题（如 Windows）
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/1354) 手机的中继数据到静态页面模板
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/1352) "noclean" 参数到 RenderTiddlersCommand
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/b768dc332b2d5d7ac1f731953cafb5fd1b30dad9) <<.olink editions>> 与 <<.olink editiondescription>> 筛选器运算符，枚举可用的版本

## 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@aelocson](https://github.com/aelocson)
* [@andreasabeck](https://github.com/andreasabeck)
* [@alexhough](https://github.com/alexhough)
* [@Arlen22](https://github.com/Arlen22)
* [@BramChen](https://github.com/BramChen)
* [@danielo515](https://github.com/danielo515)
* [@dpdannemiller](https://github.com/dpdannemiller)
* [@Drakor](https://github.com/Drakor)
* [@evgeniy-gryaznov](https://github.com/evgeniy-gryaznov)
* [@felixhayashi](https://github.com/felixhayashi)
* [@gernert](https://github.com/gernert)
* [@Infurnoape](https://github.com/Infurnoape)
* [@Jc-L](https://github.com/Jc-L)
* [@le-pako](https://github.com/le-pako)
* [@Mathobal](https://github.com/Mathobal)
* [@ng110](https://github.com/ng110)
* [@pmario](https://github.com/pmario)
* [@reflectionist](https://github.com/reflectionist)
* [@roma0104](https://github.com/roma0104)
* [@simonbaird](https://github.com/simonbaird)
* [@Spangenhelm](https://github.com/Spangenhelm)
* [@sukima](https://github.com/sukima)
* [@tobibeer](https://github.com/tobibeer)
* [@twMat](https://github.com/twMat)
* [@welford](https://github.com/welford)
* [@xcazin](https://github.com/xcazin)
