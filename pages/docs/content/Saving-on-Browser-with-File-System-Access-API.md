---
title: 'TW5-浏览器-本机保存程序 (试验性)'
---

~TiddlyWiki 可以保存对文件系统的更改，而无需[每次下载新档](Saving with the HTML5 fallback saver)
，而是每次使用[文件系统访问 API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)。

<<.warning "此 API 尚未完全标准化，因此这种保存方法具有一定的实验性。">>

此保存程序使用的 API 适用于大多数基于 Chromium 的浏览器。有关浏览器支持的最新信息，请参阅 [caniuse](https://caniuse.com/native-filesystem-api)。

* [插件维基](https://slaymaker1907.github.io/tiddlywiki/plugin-library.html)
* [GitHub 仓储](https://github.com/slaymaker1907/TW5-browser-nativesaver)
