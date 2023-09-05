---
title: '5.1.10'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.9...v5.1.10)//

# 主要改进

## 性能优化

此版包括数个低级的性能优化技术，在许多常见的操作应该会提高速度和回应。

* [缓存解析条目的结果](https://github.com/Jermolene/TiddlyWiki5/commit/b0cb17cd83dde89753ec159e27c920a7bf22bee1)
* [循环优化](https://github.com/Jermolene/TiddlyWiki5/commit/c6e48ebc2db4af895f5b3935b3f575b8aab292fe)
* [条目反复运算优化](https://github.com/Jermolene/TiddlyWiki5/commit/8f63e2a959a7ac44533ae2b6192716ee17a1ce93)
* [状态修饰的生成](https://github.com/Jermolene/TiddlyWiki5/commit/848a7f4e744c8f4dcb4ec88a0e99c4ae6aac25e5)
* [缓存数据条目](https://github.com/Jermolene/TiddlyWiki5/commit/32f6d7f1b01474b82debcbdd5d76c49c59303265)
* [删除昂贵的视觉效果](https://github.com/Jermolene/TiddlyWiki5/commit/4f5cf4597abb08af787b62c2e2ee1b8c667dad1e)

在控制台中有一个可启用性能检测的新设置，更易于测量和改进性能问题。

## 新的应用版

* [简历生成器应用版](Résumé Builder Edition)，由 @inmysocks 制作的一个自订的版本，引导您使用 TiddlyWiki 创建一个好看的简历的过程。
* [博客应用版](Blog Edition)提供一些用于 Node.js 环境下的工具，使用 TiddlyWiki 创建一个可以发布在 GitHub 页上 (或类似) 静态的 HTML 博客。
* [Text-Slicer 应用版](Text-Slicer Edition) 是一个定制版的工具，协助高端用户将较长的文本裁切成一些个别条目。

## 外部文本条目

对存放于外部的 `.tid` 文件的条目的有限的支持:

* 有外部文本条目的单独的 TiddlyWiki HTML 文件可于 Node.js 构建之。
* 有外部文本条目的维基可以运作于浏览器中，当其首次被引用时，会自动延迟加载文本条目的内容。
    * 于浏览器中保存变更不如预期运作：若编辑之，外部文本条目会被替换为普通条目
    * 延迟加载外部文本条目，无法运作于 Chrome 以 **file:** URI的方式查看 TiddlyWiki HTML 文件时；但可于 Firefox 中正常运作。
    * 延迟加载运作于所有浏览器上的 HTTP URI，只要目标文件也存放在同一个网域或由[服务器支持 CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)

请参阅[爱丽丝梦游仙境](Alice in Wonderland)示例。尝试不使用网络连接开启它。

## 新的 "Tight" 布景主题

一个称为 "Tight" 的新主题，减少使用填充、边距和字体大小，以尽可能包裹更多的文本：

<$button>
<$action-setfield $tiddler="$:/theme" text="$:/themes/tiddlywiki/tight"/>
试试看
</$button> <$button>
<$action-setfield $tiddler="$:/theme" text="$:/themes/tiddlywiki/snowwhite"/>
还原
</$button>

# 其他改进

## 翻译改进

* 添加由 @Superdos 提供的瑞典文翻译
* 添加由 @araname 提供的韩语（大韩民国）翻译
* 改进加泰罗尼亚语、华语、丹麦语、荷兰语、法语、德语、意大利语、俄语和西班牙文翻译

## 可用性改进

* [加强](https://github.com/Jermolene/TiddlyWiki5/commit/e6529af04e004b59093921f74758ac7132e1b19d) 条目编辑器，在点击确认时，接受新字段和标签，而无需点击 "添加标签" 或 "添加字段"
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/5d43cd740863be188e43fd49893dc8dddcd5b937) 条目工具列的''收合''和''收合其他''按钮，可暂时隐藏条目内容，以及 [添加](https://github.com/Jermolene/TiddlyWiki5/commit/ac08dc2e35d99eb563ab8c4449ce1fcfe30f3bf7)''全部收合''和''全部展开''页面按钮
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/d5e690a06d523a2047eaf9b623b633bb72c18af9) 停用个别 WikiText 解析规则的功能 (见[控制台]($:/ControlPanel)的''高端''页签)。还有[添加](https://github.com/Jermolene/TiddlyWiki5/commit/58188cf8053bef87dbe97e4b05cdba67f75c615d) 可停用驼峰式单词自动连接的一个简单的设置
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/2cb6400773096b02b71c1851fb0fac5dfefbbd6f) 支持自动链接的系统条目名称可包含数字和底线
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/2c9b1ae2579f8d2452c60217aa3e153a29d32d1f) 当试图使用为 TiddlyWiki 经典版设计的插件的警示消息
* 升级 [Highlight Plugin](#Highlight%20Plugin) 的 highlight.js 到 v8.8.0 版
* [移除](https://github.com/Jermolene/TiddlyWiki5/pull/1981) 必须手动确认删除警示消息
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/2147) 可选的工具提示 [tabs 宏](tabs Macro)

## 可编程性改进

* 更新 KaTeX 插件至 0.5.1 版，有[一些新功能](https://github.com/Khan/KaTeX/releases)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/e0aacc84d5f084ff7a53153c590fbff3d24f2e2c) `publishFilter` 至缺省的保存范本
* [允许](https://github.com/Jermolene/TiddlyWiki5/commit/7dddc925ae93725552b98bc348a07572895da96c) **删除**按钮用于条目查看模式的工具列
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/742161675421a942051abed01cb47c0394f4db6d) [隐藏快捷键的设置](Hidden Setting: Keyboard Shortcuts)
* [更新](https://github.com/Jermolene/TiddlyWiki5/commit/e5cd8313a0d1a4a3dea17457a8a883675243b9c7) ActionSetFieldWidget 允许保留时间戳记
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/fdce67399d175a9911df908981b83ac3edfb1142) 可停用编辑/取消 /保存的导航的选项
* [加强](https://github.com/Jermolene/TiddlyWiki5/commit/5176f008f0bc15751e36933c95ae299c1ee5971a) SaveTiddlersCommand 不删除选项
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/4ccdaf3fafda2f1d0766ed69c68d030a7db2bbc6) RenderTiddlerCommand 范本选项
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/51d771a07493f91c32145b69e4f5534724416d2e) tm-open-window 传递变量
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/7b8928886bf101b0cf4a8cc2d2dd2e576ec1c8d8) 实用方法 `$tw.utils.tagToCssSelector(tagName)`，将标签名称转换成符合 `tc-tagged-*` 的[由 TiddlyWiki 生成的 CSS 类别](How to apply custom styles by tag)的适当格式
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/99df9f46f7cc4c1d3aa0320347f9b6c1bc458c60) 条目含 mp4 影片的支持
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/fd997c45814e6bb5b576137bf62bad5575b0a28c) ActionSetFieldWidget，使其可用于删除字段或索引属性
* [使](https://github.com/Jermolene/TiddlyWiki5/commit/746aab2cf6bbe3c1905efd5caf80e40e23b914b0) tw5.com 文档可当作插件和[应用版](https://tiddlywiki.com/editions/tw5.com-docs/index.html)，简化一些重复使用它的方案。
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/0035a0046315ee0203b1adfb75efdbb0e854a7f6) 在 "Snow White" 布景主题的侧栏 "更多" 页签呈现渐层色
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/33563d01baed4b4092fc834eb6a1df55e1671418) [控制台]($:/ControlPanel)中的选项，可启用在浏览器的开发者主控台中显示详细的性能检测
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/bc0cbf907063ccd484da7d56c8e42cf5e90489b8) 所有的非系统条目的[延迟加载](LazyLoading)范本
* [改进](https://github.com/Jermolene/TiddlyWiki5/issues/1984) 在 Markdown 条目里的 TiddlerLinks 处理
* [扩充](https://github.com/Jermolene/TiddlyWiki5/pull/2004) FieldManglerWidget 创建建目标条目，若其不存在时
* [扩充](https://github.com/Jermolene/TiddlyWiki5/pull/2049) KeyboardWidget 触发 ActionWidgets
* [扩充](https://github.com/Jermolene/TiddlyWiki5/pull/2074) SelectWidget 支持多重选取
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/1909) [days Operator](#days%20Operator)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/231d0a3dc8385fcb2173436754f00f464d7b018e) JavaScript 程序库的官方的插件包裹，[async.js](https://github.com/caolan/async) 和 [JSZip](https://stuk.github.io/jszip/)
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/2037) ActionListopsWidget
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/791f97983e8bbbbb209cf0e7068f858dfd2d38eb) **rows** 属性至 EditTextWidget

## 修正错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/1882) 在 5.1.9 引进用于处理 `tiddlywiki.info` 文件的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/3fbf29093b32c00941b0c03951250de7c0cc8d6f) 于 $:/AdvancedSearch 条目未显示图标的问题
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/862e358b57fde74595420e7948bf44fdadf690dc) 在 ServerCommandcheck 中检查所需插件
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/709126dd643207adab725569c214f8617c28fbeb) 删除不存在条目的队列中变更事件的问题
* [确保](https://github.com/Jermolene/TiddlyWiki5/commit/85553609b10ccc813662c867d4043e5df78efcec) EditTextWidget 固定高度，即使不需要刷新
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/8a763e9d838fcb571d12c4175952cd4e15e95e00) 在侧边栏的页签分隔的渐层色
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/6add992bf2e9cedd077c74c3471758bbe9d6e1b2) 如 `$:/templates/something` 之类的条目名称被错误地归类为 `$:/temp` 条目，且被排除同步的问题
* [切换](https://github.com/Jermolene/TiddlyWiki5/commit/acbf87657b6c88719148266100b91a61e29a0546) 条目副标题中的日期为绝对日期格式

## Node.js 改进

* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/dc020276b07fd0ec365c13000eb868a87a3376b9) 文件系统配接器的问题，将新的图档保存为 base64-编码的 `.tid` 文件，而非保存为二进位文件与伴随的 `.meta` 文件
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/803d70225a2ce1f1f7992e493bbaf7a78b15c04d) `tiddlywiki.files` 支持于 TiddlyWikiFolders 允许递归加载目录以及个别文件
 
