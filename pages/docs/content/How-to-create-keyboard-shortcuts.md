---
title: '如何创建快捷键'
---

<<.tip """TiddlyWiki 区分快捷键的两种类型。那些被限制运作于 <$macrocall $name=".tag" _="input"/> 字段或 <$macrocall $name=".tag" _="textareas"/> 的快捷键，是由全域运作的 <$macrocall $name=".wlink" to="KeyboardWidget"/> 和快捷键处理 - 这意味着，页面需要有焦点，才能访问之。后者由加载维基时，开始工作的机制处理""">>

## 两种快捷键的配置机制相同：

<$vars tv-show-missing-links="no">

一个<<.def 首码>>为 `$:/config/ShortcutInfo/` 和一个''唯一的尾码''的条目，像是 `my-shortcut`，使新的快捷键显示在[控制台]($:/ControlPanel)的[快捷键选项卡]($:/core/ui/ControlPanel/KeyboardShortcuts)中。可在其<<.field text>> 字段中添加可选说明。

在[快捷键选项卡]($:/core/ui/ControlPanel/KeyboardShortcuts)中，可以配置触发快捷键的''组合键''

> 找到新快捷键的''唯一尾码''，然后点击 <$button class="tc-btn-invisible"><<.icon $:/core/images/edit-button>><$action-sendmessage $message="tm-notify" $param="$:/core/images/edit-button"/></$button> 按钮，打开一个快显窗口可侦测''组合键''，并在其输入字段中显示侦测到的组合

> **添加快捷键**将组合键指定给该快捷键

### 根据选定的平台，配置机制会创建一个具有特定术语的条目

> $:/config/shortcuts/ + 快捷键的''唯一的尾码''，可运作于所有平台 (操作系统) 

> $:/config/shortcuts-(mac/not-mac/windows/not-windows/linux/not-linux)/ + 快捷键的''唯一尾码''，只运作于所选平台，或不能运作于排除的平台

### 示例

* $:/config/shortcuts/`my-shortcut`
* $:/config/shortcuts-mac/`my-shortcut`
* $:/config/shortcuts-windows/`my-shortcut`
* $:/config/shortcuts-linux/`my-shortcut`
* $:/config/shortcuts-not-mac/`my-shortcut`
* $:/config/shortcuts-not-windows/`my-shortcut`
* $:/config/shortcuts-not-linux/`my-shortcut`

<<.tip """请注意，如果先创建上述的 **ShortcutInfo** 条目，并在控制台中配置快捷键，则无须手动创建那些特定平台的条目""">>

<br>

## 此时快捷键已定义，但不会触发任何操作

## 使用[Keyboard 小工具](KeyboardWidget)

> 一个 <<.wlink "KeyboardWidget">> 小工具在其范围内，于一个 <<.tag input>> 或 <<.tag textarea>> 字段侦测到按下组合键，该 <<.wlink "KeyboardWidget">> 小工具需要''环绕''该 <<.tag input>> 或 <<.tag textarea>> 字段，且其 <<.attr key>> 属性指向配置条目使用[按键描述](Key Descriptor)语法或明确包含该按键

```
<$keyboard key="((my-shortcut))" actions='<$action-setfield $tiddler="my-tiddler" $field="my-field" $value="my-value"/>'>

<$edit-text tag="input" tiddler="my-tiddler"/>

</$keyboard>
```

```
<$keyboard key="alt-shift-M" actions='<$action-setfield $tiddler="my-tiddler" $field="my-field" $value="my-value"/>'>

<$edit-text tag="input" tiddler="my-tiddler"/>

</$keyboard>
```

> 如果定义了操作，<<.wlink KeyboardWidget>> 小工具，在其范围内的任何 <<.tag input>> 或 <<.tag textarea>> 字段，侦测到按下其 <<.attr key>> 属性中定义的组合键时，调用其 <<.attr actions>> 属性中定义的操作。

<br>

## 使用全域快捷键

> 有关创建新的全域快捷键的详细信息，请参阅[快捷键条目](Keyboard Shortcut Tiddler)。

> **全域**快捷键的操作是存放于标签为 <<tag $:/tags/KeyboardShortcut>> 的条目的 <<.field text>> 字段

>  <<.field key>> 字段通过 `((my-shortcut))` 语法 (称为[快捷键描述](Keyboard Shortcut Descriptor))，连接一个操作条目与相应的快捷键

### 语法：`((` + **一个选定的尾码** + `))`

> 若条目具有 <<tag $:/tags/KeyboardShortcut>> 标签，<<.field key>> 字段以[快捷键描述](Keyboard Shortcut Descriptor)为其值，且 <<.field text>> 字段中的一些操作，当机制侦测到配置的组合键时，将触发该操作

<br>
<$macrocall $name=".tip" _="""当全域键盘快速键触发时，已于快捷键条目 (通过一个标签为 <<tag-pill $:/tags/Global>> 的条目) 之外定义的''宏''，需要使用 [import 编译指示](Pragma)''导入''后才能访问。"""/>

```
\import [subfilter{$:/core/config/GlobalImportFilter}]
```

如果已知包含宏定义的条目 - 例如 - 标题为 `my-macro-tiddler`

```
\import [[my-macro-tiddler]]
```

<br>
<$macrocall $name=".tip" _="""某些操作需要一个 <<.wlink NavigatorWidget>> 小工具于操作条目的顶部。这对于以下小工具和消息清单，为了''使用全域快捷键''是必要的。请参阅下列清单"""/>

### 小工具

<<.wlink ActionNavigateWidget>>

### 小工具消息

<<list-links "[tag[navigator-message]]">>

</$vars>