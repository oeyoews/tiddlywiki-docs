---
title: 如何设置启动时展示内容？
---

可以看oeyoews写的[代码](https://github.com/oeyoews/neotw/tree/main/archive/plugins/tiddlywiki-announcement/tiddlers)。

可以新建一个条目，名称自取，把下面的代码复制下去。

```
<$list filter="[[启动内容]get[text]count[]!match[0]]">
<$action-sendmessage $message="tm-modal" $param="启动内容" />
</$list>
```

并加上`$:/tags/StartupAction/PostRender`。然后再新建一个条目，名称是`启动内容`，里面就是写要展示的内容了。