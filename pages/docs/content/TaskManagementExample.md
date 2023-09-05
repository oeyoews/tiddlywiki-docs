---
title: '工作管理示例'
---

TiddlyWiki5 可以作为一个简单的工作管理系统，无须进一步的客制化。这个想法是设置任务的标签为 `task`，那些已完成的也设其标签为 `done`。以这种方式是直接生成工作清单。

<<.tip """另有[演示的增强版](TaskManagementExample (Draggable))，添加了拖放任务，重新排序的功能。""">>

# 未完成的任务

<$list filter="[!has[draft.of]tag[task]!tag[done]sort[created]]">
<$checkbox tag="done"> <$link><<toc-caption>></$link></$checkbox><br />
</$list>

# 已完成的任务

<$list filter="[!has[draft.of]tag[task]tag[done]sort[created]]">
<$checkbox tag="done"> ~~<$link><<toc-caption>></$link>~~</$checkbox><br />
</$list>
