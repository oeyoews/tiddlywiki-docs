---
title: '设置条目信息页签的缺省页签'
---

组态条目 [$:/config/TiddlerInfo/Default](#%24%3A/config/TiddlerInfo/Default) 包含条目名称为缺省的条目信息页签。

缺省为 `$:/core/ui/TiddlerInfo/Tools` 对应到 **工具** 页签。其他可能的值为：

<ul>
<$list filter="[all[shadows+tiddlers]tag[$:/tags/TiddlerInfo]!has[draft.of]]">
<li>
<$view field="title"/>
</li>
</$list>
</ul>
