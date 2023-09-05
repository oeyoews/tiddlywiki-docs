---
title: '于 Dropbox 分享 TiddlyWiki'
---

你可以操作存放于 Dropbox 的 TiddlyWiki 文件，并发布任何人都可以用唯读方式查看文件的 URL。

1. 保存 TiddlyWiki 文件于你的 Dropbox 文件夹
1. 选择 Dropbox 的 "分享链接" 选项以取得一个该文件的公开网址
    * 于 Dropbox 的网页界面， 当你悬停于一文件时点击该链接图标可得该网址。 若使用 OSX 的 Finder 或是 Windows 的 Internet Explorer，Dropbox 也在右键菜单中增加 "分享链接" 的项目。
1. Dropbox 生成的网址将如下列格式：
#> `<https://www.dropbox.com/s/><gobbledegook>/mywiki.html`
1. 修改网址如下，小心保留 gobbledegook：
#> `<https://dl.dropboxusercontent.com/s/><gobbledegook>/mywiki.html`

其结果是一个 "私有" 网址，您可以发送给其他人，使他们能够看到该 wiki。

----

输入一个生成的 URL，您可以复制并粘贴该私有网址：

<$edit-text tiddler="$:/temp/dropboxurl" default="https://www.dropbox.com/s/<gobbledegook>/mywiki.html" tag="input" type="text" size="60"/>

<$macrocall $name="dropbox-url" url={{$:/temp/dropboxurl}}/>