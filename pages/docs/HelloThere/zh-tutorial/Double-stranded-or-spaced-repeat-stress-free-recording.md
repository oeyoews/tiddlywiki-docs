---
title: 双链或间隔重复无压记录
---

## 关于 RR 的双链无压记录

看过[双向链接时代的快速无压记录](https://www.yuque.com/deerain/gannbs/ffqk2e)的同学可能都知道，roam research 之所以能带火[双链](反向链接)，是因为它宣传：

> 输入的时候可以彻底的不整理，就完全堆在日志条目里 然后用 `[[]]` 打个标记，然后用双链的一些特性，试图让后续需要整理的时候压力也不至于很大。
> 有些东西可能很长一段时间都用不到，那你不去整理它，后续整理的成本也就不用支付了。开始就是随意堆放的，输入成本也很低，就很赚。

## 太微的自动化无压记录

roam 的选择是把未整理的内容堆放到日志条目里，这在太微里做起来也不难例如我们的添加新想法按钮，点一下之后创建新条目，就能往里输入：

<<reuse-tiddler "快速创建新笔记按钮">>

例子：

1. 点击快速创建想法按钮，自动创建出一个带「想法」标签的新卡片
1. 输入标题「变量：显示或隐藏空节点」，加上标签「logseq/配置」，输入内容 `:ui/show-empty-bullets?` （也可以在里面加入 `[logseq/配置](#logseq/%E9%85%8D%E7%BD%AE)` 来产生双链，看你是标签党还是双链党，反正都可以实现同样的效果）

两次操作即可保留内容，与之相比较的复杂折腾的情况，详见[双向链接时代的快速无压记录](https://www.yuque.com/deerain/gannbs/ffqk2e)。

## 太微的间隔重复放心记录

但我的判断是，这种情况下一两下点击的差别其实不大（一下点击打开日志，或者两下点击创建新想法及其标题），重点是心理上放心这个内容不会丢。这种放心感才是 rr 双链系统的核心，只要有这种放心感，交互上区别其实可以忽略。

而之所以有信心就算随便堆放的信息，自己也能再找到，是因为[钓鱼插件]]，能够定期让我们回顾收件箱中的内容。（详见[[【翻译】为临时性的和不完整的笔记设置写作收件箱 - Thoughts Memo 汉化组译制](https://zhuanlan.zhihu.com/p/442485060)），这是太微远超 roam research 和 Obsidian 的地方：

钓鱼插件可以配置为自动提醒我们回顾加了「想法」标签的所有卡片（详见[提供自动化聚合整理的能力，让你从更抽象的角度上整理笔记，而不用亲手整理](#%E6%8F%90%E4%BE%9B%E8%87%AA%E5%8A%A8%E5%8C%96%E8%81%9A%E5%90%88%E6%95%B4%E7%90%86%E7%9A%84%E8%83%BD%E5%8A%9B%EF%BC%8C%E8%AE%A9%E4%BD%A0%E4%BB%8E%E6%9B%B4%E6%8A%BD%E8%B1%A1%E7%9A%84%E8%A7%92%E5%BA%A6%E4%B8%8A%E6%95%B4%E7%90%86%E7%AC%94%E8%AE%B0%EF%BC%8C%E8%80%8C%E4%B8%8D%E7%94%A8%E4%BA%B2%E6%89%8B%E6%95%B4%E7%90%86)），这也就实现了科学的低成本输入+内容不会丢的放心感。