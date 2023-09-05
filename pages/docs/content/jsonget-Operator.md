---
title: 'jsonget'
---

op-input: 一些甄选的 JSON 字符串
op-output: 检索到的每个属性的值
op-parameter: 要检索的属性的一个或多个索引
op-purpose: 从 JSON 字符串中检索属性的值
tags: [Filter Operators](#Filter%20Operators) [JSON Operators](#JSON%20Operators)
title: jsonget Operator

<<.from-version "5.2.4">> 请参阅 [JSON in TiddlyWiki](#JSON%20in%20TiddlyWiki) 了解背景。

<<.op jsonget>> 操作符用于从 JSON 数据中以字符串形式检索值。另请参阅以下相关运子：

* <<.olink jsontype>> 检索一个 JSON 值的类型
* <<.olink jsonindexes>> 检索一个 JSON 对象的字段名称、或一个 JSON 数组的索引
* <<.olink jsonextract>> 检索一个 JSON 值为一个 JSON 字符串

JSON 对象中的属性由一系列索引标识。在下列的示例中，于 `[a]` 的值为 `one`, 且于 `[d][f][0]` 的值为 `five`。

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

<<.op jsonget>> 操作符使用多个操作数来指定要检索的属性的索引：

```
[<jsondata>jsonget[a]] --> "one"
[<jsondata>jsonget[d],[e]] --> "four"
[<jsondata>jsonget[d],[f],[0]] --> "five"
```

索引可以由变量和嵌入组合而成：

```
[<jsondata>jsonget<variable>,{!!field},[0]]
```

布尔值和 null 当作普通字符串返回。<<.olink jsontype>> 操作符可用于检索标识原始类型的字符串。因此：

```
[<jsondata>jsontype[a]] --> "string"
[<jsondata>jsontype[d]] --> "object"
[<jsondata>jsontype[d],[f]] --> "array"
[<jsondata>jsontype[d],[f],[2]] --> "boolean"
```

使用 <<.op jsonget>> 操作符检索对象或数组将返回值的清单。例如：

```
[<jsondata>jsonget[d],[f]] --> "five","six","true","false","null"
[<jsondata>jsonget[d],[g]] --> "max","may","maize"
```

<<.olink jsonindexes>> 操作符检索对应的索引：

```
[<jsondata>jsonindexes[d],[f]] --> "0", "1", "2", "3", "4"
[<jsondata>jsonindexes[d],[g]] --> "x", "y", "z"
```

如果对象或数组包含嵌套的子对象或数组，则以递归方式检索值，并以平展形式返回到清单中。例如：

```
[<jsondata>jsonget[d]] --> "four","five","six","true","false","null","max","may","maize"
```

一个微妙之处在于，单个空白操作数的特殊情况用于标识根对象。因此：

```
[<jsondata>jsonindexes[]] --> "a", "b", "c", "d"
```
