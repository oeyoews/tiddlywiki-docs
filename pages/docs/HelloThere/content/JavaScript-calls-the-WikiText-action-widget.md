---
title: JavaScript调用WikiText动作微件
---

## 调用带参数的动作微件（Action Widget）

```js
$tw.rootWidget.invokeActionString('<$action-setfield $tiddler="testTitle" testField="1"/>')
```

## 直接调用事件

```js
$tw.rootWidget.dispatchEvent({ type: xxxx });
```
