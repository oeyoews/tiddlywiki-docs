---
title: '插件类型'
---

插件有一个 `plugin-type` 字段，用于决定如何处理它。以下的值由内核定义：

* `plugin` - 一般插件
* `theme` - 布景主题插件 (见[布景主题机制](ThemeMechanism))。只有条目 $:/theme 中的布景主题插件，于任一时间被激活（以及任何从属布景主题插件）
* `language` - 语言插件 (见[翻译机制](TranslationMechanism))。只有条目 $:/language 中的语言插件，于任一时间被激活（以及任何从属语言的插件）

以下插件类型由内核内部使用：

* `import` - 用于导入进行中创建的特殊 $:/Import 插件
* `info` - 用于由[信息机制](InfoMechanism)创建的特殊 $:/temp/info-plugin 条目

当插件程序库不支持时，也可以使用自定义的插件类型，使用自定义用户界面构建类似插件的行为。具有自定义类型的插件，将自动接收与一般插件相同的行为，但可以使用适当的[查看模板段](SystemTag: $:/tags/ViewTemplate)，显示自定义用户界面。

默认情况下，具有自定义插件类型的插件中的条目，不会注册为影子条目（组成条目仍可以由[嵌入小工具](TranscludeWidget)、[查看小工具](ViewWidget)或[插件条目操作符](plugintiddlers Operator) 寻址子条目）。将配置条目 `$:/config/RegisterPluginType/<plugin-type>` 设为 `yes`，将使插件中的条目被注册为影子条目。
