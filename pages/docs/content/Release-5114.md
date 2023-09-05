---
title: '5.1.14'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.13...v5.1.14)//

## 新的和改进的插件

* 添加 [SaveTrail 插件](SaveTrail Plugin)，在背景持续下载已编辑的条目，提供了一些备份轨迹
* 添加 [XLSX 工具应用版](XLSX Utilities Edition) 用于导入 Excel 兼容试算表。详细信息请参阅 [XLSX 工具应用版](XLSX Utilities Edition) 
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/22c1b04ee79a5ccc25cbc33cc91bf5daac1df831) QR code 生成器插件
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/7f11c151f06cd039d1887a6940075237ccb4b7a9) ~BibTeX 导入插件
* [更新](https://github.com/Jermolene/TiddlyWiki5/commit/c16f96626e2ff9d849563eeba7d8ef5cf8e4ed4b) Google Analytics 插件到最新版本
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/e30330d4be0e0b9b04ea807a034c8d9fa3d13fea) 可嵌入推文等等的 [Twitter 插件](Twitter Plugin)
* [更新](https://github.com/Jermolene/TiddlyWiki5/commit/c0f7f18f0a268087e51813bfbba1b796478d0bb1) [KaTeX 插件](KaTeX Plugin) 为 [KaTeX v0.7.1 版](https://github.com/Khan/KaTeX/releases)

## 拖放的改进支持

有几项[拖放](Drag and Drop)的改进：

* 能够重新排列侧栏的"开启"皮肤和标签下拉清单（且可将新条目拖动到列表中来开启）
* 能够重新排列标签下拉清单中的项目
* 拖动标签丸现在相当于将该标签的所有条目一起拖放
* 控制台的"视觉外观"/"工具列"页签中的项目可以经由拖放重新排序
* 拖动时显示的图像现在反映拖动的项目，而不是一般的拖动区块

## 新的 "Heavier" 布景主题

一个名为 "Heavier" 的新主题，加粗 TiddlyWiki 缺省的轻量级字体。将 "Heavier" 布景主题与现有的 "Tight" 布景主题结合的变种 "Tight-Heavier"：

<$button>
<$action-setfield $tiddler="$:/theme" text="$:/themes/tiddlywiki/heavier"/>
试用 "Heavier" 布景主题
</$button> <$button>
<$action-setfield $tiddler="$:/theme" text="$:/themes/tiddlywiki/tight-heavier"/>
试用 "Tight-Heavier" 布景主题
</$button> <$button>
<$action-setfield $tiddler="$:/theme" text="$:/themes/tiddlywiki/snowwhite"/>
还原
</$button>

## 新的条目管理器

[添加](https://github.com/Jermolene/TiddlyWiki5/commit/16bb65d17f5a20a0076320c6b1305b7b139d7375) 新的[条目管理器]($:/Manager)支持以下任务：

* 审查并将标签套用到多个条目
* 调整自订颜色和图标到多个条目

将在未来扩充条目管理器，加强灵活性并增加批量操作的支持。

## 性能改进

* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/989cee50594a76a0f30d1d2124ce9e5e5808c6cf) 搜索机制，要求最小长度的搜索字符串

## 翻译改进

* [改进](https://github.com/Jermolene/TiddlyWiki5/tree/master/languages) 丹麦语、荷兰语、法语、德语、葡萄牙语和华语翻译
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/b96377099a7377e4c77582800cac78103a08b066) 新的希伯来文翻译
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/e20bce5450f40c8db891893fa0674c493bba7f11) 初步支持从右向左 (RTL) 语言

