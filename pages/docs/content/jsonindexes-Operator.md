---
title: 'jsonindexes'
---

op-input: 一些甄选的 JSON 字符串
op-output: 检索到的每个属性的值
op-parameter: 要检索的属性的一个或多个索引
op-purpose: 从 JSON 字符串中检索属性的值
tags: [Filter Operators](#Filter%20Operators) [JSON Operators](#JSON%20Operators)
title: jsonindexes Operator

<<.from-version "5.2.4">> 请参阅 [JSON in TiddlyWiki](#JSON%20in%20TiddlyWiki) 了解背景。

<<.op jsonindexes>> 操作符用于检索 JSON 对象的属性名称或 JSON 数组的索引名称。另请参阅以下相关操作符：

* <<.olink jsonget>> 检索 JSON 数据中一个属性的值
* <<.olink jsontype>> 检索一个 JSON 值的类型
* <<.olink jsonextract>> 检索一个 JSON 值为一个 JSON 字符串

JSON 对象中的属性由一系列索引标识。在以下示例中，于 `[a]` 的值为 `one`，且于 `[d][f][0]` 的值为 `five`。

```
{
    "a": "one",
    "b": "",
    "c": "three",
    "d": {
        "e": "four",
        "f": [
            "five",
            "six",
            true,
            false,
            null
        ],
        "g": {
            "x": "max",
            "y": "may",
            "z": "maize"
        }
    }
}
```

以下示例假设此 JSON 数据，包含于名为 `jsondata` 的变量中。

<<.op jsonindexes>> 操作符使用多个操作数来指定要检索的属性的索引：

```
[<jsondata>jsonindexes[d],[f]] --> "0", "1", "2", "3", "4"
[<jsondata>jsonindexes[d],[g]] --> "x", "y", "z"
```

索引可以由变量和嵌入组合而成：

```
[<jsondata>jsonindexes<variable>,{!!field}]
```

检索不是对象或数组的 JSON 属性的索引，将不返回任何内容。

一个微妙之处在于，单个空白操作数的特殊情况用于标识根对象。因此：

```
[<jsondata>jsonindexes[]] --> "a", "b", "c", "d"
```
