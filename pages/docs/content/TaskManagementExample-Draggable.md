---
title: '工作管理示例 (可拖动)'
---

这是 TaskManagementExample 的一个强化版，增强了拖放工作清单以重新排列它们的能力。

# 未完成的任务

_拖动任务以重新排序_

<<list-tagged-draggable tag:"task" subFilter:"!has[draft.of]!tag[done]" itemTemplate:"TaskManagementExampleDraggableTemplate" emptyMessage:"无待办任务">>

# 已完成的任务

_(依相反顺串行出完成的)_

<$list filter="[!has[draft.of]tag[task]tag[done]sort[modified]]">
<div>
<$checkbox tag="done"> ~~<$link><<toc-caption>></$link>~~</$checkbox>
</div>
</$list>
