---
title: '快捷键描述'
---

**快捷键描述**由[KeyboardWidget](#KeyboardWidget)和具有标签 <<tag-pill $:/tags/KeyboardShortcut>>的条目内，用于链接动作与键盘组合

一个''快捷键描述''具有以下格式：

```
	ctrl+enter
	ctrl+shift+alt+A
	alt-shift-T
	alt-Space
```

可以有多个组合键：

```
ctrl+enter alt+shift+A ctrl+alt+9 alt-Space ctrl-Backspace
```

快捷键描述有''两种方式''可用：

* 直接
    * 传递属性 `key="ctrl-enter"` 到 KeyboardWidget
    * 设置 `ctrl-enter` 为具有标签 <<tag-pill $:/tags/KeyboardShortcut>> 的条目的 `key` **字段**''值''
* 一个''参考''至配置条目
    * 一个快捷键''配置条目''，遵循一些命名规则：
        * 条目名称以 `$:/config/`开头
        * 然后是字符串''''或''平台描述''之一：
            * <<.tid shortcuts-linux>>
            * <<.tid shortcuts-not-linux>>
            * <<.tid shortcuts-mac>>
            * <<.tid shortcuts-not-mac>>
            * <<.tid shortcuts-windows>>
            * <<.tid shortcuts-not-windows>>
        * 条目名称以 `/` 结尾，其后为一个尾码，可以自由选择
            * 此尾码是''快捷键描述'' (A) 的''识别码'' 
    * 该''参考''至配置条目，是由 `((` + **识别码** (A) + `))` 组成
        * 示例：`((my-shortcut))` 为该''参考''至配置条目
            * <<.tid $:/config/shortcuts/my-shortcut>>
            * <<.tid $:/config/shortcuts-linux/my-shortcut>>
            * <<.tid $:/config/shortcuts-not-linux/my-shortcut>>
            * <<.tid $:/config/shortcuts-mac/my-shortcut>>
            * <<.tid $:/config/shortcuts-not-mac/my-shortcut>>
            * <<.tid $:/config/shortcuts-windows/my-shortcut>>
            * <<.tid $:/config/shortcuts-not-windows/my-shortcut>>
    * 最后，参考的配置条目将快捷键描述存放在其 **text** 字段中