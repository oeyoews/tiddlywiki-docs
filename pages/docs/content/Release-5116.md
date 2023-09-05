---
title: '5.1.16'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.15...v5.1.16)//

## 改进 ~CodeMirror 插件

~CodeMirror 插件经历大幅改写，并且有许多新的改进：

* 更新至 ~CodeMirror v5.37.0 版
* 现在模块化为：
    * 基本插件：基本轻量级配置, 大约 240KB
    * 附加插件
        * Search and Replace
        * Auto-completion
        * Fullscreen editing
        * Auto-close brackets
        * Auto-close tags
        * ~SublimeText keymap
        * Emacs keymap
        * Vim keymap
        * Highlighting modes：Javascript、Xml、Html (htmlmixed)、Html (htmlembedded)、Css、Markdown、X-Tiddlywiki
* 自动设置 (不再需要配置条目)
        * ~CodeMirror (engine.js) 使用已安装的 ~CodeMirror 插件里的信息组建组态
* 新建控制台配置选项卡:
    * 行号
    * 布景主题：
        * 编辑器字体 (与本机 TiddlyWiki 相同)
        * 光标设置
        * 换行
    * 当前行列高亮显示
        * 自动完成激活/禁用（如果已安装）
    * Keymap

## 其他新的和改进的插件

* 新的 [Dynaview 插件](Dynaview Plugin) 可以构建动态响应滚动或缩放更改的用户界面
* 改进 [Text-Slicer 插件](Text-Slicer Plugin)，可自定义的 JSON 规则
* 更新 [KaTeX 插件](KaTeX Plugin) 至最新的 v0.9.0

## 翻译改进

新的和改进翻译:

* 改进荷兰文翻译
* 新的斯洛文尼亚文翻译
* 新的葡萄牙文 (巴西) 翻译
* 改进法语翻译
* 改进德文翻译
* 改进正体和简体中文翻译
    * 将最小搜索长度重置为一个字符

## 隐私改进

由[一般数据保护条例（GDPR）](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation)驱使，我们已[从 tiddlywiki.com 删除所有第三方 cookies](https://github.com/Jermolene/TiddlyWiki5/pull/3106)。

## 可用性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/9e03264ebe141a5dc4d37dcb62f3bbf2f740d983) 对导入清单的可选预览类型
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3112) 新的 DiffTextWidget，将其集成到导入列表中，且作为预览窗格
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3155) 用于将所选内容包裹于双方括弧和大括弧的新编辑器工具栏按钮
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3134) 新的 [sortan 操作符](sortan Operator) 用于对文数字的值进行排序，例如："Apple 6", "Apple 7", "Apple 8", "Apple 9", "Apple 10", "Apple 20", "Apple 30", "Apple 100"
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/da0ffce2d66f16ad14587fbe58b8d7a5c8d36657) 依据 [GitHub](http://markdotto.com/2018/02/07/github-system-fonts/) 建议的可读性的默认字体
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3131) 一个用于 [KaTeX 插件](KaTeX Plugin) 的文本片段的编辑器工具栏按钮片段的编辑器工具栏按钮
* [简化](https://github.com/Jermolene/TiddlyWiki5/commit/1c8170463c80a18c0753783aa0b32a0ff2f9028c) 页面滚动行为：导航到条目，现在将条目的顶端滚动到查看画面的顶端
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/d2ff164c07788818ded9826c9e3811599272e69c) [WidgetMessage: tm-copy-to-clipboard]] [[还有](https://github.com/Jermolene/TiddlyWiki5/commit/1b6a06a4d79ad5c58593a7844e306c25848979ea) [copy-to-clipboard 宏](copy-to-clipboard Macro) 用于将文本直接拷贝到剪贴板
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3040) 字段下拉式清单的提示
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3135) 一个 "更多" 边栏中默认选项卡的控制台设置
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3149) 一个 "新条目名称" 的控制台设置
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/c0569849d22f99623423d349c0d96ecae11ffbe8) "向左旋转" 按钮到位图编辑器工具栏
* [改进](https://github.com/Jermolene/TiddlyWiki5/pull/3180) 显示某些编辑器工具栏按钮的条件
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3190) 在显示下拉清单之前，支持新标签字段的最小长度
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/02529a51d0be47477e62cd52dd5e4989a4993663) 调色板、语言和主题切换的一致性和再使用性
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/ea763d0eaba7edf928ae247563deb95278504e9f) 在 [tabs 宏](tabs Macro)保留选项卡内容的支持
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/2703) 支持通过 <kbd>Enter</kbd> 键来添加链接

