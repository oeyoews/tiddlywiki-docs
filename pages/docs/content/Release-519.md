---
title: '5.1.9'
---

\define custom-colour-picker(tiddler,colour)
<$edit-text tiddler="""$tiddler$""" index="""$colour$""" type="color" tag="input"/>
\end

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.8...v5.1.9)//

# 主要改进

## 新的 "Powered by ~TiddlyWiki" 插件

一个实验性的插件添加一个简单的 <a href="https://tiddlywiki.com" target="_blank">[img width="160px" [$:/plugins/tiddlywiki/powered-by-tiddlywiki/powered-by-tiddlywiki.svg]]</a> 横幅到您的网站。

## 新的 "Fluid story, fixed sidebar" 模式

现在可编排主窗口布局，以便侧栏为固定的宽度，且故事河展开以填充剩余的空间。

欲启用该功能，请至[控制台]($:/ControlPanel)的''视觉外观''的''Theme Tweeks''页签，然后使用以下选项：

* Sidebar layout：
    * **Fixed story, fluid sidebar** (缺省) - 故事河为固定的宽度，且侧边栏填充剩余的空间。
    * **Fluid story, fixed sidebar** - 侧栏为固定的宽度，且故事河展开以填充剩余的空间。
* Sidebar width：
    * 侧边栏的宽度可指定以像素为单位（例如 **350px**）、百分比（例如 **25%**） 或其他 [CSS 单位](https://developer.mozilla.org/en/docs/Web/CSS/length)。

## 工具列按钮样式的设置

在[控制台]($:/ControlPanel)的''设置''页签中的新设置，可从以下选项中选择工具列按钮样式：

* <$button set="$:/config/Toolbar/ButtonClass" setTo="tc-btn-invisible">borderless</$button> 现有的样式
* <$button set="$:/config/Toolbar/ButtonClass" setTo="tc-btn-boxed">boxed</$button> 于按钮周围增加细边框
* <$button set="$:/config/Toolbar/ButtonClass" setTo="tc-btn-rounded">rounded</$button> 圆形按钮且反转其颜色

插件可以增加新的样式选项。

## 新的条目工具列按钮："开启于新窗口"

实验性的新的条目工具列按钮，在单独的弹出浏览器窗口中开启单一条目。主窗口里的该条目一样会动态更新。有一些用途：

* 在主窗口中编辑时，便于安排访问参考条目
* 好好地利用多屏幕布局
* 打印单一条目的内容
* 运行演示於单独的窗口中，同时笔记保持在主窗口

## 为视障者的改善

* 改进单色调色板：
    * <$button>
<$action-setfield $tiddler="$:/theme" text="$:/themes/tiddlywiki/vanilla"/>
<$action-setfield $tiddler="$:/palette" text="$:/palettes/ContrastDark"/>
黑色的调色板
</$button> - 前景颜色：<<custom-colour-picker "$:/palettes/ContrastDark" "foreground">>，背景颜色：<<custom-colour-picker "$:/palettes/ContrastDark" "background">>
    * <$button>
<$action-setfield $tiddler="$:/theme" text="$:/themes/tiddlywiki/vanilla"/>
<$action-setfield $tiddler="$:/palette" text="$:/palettes/ContrastLight"/>
明亮的调色板
</$button> - 前景颜色：<<custom-colour-picker "$:/palettes/ContrastLight" "foreground">>，背景颜色：<<custom-colour-picker "$:/palettes/ContrastLight" "background">>
    * <$button>
<$action-setfield $tiddler="$:/theme" text="$:/themes/tiddlywiki/snowwhite"/>
<$action-setfield $tiddler="$:/palette" text="$:/palettes/Vanilla"/>
还原
</$button>

## 新的 "Solar Flare" 调色板

还有一个新的核心调色板 "Solar Flare"，由 Rustem Akbulatov（@nameanyone）提供。

<$button>
<$action-setfield $tiddler="$:/theme" text="$:/themes/tiddlywiki/snowwhite"/>
<$action-setfield $tiddler="$:/palette" text="$:/palettes/SolarFlare"/>
试试看
</$button> <$button>
<$action-setfield $tiddler="$:/theme" text="$:/themes/tiddlywiki/snowwhite"/>
<$action-setfield $tiddler="$:/palette" text="$:/palettes/Vanilla"/>
还原
</$button>

## 故事控制选项

新的选项用于控制在故事河中，新开启条目的位置。请至[控制台]($:/ControlPanel)的''设置''页签，并找到"条目开启行为"。

## 新的隐藏设置

两个新的高端配置的[隐藏设置](Hidden Settings):

* [Hidden Setting: Search AutoFocus](#Hidden%20Setting%3A%20Search%20AutoFocus)
* [Hidden Setting: Typing Refresh Delay](#Hidden%20Setting%3A%20Typing%20Refresh%20Delay)

## 新的 Vars 小工具

[添加](https://github.com/Jermolene/TiddlyWiki5/pull/1678) VarsWidget，可在一个操作中设置多个变量：

```
<$vars greeting="Hi" me={{!!title}} sentence=<<helloworld>>>
  <<greeting>>! I am <<me>> and I say: <<sentence>>
</$vars>
```

# 其他改进

## 翻译改进

* 对荷兰语、华语、意大利文和德语的翻译的更新。
* 添加 Catalan  (西班牙) 翻译

## 可用性改进

* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/789069bb6b9ca1bd9da75e035b18728e83eb232c) 设置调色板的页面控制项图标：<$set name="tv-config-toolbar-class" value="btn">
<$set name="tv-config-toolbar-icons" value="yes">
<$set name="tv-config-toolbar-text" value="yes">
{{$:/core/ui/Buttons/palette}}
</$set>
</$set>
</$set>
* 添加图标 <span style="fill:#aaa;">
"调色板" <span title="$:/core/images/palette">{{$:/core/images/palette}}</span>
与 "开启于新窗口" <span title="$:/core/images/open-window">{{$:/core/images/open-window}}</span>
</span>
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/648f670bcbba088780bc76f0c33cbe378d283bbd) 布景主题图标，使更加匹配新的调色板图标：<span style="fill:#aaa;">
<span title="$:/core/images/theme-button">{{$:/core/images/theme-button}}</span>
<span title="$:/core/images/plugin-generic-theme">{{$:/core/images/plugin-generic-theme}}</span>
</span>
* [避免](https://github.com/Jermolene/TiddlyWiki5/commit/7b4153f87f8b4793fa055ec287a659ece3150d99)插件程序库中的搜索框的自动聚焦故障
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/9f92c086c31a528a2ffb6bc9fed53d4cc016480f) TiddlyDesktop 的相关信息至[版本信息](Releases)
* [停止](https://github.com/Jermolene/TiddlyWiki5/commit/4a3a5bf1f06c4efb8449c860e90c214f707954f6) 取消编辑后的自动保存
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/) 允许现有字段名称可被选择的下拉式清单至编辑范本

## 可编程性改进

* [更新](https://github.com/Jermolene/TiddlyWiki5/commit/5f3587c38c2968ff63780552ef50b52d87ada3ca) 之前与 TiddlyWiki 5.1.8 一起发布的 0.2.0 版至 ~KaTeX 0.4.3 版：
    * 添加支持一些 `\begin`/`\end` 环境，包括支持 `array`、`matrix`、`pmatrix`、`bmatrix`、`vmatrix` 和 `Vmatrix`
    * 添加支持可选的 `\sqrt` 参数，例如 `\sqrt[3]{x}`
    * 添加支持 `\phantom`
    * 添加 `\#`, `\&`
    * 完整的详细信息请参阅 [KaTeX GitHub 网页](https://github.com/Khan/KaTeX/releases)
* [扩充](https://github.com/Jermolene/TiddlyWiki5/commit/9b4b9d4d8878b8646112de7b5a7b282f50a4d1cb) ActionSendMessageWidget 通过新的 `$name` 和 `$value` 属性，更灵活传递具名参数
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/6942efa6289c9f1d99ea9f63972aa314ac06a8b1) `<kbd>` 元素的样式如 <kbd>Esc</kbd> 与 <kbd>Enter</kbd>
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/637aaca2fc3563cc695ab5603fc0cde222a770da) 微妙的新页面背景 "pin stripe" 版型 - <$button>
<$action-setfield $tiddler="$:/themes/tiddlywiki/vanilla/settings/backgroundimage" text="Pinstripe.gif"/>
<$action-setfield $tiddler="$:/themes/tiddlywiki/vanilla/settings/backgroundimageattachment" text="fixed"/>
<$action-setfield $tiddler="$:/themes/tiddlywiki/vanilla/settings/backgroundimagesize" text="auto"/>
试试看
</$button>
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/139496209f92d229feadf5c2883edec9090c0a0a) 支持自订元素至 ButtonWidget。
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/d8366cc45f25d16c9085e05ee18965e626e218ff) [CodeMirror 插件](CodeMirror Plugin)，于条目类型更改时自动刷新
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/0d5033e2a00e34a7665c2cff58c0d15da224dd2b) 于 $:/ControlPanel 新的设置，显示条目名称链接以便拖放
* [简化](https://github.com/Jermolene/TiddlyWiki5/commit/f42842f80104e8e892545c758ea0b997cacbdd31) 检测预览皮肤用 [tv-tiddler-preview Variable](#tv-tiddler-preview%20Variable)
* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/50c6ce8b73aef692920d7a03b1c9c46c35f972d6) 自动链接系统条目名称，通过限制其为字母和字符 `/.-`

