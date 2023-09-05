---
title: '加密'
---

使用为单独的 HTML 文件，TiddlyWiki5 允许使用 [Stanford JavaScript Crypto Library](#Stanford%20JavaScript%20Crypto%20Library) 加密内容。

1. 切换到侧边栏的''工具''页签，并找到带有一个锁形图标的按钮
1. 如果按钮为 <<.icon $:/core/images/unlocked-padlock>> **设置密码**则当前维基尚未加密。按一下该按钮将提示输入用于加密以后保存的密码
1. 如果按钮为 <<.icon $:/core/images/locked-padlock>> **清除密码**则当前维基内容已被加密。按一下按钮将移除除密码，以便后续不加密保存
1. 可以在文本编辑程序中，开启被保存的文件，并核实您的数据已被加密
1. 在您的浏览器中开启该文件，在内容显示之前，浏览器会提示输入密码

请注意，TiddlyWiki 有两个有关密码/加密与其他无关的功能：

* 保存到 TiddlySpot 时的设置密码的能力。这在 <<.icon $:/core/images/options-button>> 控制台中的''保存''页签
* 上述功能使用标准 HTTP 基本验证与 [Node.js](TiddlyWiki on Node.js) 服务器配置。这是在命令行中使用 ServerCommand 上完成的。与 SSL 并用时，你会得到与在线服务，如 Google 或 Dropbox 同级的发送加密，但这没有加密的磁盘上的数据。
