---
title: 'action'
---

动作小工具是一种特殊类型的动作小工具，其没有视觉外观，但在触发时运行动作（例如发送消息、导航到一个条目，或者更改一个条目的值）。动作小工具与[触发那些动作](TriggeringWidgets)的其他小工具（例如，ButtonWidget）一起使用。

提供以下的动作小工具：

<<list-links "[tag[ActionWidgets]]">>

有两种方法可以使用动作小工具：

* 将其放在触发小工具上（这是首选方式）的动作字符串属性中（通常被称为 `actions`）
* 嵌入触发小工具中的动作（一种现在已弃用的旧技术）

## 使用动作字符串属性

动作小工具被用作[触发小工具](TriggeringWidgets)的 `actions` 属性的字符串。通常，使用宏将动作小工具指定给变量更方便。例如，这是一个按钮，触发两个发送不同消息的动作：

```
\define my-actions()
<$action-sendmessage $message="tm-home"/>
<$action-sendmessage $message="tm-full-screen"/>
\end

<$button actions=<<my-actions>>>
Click me!
</$button>
```

## 直接嵌入动作小工具

动作小工具不须是直属于其父层的[触发小工具](TriggeringWidgets)，但它们必须是其子层。动作是依序运行的。以下是上面的例子重写为使用嵌入：

```
<$button>
<$action-sendmessage $message="tm-home"/>
<$action-sendmessage $message="tm-full-screen"/>
Click me!
</$button>
```

# 动作运行模式
{{ActionWidget Execution Modes}}