## 修正错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/5a6249894d5e79ee4e472c72be8956ce59558797) 字段名称中的特殊字符的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/230f40c3bd71177eb7b1f7e8252a5164e99a12c5) 在行动设备上的静态横幅版面配置
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/df84e932833b3643ce600499ddd5fef497bec908) 可卷动小工具内的快显窗口，通过增加 `position: relative;` 到示例可卷动小工具样式

## Node.js 更改

_这些更动只与在 Node.js 下使用 TiddlyWiki 的人有关_

* 

# 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@BramChen](https://github.com/BramChen)
* [@buggyj](https://github.com/buggyj)
* [@cehmke](https://github.com/cehmke)
* [@danielo515](https://github.com/danielo515)
* [@Drakor](https://github.com/Drakor)
* [@ericshulman](https://github.com/ericshulman)
* [@felixhayashi](https://github.com/felixhayashi)
* [@gernert](https://github.com/gernert)
* [@heroboy](https://github.com/heroboy)
* [@idoine](https://github.com/idoine)
* [@infurnoape](https://github.com/infurnoape)
* [@inmysocks](https://github.com/inmysocks)
* [@kixam](https://github.com/kixam)
* [@lolole13](https://github.com/lolole13)
* [@marcor](https://github.com/marcor)
* [@Marxsal](https://github.com/Marxsal)
* [@nameanyone](https://github.com/nameanyone)
* [@pmario](https://github.com/pmario)
* [@r1chard5mith](https://github.com/r1chard5mith)
* [@roma0104](https://github.com/roma0104)
* [@silvyn](https://github.com/silvyn)
* [@slovuj](https://github.com/slovuj)
* [@StevenMcD](https://github.com/StevenMcD)
* [@sukima](https://github.com/sukima)
* [@vouko](https://github.com/vouko)
* [@welford](https://github.com/welford)
* [@xcazin](https://github.com/xcazin)
