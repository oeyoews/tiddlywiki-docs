---
title: '5.0.11-试用版'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.0.10-beta...v5.0.11-beta)//

## 不兼容的更动

详见 [Notes for upgrading to 5.0.11-beta](#Notes%20for%20upgrading%20to%205.0.11-beta)：

* 命令行操作的缺省输出位置已更改为 `/output` 文件夹位于 TiddlyWikiFolders 中的子文件夹 （现行目录）。
* 注意缺省条目 [$:/core/ui/PageMacros](#%24%3A/core/ui/PageMacros) 在此版本已更改。若您曾经修改过此条目，则应先将此更动复制至另一条目、删除 [$:/core/ui/PageMacros](#%24%3A/core/ui/PageMacros)、运行更新、然后再于新版本的 [$:/core/ui/PageMacros](#%24%3A/core/ui/PageMacros) 手动修改先前的自订更动

## 文档的改进

* 添加有关 [备份数据](The First Rule of Using TiddlyWiki) 的更多的警示消息

## 可用性改进

* 诸多性能优化，尤其是筛选器操作
* 添加支持固定链接，以及浏览器的后退和前进按钮
* 添加支持 WikiLinks in Markdown via `[link text](#TiddlerTitle)`
* 添加支持显式外部 [Linking in WikiText]] (例如：`[ext[tooltip](url)`)
* [更换](https://github.com/Jermolene/TiddlyWiki5/issues/580) 汉堡功能表图标为`>>`形图标
* [加强](https://github.com/Jermolene/TiddlyWiki5/commit/552657fc584dbb36754d3fcabca2cdef7e916ec9) 纯文本的解析，以便使用 CodeBlockWidget，因此如果已安装该插件程序则使用语法高亮显示。此外这给了我们语法高亮显示的 JavaScript 缺省条目
* 改进 German、French、Italian、Japanese 以及 Chinese 翻译
* [移除](https://github.com/Jermolene/TiddlyWiki5/commit/61c3f8a5ba3c815d623c06f6a97d9c00a31a4157) WikiText 条目，自侧边栏的 "类型" 页签
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/a90339d1e573ec82dba1caeaead0f71717618a80) 在编辑缺省条目时的各种警示消息
* [允许](https://github.com/Jermolene/TiddlyWiki5/commit/0ac4c2b554f045c6bd2dc6ea5daa0d2f0397d04c) 字段名称包含数字
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/a4294b55f0a217d019a6e4cbb62f6a8a19668928) 警示横幅，当尝试编辑二进位条目时
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/b84c663215cf7877fff960748af4b2849ae0dbb3) 浏览器窗口的标题的自动刷新，从 $:/core/wiki/title

## 可编程性改进

* 改进了垂直布局的 <<.mlink tabs>> 宏
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/93566cdc332226b77eaba8a70fa166f3b8fcfe1e) "标准" 页签至 [高端搜索]($:/AdvancedSearch)
* [增加](https://github.com/Jermolene/TiddlyWiki5/commit/e83759e86d2a9e05e4b85dae50925fe988f8e239) 新的筛选器运算符 <<.olink before>> 和 <<.olink after>>
* [增加](https://github.com/Jermolene/TiddlyWiki5/commit/570cad1c7f90e685961130918f09a7f9b2951f8c) 新的 <<.olink get>>
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/f7e50e0950c5bf10d94d926576011893418b25f1) [BuildCommand](#BuildCommand)、[OutputCommand](#OutputCommand)、[ClearPasswordCommand](#ClearPasswordCommand)
* 添加可扩充的 StartupMechanism 规划启动任务
* [更新](https://github.com/Jermolene/TiddlyWiki5/commit/711b76307c95d0026f79f584e85ae3d4b7289d15) 至新版 CodeMirror
* 添加 <https://github.com/Jermolene/TiddlyWiki5NodeWebkit>, 使用 TiddlyWiki 作为一个 node-webkit 应用程序中的程序库的一个演示
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/4e07b3335b570f4039427e11df729fc4a899a671) `.tid` TiddlerFiles，使其允许单行 `text` 字段
* 改名 `$:/ShowEditPreview` 为 `$:/state/showeditpreview`

## 修复错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/cc60ad1428dcf99a7ea0787e43e3b37f5a02fb98) 顶端栏图标悬停的错误，于 Firefox
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/e548dd35af2d3195f82899096d4a4080362a1ff0) 在文本内编辑控制项的拖放问题

## 贡献者

([@Jermolene](https://github.com/Jermolene)) 要感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

[@BramChen](https://github.com/BramChen), [@mwfogleman](https://github.com/mwfogleman), [@nameanyone](https://github.com/nameanyone), [@natecain](https://github.com/natecain), [@pekopeko1](https://github.com/pekopeko1), [@pmario](https://github.com/pmario), [@sukima](https://github.com/sukima), [@xcazin](https://github.com/xcazin).
