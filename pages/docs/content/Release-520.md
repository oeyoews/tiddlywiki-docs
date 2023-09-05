---
title: '5.2.0'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.23...v5.2.0)//

<<.banner-credits
	credit:"""恭喜 Frank. B 赢得此版本的横幅设计 (这是[其他作品](https://groups.google.com/g/tiddlywiki/c/eccIEHZoxsI/m/_MWs3EooBAAJ)).
"""
	url:"https://raw.githubusercontent.com/Jermolene/TiddlyWiki5/32b36fb2aff6bbe4f9281ee56d5bf6b8bbe5454b/editions/tw5.com/tiddlers/images/New%20Release%20Banner.png"
>>

# 亮点

## 无限制的字段名称和新的 JSON 存储区

此版本的主要变更是，用于在 TiddlyWiki 的 HTML 文件中存储条目的格式，已从基于 HTML DIV 的格式，更改为新的基于 JSON 的格式。因此，这是将版本编号从 v5.1.x 添加到 v5.2.0 的主要理由：

首先，''可以用于字段名称的字符,现在可不受限制''（就像条目名称一样），使得可以使用字段名称，如 `My^Field` 或 `☃️` 。这已变得可能，因为 ~TiddlyWiki 的每个其他部分，都能够处理不受限制的字段名称，除了保存为一个 HTML 文件。

