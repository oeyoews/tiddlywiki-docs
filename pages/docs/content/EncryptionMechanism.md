---
title: '加密机制'
---

TiddlyWiki5 允许以 Stanford JavaScript 加密程序库加密 TiddlyWiki HTML 文件的全部内容。在浏览器中开启加密的 TiddlyWiki 于解密和显示内容之前提示输入密码。

有关说明如何使用 TiddlyWiki5 的加密功能，请参阅 [用加密保存](Saving with Encryption)。

[加密机制](EncryptionMechanism)的实现具有以下元素：

* BootMechanism 里的 PasswordVault 保存当前的加密密码
* BootMechanism 能够从 TiddlyWiki 档读取加密的条目区块，提示用户输入密码并解密这些条目
* [WidgetMessage: tm-set-password](#WidgetMessage%3A%20tm-set-password) 与 [WidgetMessage: tm-clear-password](#WidgetMessage%3A%20tm-clear-password) 消息的处理进程处理更改密码的用户接口
* 主文件范本内的 EncryptWidget 使用目前的密码加密筛选的条目
* [$:/isEncrypted](#%24%3A/isEncrypted) 条目包含 "yes" 或 "no" 根据是否有一个密码在密码存储库
    * 此条目的可用性允许 RevealWidget 用于依据加密是否生效有选择地显示用户接口元素
* [$:/snippets/encryptionstatus](#%24%3A/snippets/encryptionstatus) 片段显示当前的加密状态
