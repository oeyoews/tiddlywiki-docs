---
title: '5.1.22'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.21...v5.1.22)//

<<.banner-credits
	credit:"""恭喜 [Thomas Elmiger](https://github.com/telmiger) 赢得此版本的横幅设计 (这是[其他作品](https://groups.google.com/g/tiddlywiki/c/rYrja18_SfQ/m/IX-jFS4cBQAJ)).
"""
	url:"https://raw.githubusercontent.com/Jermolene/TiddlyWiki5/1ed36adab62c117849ee29d9535136eac70d3bc7/editions/tw5.com/tiddlers/images/New%20Release%20Banner.png"
>>

# 主要改进

## 动态插件加载

插件[现在可以](https://github.com/Jermolene/TiddlyWiki5/pull/4259)动态加载或删除，而无需重新加载 -- 只要它们不包含任何 ~JavaScript 模块。需要重新加载的插件，将在[控制台]($:/ControlPanel)的插件选择器中标明。

控制台中的[插件清单]($:/core/ui/ControlPanel/Plugins)和[插件选择器]($:/core/ui/ControlPanel/Modals/AddPlugins) 一些功能改进：

* 一个新的''"更新" 选项卡''，列出了插件库中所有可用的升级，以及按一下即可更新所有升级的按钮
* 选项卡现在用于插件选择器中显示插件库
* 现在插件选择器可显示提供附加功能的插件，为另一个插件的嵌套''"子插件"''，使主清单更易于流览
* 插件现在可以声明相依性，可以无须使者介入的''自动安装''
* 所有插件现在显示更一致，包括具有简洁的、非正式名称（除了说明和标题）的功能

## 主从式改进

此版本对主从式配置做了一些改进：

* 改进连接错误的恢复能力。浏览器遇到错误，将自动重试，当其成功时，自动删除关联的错误消息
* 系统条目的更改，现在从服务器同步到浏览器
* 服务器上的条目删除操作，现在可以同步到浏览器
* 新的 "云端" 页面控制按钮，下拉式功能表显示状态和其他操作：
    * "从服务器刷新" 强制立即检查来自服务器的更改
    * "注销"
    * "保存快照以供脱机使用" 在没有主从式组件的情况下保存维基的副本
    * "将同步器日志拷贝到剪贴板" 让向用户询问调试信息，变得更加容易
* 添加 "filter" 和 "exclude" 参数至 [GET /recipes/default/tiddlers.json](WebServer API: Get All Tiddlers) 端点，以允许筛选返回的条目和字段
* 增进延迟加载，在 HTML 文件中包含精简版条目，并避免来自服务器的不必要负载
* 当 tidlyweb 配接器处于激活时，现已禁用官方插件程序库
* 当一个文件请求失败时，内部文件系统详细信息不再向浏览器显露 (详见 <https://github.com/Jermolene/TiddlyWiki5/issues/372>4)

详细信息请参阅 [GitHub 上的拉取请求](https://github.com/Jermolene/TiddlyWiki5/pull/4373)。

## 新的 [compare 筛选器操作符](compare Operator)

[添加](https://github.com/Jermolene/TiddlyWiki5/issues/4554) 一个用于比较数字、字符串、日期和版本号的新筛选器操作符。例如：

:`[2]compare:number:eq[3](#2%5Dcompare%3Anumber%3Aeq%5B3)`
**没返回任何值**
:`[2]compare:number:lt[3](#2%5Dcompare%3Anumber%3Alt%5B3)`
**返回 "2"**
:`[2]compare:number:eq[2](#2%5Dcompare%3Anumber%3Aeq%5B2)`
**返回 "2"**
:`=1.2 =1.8 =2.3 =3.4 =7.2 +[compare:number:gt[1.5]compare:number:lt[2.5]]`
**返回 "1.8" "2.3"**
:`[1]compare:number:gt[2]then[yes]else[no](#1%5Dcompare%3Anumber%3Agt%5B2%5Dthen%5Byes%5Delse%5Bno)`
**返回 "no"**

## 新的插件

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/ad2d4503e584ce9f931dbd1e98f95738b2841e51) **menubar** 插件，创建一个功能表列，回应在行动设备上，并支持搜索、下拉清单和链接
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/447cd56da9db2ee169607f32923081ac47e78354) **freelinks** 插件，自动创建自任何条目名称的链接
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/9b48a1c82955d1050c426fef559f42f4b8ec56e7) **dynannotate** 插件，包含用于叠加注释或突出显示其他内容的基元
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/005c584d85505b9477169ef822752eed39dde66a) **share** 插件，用于通过网址位置哈希分享条目
* [切换](https://github.com/Jermolene/TiddlyWiki5/pull/3876) **markdown** 插件到更新和改进的 [remarkable](https://github.com/jonschlinkert/remarkable) 程序库

# 翻译改进

* 改进华语翻译
* 改进荷兰语翻译
* 改进法语翻译
* 改进德语翻译
* 改进葡萄牙语翻译

# 性能改进

* [优化](https://github.com/Jermolene/TiddlyWiki5/pull/4108) ImportVariablesWidget，提高全域宏的性能
* [优化](https://github.com/Jermolene/TiddlyWiki5/commit/18f5333e01eb62ece65a86c457bf8a398f156930) 内核 SVG 图像，从内核插件节省大约 100KB
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/4421) 用于反向链接的索引子模块
* [优化](https://github.com/Jermolene/TiddlyWiki5/pull/4397) [sort Operator](#sort%20Operator)

# 可用性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/96eca32b1105416c317101aa91dd284f835a8ba8) 二进位条目的下载按钮
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/4293) (和[此处](https://github.com/Jermolene/TiddlyWiki5/pull/4296)) 页面控制项按钮的间距
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/9395d7567179c436d0e8ac26fc976d717eae7f50) 在文档中的图标的显示
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/4238) 支持指定在编辑或创建条目时，应获得焦点的字段
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/4314) 支持在控制台指定新条目和日志的标签
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/05a3e1ad36c2fb383dd4975a578f95e8a6c3f325) HTML 标记的语言属性，以提高可访问性
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3943) 嵌入视频的缩放
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/4361)  $:/TagManager 的图标下拉清单中的 "无" 选项
* 修正了有关编辑模板和标签选择器的一些布局问题 (详见 [18151cc1](https://github.com/Jermolene/TiddlyWiki5/commit/18151cc193e8c0d613663d3ecf6437c63e540c2d)、[793d84bc](https://github.com/Jermolene/TiddlyWiki5/commit/793d84bcb1bc52ee77c49090268dd242017cdaa9)、[1cf2d079](https://github.com/Jermolene/TiddlyWiki5/commit/1cf2d0799d7027d58f4bdca857bc342dd778a330)、[3c365a25](https://github.com/Jermolene/TiddlyWiki5/commit/3c365a2567ebfe12d78b0aed77a40969cd38563e)、[45def4de](https://github.com/Jermolene/TiddlyWiki5/commit/45def4def441554a06c3e17742adc29a17d2a13c)、[89728d8a](https://github.com/Jermolene/TiddlyWiki5/commit/89728d8a9a9fd9b888deb78f420dd5758ee63909)、[4cf96e73](https://github.com/Jermolene/TiddlyWiki5/commit/4cf96e7339b3b7d8e84a5b73d9871cdad50c5a84)、[bfa3ddd0](https://github.com/Jermolene/TiddlyWiki5/commit/bfa3ddd077404ad4627b9161bcadf3d5a539c1dc) 和 [74172b35](https://github.com/Jermolene/TiddlyWiki5/commit/74172b35ceae84f254e20d6d7ec4dff2cca692b1))
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/4494) **Gruvbox Dark** 调色板
* [改进](https://github.com/Jermolene/TiddlyWiki5/pull/4515) (和[这里](https://github.com/Jermolene/TiddlyWiki5/pull/4517)) Vanilla 和 Nord 调色板
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/152125f53b9979bfd5511973038b4358d1ef48c4) Railroad 插件，使用标准调色板的色彩配置
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/16c1cbee292604b2b8be36a15d5828893d132b20) Comment 插件，由每个评论到原始帖子的链接

