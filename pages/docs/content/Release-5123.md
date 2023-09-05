---
title: '5.1.23'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.22...v5.1.23)//

<<.banner-credits
	credit:"""恭喜 [Atronoush](https://github.com/atronoush) 赢得此版本的横幅设计 (这是[其他作品](https://groups.google.com/g/tiddlywiki/c/cTgPWl8b_9c/m/RghSSNKXAQAJ)).
"""
	url:"https://raw.githubusercontent.com/Jermolene/TiddlyWiki5/3c003364d2408eb27912187f57f023333cc4f4dd/editions/tw5.com/tiddlers/images/New%20Release%20Banner.png"
>>

# 性能改进

* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/5206">> 筛选器运行，中间结果使用更有效的链接列表结构
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/5205">> 筛选机制，暂存分析宏的结果，而不使用文本替换
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/4659">> 模板使用单个 VarsWidget，而不是多个 [SetVariableWidgets](SetVariableWidget)，提高性能且更易于调试
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/4954">> ListWidget 不为空白的 `emptyMessage` 属性初始化解析器

# 可用性改进

* <<.link-badge-renamed "https://github.com/Jermolene/TiddlyWiki5/pull/5143]] 在条目信息面板中的 "参考" 为 "反向链接" 
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/1546a4a1895b93a47b79c9d37b94be039604443a">> 有关主从式配置使用在线插件程序库的警示消息
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/commit/9cd5415dfe54b47819920aa3cf6ac2d5e3a9188e">> 预览版的网站图标
* <<.link-badge-removed "https://github.com/Jermolene/TiddlyWiki5/commit/22e25c05eb5e5cc5b670a362d1eead1d62dedbb9">> normalize.css 的搜索输入字段的样式，并<<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/commit/9003c810393d90ee20db083fda35b6469acc592a">>到 normalize.css 的现代分支
* <<.link-badge-removed "https://github.com/Jermolene/TiddlyWiki5/commit/bb6fee4e1c79a2b1cbf75cd0326ecb8fb1ccb86b">> 编辑 SVG 条目时，不必要的编辑器工具栏按钮
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5089]] 用于切换版面的全域快捷键
* <<.link-badge-hide "https://github.com/Jermolene/TiddlyWiki5/commit/1d7091e637462dcda8c28d660ca42c073f647043">> `.tid` 的导出选项，当要导出一个以上的条目时。

# 导入机制改进

* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/4937">> 导入的用户界面，允许重命名条目，并警示已存在的条目
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5067">> 将覆盖现有条目的进口项目的颜色编码，以及其他警告的颜色编码
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/commit/527638d5e60114653385ed39dc55c736a67e58d2">> 导入清单中的状态消息
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/cc3462999b80461fe30b8f4b4f272ccfbbb78b35">> 导入的 `.tid` 文件没有 `type` 字段的内容类型
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4711">> 导入期间创建无关的系统条目

# 调色板改进

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/484c9e986fc6f323e30460a88f134da3a4e8a89e">> $:/PaletteManager 显示 "间接" 颜色（亦即，由另一个 `<<colour>>` 宏定义的颜色）
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5092">> "Desert Sand" 调色板
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5100">> "Cupertino Dark" 调色板
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/8cf458d3b3f1e38c14a2819529e08dca4a7e297c">> "Solarized Dark" 调色板
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/4590">> (和<<.link-badge-here "https://github.com/Jermolene/TiddlyWiki5/commit/274a07b4fd2ca2d1b95c8ddf52fe055c44260d9b">>)，使 Vanilla 主题可选用[浏览器选择大纲](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection)的调色板颜色
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/4585]] "Gruvbox" 调色板的工具栏按钮的可读性

# 键盘处理改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4725">> 支持通过键盘导航搜索和新的标签下拉清单。[keyboard-driven-input 宏](keyboard-driven-input Macro) 可用于将此功能添加到其他下拉清单
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4791>> 一个 'tabIndex' 属性到条目输入区域，使其更易于使用定位键，在编辑控制项之间移动
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4909">> 键盘支持在[高级搜索]($:/AdvancedSearch)中的选项卡之间循环
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4921">> 键盘支持导航编辑模板中的字段名称下拉清单
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4989">> 键盘支持导航编辑模板中的 `type` 字段输入
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4919">> 键盘支持使用编辑模板中的''插入维基链接''工具栏下拉清单
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4927">> 用于保存维基的键盘快捷键
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4978">> 删除编辑模板中字段的键盘快捷键
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4952">> 用于更改侧边栏版面的键盘快捷键

