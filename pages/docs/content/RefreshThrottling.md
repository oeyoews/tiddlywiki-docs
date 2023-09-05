---
title: '刷新节流机制'
---

刷新节流机制允许在对同一个条目发生快速更改时，限制（或延迟）刷新周期。其用于在编辑草稿条目时，保持回应能力，但也可用于其他条目。

管理刷新节流的规则如下：

* 发生更改通知时，仅当所有修改的条目都满足以下条件之一时，才会进行节流：
    * 具有字段 `draft.of`
    * 具有字段 `throttle.refresh`
    * 标题首码为 `$:/temp/volatile/`
* 如果要限制刷新周期，在内部指定的 [$:/config/Drafts/TypingTimeout](Hidden Setting: Typing Refresh Delay) 设置一个计时器 （取消任何珍贵的设置计时器）
    * 当计时器触发时，将触发刷新周期，传递所有延迟刷新周期的聚合标题