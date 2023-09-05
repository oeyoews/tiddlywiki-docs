---
title: '5.0.15-试用版'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.0.14-beta...v5.0.15-beta)//

## 可用性改进

* [简化](https://github.com/Jermolene/TiddlyWiki5/commit/c57b00996855f10d9b7fa2aa4e9deb2a2a607d7f) 缺省开启目
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/32a7ee2683ace619599f0ab73028307ca33f4e4c) 停用插件功能（见[插件机制](PluginMechanism)）并提供用户接口于[控制台]($:/ControlPanel)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/4b05608ad5e77043b01495825ea0f0e76c378760) 调用[标签管理]($:/TagManager)的页面控制按钮
* [简化](https://github.com/Jermolene/TiddlyWiki5/commit/c4b76ceb0bc786bcceb12fc3417bb8c4bfde27a9) 下载一个主从版维基的脱机副本
* [封锁](https://github.com/Jermolene/TiddlyWiki5/commit/2bbe9f76ecf8fc89c789e72be00ac19e811195ee) 暂存的状态条目，从导入/升级

## 可编程性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/c912fed55d94c9bef2d541cd55f458b12172941c) 横幅到编辑模板，鼓励改善文档
* [重构](https://github.com/Jermolene/TiddlyWiki5/commit/f75af2c983e10e8a82639890b993fb5cf042d610) `saver-handler.js`，自 `syncer.js` 分离之
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/8cf726275c19ed5b4a0ed1cf8354d64d1bc29da5) [目录宏](Table-of-Contents Macros)支持
* 简化启动模块架构 （见 [Startup Modules.svg](#Startup%20Modules.svg)）
* [改变](https://github.com/Jermolene/TiddlyWiki5/commit/25777b147fa4ed2f915150aec503ad1e094e6043) [拖放区小工具](DropzoneWidget) 的覆叠文本使其支持多语翻译
* [采用](https://github.com/Jermolene/TiddlyWiki5/commit/920e11e7921f777170aa2f9e1836c000fec2e26d) 新的 [刷新按钮](WidgetMessage: tm-browser-refresh)以及恢复[首页按钮](WidgetMessage: tm-home)的行为
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/fbf307c648ae0e92679c54f7d03f197a75b4e101) **alt** 属性到[图片小工具](ImageWidget)

## 修复错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/c8830d32f74b8c228553f11f7f55b5be45ae6471) 在 Windows 下生成 TiddlyWiki 的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/34461cb2fe554331a0269fd7795b1d6a879fcba9) 升级导引中无法点击的下载链接
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/9e85ddfec78dd8df71e6173100dce659417551f4) 在 **empty.html** 中缺少语言标志
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/18592fe8f810d1858ca040da1a7c4a81fb74cfed) 条目类型的图形和文本编辑器之间切换的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/fe6623d7feed1a9068e15bfac57be0b0924e8915) 侧边栏标签的前景颜色
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/c912fed55d94c9bef2d541cd55f458b12172941c) github 来源链接 tiddlywiki.com 标题包含冒号无效的问题

## 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@BramChen](https://github.com/BramChen)
* [@xcazin](https://github.com/xcazin)
