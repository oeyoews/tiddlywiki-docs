---
title: '音频'
---

音频档可以非常类似[图像](Images in WikiText)的方式纳入于 TiddlyWiki。

# 嵌入式的音频

小的音频档可以直接嵌入至 TiddlyWiki，但不适合嵌入大的文件 (超过几百 KBs)，因为它增大了 TiddlyWiki 文件。

例如，[TiddlyWiki.mp3](#TiddlyWiki.mp3) 条目包含单字 "TiddlyWiki" 的 MP3 录音。如果开启该条目，您应该看到将播放该录音的音频播放机。

您也可以嵌入音频档，例如:

<<wikitext-example-without-html '{{TiddlyWiki.mp3}}'>>

# 外部音频

外部音频条目使用''_canonical_uri'' 字段指向外部音频档/流，并停用其 **text** 字段。这大幅减少了条目大小，但仍然允许播放。

例如，条目 [Caruso - Ave Maria](#Caruso%20-%20Ave%20Maria) 指向在 <http://archive.org> 的在线音频档：

<<wikitext-example-without-html '{{Caruso - Ave Maria}}'>>
