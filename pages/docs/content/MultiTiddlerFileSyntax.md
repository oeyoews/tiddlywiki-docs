---
title: '多重条目文件语法'
---

### 多重条目文件

<$railroad text="""
{<" 标题列 ">} " 空白列 " {(<"  条目描述列  "> | <" 注释列 ">)}
"""/>

### 标题列

<$railroad text="""
<" 识别码 "> ":" {" 空格 "} <" 值 "> " 换行 "
"""/>

### 条目描述列

<$railroad text="""
<"  文件路径  "> ":" {" 空格 "} <"  条目名称  "> " 换行 "
"""/>

### 注释列

<$railroad text="""
"#" {(" 文本 " | " 空格 ")} " 换行 "
"""/>
