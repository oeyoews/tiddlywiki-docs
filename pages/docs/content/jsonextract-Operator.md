---
title: 'jsonextract'
---

op-input: 一些甄选的 JSON 字符串
op-output: 每个检索到的属性的 JSON 字符串值
op-parameter: 要检索的属性的一个或多个索引
op-purpose: 从 JSON 字符串中检索属性的 JSON 字符串
tags: [Filter Operators](#Filter%20Operators) [JSON Operators](#JSON%20Operators)
title: jsonextract Operator

<<.from-version "5.2.4">> 请参阅 [JSON in TiddlyWiki](#JSON%20in%20TiddlyWiki) 了解背景。

<<.op jsonextract>> 操作符用于从 JSON 数据中检索为 JSON 子字符串的值。另请参阅以下相关操作符：

* <<.olink jsonget>> 检索 JSON 数据中一个属性的值
* <<.olink jsontype>> 检索一个 JSON 值的类型
* <<.olink jsonindexes>> 检索一个 JSON 对象的字段名称、或一个 JSON 数组的索引

一个 JSON 对象中的属性由一系列索引标识。在下面的示例中， `[a]` 的值为 `one`、 `[d][f][0]` 的值为 `five`。

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

以下示例假定此 JSON 数据报含在名为 `jsondata` 的变量中。

<<.op jsonextract>> 操作符使用多个操作数来指定要检索的属性的索引。值以文本 JSON 字符串的形式返回：

```
[<jsondata>jsonextract[a]] --> "one"
[<jsondata>jsonextract[d],[e]] --> "four"
[<jsondata>jsonextract[d],[f],[0]] --> "five"
[<jsondata>jsonextract[d],[f]] --> ["five","six",true,false,null]
[<jsondata>jsonextract[d],[g]] --> {"x":"max","y":"may","z":"maize"}
```

索引可以由变量和嵌入动态组合：

```
[<jsondata>jsonextract<variable>,{!!field},[0]]
```

一个微妙之处在于，单个空白操作数的特殊情况用于标识根对象。因此：

```
[<jsondata>jsonextract[]] --> {"a":"one","b":"","c":"three","d":{"e":"four","f":["five","six",true,false,null],"g":{"x":"max","y":"may","z":"maize"}}}
```
