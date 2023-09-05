---
title: '插件信息条目'
---

# 插件的信息条目

鼓励插件作者提供特定的信息和文档条目，让 TiddlyWiki 可以包含为[控制台]($:/ControlPanel)里的插件信息页签。

插件应该提供一个图标，包含于一名称格式为 `<plugin-name>/icon` 的条目 (例如，$:/core/icon ）。

插件公开个别信息页签的名称，是为他们期望在插件条目的 'list' 字段中显示的名称。依规范应提供的以下部分或全部：

* **readme**: 关于插件的基本信息
* **license**: 插件的版权声明

相关的信息条目名称必须为以下格式：

1. `$:/<plugin-name>/<current-language>/<tab-name>` (for example, **$:/core/en-GB/readme**)
1. `$:/<plugin-name>/<tab-name>` (for example, **$:/core/readme**)

因此，插件可以提供每个信息条目的特定语言版本。

请注意信息条目不应该参考在插件内的其他条目。这是因为包含布景主题或语言的插件，是依选择动态切换，所以他们的信息条目可能不可供查看。控制台使用 TranscludeWidget 的 'subtiddler' 属性来访问这些条目，而不依赖于插件切换机制。