# 小工具改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5086">> 用于低级事件处理的 EventCatcherWidget
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/1b31c25ea77ee4dce86a9aac4375337423ebd3a6">> LogWidget 和 ActionLogWidget 帮助调试
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5037">> ActionConfirmWidget 提示用户简单的 "是/否" 问题
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/5091">> ButtonWidget 和 DroppableWidget，使更改类属性时，不会触发刷新。这让使用类触发 CSS 动画，更加容易
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/5087">> 当状态条目更改时， RevealWidget 可以选择性地动态刷新弹出窗口位置
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5014">> 对 EditWidget、EditTextWidget、CheckboxWidget、RadioWidget 和 RangeWidget 的 **disabled** 属性的支持
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5010">> 对 ButtonWidget 的 **disabled** 属性的支持
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/ae13a0fee118c50169b7835c950df1dade33788f">> MacroCallWidget，使其能选择性地呈现宏的原始文本 (以前总是输出维基化的结果维琪)
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/commit/e71a27ac2d71f2e48f9e4e9156b59bb3ecc2a105">> [link 小工具](LinkWidget)在 SVG 元素中工作
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/c86a621d5d205e1ae0ce999b90ebe09addc45a9f">> **accept** 属性到 [browse 小工具](BrowseWidget)
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/77a929faa3a33768e52cf2a34ecbef9c554a6a7b">> [action-popup 小工具](ActionPopupWidget)允许弹出窗口被消除
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/4740>> EditWidget，将所有属性传递到子小工具
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/95e30138f0b34135031d50c1606e8b0059ca6653">> [linkcatcher](LinkCatcherWidget) 小工具，将键盘修改器状态传递给操作
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/5154">> RadioWidget 支持操作
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/5158">> RangeWidget 支持操作
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/3406b98af62def252bcb0f7df8a72ed4b74818eb">> **autocomplete** 属性到 EditTextWidget 和 EditWidget
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5088">> [lookup 操作符](lookup Operator)的默认值的行为
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/6570561d4ec31d9e64c3021bb69c20daec8c9eac">> [has 筛选器操作符](has Operator) 用于 **tags** 字段时的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5222">> 在浏览器中使用 [edition 操作符](edition Operator)时崩溃的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4647">> [droppable 小工具](DroppableWidget) 的 **class** 属性

# 筛选器改进

新的功能：

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4964">> 支持筛选器操作符的多个操作数

新的筛选器 run 前置码：

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4915">> 支持命名筛选器 run 前置码
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4918">> [:filter 筛选器 run 前置码](Filter Expression) 与新的 [filter 操作符](filter Operator) 相似，但适用于筛选器 run
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4959">> [:intersection 筛选器 run 前置码](Filter Expression) 获取两个筛选器 run 的交集
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5196">> [:reduce 筛选器 run 前置码](Filter Expression)

新的操作符：

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/14a28b77796461c9167898793ab9851e029e0354">> [filter](filter Operator) 和 [reduce](reduce Operator)筛选器操作符，用于处理项目清单
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5080">> [power 操作符](power Operator) 和 [log 操作符](log Operator)
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4991">> [draft 操作符](is Operator)，检查一个条目是否是另一个条目的草稿
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4973">> [search-replace 操作符](search-replace Operator)，字符串搜索和替换
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4948">> [enlist-input 操作符](enlist-input Operator)，将输入标题解析为标题清单
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/4966f6ab625c8ce2c9f0812a726ba928d68ea00b">> [slugify 操作符](slugify Operator) 和 [duplicateslugs 操作符](duplicateslugs Operator)，用于生成人类可读的文件名/网址
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/619c0752bd3c6e71d1fcdb74daa03cfe8257afe4">> [sortsub 操作符](sortsub Operator)，用于依用户定义的子筛选器排序
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4785">> [format 操作符](format Operator) 用于格式化日期
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/14a28b77796461c9167898793ab9851e029e0354">> [reduce 操作符](reduce Operator) 将子筛选器应用于每个输入标题，累积一个值
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/14a28b77796461c9167898793ab9851e029e0354">> [filter 操作符](filter Operator) 将子筛选器应用于每个输入标题，并返回从子筛选器返回非空结果的标题
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4990">> [toggle 操作符](toggle Operator)，切换列表中的标题
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5021">> [cycle 操作符](cycle Operator)
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5146">> [pad 操作符](pad Operator)

