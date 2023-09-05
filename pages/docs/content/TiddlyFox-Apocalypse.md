---
title: 'TiddlyFox 启示录'
---

# 摘要

Mozilla 于 2017 年 11 月 14 日[发布 Firefox 57](https://blog.mozilla.org/blog/2017/09/26/firefox-quantum-beta-developer-edition/)，一个主要的新版本，有许多改进和安全性增强功能。然而，在这些改进中，"Firefox 的安全模型生成了一些根本性的变化，导致 TiddlyFox 的功能失效" 的不幸后果。

TiddlyFox 仍适用于[继续使用早期版本的 Firefox](https://groups.google.com/d/topic/tiddlywiki/OJQ0yRq4zog/discussion)，但任何升级到新版本的人，都需要选择一种新的方法来处理 TiddlyWiki 的保存变更。

令人高兴的是，现在有一些新的方法可以与 TiddlyWiki 一起使用，以便用户有许多选择 -- 详见 GettingStarted。TiddlyFox 的终结已经激起了最近的这些发展，因此终将有益于社群。

在 TiddlyWiki 论坛上有关于这些发展的[讨论串](https://groups.google.com/d/topic/tiddlywiki/LcldXzPlTK0/discussion)。

# 缘由

在 TiddlyWiki 的第一个版本的几个月后，Firefox 于 2004 年 11 月首次发布。千年猎鹰在很多方面是微软的死亡之星（以Internet Explorer 的形式）。 IE 浏览器已经主导浏览器超过 5 年，微软自我扩展的 HTML 已经成为事实上的标准，牺牲了可能有利于整个网络社群的创新，导致许多网络社群感到沮丧。

Firefox 很快就成功了，因为它能够在提供卓越用户体验的同时，使网页与 IE 浏览器足够兼容。用户体验的很大一部分是任何用户都能够自定义浏览器的各个方面。这背后有两项创新：

* 浏览器的整个用户界面是构建于 <https://en.wikipedia.org/wiki/XUL>，有效地扩充 HTML，使其能够呈现常规的用户界面 (当时，HTML 主要限于简单面向文档的布局)。调整几行 XUL 代码可以对浏览器的用户界面进行大规模的更改
* Mozilla 的附加组件结构赋予附加组件所有权限，使其能够与浏览器引擎，及其所运行的计算机文件系统，进行深入的观察和交互。

这两个条件使 Firefox 附加组件的生态系统充满活力，其中许多都非常受欢迎。在许多情况下，最初在浏览器的附加组件中看到的创新，后来变成集成到浏览器本身，最显著的是网页调试器 [Firebug](https://en.wikipedia.org/wiki/Firebug_(software))，它最终被所有浏览器厂商拷贝.

Firefox 一直是非常流行的，直到 Google 加入竞争对手 ~WebKit 浏览器的开发来制作 Chrome。 Google 对制作浏览器的取舍，采取了截然不同的做法，专注于以牺牲几乎所有其他因素为代价来提高安全性。他们首创了一些方法，比如隔离每个分页于个别的处理进程，而所有其他主要浏览器都很快地采用了它。

Google 的方法排除采用 Mozilla 的免费附加组件。Chrome 浏览器中的附加组件并不能访问整个浏览器环境和文件系统，而只能看到浏览器中正在进行的一个受限子集，并且几乎不能访问主机的资源。

这是不可避免的，Mozilla 最终将采用 Google 的方法，[浏览器安全性相对于附加组件](https://support.mozilla.org/en-US/kb/firefox-add-technology-modernizing)。在这一点上，Mozilla 没有责任发布一个比市场领导者安全更差的浏览器。

# 训示

TiddlyWiki 生态系统的一些繁荣，源于 Firefox 采用上述两个原则：

* 使应用程序用户界面与应用程序内容具有相同的原语
* 给附加组件自由，观察和与应用程序的所有内部逻辑交互

TiddlyWiki 的这两个特性对 Firefox 的安全性呈现了类似的挑战。一个主要关注安全性的 TiddlyWiki 需要削减这些能力。

# 未来

新的基于浏览器的用户界面和功能的创新，现在已经从浏览器延伸转变为新一代的框架，简化了基于现成的开源 HTML 渲染引擎的自定义浏览器的创建。TiddlyDesktop 使用 [nwjs](https://nwjs.io)，但 [Electron](https://electron.atom.io/) 现在也很流行。
