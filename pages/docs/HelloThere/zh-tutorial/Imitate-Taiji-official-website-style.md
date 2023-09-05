---
title: 模仿太记官网样式
---

video-link: <https://www.bilibili.com/video/BV1EM4y1Y7mc>

太记官网样式挺好看的，可以模仿一下。

首先是安装官方主题插件里的`$:/themes/tiddlywiki/starlight`，这个会直接附带一个英文字体和一个背景图片。然后再安装一个主题插件`$:/themes/tiddlywiki/hidefurniture`，这个好像cpl里找不到，可以去[太记官网](https://tiddly-gittly.github.io/TidGi-Official-Website/#:Index)上拖过来。外观主题里选择`$:/themes/tiddlywiki/starlight`。

再然后是编辑`$:/themes/tiddlywiki/starlight/styles.tid`条目。把下面的代码剪切出来，形成一个新条目，并加上`$:/tags/Stylesheet`标签。这是因为如果修改了原条目的话，有可能造成里面的内容溢出。

```
html body, .tc-sidebar-scrollable-backdrop {
	font-family: "Arvo", "Times";
	background: url(<<datauri "$:/themes/tiddlywiki/starlight/ltbg.jpg">>);
}

.tc-page-controls svg {
	<<filter "drop-shadow(1px 1px 2px rgba(255,255,255,0.9))">>
}
```

如果觉得背景图片不好看，太单调肃穆了，可以把上面代码里的`background: url(<<datauri "$:/themes/tiddlywiki/starlight/ltbg.jpg">>);`删去。这样就不会有背景图片了。

然后再安装一个中文字体，参考[如何添加在线字体](#%E5%A6%82%E4%BD%95%E6%B7%BB%E5%8A%A0%E5%9C%A8%E7%BA%BF%E5%AD%97%E4%BD%93)。或者直接把[霞鹜文楷](#%E9%9C%9E%E9%B9%9C%E6%96%87%E6%A5%B7)条目拖到你的wiki里。

然后再修改上面的代码其中fnot-family，修改为`font-family: "Arvo","LXGW WenKai Lite", "Times";`，这里是用上面的霞鹜文楷字体，当然也可以换成其他字体格式。

然后因为这个主题按钮特别大，可以在设置-主外观-主题调整里，是否置顶按钮，选择否。