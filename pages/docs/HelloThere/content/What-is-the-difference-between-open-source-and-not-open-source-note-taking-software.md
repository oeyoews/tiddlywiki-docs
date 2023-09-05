---
title: 笔记软件开源不开源有什么区别
---

## 能保证一直开源免费安全

### 保证一直免费更新

能保证一直非商业化，不会[像 typora 那样突然收钱](https://www.zhihu.com/question/387808337)。

当然缺点是开源开发者一般是把开发当做乐趣，所以很少为此做到超出乐趣程度的加班开发，没法像加班的商业公司一样急速更新。

### 开源还可以知道这软件在做什么

是否在收集用户数据、是否有广告和付费模块，都是能看到的。

太微就完全没有用户数据收集和广告模块。

## 有不爽的地方可以改

商业软件不会因为用户提了一个需求就立即做出来，闭源软件的团队也不一定会理你的需求，但开源社区（至少太微的友好的开源社区）会和你讨论需求，并接受你提交的修改。

### 插件开发更轻松透明

[林一二]]在有用得不爽的地方时，会优先尝试[插件开发](#%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91)，一般就能解决痛点（例如开发了支持树状任务分支的[[ITKG插件](https://github.com/tiddly-gittly/intention-tower-knowledge-graph)），开发过程中可以看官方源码，参考官方的开发方式。

如果开发插件的时候不爽怎么办？（关于「不爽」的「不爽」，即「元不爽」），这时就可以去直接改太微核心代码，或提交议题请求别的大佬来开发。例如[林一二]]这几年已经为了自己的插件开发需求，[[向核心提交了不少变更和需求](https://github.com/Jermolene/TiddlyWiki5/issues?q=+author%3Alinonetwo+)了。

### 会很难改吗

太微和 Obsidian、Logseq 等软件最大的不同，在于它大部分内容不是用 JavaScript 编程语言写的，而是用 Wikitext 文本写的，就像编写维基百科一样，就能写出界面。不需要学编程也能改，相对 Obsidian 等的插件会更好改。

而且取数据动态生成表格等界面的[筛选器](#%E7%AD%9B%E9%80%89%E5%99%A8)也是十年前就内置了的，不像 Obsidian 还需要插件来提供。内置的功能效率更高、更易学易用。

### 不会技术怎么办呢

要是能说服会改的大佬去改也可以，因为谁都能改。不会技术的话，也可以当产品经理把需求梳理清楚去说服别人嘛。例如上面的例子里，就算是[林一二](#%E6%9E%97%E4%B8%80%E4%BA%8C)也不一定有时间改核心做到所有需求，所以很多需求都是通过议题（issue）的形式说清楚了，希望说服别人来帮忙的。