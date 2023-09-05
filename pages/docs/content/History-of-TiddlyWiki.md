---
title: 'TiddlyWiki 的历史'
---

_这些都是来自 JeremyRuston 对 TiddlyWiki 的发展与历史的个人思维。_

_还有一个[从 2016 年的 Podcast](https:_changelog.com/podcast/196) 讨论 TiddlyWiki 的背景故事，以及[从 2021 年录制的](https://twit.tv/shows/floss-weekly/episodes/620)。//

# TiddlyWiki 的缘起

早在 1997 年，一位同事向我介绍 [Ward Cunningham 的原创维基](http://c2.com/cgi/wiki)。令我印象深刻的是，如此强大的功能只用了 700 行 Perl，并且着迷于安全和权限的彻底重新构想。像其他许多开发人员一样，我尽可能地尝试各种维基，并探索他们在工作中的使用。

维基对我的吸引力，在于它最终会扰乱主流的印刷导向的文档和电子邮件模式。

在观察用户使用维基数年之后，我注意到高级用户广泛使用了在多个浏览器分页中，一次打​​开多个维基页面的功能，使他们能够更易于比较和查看页面，在它们之间拷贝文本，并当成尚未被阅读的页面队列。

我觉得，这种一次操作多页的能力是重构维基能力的内核，一个被普遍接受的维基，被精心进行重构往往更有用。然而，标准维基用户界面始终专为单页的演示和操作而设计。

当我在 2004 年 4 月看到 GMail 时，所有这些想法都汇集在一起，其巧妙地使用 Ajax 将各个电子邮件融入到线程对话中。

我开始尝试用 HTML 和 JavaScript 进一步探索这个想法。我几乎没有任何经验，只是曾经把一些以前的静态页面和简单的 ASP 网站放在一起。围绕这些用户端技术让我头痛；和其他人一样，我很惊讶地发现网页编程的不兼容和不一致是多么惊悚。

# TiddlyWiki 的发行

因此，于 2004 年 9 月我发布一个原始的[ TiddlyWiki 的第一个版本](https://classic.tiddlywiki.com/firstversion.html)。它是最小可能的证明这个想法的东西：它是一个简单的、自成一体的静态 48 KB HTML 文件。

以这种方式写成 TiddlyWiki 的第一个版本的缺点是，它用于编辑是完全不切实际的 - 如果 HTML 页有可能被写入到文件系统，当你点击 '保存变更'，也只是弹出一个窗口显示可被保存的数据。

很多早期的回馈是， TiddlyWiki 很整洁，但它可妥善保存变更时，会更有用。我感到有点沮丧，就我所知要将一个运行于浏览器的 HTML 文件保存变更到本机的文件系统是不可能的。

几个月内我看到了实验性的 Firefox 附加组件，可使 TiddlyWiki 在浏览器中保存变更。检查代码，我意识到在一般的 HTML 文件写入到文件系统的 APIs 确实可行，只要他们是以 `file://` 加载。

我编改 Firefox 代码于 TiddlyWiki 的内核，并很快也为 Internet Explorer 添加一个类似的能力 （使用一个微软散布的与 Internet Explorer 一起的旧的 ActiveX 控制项）。

# TiddlyWiki 的成长

TiddlyWiki 成长的一个重要里程碑是 Nathan Bowers 创造了 "GTDTiddlyWiki"。他采取了纯净的 TiddlyWiki，并改写为特定的应用，使用流行的时间管理的方法跟踪任务。GTDTiddlyWiki 立即在像是 LifeHacker 的网站受到热烈欢迎。

在接下来的几年里，TiddlyWiki 继续在流行中成长，并获得了新的特点和功能。在一年内，我能够通过在 TiddlyWiki 上运行定制的开发工作来支持自己，特别是与维基先驱 SocialText 合作，能够将更改与在线服务器同步。

# BT 收购

于 2007 年 5 月，[BT](#BT) 收购 Osmosoft，我的顾问公司。收购一名员工的公司和极少收入-[Osmosoft](#Osmosoft)，这是一个不寻常的决定，[Osmosoft](#Osmosoft)甚至没有 TiddlyWiki的 知识产权，因为我已经把它移交给 UnaMesa，为社群确保其未来。

[BT](#BT) 的动机是为了帮助他们了解社群为基础的生态系统。我加入了该组织，当了"开源创新部主管"，负责开源的治理，以及提供如何参与开源社群的建议和专业知识。

# [Osmosoft](#Osmosoft) 与 TiddlySpace

我在 BT 创建了一个 [Osmosoft](#Osmosoft) 团队。我们的目的是传播开源的好处，并帮助其他团队在实践中实现这些好处。我们还发现，在一般情况下有必要宣导使用网络，特别是网络标准。

我们的方法是把重点放在展示，而不是用说的。我们用 TiddlyWiki 社群扩展生态系统，且为 BT 创建了许多内部系统（一些基于 TiddlyWiki 而一些不是）。

[Osmosoft](#Osmosoft) 对 TiddlyWiki 社群的主要贡献是创建 TiddlyWeb 和 TiddlySpace。TiddlyWeb 是健全的、条目的互联网层级的服务器，也可由那些条目组成 TiddlyWiki 查看。TiddlySpace 是尝试更加直接地将 TiddlyWeb 包装为一个可用的形式。

# 离开 BT

到了 2011 年底我越来越觉得于企业范围 BT 之外我能更好地实现的 TiddlyWiki 的潜力。因此，我离开 BT，并开始作为一个独立的开发者，主要工作是以 TiddlyWiki5 的形式重新开发全新的 TiddlyWiki。

# TiddlyWiki5 的发展

从 2011 年 11 月 我致力于 TiddlyWiki 新版的开发，作为一个程序师，致力于 "版本 2.0" 的东西，我就已经写了的一个非常有吸引力的提案。这意味着要求被完全理解，让我把重点放在不断变化的需要来支持所需的功能的体系结构。

# 未来

现在 TiddlyWiki5 终于离开了"测试版"状态，我的希望是，它会具有较长的使用寿命。因为它仅使用 HTML5 和 Node.js 的标准功能，没有理由不能全面运作于将来的很多年。我的目标是它至少 25 年。

_Jeremy Ruston, 2014 年 09 月 20 日_

