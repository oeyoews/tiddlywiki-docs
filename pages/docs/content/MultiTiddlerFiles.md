---
title: '多重条目文件'
---

MultiTiddlerFiles 允许多个条目，简明地表示在一个单一的文本文件中。

这种格式的目的是：

* 便于输入易于阅读
* 优化单行字符串
* 允许通用字段或标签共用于条目群组
* 让外部工具可易于处理

MultiTiddlerFiles 具有扩展名 `multids`。该文件结构化为一个共用字段区块于一个空行之后。文件的其余部分是一个些注解和条目。条目由其名称指定、跟着一个冒号、至少一个空白字符，然后该行其余部份是条目的文本字段。

例如：

```
title: $:/language/ControlPanel/
tags: strings
modifier: JoeBloggs

Basics/Caption: Basics
# This is a comment
Basics/Version: ~TiddlyWiki Version
```

此示例定义了两个条目，[$:/language/ControlPanel/Basics/Caption](#%24%3A/language/ControlPanel/Basics/Caption) 与 [$:/language/ControlPanel/Basics/Version](#%24%3A/language/ControlPanel/Basics/Version).

若 `title` 字段在标题中指定，则其被视为定义于条目名称中的个别条目的前缀。

## 语法规范

{{MultiTiddlerFileSyntax}}