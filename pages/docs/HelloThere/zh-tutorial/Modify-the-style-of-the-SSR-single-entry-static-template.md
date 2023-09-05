---
title: 修改SSR单条目静态模板的样式
---

使用[NodeJS服务端渲染单条目卡片](#NodeJS%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93%E5%8D%95%E6%9D%A1%E7%9B%AE%E5%8D%A1%E7%89%87)时，样式表会额外加上一些内容，可能会长得和直接打开完整版 Wiki 不同。

把想添加的 css 填到 `$:/core/templates/static.template.css` 里，可以修改单条目静态模板的样式。

不过建议保留顶部原有的内容，只把你新加的内容放到底部。例如：

```tw5
title: $:/core/templates/static.template.css

<!-- from the tiddlywiki repo, core/templates/static.template.css.tid -->

{{$:/boot/boot.css||$:/core/templates/wikified-tiddler}}

{{$:/core/ui/PageStylesheet||$:/core/templates/wikified-tiddler}}

<!-- override the core tiddler to add this -->

<$importvariables filter="[[$:/themes/tiddlywiki/vanilla/base]]">
/* Hide sidebar in static template on mobile
  Normally the sidebar will hide using js in itonnote plugin. But in static template there is no js in static template
*/
@media (max-width: <<sidebarbreakpoint>>) {
  .tc-body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
  }
  .tc-sidebar-scrollable {
    height: auto;
    position: unset;
    width: 100%;
    padding-left: 20px;
  }
}
<!-- fix width related css variable not set in static mode -->
@media (min-width: <<sidebarbreakpoint>>) {
  .tc-sidebar-scrollable {
    width: {{$:/themes/tiddlywiki/vanilla/metrics/sidebarwidth}};
    max-width: {{$:/themes/tiddlywiki/vanilla/metrics/sidebarwidth}};
  }
}
</$importvariables>
```

