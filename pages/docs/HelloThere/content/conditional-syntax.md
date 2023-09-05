---
title: 条件语法
---

使用 List 微件可以实现条件判断，类似编程语言里的「If」语句。可以实现[使用List微件让内容可以切换中英文](#%E4%BD%BF%E7%94%A8List%E5%BE%AE%E4%BB%B6%E8%AE%A9%E5%86%85%E5%AE%B9%E5%8F%AF%E4%BB%A5%E5%88%87%E6%8D%A2%E4%B8%AD%E8%8B%B1%E6%96%87)等效果。

例如下面例子里，我们使用了 List [微件](#%E5%BE%AE%E4%BB%B6)，然后在它的 filter 字段里，使用筛选器做了个判断。判断结果成立时，在 `<$list> </$list>` 之间包裹的内容就会展示出来。

```tw5
<$list filter="[<currentTiddler>tag[所需的标签]]">

	带有所需标签

</$list>
```