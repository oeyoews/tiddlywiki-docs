---
title: 使用CSS实现段落前空两格实现首行缩进
---

重点是 [text-indent](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-indent) 属性。然后用 [padding-left](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-left) 可以调整左边距。

```tid
@@text-indent:-2em;padding-left:4em;

注：无障碍包括建筑物的所有潜在用户在其活动期间，在保证个人健康、安全和福祉的情况下，独立到达、进入、疏散和/或使用建筑物及其服务和设施的便利程度。
@@
```

@@text-indent:-2em;padding-left:4em;

注：无障碍包括建筑物的所有潜在用户在其活动期间，在保证个人健康、安全和福祉的情况下，独立到达、进入、疏散和/或使用建筑物及其服务和设施的便利程度。
@@
