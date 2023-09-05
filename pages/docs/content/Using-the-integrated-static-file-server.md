---
title: '使用集成的静态文件服务器'
---

维基文件夹的子文件夹里的任何文件，都将通过路由 `\files\<uri-encoded-filename>` 提供。例如：<http://127.0.0.1:8080/files/Motovun%20Jack.jpg>

这对于发布不想并入主维基的大型档 (PDFs、视频、大图像等) 非常有用。

静态档可以直接被引用:

* `[ext[./files/a-big-document.pdf]]` - 创建一个 PDF 链接
* `<img src="./files/a-big-image.png">` - 嵌入一个图像

或者，''_canonical_uri'' 字段可用于将档引用为[外部条目](ExternalImages)。