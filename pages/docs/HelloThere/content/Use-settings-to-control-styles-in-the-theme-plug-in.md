---
title: 在主题插件里用设置控制样式
---

用config条目作中介，让开关只修改config条目，而不会去修改具体样式，这样在插件更新时，才不会发现用户覆盖了很多条目（变成[影子条目](#%E5%BD%B1%E5%AD%90%E6%9D%A1%E7%9B%AE)）无法获得更新。

## Itonnote 主题中的例子

‎src/settings.tid [写插件配置页面](#%E5%86%99%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE%E9%A1%B5%E9%9D%A2)

```tid
<$checkbox tiddler="$:/config/themes/itonnote/separate-title-and-button" field="text" checked="show" unchecked="hide" d…
<$checkbox tiddler="$:/config/themes/itonnote/separate-title-and-button" field="text" checked="show" unchecked="hide" d…
```

‎src/separate-title-and-button.tid [根据条件展示内容](#%E6%A0%B9%E6%8D%AE%E6%9D%A1%E4%BB%B6%E5%B1%95%E7%A4%BA%E5%86%85%E5%AE%B9)

```tid
title: $:/themes/linonetwo/itonnote/separate-title-and-button
tags: $:/tags/Stylesheet

<$reveal state="$:/config/themes/itonnote/separate-title-and-button" type="match" text="show">
/**
	让标题与按钮分隔开。
```

‎src/configs/separate-title-and-button.tid [给插件配置提供预置值](#%E7%BB%99%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE%E6%8F%90%E4%BE%9B%E9%A2%84%E7%BD%AE%E5%80%BC)

```tid
title: $:/config/themes/itonnote/separate-title-and-button

hide
```