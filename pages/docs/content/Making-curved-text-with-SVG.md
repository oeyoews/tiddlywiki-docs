---
title: '使用 SVG 制作弯曲的文本'
---

\define textOnPath(text)
$$$.svg
<svg width="100%" height="100%" viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background:white;"><defs>
<path id="MyPath" d="M 100 200 C 200 100 300   0 400 100 C 500 200 600 300 700 200 C 800 100 900 100 900 100"/>
</defs>
<use xlink:href="#MyPath" fill="none" stroke="#ddd"/>
<text font-family="'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif" font-size="42.5">
<textPath xlink:href="#MyPath">
$text$
</textPath>
</text>
</svg>
$$$
\end

此示例展示了如何使用 SVG 呈现沿着一条路径嵌入文本。可试着由下面的文本方块中输入一些文本，查看[原始代码](Making curved text with SVG) ，看看是它如何做到的。

<$edit-text tiddler="$:/CurvedText" tag="input" placeholder="Type text here" default=""/>

<$macrocall $name="textOnPath" text={{$:/CurvedText}}/>
