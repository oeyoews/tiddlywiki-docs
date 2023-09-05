---
title: '停用插件'
---

## 停用插件

停用插件，可借由创建名称为 `$:/config/Plugins/Disabled/` 串接插件名称的条目名称，并设其内容为 `yes`。

例如，若要停用插件 `$:/plugins/tiddlywiki/highlight`，该条目名称将是︰

```
$:/config/Plugins/Disabled/$:/plugins/tiddlywiki/highlight
```