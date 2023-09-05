---
title: '隐藏设置：输入的刷新延迟'
---

TiddlyWiki 延迟处理更动草稿条目和前缀为 `$:/temp/volatile/` 的条目，直到超时时间已过 (这称为节流)。该机制可以通过添加 `throttle.refresh` 字段，扩充到其他条目。有关详细信息，请参阅[刷新节流](RefreshThrottling)。

在大多数情况下，默认值 400ms 有回应的良好平衡，但于低级的行动设备上并不总是最优

现在可以通过更改下列条目的值（单位为毫秒）改变超时设置：

$:/config/Drafts/TypingTimeout