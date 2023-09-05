---
title: '插件相依性'
---

插件之间最简单的依赖形式是，一个插件可以通过在 `parent-plugin` [字段](Plugin Fields)中指定插件名称，来声明本身是另一个插件的子插件。子插件显示在控制台插件选择器中的其父插件的可展开区中。例如，官方插件程序库包括 [CodeMirror 插件](CodeMirror Plugin)及其十几个子插件，这些子插件使用可选功能，扩充 CodeMirror 插件。请注意，子插件本身不能有进一步的子插件式。

插件也可以用其 `dependents` [字段](Plugin Fields)列出还应安装任何其他插件的名称。请注意，列表不递归解析：依赖插件的依赖插件将不会被安装。

当从插件程序库中安装一个插件，`parent-plugin` 和 `dependents` 两字段用于决定将被安装的任何额外的插件。

请注意，`dependents` 字段，也由[布景主题机制](ThemeMechanism)和[语言机制](LanguageMechanism)用于切换相关主题/语言插件。