其次，读取、写入或以其他方式处理 ~TiddlyWiki  HTML 文件的外部工具，将需要修改以了解新的存储区格式。详细信息记录在 [/dev 维基](https://tiddlywiki.com/dev/#Data%20Storage%20in%20Single%20File%20TiddlyWiki)。

有关更多详细信息，请参阅 GitHub 上的拉取请求 [#5708](https://github.com/Jermolene/TiddlyWiki5/pull/5708)

## 将图像拖放到编辑器中

现在可以将图像文件直接拖放到条目文本编辑器中。快显窗口允许重命名传入的图像条目，然后在插入点将 `<img src="title">` 自动插入到条目文本中。

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5699">> (和[这里](https://github.com/Jermolene/TiddlyWiki5/pull/5705)) 能够在编辑器中拖放影像以导入和插入

## 使用 ActionCreateTiddlerWidget 简化对条目标题的访问

现在可以在 ActionCreateTiddlerWidget 的主体中嵌入操作，这些操作可以通过变量 `createTiddler-title`直接访问新创建的条目标题，以及变量 `createTiddler-draftTitle` 中相应草稿的标题。旧的 `$savetitle` 和 `$savedrafttitle` 属性现在已弃用。

```
<$button>
	<$action-createtiddler $basetitle="自制按钮" tags="$:/tags/PageControls" text={{$:/state/new-button-caption}}>
		<$action-navigate $to=<<createTiddler-title>>/>
	</$action-createtiddler>
	创建一个新的无功能性页面控制项按钮并打开该条目
</$button>
```

更多详细信息：

* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/9faaa312998d48c56bd50335820b6b881266af4b">> [ActionCreateTiddlerWidget](#ActionCreateTiddlerWidget) 使新标题可当变量用

## 更灵活的宏解析

~TiddlyWiki 的宏语法的两个长期局限性已经解决。

首先，现在可以将宏调用，嵌套在参数内以内到其他宏。例如：

```
<<mymacro arg:"""nested <<macro>> call""">>
```

其次，宏参数现在可用于筛选表达式。例如：

```
[<qualify "$:/state/mydata">addsuffix[-]addsuffix<now "YYYY MM DDD hh:mm:ss">]
```

* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/5451">> 宏调用使用与小工具属性相同的解析器
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5836">> 支持筛选器中的宏参数 (见 [筛选器参数](Filter Parameter))

## 优化嵌入的刷新

这种听起来简单的变化，有几个重要的结果：

第一个结果，它使[嵌入小工具](TranscludeWidget)更加有效率，并提升了重绘周期的性能。

第二个结果，解决了许多用户长期以来的难题：现在可以使用 EditWidget 编辑同一个条目的另一个字段。以前，编辑小工具在这种情况下无法正常工作，因为每次按键时都会重绘它，导致当前编辑插入符号/选择位置遗失。

正如有时发生的那样，第三个结果是依赖旧的、错误行为的结构，可能不再像预期的那样工作。这种构造的一个常见示例，是调用 JavaScript 宏。问题源于这样一个事实，即 JavaScript 宏从开发人员的角度，设计得尽可能简单，是没有副作用的纯函数，并且总是为相同的参数返回相同的值。特别是，JavaScript 宏不能参与 ~TiddlyWiki 的重绘机制，囙此当底层数据发生变化时，它们不能强迫自己进行更新（对于需要这种处理的情况，应该使用 JavaScript 小工具，而不是 JavaScript 宏）。

但是，开发人员有时会通过使用[嵌入小工具](TranscludeWidget)，在特定条目更改时，强制重绘宏调用，来克服此限制。更新的、更具选择性的行为意味着，有时这样的小工具，将避免以前用来更新 JavaScript 宏的重绘。

对于最终用户，如果升级到 v5.2.0 导致问题，请咨询讨论[论坛](Forums)，查看其他用户是否遇到相同问题，并在需要时发布新帖子。

* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/5736">> [嵌入小工具](TranscludeWidget)，避免触发刷新，除非嵌入字段变更（以前其他字段变更，也会触发）

## 其他值得注意的改进

<<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/5611">> (和 [这里](https://github.com/Jermolene/TiddlyWiki5/commit/4a99e0cc7d4a6b9e7071c0b2a9a0f63c3c7d2492)) [ListWidget](#ListWidget) 具有可选的 `counter` 属性指定一个变量，以包含每个清单项的数值索引。这对于创建编号项目清单以及检测清单中的第一个和最后一个条目很有用

<<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/3094e062366830bdecfb91e3d852667fa951dc50">> 动作小工具使用可选的新模式运行，可确保在调用之前刷新所有小工具 -- 见 [ActionWidget 运行模式](ActionWidget Execution Modes)。这可以在运行 ActionWidss 的方式中解决了长期不一致，使它们更像是传统的编程语言

<<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/5726">> HTML 注释语法，使其能够在编译指示之间、和诸如宏定义的编译指示之前和之间使用。这使得在复杂的维基文本条目内，提供文档更容易

<<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/a360adbba924d222c5b55709133c18890c04398d">> 当故事河为空时，托放区的大小。 许久以来，如果故事河是空的，~Tiddlywiki 令人困惑地无法识别拖放操作

# 性能改进

* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/5380">> (和[这里](https://github.com/Jermolene/TiddlyWiki5/pull/5488)) 筛选器处理中，链接清单实现的效率
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/5362">> [all Operator]] 和 [[这里](https://github.com/Jermolene/TiddlyWiki5/pull/5369") [links 操作符](links Operator)，和 [这里](https://github.com/Jermolene/TiddlyWiki5/pull/6050) [backlinks 操作符](backlinks Operator) 使用新的链接清单实现
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/5436">> 基于 [ETag](https://en.wikipedia.org/wiki/HTTP_ETag) 的浏览器缓存所有资源和 GZIP 或 Deflate 的压缩，以获取请求的所有回应
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/commit/70e60cd93fe26e9cde1e350e3236578fa5abfe48">> 插件内部格式，删除不需要的空格，节省了约 6% 的 $:/core plugin 的大小
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/6053">> [sort 操作符](sort Operator)的性能，通过优化常见情况

# 可用性改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5479">> 能够导入以前被阻止的系统条目
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/5812">> 取消搁置的导入时的警告消息
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/commit/f97850dd05693e84dd36b8af5d72b22fbfd74958">> "Snow White" 布景主题中的默认字体更粗、更清晰
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5816">> 模态机制，显示模块时，防止页面滚动
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5326">> "删除标签"按钮的填充颜色
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5370">> 页面标题，仅于存在网站副标题时，使用分隔的 em-dash
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5397">>  $:/PaletteManager 中毁损的 aria-label
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/commit/caec6bc3fea9155eb2b0aae64d577c565dd7b088">> SVG 优化脚本
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/c325380231a8c592a6e51d4498c1e6c3a241b539">> plus/minus SVG 图标: <<.icon $:/core/images/plus-button>> 和 <<.icon $:/core/images/minus-button>>
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5672">> 当警告"目标条目已经存在"时，链接到现有条目显示在编辑模板中
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5727">> CSS 类，使在编辑模板中的标签丸，看起来像查看模板中的标签丸
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/1661">> 不包含空格的长字段值溢出
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/commit/a4421f50c6886b02c3595b7ffa6ba72674d6bf21">> GitHub、Gitea 和 GitLab 保存模块，维基化提交消息，激活消息中使用的宏
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/5981">> [文本编辑器的戳记工具栏按钮](Using Stamp)的下拉式功能表，允许通过拖放进行排序

# 小工具改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/9eda02868f21e9dd1733ffe26352bd7ac96285b4">> (和[这里](https://github.com/Jermolene/TiddlyWiki5/commit/f87b3bfcdba79b6ad198af286bd827c61044891f)) 新的 MessageCatcherWidget，捕捉任意消息并运行操作字符串
* <<.link-badge-modified "https://github.com/Jermolene/TiddlyWiki5/commit/b9647b2c48152dac069a1099a0822b32375a66cf">> [FieldManglerWidget](#FieldManglerWidget) 确保其不会删除其捕获的事件
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/5597">> [DropzoneWidget](#DropzoneWidget) 可选地在发送 `tm-import-tiddlers` 消息后，调用操作，并指定可选的 `contentTypesFilter`，该选项决定哪些内容类型被拖放区接受。
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/07caa16e8714afe9a64eb202375e4a2f95da1508">> [DropzoneWidget](#DropzoneWidget) 也使用指定的反串行化字符串拖放或剪贴到拖放区
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5635">> [SelectWidget](#SelectWidget) 刷新 
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5644">> [ActionListopsWidget](#ActionListopsWidget) 错误，通过避免将原始清单值的筛选器表达式片段拼接在一起
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/3f986861538a3cc5c3c6da578b45d0d9138a6b2b">> [ActionPopupWidget](#ActionPopupWidget) 创建必须手动清除的浮动弹出窗口
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/5648">> (和[这里](https://github.com/Jermolene/TiddlyWiki5/pull/5782)) KeyboardWidget 提供一个附加信息变量
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/e9e5d37ff01cc1aaa3419798904dac8b0e9775af">> DraggableWidget，使其具有隐藏拖动影像的选项

# 筛选器改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5813">> 新的 [:map 筛选器首码](Map Filter Run Prefix)
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5653">> 新的 [:sort 筛选器 run 前置码](Sort Filter Run Prefix)
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5612">> [average 操作符](average Operator)、[median 操作符](median Operator)、[variance 操作符](variance Operator) 和 [standard-deviation 操作符](standard-deviation Operator)，用于计算数字清单的算术平均值
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5673">> [deserializers 操作符](deserializers Operator)
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5665">> [format:titlelist 操作符](format Operator)
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/83ee363cb4c19246ac977f55e46439dd8a1508ba">> [charcode 操作符](charcode Operator)，用于轻松访问像定位和换行等特殊字符
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5252">> 支持后缀至筛选器 run 前置码
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/5968">> [search-replace 操作符](search-replace Operator)，使具有 **m** 标志的多行模式
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/e6fd0caf6b997c24c116def354b2a65d8909279e">> [range 操作符](range Operator)，允许参数指定为单独操作数
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6055">> [moduleproperty 操作符](moduleproperty Operator) 和扩充的 [modules 操作符](modules Operator)，提供对内部 JavaScript 模块的访问

# 可编程性改进

* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/3094e062366830bdecfb91e3d852667fa951dc50">> 使用可选的新模式运行动作小工具，以确保在调用之前，刷新所有小工具
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/5361">> [unusedtitle 宏](unusedtitle Macro) 添加 **separator** 和 **template** 参数
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5720">> <<.field color-scheme>> 字段至所有布景主题，都区分亮色和暗色主题
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/d25e540dd2f0decf61c52fdc665a28a5dfeda93f">> 支持 `image/vnd.microsoft.icon` 内容类型
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5458">> 支持为首码 $:/volatile/ 的已更改条目限制刷新
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/89546b3357b0696a7047e6915bd6cd137b589de6">> 控制类型为 `text/html` 的条目沙箱的隐藏设置
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5707">> 文本操作 [insert-text](WidgetMessage: tm-edit-text-operation)
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/e157d16b724172f752da0ff714847e0c0ca9664d">> **data-tag-title** 属性至标签丸
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5294">> 支持[动态工具栏按钮](How to create dynamic editor toolbar buttons)
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5694">> 新的 [SystemTag: $:/tags/ControlPanel/Plugins](#SystemTag%3A%20%24%3A/tags/ControlPanel/Plugins) 用于自定义控制台"挿件"选项卡下显示的选项卡
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/59a53e695b28144f8f788469dad7865499d95d79">> 支持工作日和年度日期的[日期格式](DateFormat)令牌
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/ebf563ac70b2053fcaed8c544ae83e839878e3bd">> [slugify 操作符](slugify Operator) 用于进一步成对的音译

# 主从改进

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/e96a54c7531a2d9e07745e27d2015d8d7d09588f">> 当缺少 'ETag' header 时，在主从式配置中崩溃运行
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5423">> 使用延迟加载图像时的空白网站图标
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/4461">> 网页服务器的自定义路径首码和基本身份验证的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5416">> 当类型字段被赋予值于新条目的创建时，在 Node.js 使用 ActionSetFieldWidget 会崩溃的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5329">> 以名称保存条目文件，已经以附文件名结尾的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5465">> filesystem 插件的几个一致性问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/5483">> 维基文件夹外 $:/config/OriginalTiddlerPaths 的编码问题
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/5628">> ~TiddlySpot 保存模块设置格式
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5638">> PUT 保存模块的 401 和 403 错误消息
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/5570">> [外部 JavaScript 模板](Using the external JavaScript template)，脱机时更易于使用，工作更顺畅
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5931">> 简单 HTTP 请求的 X-Requested-With header 的不正确使用
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/a67b1b8bb5dcff5e6e3151844d96bf882ae4a976">> 允许于 `./files/` 文件夹外[访问文件](Using the integrated static file server)的安全问题

# Node.js 改进

* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/a38dc1730010c6a2b6a011aff4818bbc67c04055">> RenderCommand 允许传递多个变量

# 插件改进

## [Markdown Plugin](#Markdown%20Plugin)

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5846">> 在 Markdown 中使用 [Katex 插件](Katex Plugin)的支持
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5848">> 清单中无关的段落标记

## [XLSX Utilities 插件](XLSX Utilities Edition)

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/5400">> 使用 XLSX Utils 插件崩溃

## [KaTeX 插件](KaTeX Plugin)

* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/commit/a2ca5e4d1ef67374628d2d78afa1550443900ec0">> 至 KaTeX v0.13.18
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5933">> 自定义宏编辑器
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6046">> 每个显示的条目的自动编号重置

## [Freelinks 插件](Freelinks Plugin)

* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/0ed32fded996826a59832d7a7555bb16c4a57864">> Freelinks 插件用筛选器，以决定哪些条目可成为自由链接的目标

## [Menubar 插件](Menubar Plugin)

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/discussions/5533">> Menu 插件，支持可选的 **dropdown-position** 字段

## [BibTeX 插件](BibTeX Plugin)

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/5581">> BibTeX 插件，更明智地报告错误
* <<.link-badge-modified "https://github.com/Jermolene/TiddlyWiki5/commit/953fb9f237ad78e409c03d4b29b9854d8abf6cdf">> BibTex 插件，强制字段名称为小写

# 开发人员体验改进

* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/5382">> 小工具子分类机制，可与在其构造函数中添加事件侦听器的小工具运作
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/5377">> Jasmine 测试套件的输出
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/9f9ce6595b08032a602981f82940ca113cff8211">> 带有子分类机制的维基文本解析器
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/ef76349c37662e9706acfffc2c2edb51a920183d">> 支持 **utils-browser** 模块
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/5464">> **th-before-importing** hook，于任何条目导入之前，允许插件检查或修改 `importTiddler` 对象
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/3797">> **th-closing-tiddler** hook，当条目关闭时

# 翻译改进

* <<.link-badge-added>> 波兰语翻译
* <<.link-badge-improved>> 加泰隆尼亚语翻译
* <<.link-badge-improved>> 华语翻译
* <<.link-badge-improved>> 法语翻译
* <<.link-badge-improved>> 德语翻译
* <<.link-badge-improved>> 西班牙语翻译

# 其他错误修复

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5999">> 异常输入到 `decodeURIComponent()` 所致的崩溃
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5376">> 在某些情况下，[lookup 操作符](lookup Operator) 返回 "undefined" 的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/5396">> 具有未结束的维基文本注释的崩溃问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5453">> 条目信息区的内容渗色于关闭动画
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5452">> inline/block 小工具解析故障
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5401">> 当解析筛选器时，失控的正则表达式
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5440">> 标签 wrapper 外，使用标签药丸的右边距
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/5455">> 上传保存模块，选择性的工作，而无需用户名或密码
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/5e4430dbf9ff66d9a18fbdf3005abcd716efc07d">> RadioWidget 选择性地刷新，并正确使用 **checked** 属性
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5542">> `wiki.search()` 方法的 "invert" 选项 
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/7b1a0c6e6a8bd2d3badf8766af0cd3f5f7ac5ec8">> ES5 兼容性问题 
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/226df2ad7d2978d3d7400d94767a0503e495cf98">> 导出以双引号开始和结束的条目名称
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/commit/d56e8764a1f02a214df5da1cc95191be2da2491b">> 控制弹出窗口时，按钮小工具的可访问性
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/d6ea369f5ef9d3092a360a4286a99902df37782b">> EditTextWidget 为缺少的字段使用默认文本
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5552">> css-escape-polyfill 在 Node.js 下运作
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/dbd3f835bf8399ed1a3da7cc322ec9b6ab783d53">> (和 [这里](https://github.com/Jermolene/TiddlyWiki5/commit/fb4d77ef46e23c23f4e46c13f4a529aa29a27dcd)) 依非字符串字段排序时崩溃的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5711">> (和[这里](https://github.com/Jermolene/TiddlyWiki5/pull/5868))，在 [EventCatcherWidget](#EventCatcherWidget) 的一些错误，并引入了新的 `stopPropagation` 属性，以及用于指定操作的新语法
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5691">> CurrentTiddler 变量于子筛选器和首码的一致性
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/485779f5b2136b7bcd739352b56188d94b0eb9e4">> 在没有小工具内文的筛选器中，访问变量时崩溃的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/8fbf52e419e71d726ea32b6c44e3ccfc4245d825">> 当 javascript 条目未随后导入时，不必要的触发重新加载警告
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5521">> 导入指示器的小问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5700">> 主题中的前导和结尾的空格
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5469">> HTML5 区块元素的配置清单
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5692">> 用于 `tc-btn-invisible` 类的禁用按钮的形状和颜色
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/5473">> 查看工具栏各项的间距不一致
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/2720072b23593c87e7909d12c75c5b136e1bdf99">> 将新值分配给文件输入控件时崩溃
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6003">> [文本编辑印记按钮](Using Stamp) 在影子条目中使用前缀和后缀
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/62b8a83741e6eccfaead5ea7960c0400b6db5f4a">> Internet Explorer 使用 HTA 粘贴文本时崩溃
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6036">> `[all[shadows]]` 有时返回被覆盖的影子条目的错误
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6044">> radio 小工具刷新的错误，其中 tc-radio-selected 类没有正确更新
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/f6eadbd1c900b5f779ebbf3c539192cd3c2b98cc">> 读取无效的 JSON 文件时崩溃

# 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们的时间，协助改进 TiddlyWiki：

<<.contributors """
8d1h
Arlen22
BlueGreenMagick
BramChen
BurningTreeC
cdruan
clutterstack
CodaCodr
dixonge
donmor
felixhayashi
FlashSystems
flibbles
FND
hoelzro
jeremyredhead
joebordes
joshuafontany
kookma
laomaiweng
leehawk787
Marxsal
morosanuae
neumark
NicolasPetton
OdinJorna
pmario
rryan
saqimtiaz
simonbaird
slaymaker1907
sobjornstad
twMat
xcazin
""">> 