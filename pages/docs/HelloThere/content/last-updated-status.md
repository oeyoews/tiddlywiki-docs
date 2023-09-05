---
title: 最近更新状态
---

<ul>
  <$list filter="[!is[system]days[-180]!<currentTiddler>!sort[modified]]">
    <li>
		<$link><$view field="title"/></$link>
        <$list filter="[<currentTiddler>days[-14]]"> @@color:red;<sup>新</sup>@@</$list>
        <$list filter="[<currentTiddler>days[-90]!days[-14]]"> @@color:black;<sup>近期</sup>@@</$list>
    </li>
  </$list>
</ul>