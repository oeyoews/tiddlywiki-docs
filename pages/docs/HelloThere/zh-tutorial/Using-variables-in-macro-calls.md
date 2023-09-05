---
title: 在宏调用里使用变量
---

一般是用 `<$macrocall $name=macroName xxx=<<variableName>> />` 的写法。

这里 `xxx` 是宏接收的一个参数，`variableName` 是你想使用的变量。

可以看到我们这里用到了[微件](#%E5%BE%AE%E4%BB%B6)、[宏](#%E5%AE%8F)、[变量](#%E5%8F%98%E9%87%8F)三个概念：

1. 通过 `macrocall` 微件来使用宏，宏的名字放在 `$name=` 后面
    * `<$macrocall $name=macroName />` 等价于 `<<macroName>>`
    * 但 `<<macroName>>` 这种写法不支持使用变量作为宏的参数，所以我们才需要使用这里介绍的更复杂的写法
1. `<<variableName>>` 是正常的使用变量的写法，我们通过[在微件调用中使用宏或变量](#%E5%9C%A8%E5%BE%AE%E4%BB%B6%E8%B0%83%E7%94%A8%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%AE%8F%E6%88%96%E5%8F%98%E9%87%8F)来把它传给 `macrocall` 微件的 `xxx` 参数
1. `macrocall` 微件的 `xxx` 参数就会传给 `macroName` 这个我们想调用的宏，作为它的同名的 `xxx` 参数，被宏用起来