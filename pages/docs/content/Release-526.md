---
title: '5.2.6'
---

_[此版的更新纪录详见](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.2.5...v5.2.6)//

<<.banner-credits
	credit:"""恭喜 [StS](https://talk.tiddlywiki.org/u/StS) 他们赢得此版本横幅的设计 (这是[竞赛讨论串](https://talk.tiddlywiki.org/t/new-release-banner-competition-for-tiddlywiki-v5-2-6/6403/3)和[票选讨论串](https://talk.tiddlywiki.org/t/vote-for-the-tiddlywiki-banner-v5-2-6/6469))。
"""
	url:"https://raw.githubusercontent.com/Jermolene/TiddlyWiki5/3a2831870b4418b8b01d155b057db5b7485562c1/editions/tw5.com/tiddlers/images/New%20Release%20Banner.png"
>>

# 主要改进

## 改进 Markdown 插件

* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/6528">> [Markdown 插件](Markdown Plugin)，使用更新和更好维护的 [markdown-it](https://github.com/markdown-it/markdown-it) 程序库。之前的 Markdown 插件改为 "markdown-legacy"，仍然可用

## 使用主从式配置更好地处理网络连接丢失

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7169">> [BrowserStorage 插件](BrowserStorage Plugin) 和主从式配置之间的集成，允许在脱机时进行更改，然后再与服务器重新同步

# 新的差异-匹配-补丁基元

* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7290">> 三个新操作符揭露了与 ~TiddlyWiki 集成的程序库 [Diff-Match-Patch](https://neil.fraser.name/software/diff_match_patch) 以前隐藏的特性：
    * 新的 <<.olink levenshtein>> 操作符，计算两个字符串的相似度，即需要插入、删除或修改的字符数，以便将一个字符串变成另一个字符串
    * 新的 <<.olink makepatches>> 操作符 和 <<.olink applypatches>> 操作符，可用于制作和应用代表两个不同文本之间差异的补丁。请参阅[示例](makepatches and applypatches Operator (Examples))

# 翻译改进

改进了以下翻译：

* 华语
* 德语
* 意大利语
* 波兰语

# 插件改进

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7176">> [Innerwiki 插件](Innerwiki Plugin)，允许 `<$data>` 小工具覆盖现有条目字段
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7207">>、<<.link-badge-here "https://github.com/Jermolene/TiddlyWiki5/commit/c39ef398bffae12c0ed7324d9b6d9d29f0f2f9ff">> 和 <<.link-badge-here "https://github.com/Jermolene/TiddlyWiki5/commit/8f7441f296351a4dd0852c3c782f8874d398e052">> 阻碍 [Share Plugin](#Share%20Plugin) 正常工作的问题
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/commit/524cee1489f260375cac8cfe878fdc5942a4596e">> [XLSX Plugin](XLSX Utilities Edition) to handle importing numeric fields
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/81f514116657d0d567be7a4c45762a85beaa8bc0">> 使用用于静态渲染的假 DOM 时，Dynannotate 插件崩溃
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7281">> 将文本剪贴到 CodeMirror 编辑器中，也会打开一个 `$:/Import` 条目的错误
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/7334">> [Railroad 插件](Railroad Plugin)的文档

# 辅助功能改进

* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/7232">> 保存维基按钮的外观，以便没有色觉的用户户可以访问之

# 可用性改进

* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/7217">> 通过允许丢失的条目被“删除”，来保持条目删除的一致性，这只会导致它们被关闭
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/commit/34643a42790777f1b235f57b5093bb29bd0b3a14">> 布局切换器为每个布局包含一个可选图标
* <<.link-badge-removed "https://github.com/Jermolene/TiddlyWiki5/commit/c0615e20ecf7d5d5e66d8a2acd28b80e8d59688d">> [表格布局的改进](https://github.com/Jermolene/TiddlyWiki5/pull/7010)，从 v5.2.5 开始，已证明不向后兼容
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7323">> 支持 `&dollar;` HTML entity

# 小工具改进

* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/7222">> EditTextWidget 支持 `focusSelectFromStart` 和 `focusSelectFromEnd` 属性，以更好地控制文本选择

# 筛选器改进

* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/7121">> <<.olink encodeuricomponent>> 操作符对 Windows 文件名中非法的字符进行编码，例如 `*`
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/commit/89fd8871b6217634c9896b9402069757ca5ea189">> <<.olink encodebase64>> 操作符 和 <<.olink decodebase64>> 操作符

# 可编程性改进

* <<.link-badge-extended "https://github.com/Jermolene/TiddlyWiki5/pull/7185">> [编译指示](Pragma)的语法，允其许使用空格缩进
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/7118">> <<.mlink tag-picker>> 和 <<.mlink keyboard-driven-input>> 宏的可读性
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/7129">> <<.mlink list-links-draggable>> 和 <<.mlink list-tagged-draggable>> 宏的可读性，通过使用新的 GenesisWidget 而不是文本替换
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/7210">> [支持外部 JavaScript 内核](Using the external JavaScript template) 使将外部 JS 维基保存为标准的单个文件维基成为可能
* <<.link-badge-added "https://github.com/Jermolene/TiddlyWiki5/pull/7007">> 当 Zoomin storyview 由于条目视图模板缺少单个包含元素而失败时，浏览器控制台中的警告消息

# 错误修复

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6622">> 防止粘贴所有可用格式的 DropzoneWidget 错误
* <<.link-badge-updated "https://github.com/Jermolene/TiddlyWiki5/pull/7102">> PDF 渲染，使用 `<iframe>` 而不是旧的 `<embed>`
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/8ef6d78beffb6496fe5daa2c81a529a79046ba3c">> 通过将此类条目保存为 `.json` 格式来解决字段名称包含散列字符的 `.tid` 文件问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7121">> (和 <<.link-badge-here "https://github.com/Jermolene/TiddlyWiki5/pull/7219">>) 覆盖 [Table-of-Contents Macros](#Table-of-Contents%20Macros) 的 `toc-caption` 宏
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7212">> 渲染 $:/core/ui/MoreSideBar/Tags 在故事河中查看时
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7156">> <<.olink reduce>>、<<.olink filter>> 和 <<.olink sortsub>> 操作符中的未定义变量崩溃
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/issues/7153">> 如果 `$type` 属性为空或缺失，GenesisWidget 不会创建任何内容
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7230">> GenesisWidget 传递 `isBlock` 标志给生成的小工具
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/7160">> 使用 <<.olink jsonget>> 操作符，并以 “fixed” 作为键名时崩溃
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/0b39e47ce88c7620b7a66c1553a71efaff06edb9">> 导入 MP3 文件以符合当前浏览器实现
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7122">> 尝试创建具有空白标签名称的元素时崩溃
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7224">> “保存条目”按钮的布局问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/3d0ec5b1bdc157f87d65b8c9b76e681c14337eb4">> (和 <<.link-badge-here "https://github.com/Jermolene/TiddlyWiki5/commit/4e5c957e975459350cd7df3038e5fb3c7aea859f">>) 处理列表中的空格，以覆盖所有 Unicode 空格字符
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7228">> 控制台中解析器规则复选框的测试间距
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/f249b79e81e51d48364ea8147fe27850df9f577f">> 分配给编辑工具栏按钮的 CSS 类
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/7247">> 故事视图中使用损坏的 CSS 类 `tc-storyview-zoomin-tiddler` 
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7243">> [WidgetMessage: tm-import-tiddlers](#WidgetMessage%3A%20tm-import-tiddlers) 的 `importTitle` 和 `autoOpenOnImport` 选项的用法
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7276">> 固定文本编辑器在调色板更改时刷新
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/7270">> 引用存在但具有未定义值的变量时，LetWidget 崩溃
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/7354">> 使用 "添加子条目" 按钮时，$:/config/NewTiddler/Tags 中指定的标签周围不必要的双括号

# Node.js 改进

* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/7130">> 于主从式配置中使用的内部模板中的重复字段
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/7138">> 延迟加载不触发服务器同步
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/commit/bf8e1ca5b0587787bf80692b0213bb7b038c7868">> 如果匿名用户设法在唯读维基中创建可同步的条目，则在创建新的条目时崩溃
* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/commit/95e61688397ff1bc9be04193bc4ce2e3c8c48dce">> 在主从式配置中处理注销，以避免 404 错误
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/issues/7238">> 将带有 _canonical_uri 字段的条目保存为 .tid 文件时的问题
* <<.link-badge-fixed "https://github.com/Jermolene/TiddlyWiki5/pull/6953">> 缺少静态故事河模板的元 viewport 

# 性能改进

* <<.link-badge-improved "https://github.com/Jermolene/TiddlyWiki5/pull/7299">> 字段索引器，更有效地处理查找

# 致谢

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们的时间，协助改进 ~TiddlyWiki：

<<.contributors """
andrigamerita
AnthonyMuscio
BramChen
btheado
cdruan
CrossEye
cs8425
EvidentlyCube
fkmiec
flibbles
GameDungeon
hffqyd
jeffrey4l
joebordes
kookma
linonetwo
m42e
Marxsal
mateuszwilczek
newmedicine
michsa
pippep
pmario
saqimtiaz
Telumire
twMat
wincentbalin
yaisog
""">>