## 可编程性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/033feda02d7f5cdf27a9393b8229f22219cdab88) 比较操作符的支持至 RevealWidget
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/1c6942402ee7b6d938f01bad23130ebe75b109f2) 支持 StartupActions 在启动时运行操作小工具
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/f4fd5e76f8da8555bb9056725f11e0c0c91649f7) ServerCommand 允许将端口号指定为环境变量
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/28e713caac1582e30b9ab8f7364ac8a564f4ffd7) 屏幕宽度/高度于[启动时显露的平台信息](InfoMechanism)
* [扩充](https://github.com/Jermolene/TiddlyWiki5/pull/3167) DroppableWidget 在变量中传递辅助键
* [扩充](https://github.com/Jermolene/TiddlyWiki5/pull/3203) DraggableWidget 的用于拖动开始和拖动结束的操作
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/7cb54f32c6ee2d98f3f13ddda39f92281d419afd) 一个[可拖动的工作管理示例](TaskManagementExample (Draggable))
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/460a07ca03a501009530a57352d6bec0e3cf49cd) 'Stylesheets' 选项卡至控制台
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/b4c7c59d5d1bc5282fcfed58abbf087b9f65b86c) 'emptyMessage' 参数至 [list-links 宏](list-links Macro) 与 [list-tagged-draggable 宏](list-tagged-draggable Macro)
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/de4eb5ca89132db136c8f5fb3103f289f25fe98a) `th-page-refreshed` hook
* [增进](https://github.com/Jermolene/TiddlyWiki5/pull/3063) 通过将参数当作变量进行宏评估 - 参阅[维基文本中的宏定义](Macro Definitions in WikiText)里的 "参数当作变量" 
* [增进](https://github.com/Jermolene/TiddlyWiki5/pull/3052) LinkWidget 允许更好地自定义 CSS 类
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3124) [each 操作符](each Operator)" 的 value" 尾码
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/0d354fe57f7424c1751a5c0cf5fbf1203803f3c8) 新的 **subtiddler** 属性到 SetWidget
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/47cdf5513391742c3410bb80b36107ab17b0476d) 新的 [subtiddlerfields 操作符](subtiddlerfields Operator) 用于从插件中的条目提取字段
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3182) 能够触发取消选定 CheckboxWidget 的操作
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/2182) 已选的 class 至 RadioWidget 的支持
* [扩充](https://github.com/Jermolene/TiddlyWiki5/pull/2982) [is 操作符](is Operator)，允许指定多种类型
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3209) 数据属性至 ViewTemplate (请参阅 [自定义数据样式](Custom data-styles))
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/2988) 新的 RangeWidget

## 修正错误

* [删除](https://github.com/Jermolene/TiddlyWiki5/pull/3043) 于 list-links-draggable 宏结尾的多余列表项目
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/7e71fcfab80bed9aed4389eea386fb2036cc4a85) 垂直选项卡的内容区域有时超出其右边界的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3079) 添加日志的模板中的双引号问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3070) 在 textarea 里拖动的问题 
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3099) 当使用 "index" 属性时，SelectWidget 的 "default" 属性的用法
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3093) 在某些浏览器上拖动 TiddlyWiki 时，发生崩溃的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3079) "添加日志" 按钮的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3164) SetWidget 的 **filter** 和 **value** 属性的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3190) [Extended Listops Filters](#Extended%20Listops%20Filters) 中数值操作数的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/df1f7e9798b5f6c3d2c3fd82e438cbc9713ade04)  "put" 保存器和 412 返回码的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3048) 编辑模板里的字段值中变量引用的问题
* [扩充](https://github.com/Jermolene/TiddlyWiki5/pull/3219) <<.field list-after>> 字段的行为，如果 <<.field list-after>> 字段存在但其值为空，则条目置于清单的末尾 

## 开发者错误修复和改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/1dc764764055243acd07d0c4f480e6e912be6870) **plugin-priority** 字段到内核插件
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3113) 插件排序的问题
* 有几个优化条目的存放：
    * [避免缓慢的 Object.keys 调用](https://github.com/Jermolene/TiddlyWiki5/commit/254e1ca7f7a5fe9d2deef72692ada2b7637f34ce) - 在一些操作上节省 50%
    * [优化标签筛选器](https://github.com/Jermolene/TiddlyWiki5/commit/e4b10d42f9480c0505862a93f0b97d1c4270ed65) - 在一些标签操作上节省 50%
    * [条目删除的小改进](https://github.com/Jermolene/TiddlyWiki5/commit/358d4165260311446f2b433591762dd667250975)
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/2990) 支持自定义引导路径
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3206) 新的导航挂钩：`th-cancelling-tiddler`、`th-new-tiddler` 和 `th-renaming-tiddler`
* [添加](https://github.com/Jermolene/TiddlyWiki5/pull/3024) HTTP 服务器启动时的新挂钩 `th-server-command-post-start`

# 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@alexhough](https://github.com/alexhough)
* [@anavarre](https://github.com/anavarre)
* [@BramChen](https://github.com/BramChen)
* [@BurningTreeC](https://github.com/BurningTreeC)
* [@flibbles](https://github.com/flibbles)
* [@diego898](https://github.com/diego898)
* [@furicle](https://github.com/furicle)
* [@gernert](https://github.com/gernert)
* [@ibnishak](https://github.com/ibnishak)
* [@inmysocks](https://github.com/inmysocks)
* [@Marxsal](https://github.com/Marxsal)
* [@metebalci](https://github.com/metebalci)
* [@mklauber](https://github.com/mklauber)
* [@pmario](https://github.com/pmario)
* [@Skeeve](https://github.com/Skeeve)
* [@TheDiveO](https://github.com/TheDiveO)
* [@tobibeer](https://github.com/tobibeer)
* [@twMat](https://github.com/twMat)
* [@xcazin](https://github.com/xcazin)
 