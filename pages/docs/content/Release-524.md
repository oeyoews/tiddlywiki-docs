---
title: '5.2.4'
---

<<.banner-credits
	credit:"""恭喜 [dmikh](https://talk.tiddlywiki.org/u/dmikh)，他们赢得此版本横幅的设计 (这是[竞赛讨论串](https://talk.tiddlywiki.org/t/new-release-banner-competition-for-v5-2-4/4982)和[票选讨论串](https://talk.tiddlywiki.org/t/vote-for-the-v5-2-4-new-release-banner/5140/2))。
"""
	url:"https://raw.githubusercontent.com/Jermolene/TiddlyWiki5/0dc30086e933cf2272cddb076a9fcbedad252735/editions/tw5.com/tiddlers/images/New%20Release%20Banner.png"
>>

_[此版的更新纪录详见](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.2.3...v5.2.4)//


# 重要更新

v5.2.4 发布后，我们发现 [#7039](https://github.com/Jermolene/TiddlyWiki5/pull/7039) 和 [#6910](https://github.com/Jermolene/TiddlyWiki5/pull/6910) 中的样式表更改存在一些向后兼容性问题。因此，我们决定以快速修复错误的[版本 5.2.5](Release 5.2.5) 来解决这些问题，所有用户都应升级到新版本。

# 主要改进

新的 [ext[Twitter Archivist|<https://tiddlywiki.com/prerelease/editions/twitter-archivist/>]]  插件将推文和相关媒体当作单独的条目，从 Twitter 存盘中导入。

<<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6961">> 新的 GenesisWidget，允许动态构造另一个小工具，其中可以动态确定新小工具的名称和属性，而无需事先知道

<<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6936">> (和 <<.link-badge-here "https://github.com/Jermolene/TiddlyWiki5/pull/7105">>) 读取与格式化 JSON 数据的新操作符：<<.olink jsonget>>、<<.olink jsonindexes>>、<<.olink jsontype>>、<<.olink jsonextract Operator>> 和 <<.olink format>>

# 翻译改进

改进了以下翻译：

* 华语
* 法语
* 德语
* 波兰语
* 西班牙语
* 日语

~TiddlyWiki 本身翻译功能的改进：

* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/6882">> [翻译者版本](Translate TiddlyWiki into your language)，添加一个选项，于文本区域下方显示原始英语文本
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/6933">> $:/AdvancedSearch 中的"删除"按钮的文本，使其可以翻译

# 可用性改进

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/d62a16ee464fb9984b766b48504829a1a3eb143b">> 长按条目链接时，触发 iOS/iPadOS 上的预览的问题
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/6910">> 按钮和输入元素在浏览器之间的一致性
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/d825f1c875f5e46158c9c41c8c66471138c162d1">> 编辑预览以使用[查看模板主体级联](View Template Body Cascade)
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/6970">> 检测小工具和筛选器中的无限递归错误
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/36896c3db8c9678c0385a561996248a6f00a45ff">> 在新窗口中使用[视图模板正文级联](View Template Body Cascade)打开条目
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6877">> [具有样式的 runs](Styles and Classes in WikiText) 的默认样式
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/6881">> 升级导引，使版本号更显眼
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/7042">> 解析包含 CSV 数据的条目，以提高兼容性
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7076">> 新的页面控制按钮，用于召唤布局切换器
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/7084">> 折叠的条目，以确保展开按钮始终可见
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/7072">> [交互窗口](Modals)的处理，选择性地允许通点击背景，将其关闭

# 小工具改进

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/127f660c91020dcbb43897d954066b31af729e74">> EditTextWidget，删除默认文本 "Type the text for the tiddler 'missing'"
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7081">> **focus** 属性至 SelectWidget
* <<.link-badge-removed "https://github.com/Jermolene/TiddlyWiki5/commit/1df4c29d73073788ba3859668112e8bb46171a6c">> LetWidget 无法创建名称以美元符号开头的变量的限制

# 筛选器改进

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/6303">> 筛选器 run 中变量的可用性问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7065">> 在筛选器处理期间，从链接清单中删除多个项目时，出现的问题

# 可编程性改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7004">> 支持嵌套[宏定义](Macro Definitions in WikiText)
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6976">> 支持 [SystemTag: $:/tags/ClassFilters/TiddlerTemplate](#SystemTag%3A%20%24%3A/tags/ClassFilters/TiddlerTemplate) 和 [SystemTag: $:/tags/ClassFilters/PageTemplate](#SystemTag%3A%20%24%3A/tags/ClassFilters/PageTemplate) 将动态 CSS 类分配给条目框架和页面模板
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/commit/c5d3d4c26e8fe27f272dda004aec27d6b66c4f60">> 安全模式，可禁用维基存放区索引器
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/166a1565843878083fb1eba47c73b8e67b78400d">> 安全模式，可防止全域禁用解析器规则
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/6735">> 快捷键处理，允许全域快捷键覆盖所有其他快捷键
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/965bd090a905f5756e79124b698c894f7f72ad5b">> [list-links Macro](#list-links%20Macro) 允许覆盖渲染的字段
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/6913">> [Table-of-Contents Macros](#Table-of-Contents%20Macros) 允许覆盖默认图标
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6939">> 编辑预览区域的''data-tags-*'' 和 **data-tiddler-title** 属性
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/5947">> [timeline Macro](#timeline%20Macro) 覆盖链接模板
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7043">> 支持[日期格式字符串](DateFormat)中的 Unix 纪元时间戳
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7064">> "绿色大的下载按钮" 使用定义的调色板颜色
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7063">> 新的隐藏设置，[将水平选项卡用于侧边栏的「更多」选项卡](Hidden Setting: More Tabs Horizontal)
* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/commit/bef11fe6a25fb849dee40c4aa4337d6a30daf0b4">> [外部 JavaScript 模板](Using the external JavaScript template)，允许配置外部脚本文件的 URL

# 错误修复

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7099">> 小屏幕上截断的搜索结果
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7010">> 小屏幕上的表格内容溢出
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/fb34df84ed41882c1c2a6ff54f0e908b43ef95a3">> "添加图像"快捷键不分配日志标签
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6987">> SelectWidget 类更新，若其使用筛选器
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/7017">> 高级搜索筛选器下拉清单中的维基化的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7057">> $:/Import 中的表格，避免创建隐藏的空行
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/7008">> 高级搜索快捷键无法正确导航
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/7083">> 在「高级搜索筛选器」下拉清单中，错误显示草稿
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7092">> v5.2.3 中引入的新字段编辑器级联的向后兼容性

# Node.js 改进

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7073">> 新的 [commands 指令](CommandsCommand)，用于激活从筛选器动态生成的命令符记
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/6947">> 主控台记录，避免空格和 `<empty string>` 消息 
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7014">> 在某些情况下延迟加载删除条目的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/344110e2890caf711ab8f3c4f4deaa7d86771231">> 处理 ".mp4" 扩展名，使其默认为视频而不是音频
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/6588">> 测试服务器到插件程序库应用版
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7049">> [隐藏设置：同步记录](Hidden Setting: Sync Logging) 控制同步相关消息的记录
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/6944">> Jasmine 插件，要求显式使用 `--test` 命令以运行该测试

# 性能改进

* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/commit/53d229592df76c6dd607e40be5bea4d5e063c48e">> `wiki.getTiddler()` 的性能
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/commit/81ac9874846b3ead275f67010fcfdb49f3d2f43c">> 变量原型链处理的性能
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/6056">> 筛选器处理期间清单处理的性能

# 致谢

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们的时间，协助改进 ~TiddlyWiki：

<<.contributors """
AnthonyMuscio
bestony
btheado
BramChen
carlo-colombo
EvidentlyCube
FlashSystems
flibbles
fu-sen
joebordes
hoelzro
kookma
linonetwo
Marxsal
oflg
pmario
rmunn
roma0104
saqimtiaz
simonbaird
talha131
Telumire
tw-FRed
twMat
xcazin
""">>
