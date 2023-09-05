---
title: '外部图片'
---

TiddlyWiki 里的外部图片为一些指向图片的网址的条目，而非嵌入完整的图片数据。其性能优于嵌入图片，尤其是与大量或大尺寸的图片。然而，使用它们便打破了 TiddlyWiki 的单一文件模式。

外部图片用于浏览器。他们可以于生成 TiddlyWiki 时，由 Node.js 配置创建，或者也可以在浏览器内手动创建。

# 什么是外部图片

外部图片是具有包含图片网址的 **_canonical_uri** 字段的普通图片条目。该网址可以是绝对或相对于 HTML 文档。若给定此规范网址，则该条目的 **text** 字段将被忽略，也应被省略。

# 手动创建外部图片

要手动创建一个外部图片，只需创建具有适当的图片内容类型的条目，增加一个 **_canonical_uri** 字段，其值为指向实际图片位置的网址。

**重要：** 请仔细检查你的拼写，``_canonical_uri`` 的拼写为 [URI](https://en.wikipedia.org/wiki/URI#The_relationship_between_URIs.2C_URLs.2C_and_URNs), 而非 URL。

# 于 Node.js 创建外部图片

下面的步骤用于创建一个静态 HTML 文件版本的 wiki 伴有包含引用的外部图片的 **images** 文件夹：

1. 于您的 TiddlyWikiFolders 以一般方式创建一些图片条目
1. 保存这些图片为个别文件 (按例在名为 **images**子文件夹)
1. 指定一个''_canonical_uri'' 字段，具体化图片条目
1. 保存主要 HTML 文件

请注意，在他们具体化之前，必须是已保存的图片档。具体化摧毁 **text** 字段内的内存中副本的 wiki 存储，这意味着尝试保存他们将失败。

有关示例，请参阅 **externalimages** 构建示例 **tw5.com** 维基的目标：

```
--savetiddlers [is[image]] images
--setfield [is[image]] _canonical_uri $:/core/templates/canonical-uri-external-image text/plain
--setfield [is[image]] text "" text/plain
--rendertiddler $:/core/save/all externalimages.html text/plain
```

## 保存单独的图片档

下列 `--savetiddlers` 命令，可以用来将一个 wiki 的图片保存到 **images** 子文件夹：

```
--savetiddlers [is[image]] images
```

## 具体化图片条目

使用两个 `--setfield` 命令：第一个设置 **_canonical_uri** 字段为一自何条目取得 URI ，且第二个清除 **text** 字段。

```
--setfield [is[image]] _canonical_uri $:/core/templates/canonical-uri-external-image text/plain
--setfield [is[image]] text "" text/plain
```

范本条目 [$:/core/templates/canonical-uri-external-image](#%24%3A/core/templates/canonical-uri-external-image) 包含：

<pre>

<$view tiddler="$:/core/templates/canonical-uri-external-image" field="text" format="text"/>

</pre>

注意，这些操作修改在 wiki 里的条目，这样可能会影响后续命令的操作。

# 使用外部图片

您不能直接在浏览器中编辑外部图片，除了更改 URI 字段指向一个不同的图片。
