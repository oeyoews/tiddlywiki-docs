---
title: 写插件配置页面
---

你可能会希望插件有一些让用户修改设置的地方。

## 添加配置页

加一个带 `$:/tags/ControlPanel/SettingsTab` 标签的条目，并用 `caption` 字段作为给用户显示的真正标题，例如：

```
title: $:/plugins/linonetwo/intention-tower-knowledge-graph/ControlPanel/Settings
caption: ITKG
tags: $:/tags/ControlPanel/SettingsTab
```

内容就随便放了，可以像 [库克马](库克马(穆罕默德•拉赫马尼)) 的 [Shiraz宏包](#Shiraz%E5%AE%8F%E5%8C%85) 插件一样，用这种形式：

```
These settings let you customise the behaviour of Shiraz plugin.

---

;Show Shiraz setting in more sidebar
:<$checkbox tiddler="$:/plugins/kookma/shiraz/ui/ControlPanel/Settings" tag="$:/tags/MoreSideBar"> Show setting in more sidebar</$checkbox>

;Options
:<$checkbox tiddler="$:/plugins/kookma/shiraz/styles/multicols/storyriver" tag="$:/tags/Stylesheet"> Multicolumn story river</$checkbox>
:<$checkbox tiddler="$:/plugins/kookma/shiraz/styles/ui/colorify-buttons" tag="$:/tags/Stylesheet"> Colorful UI buttons</$checkbox>
:<$checkbox tiddler="$:/plugins/kookma/shiraz/styles/ui/view-toolbar-button-visibility" tag="$:/tags/Stylesheet"> Hide tiddler's view toolbar and show on mouse hover</$checkbox>
:<$checkbox tiddler="$:/plugins/kookma/shiraz/styles/ui/edit-toolbar-buttons" tag="$:/tags/Stylesheet"> Traffic lights for edit toolbar buttons</$checkbox>
:<$checkbox tiddler="$:/plugins/kookma/shiraz/styles/colorful-sidebar-tab" tag="$:/tags/Stylesheet"> Colorify sidebar tabs</$checkbox>

;Set dark and light palettes
{{$:/plugins/kookma/shiraz/ui/set-dark-light-palette}}
```

其中

```
;Options
:<$checkbox tiddler="$:/plugins/kookma/shiraz/styles/multicols/storyriver" tag="$:/tags/Stylesheet"> Multicolumn story river</$checkbox>
```

将渲染为类似这样的效果：

**Options**
:<$checkbox tiddler="$:/state/multicols/storyriver"> Multicolumn story river</$checkbox>

然后你可以在你的插件里使用 `{{ $:/plugins/kookma/shiraz/styles/multicols/storyriver }}` 或者 `filter=[{$:/plugins/kookma/shiraz/styles/multicols/storyriver}]` 等方式来取配置的值。

或使用 JS 形式来获取值：`$tw.wiki.getTiddlerText(ENABLE_EXTERNAL_ATTACHMENTS_TITLE, '') === 'yes'`

配置页面里可以使用任何太微的微件来提供多种多样的配置框，不要仅限于打勾选框。

ControlPanel是控制台的意思，控制其实是由多个tabs微件把多个控制内容聚合起来的。上面说明的是一般插件的设置，如果是主题插件设置，对应的标签则是不一样的。勾选框是最常用的，但最好同时设置一个状态条目，以state开头或者config，里面的值是yes或no，然后控制某一条目的状态。具体实现方式类似[使用List微件让内容可以切换中英文](#%E4%BD%BF%E7%94%A8List%E5%BE%AE%E4%BB%B6%E8%AE%A9%E5%86%85%E5%AE%B9%E5%8F%AF%E4%BB%A5%E5%88%87%E6%8D%A2%E4%B8%AD%E8%8B%B1%E6%96%87)，也可参考[给插件配置提供预置值](#%E7%BB%99%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE%E6%8F%90%E4%BE%9B%E9%A2%84%E7%BD%AE%E5%80%BC)。