其他改进：

* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/4811">> [trim 操作符](trim Operator)，可选择修剪给定字符串而不是空格，从输入条目的前、后或两侧修剪
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/5191">> [jsonstringify 操作符](jsonstringify Operator) 和 [stringify 操作符](stringify Operator) 支持 "rawunicode" 尾码

# 条目文件命名改进

* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/5113">> [自定义条目文件命名](Customising Tiddler File Naming)的机制为：

* 将草稿保存到每个用户的特殊文件夹
* 允许 $:/config/FileSystemPaths 中的筛选器更改磁盘上的条目文件的路径
* 允许 $:/config/FileSystemExtensions 中的筛选器更改磁盘上的条目文件的扩展名
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/c1a1e272cc9b823f97f8f1bde6a24dfa5fe973e8">> `th-make-tiddler-path` hook，用于条目路径构造的低级控制
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/4914">> [tiddlywiki.files Files](#tiddlywiki.files%20Files) 具有 `isEditableFile`属性的规范，允许将文件保存回其原始位置

# 可编程性改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4979">> 支持切换页面模板
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/1446a1e44cd084b0905f3fdcd8b339f23edf2384">> [tm-scroll](WidgetMessage: tm-scroll) 小工具消息，允许由 CSS 选择器指定目标元素，从而可以滚动到条目中的位置
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5027">> 包含 NavigatorWidget 的模块，使链接按预期工作
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/5af76c5ea10db2b59cc20f963a836c6a9faa8b10">> [目录宏](Table-of-Contents Macros)，使其支持自定义链接目标
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4777">> Hyperdrive 保存模块，用于 Beaker 浏览器 v1.0
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/2a8f7a9c503c9a6e4ea1bcd116be31ab6e90cf52">> [网站图标机制](Setting a favicon)支持 **_canonical_uri** 图片
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/48dfadd85b8ebd788b44ed2c46108720742546df">> 支持以 $:/info/startup-timestamp 记录时间戳 (详见[信息机制](InfoMechanism))
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/bf6735420d2f8191f658c556910e7d73c681d5fe">> 支持 SVG 网站图标
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/f760a2fa796d57e61307a5ea5274d6cd0b6484c7">> `th-saving-tiddler` hook，以包含有关草稿条目的信息 (详见[开发者相关文档](https://tiddlywiki.com/dev/#Hook%3A%20th-saving-tiddler))
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/4723">> [tm-rename-tiddler](#tm-rename-tiddler) 小工具消息，控制是否发生重新链接
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/4741">> [tm-import-tiddlers](#tm-import-tiddlers) 小工具消息，覆写条目名称 $:/Import，且更好地控制导入条目是否自动打开
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/bd2cf5c46498222a32ebda92da3ae50bde33decb">> 内部的 `<$element>` 小工具，添加一个挂钩，使插件可以拦截 DOM 节点的创建
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4724">> 原始事件到 `tm-navigate` 事件
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/651fb777abd11c88e58b4bdfbced01d6db508852">> 密码提示，使其可以自定义
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/69c12618d963c711edd72a60427bd15ec4fa0e6e">> 同步器，使同步配接器可以自定义登录提示
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/a1b486436e9278078c524c6aa11f7f4de6cbc877">> [tabs 宏](tabs Macro)，支持 `actions` 和 `explicitState` 属性
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/4906">> (和 <<.link-badge-here "https://github.com/Jermolene/TiddlyWiki5/pull/4907">>) 用于在 node.js 上同步和保存单一文件版本的筛选器，以基于其前缀排除多个故事清单和历史记录清单，及可用于导入过程的多个条目
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/5cc1600072f5aa50c8ff5f5d2e748d81a7067420">> 渲染后启动操作
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/f7f55e8eff8b172d8fd04f095781efa2420b1be6">> 支持 `tm-login` 小工具消息的用户名/密码参数
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/4c6de2271124fc3a4b01e4324a0d5e401500cca2">> 支持内容类型 **image/jpg**（正确的类型为 **image/jpeg**，但拼字错误很常见，所以现在大多数的浏览器都支持它）
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4908">> 支持重写保存模块
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4923">> 实用程序 CSS 类，以取代使用 `&nbsp;` 呈现视觉分隔
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4983">> 选项，配置菜单栏中用于[目录](TableOfContents)的标签
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/4971">> KeyboardWidget，如果没有要调用的操作，则不会拦截按键
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4975">> 按钮到编辑模板工具栏的编辑器高度，以及 **application/javascript**、''application/json'' 和 **application/x-tiddler-dictionary** 类型条目的戳章工具
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/4985">> 内核中 [tabs 宏](tabs Macro)的所有实例都使用显式状态属性
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5000">> 支持 <kbd>meta</kbd> 键作为操作中的辅助建
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/c854e518faa2d2661b7b7278634b10607ab0a5f5">> $:/info/darkmode 的信息机制，反映浏览器的深色模式与浅色模式设置的支持
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/4200">> `story.js`，删除故事启动和导航器对 `wiki.js` 的依赖