# 可编程性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/4491) 用于 <https://gitea.io/> 的保存模块
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/24d2804799b09278c4bb83918d8b75dfa49dbed4) 用于触发快显窗口的 ActionPopupWidget
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/4442) **tabindex** 属性到 ButtonWidget
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/bfbd886a8bbf2f6ce147ea526eec2098357d3ae7) **index** 属性到 RangeWidget，使其用于[数据条目](DataTiddlers)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/6089c4de2921df0f76f605f1830fb2c04548f73c) 由 `throttle.refresh` 字段，支持[刷新节流](RefreshThrottling)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/1150c87edb7478af6cc943eb0ef52fdf3051c121) (和 [此处](https://github.com/Jermolene/TiddlyWiki5/commit/8c894612914e21cf941a1daa953538c28ce91d8e)) 新的 [is 操作符](is Operator)的 `[is[binary]]` 操作数
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/68163684a2e57108e160295e445c194268b873c5) 在保存模板中 `publishFilter` 的用法 -- 请参阅[保存机制](SavingMechanism)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/89716bb81d68b9c68d3c0fd2f2de96afad1b086a) CSS 类标识条目正文编辑器
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/e9211b0eee8e0b081f9f1597bde6673bf4c55d5c) 用于标识侧边栏选项卡集的 CSS 类
* [更新](https://github.com/Jermolene/TiddlyWiki5/pull/4208) normalize.css，从 v3.0.0 到 v8.0.1 
* [更新](https://github.com/Jermolene/TiddlyWiki5/pull/4502) Highlight plugin to use highlight.js v9.18.1
* [更新](https://github.com/Jermolene/TiddlyWiki5/pull/4226) Jasmine 到 v3
* [重构](https://github.com/Jermolene/TiddlyWiki5/commit/7b66df688ae745537929a25799ef4a72d4437fcd) AndTidWiki 保存模块
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/5a5c967a3943beb6a4fa513cb34d231e46304452) [系统标签: $:/tags/Macro/View](SystemTag: $:/tags/Macro/View)，用于创建仅在视图模板中可用的宏
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/4404) 支持嵌入的 `.webm` 和 `.ogg` 视频文件
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/c7d8492842844d7de12b7a327f978ff114708d84) 支持嵌入 `.woff2` 字库案
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/3df1f9c9d0cc92b596262c0220ecf529c7fbb858) **spaces** 参数到 [jsontiddlers Macro](#jsontiddlers%20Macro)，用于控制输出的格式
* [更新](https://github.com/Jermolene/TiddlyWiki5/commit/4afde5a722afc91c826305800ba536c5fe8ef2e5) [colour 宏](colour Macro)，添加对不在当前调色板中的颜色，指定一个后备的支持
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/6091b013864af3d9918df69894f4aa05d1b8ffeb) [隐藏设置: 默认条目图标](Hidden Setting: Default Tiddler Icon)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/bc687e57834efa312cca126af222613ef241c585) [隐藏设置: 禁用拖放](Hidden Setting: Disable Drag and Drop)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/ae9ce4f01c6048aeb5604a93b57c2f3e4f959162) **tc-tiddler-overridden-shadow** 类别到覆盖影子条目的条目框架
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/4490) 支持自定义类到模态包装器
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/091bcfce7d1a9c09140992e649f41ae17d27f307) [datauri Macro](#datauri%20Macro) 可用于有 **_canonical_uri** 字段的条目
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/4332) 在区块引号清单中以 ">" 格式生成的无效的 HTML
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/4540) "index" 选项至 [has Operator](#has%20Operator) 侦测数据条目的项目是否存在
* [扩充](https://github.com/Jermolene/TiddlyWiki5/pull/4433) FieldsWidget 具有 "include" 属性和更多排序选项的，并且具有新的 "exclude" 和 "exclude" 后缀的[fields 筛选器操作符](fields Operator)
* [扩充](https://github.com/Jermolene/TiddlyWiki5/pull/4436) ActionCreateTiddlerWidget，其属性用于指定模板，并控制覆盖现有的条目

# 修正错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/4291) 在 Node.js 下使用延迟加载时，删除失败的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/4243) [GitLab 保存模块](Saving to a Git service)的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/4237) 当永久链接按钮放置于搜索框上方时的错误
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/a054d100e73db95071299e92c4321c2aa8e42382) [WidgetMessage: tm-edit-text-operation](#WidgetMessage%3A%20tm-edit-text-operation) 的 **count** 参数的用法
* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/4284) 即使排除了的条目，toc-selective-expandable 宏仍显示披露箭头的错误
* [删除](https://github.com/Jermolene/TiddlyWiki5/commit/81f1e6af4e5920c6ff41e7f08171bfddc1b26dfc) (和[这里](https://github.com/Jermolene/TiddlyWiki5/commit/46c90af308015242fa0314d85f1524727e2aa7e5)) 垂直选项卡的错误换行设置
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/d30eacc6520971c95bdabf24f4c4122534d9414a) 在多重选择模式下，以编程方式，取消选择 [select 小工具](SelectWidget)中的项目的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/4333) 在颜色选择器跨度的使用
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/e84c422e5091c02f55db4027faa9ba840e2aee6c) 当底层的值发生变化时，刷新 RangeWidget
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/e4eaae14faa1bf867c0f8168e221cf30ac6e2e0d) 当禁用 JavaScript 时，显示初始画面的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/8f3da69f818940eb5f517da850fb3766b72c7d7d) 毫秒 0XXX [日期格式](DateFormat)的问题
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/174a36cda63127d19230bcfbe9a5fdde46e5b0ea) 单一条目窗口与主窗口的兼容性
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/015306dfc9099f4d5d9415b64266d328a154b119) IE 浏览器中某些内核图标的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/3eacdc19fdb4ed7ce864a04dd87a5e1c6492daac) GitHub 和 GitLab 保存模块，若未指定路径，则使用默认的 `/`
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/4432) 在某些环境中嵌入 ZIP 文件的支持
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/665b63ec38b75dfe62009d2f5514682de60e953f) 当 ButtonWidget **actions** 属性更改时，缺少刷新
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/4534) RangeWidget 可运作于浏览器 IE 10/11
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/bdc5ac592f17b5ed3bb5ae782e56ced62406d653) CountWidget 显示空筛选器为 "0"，而非 "undefined"
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/4559) 使 MakeLibraryCommand 尊重环境变量
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/4396) 使空清单不返回的 "null"
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/4551) 用于 CodeMirror 自动完成下拉列表的 z-index
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/4552) 侧边栏链接中不需要的空格

# 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@activescott](https://github.com/activescott)
* [@Arlen22](https://github.com/Arlen22)
* [@BramChen](https://github.com/BramChen)
* [@BurningTreeC](https://github.com/BurningTreeC)
* [@donmor](https://github.com/donmor)
* [@ento](https://github.com/ento)
* [@flibbles](https://github.com/flibbles)
* [@gernert](https://github.com/gernert)
* [@heronils](https://github.com/heronils)
* [@hoelzro](https://github.com/hoelzro)
* [@Janno](https://github.com/Janno)
* [@joshuafontany](https://github.com/joshuafontany)
* [@inmysocks](https://github.com/inmysocks)
* [@kookma](https://github.com/kookma)
* [@linonetwo](https://github.com/linonetwo)
* [@m42e](https://github.com/m42e)
* [@MidnightLightning](https://github.com/MidnightLightning)
* [@mklauber](https://github.com/mklauber)
* [@pmario](https://github.com/pmario)
* [@s-l-lee](https://github.com/s-l-lee)
* [@s-light](https://github.com/s-light)
* [@saqimtiaz](https://github.com/saqimtiaz)
* [@xcazin](https://github.com/xcazin)