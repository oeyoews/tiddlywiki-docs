---
title: '如何创建动态的编辑器工具栏按钮'
---

\define disabledFilterExample()`[$(tempBoldDisabled)$]get[state-disabled]else[no](#%24%28tempBoldDisabled%29%24%5Dget%5Bstate-disabled%5Delse%5Bno)`

\define remove-shortcuts()
<$action-deletetiddler $tiddler=<<shortcutInfo>>/>
<$action-deletetiddler $tiddler=<<shortcutConfigMac>>/>
<$action-deletetiddler $tiddler=<<shortcutConfigNotMac>>/>
<$action-deletetiddler $tiddler=<<tempBold>>/>
<$action-deletetiddler $tiddler=<<tempBoldDisabled>>/>
\end

\define create-shortcut-tiddlers()
<$action-createtiddler $basetitle=<<shortcutInfo>> 
  $template="$:/config/ShortcutInfo/bold" 
  $overwrite="yes"
/>
<$action-navigate $to=<<shortcutInfo>>/>

<$action-createtiddler $basetitle=<<shortcutConfigMac>> 
  $template="$:/config/shortcuts-mac/bold" 
  $overwrite="yes"
  text="meta-shift-X"
/>
<$action-navigate $to=<<shortcutConfigMac>>/>

<$action-createtiddler $basetitle=<<shortcutConfigNotMac>> 
  $template="$:/config/shortcuts-not-mac/bold" 
  $overwrite="yes"
  text="ctrl-shift-X"
/>
<$action-navigate $to=<<shortcutConfigNotMac>>/>

\end

\define clone-bold()
<$action-createtiddler $basetitle=<<tempBold>> 
  $template="$:/core/ui/EditorToolbar/bold" 
  $overwrite="yes"
  icon="$:/core/images/spiral"
  shortcuts="((temp-bold))"
  condition-disabled="[$(tempBoldDisabled)$]get[state-disabled]else[no](#%24%28tempBoldDisabled%29%24%5Dget%5Bstate-disabled%5Delse%5Bno)"
/>
<$action-sendmessage $message="tm-edit-tiddler" $param=<<tempBold>>/>
\end

\define clone-button-bold()
<$button actions=<<clone-bold>> >创建临时的粗体按钮</$button>
\end

\define toggle-bold()
<$action-listops  $tiddler=<<tempBoldDisabled>> $field="state-disabled" $subfilter="+[toggle[yes],[no]]" />
\end

<!-- $vars is needed don't remove it! -->
<$vars tempBold="$:/temp/bold" tempBoldDisabled="$:/temp/bold/disabled" shortcutInfo="$:/config/ShortcutInfo/temp-bold"  shortcutConfigMac="$:/config/shortcuts-mac/temp-bold" shortcutConfigNotMac="$:/config/shortcuts-not-mac/temp-bold">

## 创建一个新的工具栏按钮

创建新的编辑器工具栏按钮的最简单方法是克隆并打开一个。

><<clone-button-bold>> 

此条目包含对工具栏按钮非常重要的所有必要元素。

> 
> **text**
> : 我们不讨论这个 howto 的文本字段的详细信息
> 
> **caption**
> : 标题字段用于显示在[控制台]($:/ControlPanel)的快捷键选项卡中的快捷键名称
> **condition**
> : 定义按钮可见性状态的筛选器
> 
> **condition-disabled  <<.from-version "5.1.23">>**
> : 一个''筛选器''，使我们能够定义按钮的 "disabled" 属性。例如：<<disabledFilterExample>>
> :  如果不存在 "状态条目" 或 "状态字段"，则此条件''必须''返回 "no"！因此，筛选器中必须有一个 `else[no]` 元素。
> 
> **description**
> : 用作按钮提示
> 
> **icon **
> : 分配按钮图标。这里我们使用 `$:/core/images/spiral` {{$:/core/images/spiral}} 。可以在[图标图库](Icon Gallery)中找到更多按钮图标。
> 
> **shortcuts**
> : 这是[快捷键描述](Keyboard Shortcut Descriptor)，例如：`((temp-bold))`
> 

## 禁用状态

您可以使用任何 "状态条目" 来定义按钮禁用状态。重要的是， **condition-disabled** 字段是一个''筛选器''。例如，我们使用条目的`state-disabled` 字段：<<tempBoldDisabled>>

测试筛选器的最简单方法是使用[高级搜索]($:/AdvancedSearch)：筛选选项卡

>临时的 "粗体按钮" 已禁用：''"{{{ [<tempBoldDisabled>get[state-disabled]else[no]] }}}"'' ... 如果编辑任何条目，您可以在编辑器工具栏中看到按钮！

> <$button actions=<<toggle-bold>>>切换临时的粗体按钮可见性</$button>

## 为新按钮创建快捷键

对于我们的 ~HowTo，我们使用 **快捷键描述**: `((temp-bold))`

要创建有效的快捷键配置，我们需要 2 个条目： 

>[$:/config/ShortcutInfo/]($:/config/ShortcutInfo/temp-bold)''temp-bold'' .. 和
>[$:/config/shortcuts/]($:/config/shortcuts/temp-bold)''temp-bold''

> <$button actions=<<create-shortcut-tiddlers>>>创建快捷键条目</$button>

## 

## 清理配置条目

如果您不再需要配置条目，您可以 

><$button actions=<<remove-shortcuts>>>删除快捷键配置</$button>


</$vars><!-- needed don't remove! -->
