---
title: '如何在横幅放置最近修改日期'
---

此处是如何在窗口的角落横幅显示该维基的最近修改日期：

1. [安装插件](Installing a plugin from the plugin library) <<.def "Corner ribbon">> 至您的 ~TiddlyWiki
1. 保存 (<<.icon $:/core/images/save-button-dynamic>>) 并重新加载 (<<.icon $:/core/images/refresh-button>>) 您的维基
1. 创建一名称为 [$:/_MyRibbon](#%24%3A/_MyRibbon) 的条目，设旗标签为 [$:/tags/PageControls](#%24%3A/tags/PageControls)，其内容包含：<div>

```
<div class="github-fork-ribbon-wrapper right">
<div class="github-fork-ribbon" style="background-color:#DF4848;">
<$list filter="[!is[system]!has[draft.of]!sort[modified]limit[1]]">
<$link>
<$view field="modified" format="date" template="YYYY年0MM月0DD日, 0hh:0mm"/>
</$link>
</$list>
</div>
</div>
```
</div>
1. 如果需要，可更改为您喜好背景颜色
1. 您也可以尝试改变其位置类别从 `right` 到 `right-bottom`
    1. 若要出现在左上角，您需要将该条目标签设为 [$:/tags/PageTemplate](#%24%3A/tags/PageTemplate) 而不是 [$:/tags/PageControls](#%24%3A/tags/PageControls) ，然后更改其位置类别为 `left`
