---
title: '设置网站图标'
---

**网站图标**是大多数浏览器显示以帮助用户识别网站的小图标。请注意，所有浏览器都支持 bitmap 图像,但只有某些现代浏览器支持 SVG 格式的图标。

# 在浏览器中的网站图标

TiddlyWiki 在浏览器中启动时，找到名称为 [$:/favicon.ico](#%24%3A/favicon.ico) 的条目，并动态使用为该页面图标。如果您修改图像，则网站图标立即更换以反映之。

# 在服务器上的网站图标

在服务器上，ServerCommand 将条目 [$:/favicon.ico](#%24%3A/favicon.ico) 转换到路径 `/favicon.ico`。