## 可用性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/3197f9a639761e1e56b2f5b18b5f7cf5c3d992da) 一个全选/全不选的复选框至导入皮肤的顶端
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/2072) "关闭插件程序库" 按钮
* [增加](https://github.com/Jermolene/TiddlyWiki5/pull/2592) 使用 <kbd>Enter</kbd> 键添加标签的支持
* [改进](https://github.com/Jermolene/TiddlyWiki5/pull/2590) <kbd>Ctrl</kbd>+<kbd>Enter</kbd> 的处理，以增加部分完成的标签和字段
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/e8bb897e263feea1a671ce035af68d0c6bc246b5) 支持重新链接参考的已重命名的条目
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/0b76c327c217251e2eb8e318e3f2d4637192581a) "打印页面" 页面控制按钮 {{$:/core/ui/Buttons/print}} (和[添加](https://github.com/Jermolene/TiddlyWiki5/commit/c4e13bc94afb022e40aaa70b06464084188acfea)关联的[图标]($:/core/images/print-button))
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/d1121787c090ec8f5fc592b83c3dbad1075fe0ec) 暂停时间戳记 {{$:/core/ui/Buttons/timestamp}}的页面控制按钮
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/7a6d7e2a1567ce04330939b3926b21b88796b4c9) 访问插件的信息︰
    * 使用与控制台相同的格式，重构插件条目的显示，添加影子条目列表为可改写的扩充页签
    * 在侧边栏中 "更多" 页签中，提供一个可快速访问所有已安装的插件的新页签
* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/2616) 当选择固定高度布局时的使用滚动条的预览窗格的高度
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/4eed18496fe2f4f67ad6a382b813b5c5371d3930) 编辑器创建外部链接和佚失链接的 "链接" 按钮
* [增加](https://github.com/Jermolene/TiddlyWiki5/commit/2d9aa12aa867d1b7c983e21de2ed60abf6f5a1bc) [高端搜索]($:/AdvancedSearch)的 "筛选" 页签里的图标大小
* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/2381) 故事河里出现条目的多个副本的问题
* [改进](https://github.com/Jermolene/TiddlyWiki5/pull/2585) 新字段名称的搜索建议的下拉清单功能
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/c02c3a06e09baaa7746a26dffebb97ef8ec1ff6e) 条目编辑器内容类型的下拉清单中的分组排序
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/b3273bcbda6bcb9f3a0670b79ea598c3674c5012) 条目信息皮肤 "sticky" 模式。详见[控制台]($:/ControlPanel)里的 "设置" 页签
* [增加](https://github.com/Jermolene/TiddlyWiki5/commit/5bf238fc8698a6b750dd0f577ab745a4db714a17) 标签丸文本的边框线宽
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/ee66d1a1afb939c0cba8c2257b8300921831c716) 发布标示版本的文档标记的新功能
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/b1a5afbf158fab9e224978c81a10aca15d30d91a) 一个项目到高端搜索筛选器中，用于导出当前的故事（不含高端搜索）的下拉清单

## 新的和改进的筛选器运算符

* [添加](https://github.com/Jermolene/TiddlyWiki5/issues/2767) [enlist Operator](#enlist%20Operator)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/b4b77d1681023d4ccc0e157df1ce67d0d388cd5a) 数个新的字符串编码/解码的筛选器运算符︰
    * [decodehtml 运算符](decodehtml Operator)
    * [decodeuri 运算符](decodeuri Operator)
    * [decodeuricomponent 运算符](decodeuricomponent Operator)
    * [encodehtml 运算符](encodehtml Operator)
    * [encodeuri 运算符](encodeuri Operator)
    * [encodeuricomponent 运算符](encodeuricomponent Operator)
    * [escaperegexp 运算符](escaperegexp Operator)
    * [stringify  运算符](stringify Operator)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/ffcbcbfa82cb8f1044c57967117aeae0978579f0) [minlength 运算符](minlength Operator)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/9a386421414aacd23e21bc9cb1a116b905fb39ff) [order 运算符](order Operator)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/c65d08240b1f69078c8b3129cb9b00df56ada1d3) 严格模式到[标签运算符](tag Operator)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/a3dc3b4b98f424d12019550df52639224100316f) **tags** 选项至 [all 运算符](all Operator)