# 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@afeldspar](https://github.com/afeldspar)
* [@araname](https://github.com/araname)
* [@BramChen](https://github.com/BramChen)
* [@danielo515](https://github.com/danielo515)
* [@Drakor](https://github.com/Drakor)
* [@erwanm](https://github.com/erwanm)
* [@felixhayashi](https://github.com/felixhayashi)
* [@Evolena](https://github.com/Evolena)
* [@hegart-dmishiv](https://github.com/hegart-dmishiv)
* [@idoine](https://github.com/idoine)
* [@inmysocks](https://github.com/inmysocks)
* [@IreneKnapp](https://github.com/IreneKnapp)
* [@gernert](https://github.com/gernert)
* [@kixam](https://github.com/kixam)
* [@Marxsal](https://github.com/Marxsal)
* [@matabele](https://github.com/matabele)
* [@mklauber](https://github.com/mklauber)
* [@nameanyone](https://github.com/nameanyone)
* [@pmario](https://github.com/pmario)
* [@senevoldsen90](https://github.com/senevoldsen90)
* [@Spangenhelm](https://github.com/Spangenhelm)
* [@spelufo](https://github.com/spelufo)
* [@SuperDOS](https://github.com/SuperDOS)
* [@tgrosinger](https://github.com/tgrosinger)
* [@tobibeer](https://github.com/tobibeer)
* [@xcazin](https://github.com/xcazin)
* [@zahlman](https://github.com/zahlman)
