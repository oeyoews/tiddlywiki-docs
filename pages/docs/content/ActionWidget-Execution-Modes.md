---
title: 'ActionWidget 运行模式'
---

<<.from-version "5.2.0">> 动作小工具的默认行为有一些特性，经常引起混淆。现在有一种改进的模式，可以简化工作方式，但是由于向后兼容性的限制，必须明确式地使用才能利用它。

这些特性与之前的动作小工具的结果，可用于后续动作小工具的方式有关。默认情况下，在每次运行之前都会刷新动作小工具，从而确保其反映了之前动作的结果。但是，普通小工具不会以相同的方式更新。

在以下编辑示例中，一个按钮会触发一系列动作，应导致字符串 `foo` 指定给 ActionTivdler 条目的 **text** 字段。然而，其未能生成预期结果，因为在运行第一个 `<$action-setfield>` 小工具后，未以 ActionTestTiddler 的新值刷新 `<$set>` 小工具。

<$macrocall $name='wikitext-example-without-html'
src='\define actions()
<$action-setfield $tiddler="ActionTestTiddler" $field="text" $value="FOO"/>
<$set name="newvalue" value={{{ [{ActionTestTiddler}lowercase[]] }}}>
<$action-setfield $tiddler="ActionTestTiddler" $field="text" $value=<<newvalue>>/>
</$set>
\end

ActionTestTiddler 的当前值：{{ActionTestTiddler}}

<$button actions=<<actions>>>
按一下
</$button>'/>

新的行为通过在运行之前刷新所有小工具，而不仅仅是动作小工具，来避免这些问题。它通过包含变量 `tv-action-refresh-policy` 的范围内，运行动作来参与，其值设置为 `always`。

分派可以在动作字符串中完成，或者通过包含触发动作的小工具，声明的局部变量。

<<.warning "不要试图全域设置 `tv-action-refresh-policy`；内核只能使用默认值正常工作">>

上面的示例与 `tv-action-refresh-policy` 的附加如预期运作：

<$macrocall $name='wikitext-example-without-html'
src='\define tv-action-refresh-policy() always

\define actions()
<$action-setfield $tiddler="ActionTestTiddler" $field="text" $value="FOO"/>
<$set name="newvalue" value={{{ [{ActionTestTiddler}lowercase[]] }}}>
<$action-setfield $tiddler="ActionTestTiddler" $field="text" $value=<<newvalue>>/>
</$set>
\end

ActionTestTiddler 的当前值：{{ActionTestTiddler}}

<$button actions=<<actions>>>
按一下
</$button>'/>