# 插件改进

## [JSZip 插件](JSZip Plugin)

* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/6a0ff7db1807f45b73061ced82f5a85f1a529bbf">> [JSZip 插件](JSZip Plugin)，可动态创建 Zip 文件的功能，从而方便地在浏览器中建构多文件静态网站

## [同意横幅插件](Consent Banner Plugin)

<<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/4a84ed0018df7fd67000404bb5ef8a7ca50509c1">> 新的[同意横幅插件](Consent Banner Plugin)通过显示同意横幅，帮助使网站符合 "cookies 规范"，例如 [欧盟一般数据保护法规](https://gdpr.eu/cookies/)。
它呈现一个横幅，邀请用户接受或拒绝 cookies，在本地存储中追踪他们的同意，以便横幅可以在后续访问中隐藏。

默认情况下，包含 &lt;iframe>、&lt;embed> 和 &lt;object> 嵌入的内容将被阻止，除非用户同意接受 cookies。

同意状态可通过配置条目提供，以便根据是否已获得同意，可以构造行为不同的内容。例如，提供用于嵌入的 ~YouTube 视频的宏，除非用户已接受 cookies，否则自动使用 youtube-nocookie.com 该视频的变体网址。

请注意，使用此插件并不能保证符合任何特定法规。您需要了解特定于您情况的技术问题，如有必要，请寻求法律建议。

## [Freelinks 插件](Freelinks Plugin)

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/1f354a972e0217e034d1f59d31577c1fd6b186f3">> (和 <<.link-badge-here "https://github.com/Jermolene/TiddlyWiki5/commit/c9692d7a508cfdb0446e67061201961dca64d8dd">>) 支持在匹配标题时忽略大小写

* <<.link-badge-fixed "修正|<https://github.com/Jermolene/TiddlyWiki5/commit/05e6c1bf62cd51df6aa025d0ad07f7959cde6fa>0">> 在 HTML  `<a>` 元素中自动链接的错误

## [Twitter 插件](Twitter Plugin)
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/3a20fb1e3a41a032574d227a8c770a11ae0a5d58">> 是否需要保存并重新加载维基的警示
## [Dynaview 插件](Dynaview Plugin)
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/b0e40e86413c1769c8be8a84652b66ef6ac8b997">> 示例 (和<<.link-badge-here "https://github.com/Jermolene/TiddlyWiki5/commit/f7fe47914e19ba7198b7768ca832ee03c289a2bc">>)
* [CodeMirror 插件](CodeMirror Plugin)
    * <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4662">> CodeMirror Sublime keymap 未定义 `e.toggleComment` 的问题
    * <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/4950">> CodeMirror 插件至版本 5.58.3
## [Markdown 插件](Markdown Plugin)
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4680">> Markdown 图片文件的编码
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/e01b354f7d9e137cb355f7090f5e68661a4ead41">> 空白和分行的问题
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4862">> **tc-tiddlylink-external** 类到外部链接
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4771">> 将 `rel="noopener noreferrer"` 加入至外部链接
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/5128">> [CodeMirror 插件](CodeMirror Plugin) 使用调色板颜色
## [Amazon 网页服务插件](Amazon Web Services Plugin)
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/0338f0fee23d176a94de9009492d2e43a916fbfa">> 一个新的 **aws-encodeuricomponent** 筛选器，也编码单引号
## ~BibTeX 插件
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/commit/f863acf8ac716dbf892f2d63efa0a130aadfec6a">> 底层的第三方 ~BibTeX 解析库到更高版本
## Menubar 插件
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/4974">> 使侧栏的上边距会调整到菜单的高度
## Dynannotate 插件
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/4394b8e723f78b3d2562a95155aeb91a3d6bbd5f">> 视图模板中的用法示例
## External Attachments 插件
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/4549">> 外部附件插件中的相对路径的错误
## [Highlight 插件](Highlight Plugin)
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/5128">> 使用调色板颜色