* [更改](https://github.com/Jermolene/TiddlyWiki5/commit/c460cc03a49be2c41157814f5a1fc25c4bc3fe41) [is 运算符](is Operator) 直接传递参数，如果操作数为空
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/2066) [has Operator](#has%20Operator) 的 "field" 尾码
* [改进](https://github.com/Jermolene/TiddlyWiki5/pull/2193) [wikiparserrules Operator](#wikiparserrules%20Operator) 以传返回所有可用的解析规则

## 可编程性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/d9f301f7556ce899840dab0ebc31c040d9c7a72b) "formattedtext" 输出类型的支持至 WikifyWidget
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/a20da9f5303fdd52a54d61b231450c2aa35d3804) 点对点的 Beaker 浏览器的保存进程; 详见 [TiddlyWiki on Beaker Browser](#TiddlyWiki%20on%20Beaker%20Browser)
* [重构](https://github.com/Jermolene/TiddlyWiki5/commit/f07e0f981a1cded691227146e0281f7c4f06d55c) 标签范本和宏，使其更可重用
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/87fa7f972cae859c466dea8a531d50f060e7d910) 模式和通知，以便全局宏可用
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/b35544bf4946596e60f7b0c7f0a55fa490ac2a24) SetWidget 允许从筛选的结果清单中选择单一结果
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/2f590a365e5b6bfecc1170fdbeaaf398795a2feb) `$:/info/url/*` [信息条目](InfoMechanism) 提供文档位置信息
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/3bceb98119c6f1fbbed76c977c601a930b0bcac9) **actions** 属性的支持至 CheckboxWidget
* [扩充](https://github.com/Jermolene/TiddlyWiki5/pull/2104) CheckboxWidget 支持数据条目，通过 `index` 属性
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/b1a5afbf158fab9e224978c81a10aca15d30d91a) 项目到高端搜索筛选的导出菜单，用于导出当前故事河
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/1b339e17bc0c67ff7eb3e8f7f299588ecf8848ee) `tag` 属性于 KeyboardWidget
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/2614) 覆写保护至 ~WebDAV 保存模块
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/202ffd9c51d71b469eff968ae63b56a985a3c6bf) [引言维基语法](Block Quotes in WikiText)的"大型区块引言"样式
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/c25a44756b1a4a08a29fbe02a908ef57a6a193bf) 可定制的新日志条目范本内文，可访问控制台
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/779e62a30fc5e61cee893eabc0f268e7fb959639) 支持 `.json` 条目文件包含一个单一条目对象，而非一个条目数组

## Node.js 改进

