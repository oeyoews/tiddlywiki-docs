---
title: 让标题与按钮区分开来
---

太微原生的样式里，条目的标题与按钮是放在一起的，在移动端显示就会显示为一分两半，一点也不好看。

```css
.tc-titlebar h2 {
	display: table-header-group;
	word-wrap:break-word;
	word-break:break-all;
}

```

上面的代码加上样式标签`$:/tags/Stylesheet`就基本上可以实现标题与按钮区分了。当标题很短时，标题与按钮保持一致，当标题很长时，按钮会在标题的上方。

现已整合到itonnote主题插件中，[themes/itonnote/settings]($:/themes/linonetwo/itonnote/settings)。