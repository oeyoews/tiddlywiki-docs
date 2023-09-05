---
title: 给插件配置提供预置值
---

可以新建文件 `config.multids` 来提供一系列默认值， 内容类似：

```tw5
title: $:/config/ExternalAttachments/

Enable: yes
DisableForImage: yes
UseAbsoluteForDescendents: no
UseAbsoluteForNonDescendents: yes
```

这样就可以在运行时批量生成四个条目 `$:/config/ExternalAttachments/Enable` 等等，并带有相应的值 `yes` 等等。


