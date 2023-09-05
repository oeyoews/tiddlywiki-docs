---
title: 'jsontype'
---

op-input: 一些甄选的 JSON 字符串
op-output: 检索到的每个属性的类型
op-parameter: 要检索其类型的属性的一个或多个索引
op-purpose: 从 JSON 字符串中检索属性的类型
tags: [Filter Operators](#Filter%20Operators) [JSON Operators](#JSON%20Operators)
title: jsontype Operator

<<.from-version "5.2.4">> 请参阅 [JSON in TiddlyWiki](#JSON%20in%20TiddlyWiki) 了解背景。

<<.op jsontype>> 操作符用于检索 JSON 数据中的属性类型。另请参阅以下相关操作符：

* <<.olink jsonget>> 检索 JSON 数据中一个属性的值
* <<.olink jsonindexes>> 检索一个 JSON 对象的字段名称、或一个 JSON 数组的索引
* <<.olink jsonextract>> 检索一个 JSON 值为一个 JSON 字符串

JSON 支持以下数据类型：

* **string** - 一个 Unicode 字符串
* **number** - 一个浮点数
* **boolean** - 一个布尔值 (true 或 false)
* **array** - 一个值的数组
* **object** - 一个名称/值成对的对象
* **null** - 一个表示缺失值的特殊类型

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

The <<.op jsontype>> 操作符使用多个操作数来指定要检索其类型的属性的索引：

```
[<jsondata>jsontype[a]] --> "string"
[<jsondata>jsontype[d]] --> "object"
[<jsondata>jsontype[d],[f]] --> "array"
[<jsondata>jsontype[d],[f],[2]] --> "boolean"
```

索引可以由变量和嵌入组合而成：

```
[<jsondata>jsontype<variable>,{!!field},[0]]
```

一个微妙之处在于，单个空白操作数的特殊情况用于标识根对象。因此：

```
[<jsondata>jsontype[]] --> "object"
```