* [修正](https://github.com/Jermolene/TiddlyWiki5/commits/master/plugins/tiddlywiki/filesystem/filesystemadaptor.js) 由文件系统配接器创建新条目文件的多个问题
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/0d0ece63777a22422ab2ddae7dee996b28f62c5e) FetchCommand 透过 http/https 取得条目
* [加强](https://github.com/Jermolene/TiddlyWiki5/commit/6f93ce6ea790427fe1e6e11a062d64f14449bfa3) RenderTiddlerCommand 增加对于一个额外变量的支持

## 修正错误

* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/b1ecf81b0c0727db2245cfeba78cc46a33c3a814) [Highlight 插件](Highlight Plugin) 的 Node.js 支持
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/2650) [Table-of-Contents Macros](#Table-of-Contents%20Macros) 的递归错误的问题
* [防止](https://github.com/Jermolene/TiddlyWiki5/commit/f97c1226aac9f3a5b563fc8d95bfeff91b8ab810) 电子邮件地址被误识别为 HTML 标记
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/2572) `$tw.utils.strEndsWith()` 的问题
* [部分修正](https://github.com/Jermolene/TiddlyWiki5/issues/2599) 刷新周期的动作小工具被单独调用的问题
* [修订](https://github.com/Jermolene/TiddlyWiki5/issues/2522) `syncAdaptor.isReady()` 方法的处理，以提高与旧配接器的兼容性
* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/2517) `String.prototype.replace()` 的不安全使用的问题,，损坏包含货币符号的字段
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/8b60dbb81d3495aa8be1f160e4f31bcae995f400) 不显示通过透明背景图像的页面背景颜色的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/2514) 未加载精简条目的同步问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/06b7de415cd2cef3848f2ef2516200ee79afd130) 在登录对话对话框中提交表单的 "取消" 按钮的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/2579) 当删除一个字段时，created/creator 字段的错字影响 
* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/2595) 未被识别的包含国际字符的系统链接的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/2076) 单行宏定义行尾无分行符号的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/cf28eeb2a120fe3f263235c35fe5603013f88049) 用空字符串和 CheckboxWidget 的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/b759d82f4ce2bf44da0bcce0c08550870f3216f8) 周数计算的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/2312) [move Operator](#move%20Operator) 不正确环绕的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/f0ff1f993e94d6928f0aa249b7f6f5e5624ebb69) 防止自订 textarea 背景颜色的问题

## 开发者错误修复和改进

* [更新](https://github.com/Jermolene/TiddlyWiki5/commit/25b2e846cea0f560b259296263a98e3287e5f311) Stanford JavaScript 程序库至版本 v1.0.6
* [更新](https://github.com/Jermolene/TiddlyWiki5/commit/c16f96626e2ff9d849563eeba7d8ef5cf8e4ed4b) Google Analytics 插件到最新版本的 Google 代码
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/3c715c5e0d1117ca32760d4da6578cd27af06172) Common/JS 兼容性，通过增加支持隐含添加 `/index.js` 至要求目标
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/1b41b4468495bbe66f99345ee94a67346176deb7) 支持通过 TiddlyWikiFolders 中的 [tiddlywiki.files Files](#tiddlywiki.files%20Files) 批次加载条目文件
* [重构](https://github.com/Jermolene/TiddlyWiki5/pull/2627) 服务器机制，使其易于集成 TiddlyWiki 至 [ExpressJS ]( HTTP://expressjs.com/) 应用程序
* [重构](https://github.com/Jermolene/TiddlyWiki5/pull/2626) TiddlyFox 保存模块，使其更易于与其他保存机制并用
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/2397f0aa6f7af305807b61ccb1d435c2e6a789ab) (和 [此处](https://github.com/Jermolene/TiddlyWiki5/commit/daf703b67fae0dd029eeaa4317b721fa8c284648)) 几个新的 UI hooks，和[改进](https://github.com/Jermolene/TiddlyWiki5/commit/6b2ab9072111cb87508f83a385b0885fb196cbcf) hook 机制; 详见 <a href="https://tiddlywiki.com/dev/index.html#:[search:title[hook]]" target="_blank">开发者文档</a>

# 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@beniquezsd](https://github.com/beniquezsd)
* [@BramChen](https://github.com/BramChen)
* [@crypdick](https://github.com/crypdick)
* [@danielo515](https://github.com/danielo515)
* [@dedioste](https://github.com/dedioste)
* [@DoronTzur](https://github.com/DoronTzur)
* [@duarteframos](https://github.com/duarteframos)
* [@FND](https://github.com/FND)
* [@gernert](https://github.com/gernert)
* [@hchaase](https://github.com/hchaase)
* [@ibnishak](https://github.com/ibnishak)
* [@jest](https://github.com/jest)
* [@jrgetsin](https://github.com/jrgetsin)
* [@nameanyone](https://github.com/nameanyone)
* [@Marxsal](https://github.com/Marxsal)
* [@mklauber](https://github.com/mklauber)
* [@nmota](https://github.com/nmota)
* [@pmario](https://github.com/pmario)
* [@roma0104](https://github.com/roma0104)
* [@Serj-Aleks](https://github.com/Serj-Aleks)
* [@stevesunypoly](https://github.com/stevesunypoly)
* [@sukima](https://github.com/sukima)
* [@sycom](https://github.com/sycom)
* [@tejjyid](https://github.com/tejjyid)
* [@telmiger](https://github.com/telmiger)
* [@tobibeer](https://github.com/tobibeer)
* [@twMat](https://github.com/twMat)
* [@xcazin](https://github.com/xcazin)
* [@zakrec](https://github.com/zakrec)