# 翻译改进

* 新的阿拉伯语（巴勒斯坦）翻译
* 改进加泰隆语翻译
* 改进华语翻译
* 改进荷兰语翻译
* 改进法语翻译
* 改进德语翻译

# 其他修正错误

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/fe8606759ebf1db50c57a2e779b086a6d7df2ae6">> 从 0 到 100CE 的日期解析
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/6a91dbfe2f6e52512d7f063b6d5e3742ff77126d">> 负数日期的处理 (见 [日期字段](Date Fields) 和 [日期格式](DateFormat))
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5126">> 使用 ~GitHub 保存模块，在上次保存后 60 秒内保存时，出现 "409 conflict" 的错误
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4987">> 与主从式配置同步的系统条目的行为。默认情况下，对系统条目的更改不会从服务器同步到用户端，从 v5.1.21 及更早版本还原行为。可以使用配置条目 $:/config/SyncSystemTiddlersFromServer，激活系统条目的双向同步
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4632">> 搜索下拉项目的悬停效果
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4584">> 将丢失的参数还原至同步配接器的 `saveTiddler()` 方法
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/678e25f510786fbc38f505f8b594f57f39e33a04">> [makelibrary 命令](MakeLibraryCommand)跳过非目录
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4601">> `$tw.wiki` 的错误使用
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4634">> 于 v5.1.22 中引入的动画同步图标的高 CPU 使用率的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/4591>> $:/config/NewJournal/Tags 显示在标签下拉清单中
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4658">> 在文本编辑器中点击时，未取消弹出窗口
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4676">> [timeline 宏](timeline Macro) 与不合法日期值的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4682">> 侧边栏中标签下拉清单的悬停颜色
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4683">> 标签丸图标的对齐
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4696">> 可拖放小工具崩溃的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4674">> 在 $:/Manager 中添加标签的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4686">> 编辑模板 "类型" 的下拉清单的位置
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4687">> 编辑样本字段下拉清单的位置
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4704">> (在 [scrollable](ScrollableWidget)小工具 <<link-badge-addendum "https://github.com/Jermolene/TiddlyWiki5/pull/4705">>) 的语法错误
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4780">> HTTP 的消息标头不区分大小写的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/a2796d89ab3dbf4a15b63b0f4623387fdc6acd5b">> HTTP 标头的 `Content-Type` 发送为 `Content-type` 的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4776">> [entity](EntityWidget) 小工具未正确刷新
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4774">> [Markdown Plugin](#Markdown%20Plugin) 遵守对齐指令
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/f74c49f393da3213abadaa52dd09940d708ea635">> 与外部 JS 模板的同步问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4813">> 不正确的星芒层 Unicode 文本的 base64 编码
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4770">> 当保存一个通过跟随条目链接创建的新条目时，出现服务器错误
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/4751">> 一个 `plugin-priority` 字段到 TiddlyWeb 插件，使语言插件可覆盖其语言字符串
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4853">> 加入一个空清单不会返回一个空清单的错误
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/59f233cd46616646fa8889f65aa9cc7d704d8c9a>">> 导出带有双引号名称的条目的错误
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/4900">> 同步插件条目的错误
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/4877891980f077c6c31e99cc6a9eb45b5d1230e1">> 没有图标的情况下，条目标题位置的错误
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/3153c588ecddfdc97cc8289720d36b1fb15ef236">> 在升级向导中自动保存
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4938">> 在单档维基中条目 `$:/temp` 的保存
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4839">> `sortan` 筛选器操作符用于日期字段时的错误
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/4947">> 包含 `#` 字符的位置散列的错误
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5055">> 保存到 ~GitHub 的默认分支到 **main**
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/7327a3fb92fa2ae17d7264c66ab0409d43b18fdc">> 当插件被删除或修改时，影子条目未刷新
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5129">> `tc-dirty` 类，未显示在外部窗口中
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5148">> `static.tiddler.html` 模板，使渲染条目全宽

# 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

<<.contributors """
adithya-badidey
Arlen22
bimlas
BramChen
BurningTreeC
danielo515
default-kramer
ento
favadi
fkohrt
flibbles
gera2ld
ibnishak
idotobi
jdangerx
jjduhamel
joshuafontany
kookma
Kamal-Habash
Marxsal
mocsa
NicolasPetton
OmbraDiFenice
passuf
pmario
rmunn
SmilyOrg
saqimtiaz
twMat
xcazin
""">>