---
title: '草稿机制'
---

有一个 `draft.of` 字段的条目被视为处理中的条目草稿。草稿条目也应该有一个 `draft.title` 字段，于保存时指定为条目名称。

协同工作的一些功能，给予草稿条目所需的行为：

* ListWidget 可以借由不同的范本，选择性地呈现草稿条目
* NavigatorWidget 包含以下事件处理常式:
    * `tm-new-tiddler` 在草稿模式中创建一新条目
    * `tm-edit-tiddler` 为一条目进入编辑模式
    * `tm-cancel-tiddler` 取消一条目编辑模式
    * `tm-save-tiddler` 为保存草稿条目
* 草稿条目被自动排除于搜索操作
