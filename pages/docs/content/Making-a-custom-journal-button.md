---
title: '制作自订日志按钮'
---

若要获得您自己的''//自订//''日志按钮，从复制[添加日志]($:/core/ui/Buttons/new-journal)按钮开始。

然后创建您自己的配置条目，例如︰ 

* ``$:/config/myNewTiddler/Title``
* ``$:/config/myNewTiddler/Tags``
* ``$:/config/myNewTiddler/Text``


编辑您的自订按钮，并"搜索和替换"配置条目的名称。

更改近条目尾端处之以下两行

```
<$set name="journalTitleTemplate" value={{$:/config/NewJournal/Title}}>
<$set name="journalTags" value={{$:/config/NewJournal/Tags}}>
<$set name="journalText" value={{$:/config/NewJournal/Text}}>
```

为

```
<$set name="journalTitleTemplate" value={{$:/config/myNewTiddler/Title}}>
<$set name="journalTags" value={{$:/config/myNewTiddler/Tags}}>
<$set name="journalText" value={{$:/config/myNewTiddler/Text}}>
```

如果想在侧边栏看到您的配置条目，则改为︰

```
<$set name="journalTitleTemplate" value={{config/myNewTiddler/Title}}>
<$set name="journalTags" value={{config/myNewTiddler/Tags}}>
<$set name="journalText" value={{config/myNewTiddler/Text}}>
<$set name="journalText" value={{config/myNewTiddler/Text}}>
```
