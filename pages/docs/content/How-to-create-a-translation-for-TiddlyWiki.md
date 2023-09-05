---
title: '如何创建一个 TiddlyWiki 的语言插件'
---

# 系统必备组件

* [TiddlyWiki on Node.js](#TiddlyWiki%20on%20Node.js)
* 需要 GitHub 帐号，用以提交翻译至 tiddlywiki.com

# 设置步骤摘要

1. 复制（clone）TiddlyWiki 位于 GitHub 的建构脚本保存库 <https://github.com/Jermolene/build.jermolene.github.io.git>
1. Fork TiddlyWiki 位于 GitHub 的原代码保存库 (https://github.com/Jermolene/TiddlyWiki5)
    * 若您的 GitHub 帐号为 JoeBloggs，您的 fork 即为 <https://github.com/JoeBloggs/TiddlyWiki5>
1. 创建一个您欲翻译的语言分支，并以此语言为分支名称 (例如："cy-GB" for "Welsh (United Kingdom)")
    * IETF 语言代码: <http://www.lingoes.net/en/translator/langcode.htm>
1. clone forked 的保存库至您的电脑 (例如：`/MyTranslation/TiddlyWiki5`)
1. 创建一个平行文件夹 `/MyTranslation/jermolene.github.io`
1. 于 `<repo>/languages` 为您的翻译创建一个新文件夹
1. 复制 `<repo>/core/language/en-GB` 的内容至您的翻译文件夹
1. 在您的翻译文件夹中，添加一个 `plugin.info` 文件 (见下方说明)
1. 修改 `<repo>/editions/tw5.com/tiddlywiki.info`，加入您的语言至列表中
1. 运行 `../build.jermolene.github.io/quick-bld.sh` 生成 TiddlyWiki
1. 开启该 TiddlyWiki 文件： `/MyTranslation/jermolene.github.io/index.html`
1. 可于控制台看到您的翻译出现在语言列表，但此时翻译内容仍为英式英文。
1. 修改所有位于您的语言文件夹中的 `.tid` and `.multids` 文件，翻译其中的英文本串。

`plugin.info` 文件内容为 Joe Blogg 的英国威尔斯文翻译:

```
{
	"title": "$:/languages/cy-GB",
	"name": "cy-GB",
	"plugin-type": "language",
	"description": "Welsh (British)",
	"author": "JoeBloggs",
	"core-version": ">=5.0.0"
}
```

MultiTiddlerFiles 让多个 tiddlers 的内容能封装至单一个文本文件因而简化编修工作。

# 更新处理

有时候，主要的 en-GB 语言条目更新修订内容或添加项目。追踪与语言相关的提交到 ~TiddlyWiki5:master 最好的方法来是监视此 RSS/Atom 消息来源：

<https://github.com/Jermolene/TiddlyWiki5/commits/master/core/language.atom>