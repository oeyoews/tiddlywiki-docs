---
title: '升级'
---

有错误修正和改进的 TiddlyWiki 定期发布版本。它是一个好主意，以保持最新的通过定期升级到最新版本。

# 简介

这里描述的是升级标准版 TiddlyWiki 文件的流程。升级 [TiddlyWiki on Node.js]] 有[[不同的处理流程](Upgrading TiddlyWiki on Node.js)。

> 在升级时，请记住[使用 TiddlyWiki 的第一条准则](The First Rule of Using TiddlyWiki)：
> 
> _您有责任照看好自己的数据；小心备份，尤其是在升级 ~TiddlyWiki 内核时_

# 在线升级

此处理流程可运作于大多数桌面浏览器。请注意您的任何个人数据都不会离开您的浏览器。

1. 在文件系统中找到您的 TiddlyWiki 文件 (亦即使用 Windows 的文件总管、Mac OS X 的 Finder、您在 Linux 上的文件管理程序)
1. 于浏览器中打开网址 <https://tiddlywiki.com/upgrade.html>
1. 将您的旧 TiddlyWiki HTML 文件拖放至该浏览器窗口
    * 若该文件已加密，将提示您输入密码
1. 审视将升级的条目列表
1. 点击 **Upgrade**
1. 保存升级后的新版本 (<<.icon $:/core/images/save-button-dynamic>>)

这将下载名为 **upgrade.html** 的文件到您的计算机，此文件是您的旧档升级。您需要打开下载 **upgrade.html** 于该处的文件夹，重命名 **upgrade.html** 为你要升级的旧档的文件名，并移动新档替换旧档。

# 脱机升级

您也可下载 <https://tiddlywiki.com/upgrade.html> 于本机，运行相同的拖放过程来升级您的文件。

# 升级的问题

## Firefox 的安全限制

当使用 Firefox 试图运行在线升级程序时，将出现下面的错误：

> Error while saving:
> 
> Error:NS_ERROR_DOM_BAD_URI: Access to restricted URI denied

此为升级操作违反 Firefox 的安全限制：

在这问题被解决之前，我们建议使用脱机升级进程，或使用 Google 浏览器进行升级：

1. 使用 Google 浏览器打开 <https://tiddlywiki.com/upgrade.html>，然后拖拉您要升级的 TiddlyWiki html 文件到升级程序窗口中，如前文''在在线升级''中所述
1. 在您保存已升级的文件之后，应该能够在 Firefox 中打开它，且能再[使用 TiddlyFox 保存](Saving with TiddlyFox)

## 不兼容的自定义项

套用自定义条目于先前的版本，有可能造成升级到最新版本的时候发生问题。有两个技巧，你可以用来帮助追踪问题：

* 请尝试重复升级有选择性地未选中任何可能套用到 TiddlyWiki 的客制条目
* 使用[安全模式](SafeMode)禁用所有客制的默认条目

你可以看到哪些默认条目已被覆写于[高级搜索]($:/AdvancedSearch)的筛选器选项卡中。从下拉清单中选择"被覆盖默认条目"。
