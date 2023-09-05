---
title: 'tiddlywiki.files 文件'
---

# 简介

在一个 [TiddlyWiki 文件夹](TiddlyWikiFolders)的子文件夹中的 `tiddlywiki.files`JSON 文件覆写递归扫描条目文件的文件夹的常规。反之， `tiddlywiki.files` 文件指定说明从特定档和文件夹加载条目。

文件的格式为一个具有两个可选属性的对象︰

* **tiddlers** - 一个描述外部文件的对象数组，从文件中读取来重写或修改的任何字段的能力
* **directories** - 一个描述外部目录的对象数组，确定在这些应被处理的目录内的文件筛选器，以及从文件中读取重写或修改的任何字段的能力

请注意，于 [5.1.14 版](Release 5.1.14) 导入此显著增强 `tiddlywiki.files` 的处理。

## 字段重写

`tiddlywiki.files` 文件的  **tiddlers** 和 **directories** 两者皆包含以一个 `fields` 对象重写或自定义字段值的能力。

可以将每个字段指定为''字符串''或''数组''值，直接分配给字段或 <<.from-version "5.1.14">>  **对象**描述如何生成字段的值。该对象中包含以下属性︰

* **source** -（可选）指定字段的来源值的字符串。如果未指定，则使用现有值
    * _filename_ 包含该条目的文件的文件名称
    * _filename-uri-decoded_ 包含该条目的文件的文件名称，套用 [URI 解码](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)
    * _basename_ 包含该条目的文件的不含扩展名的文件名称
    * _basename-uri-decoded_ 包含该条目的文件的不含扩展名的文件名称，套用 [URI 解码](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)
    * _extname_ 包含该条目的文件的扩展名
    * _created_ 包含该条目的文件的创建日期/时间
    * _modified_ 包含该条目的文件的修改日期/时间
    * <<.from-version "5.3.0">> _filepath_ 包含条目的文件的路径，相对于目录的 **path** 属性（仅可用在 **directories** 声明中）
    * <<.from-version "5.3.0">> _subdirectories_ 文件路径中的子目录数组，相对于目录的 **path** 属性（仅可用在 **directories** 声明中）
* **prefix** -（可选）前置于字段值的字符串
* **suffix** -（可选）追加到字段值的字符串

# 条目段落

`tiddlers` 数组中的文件规范支持以下属性：

* `file`: （必要）包含条目数据的文件的绝对或相对路径（相对路径被解释为相对于 `tiddlywiki.files` 文件的路径）
* `isTiddlerFile`: （可选）若为 `true`，则该文件将被当作[条目文件](TiddlerFiles)，并将其反串行化以提取条目。否则，该文件的原始内容不做任何解析被分配给 `text` 字段。
* `fields`: （可选）一个包含覆写或自定义条目文件中提供的字段值的对象（见上文）
* `prefix` & `suffix`:（可选）指定字符串的首码和尾码至条目的 `text` 字段
*> 请注意这里提供一个 **prefix** 等于设置  **fields** 对象的 `text` 字段为 `{"prefix":"<prefixvalue>"}`。

# 目录段落

**directories** 数组中的目录规范可采取下列形式︰

* 一个''字符串''，指定包含条目文件的目录的绝对或相对路径（相对路径被解译为相对于 `tiddlywiki.files` 文件的路径）。目录是以递归搜索条目文件
* <<.from-version "5.1.14">> 具有以下属性的''对象''︰
    * **path** -（必要）包含条目文件的目录的绝对或相对路径（相对路径被解译为相对于 `tiddlywiki.files` 文件的路径）。 请注意，默认目录不是递归地搜索；子目录会被忽略
    * **filesRegExp** -（可选）一个[正则表达式 ](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions)，匹配在应被处理目录内的文件的文件名称
    * **isTiddlerFile** -（必要）若为 `true`，则该文件将被当作[条目文件](TiddlerFiles)，并将其反串行化以提取条目。否则，该文件的原始内容不做任何解析被分配给 `text` 字段。
    * **isEditableFile** - <<.from-version "5.1.23">>（可选）若为 `true`，则对条目的更改将保存回源文件案。只要条目不生成来自 $:/config/FileSystemPath 筛选器的结果，则它将保存回源文件案路径，如果从筛选器返回结果，它将覆盖生成的最终文件路径。 
    * **searchSubdirectories** - <<.from-version "5.1.23">>（可选）若为 `true`，将递归搜索 _path_ 的所有子目录，以查找与（可选）//filesRegExp// 匹配的文件。如果没有提供 _filesRegExp_，将加载 _path_ 的所有子目录中的所有文件。通过 _source_ 属性 _filename_ （见上文）生成的条目名称将仅包括文件名，而不包括路径的任何子目录。如果这导致多个文件以相同的条目名称加载，则只有在该条目名称下加载的最后一个文件才会在内存中。为了防止这种情况，您可以使用 _filepath_ 属性代替 _filename_。或者，您可以包括多个目录对象，并使用 _prefix_ 或 _suffix_ 沿着 _source_ 属性自定义 <<.field title>> 字段。
    * **fields** -（必要）一个对象，包含重写或自定义条目文件中提供的字段的值（见上文）

字段也可被重写特定文件，由创建具有相同的名称加上尾码 `.meta` 的文件 -- 请参阅 TiddlerFiles。

# 示例

这些示例 `tiddlywiki.files` 必须放在[维基文件夹](TiddlyWikiFolders)自己的子目录中。

还有几个 `tiddlywiki.files` 文件的示例在主要的 [TtiddlyWiki 5 GitHub 保存库](https://github.com/Jermolene/TiddlyWiki5)。

## 导入 PDFs 的文件夹

本示例从由相对路径指定的文件夹检索所有扩展名 `.pdf`。此路径以 "../../../" 开头，表示此配置文件所在的文件夹上三层目录。每一条目用以下字段设置为[延迟加载](LazyLoading)︰

* **title** - 设为 PDF 档的基于 URI 解码的文件名称。[URI 解码](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)允许字符如 "/" 被 URI 编码为 "%2F" 而包含于标题名称
* **created** - 设为 PDF 档的创建日期/时间
* **modified** -  设为 PDF 档的修改日期/时间
* **type** - 设为 `application/pdf`
* **tags** - 设为 `$:/tags/AttachedFile`
* **text** - 设为空字符串
* **_canonical_uri** - 设为字符串 "pdfs/" 串联文件名称

```
{
    "directories": [
        {
            "path": "../../../input/pdfs",
            "filesRegExp": "^.*\\.pdf$",
            "isTiddlerFile": false,
            "fields": {
                "title": {"source": "basename-uri-decoded"},
                "created": {"source": "created"},
                "modified": {"source": "modified"},
                "type": "application/pdf",
                "tags": ["$:/tags/AttachedFile"],
				"text": "",
                "_canonical_uri": {"source": "filename", "prefix": "pdfs/"}
            }
        }
    ]
}
```

## 导入一个文本文件的文件夹

本示例从相对路径指定的文件夹中检索具有 `.txt` 的扩展名的所有文件。此文件夹位于维基的基本文件夹中，当前的设置档位于维基的 "tiddlers/" 文件夹的文件夹中。因此，在这种情况下，路径以 "./../" 遍历两层文件夹，然后向下遍历到 "externalnotes/" 文件夹。每个条目都设置有以下字段：

* **title** - 设置为文本档的 URI 解码的基本文件名。[URI 解码](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent) 允许 URI 将 "/" 等字符包含在条目名称中，这些字符将其编码为 "%2F"
* **created** - 设置为文本档的创建日期/时间
* **modified** - 设为文本档的修改日期/时间
* **type** - 设置为 `text/plain`
* **tags** - 设置为 `[note](#note) [externalnote](#externalnote) [.txt](#.txt)` (使用数组表示法)
* **text** - 未设置，因此文件的内容加载为 <<.field text>> 字段

```
{
    "directories": [
        {
            "path": "../../externalnotes",
            "filesRegExp": ".+\\.txt",
            "isTiddlerFile": false,
            "isEditableFile": true,
            "fields": {
                "title": {"source": "basename-uri-decoded"},
                "created": {"source": "created"},
                "modified": {"source": "modified"},
                "type": "text/plain",
                "tags": ["note", "externalnote", ".txt"]
            }
        }
  ]
}
```

这会将 `../../externalnotes/` 目录中的所有文本档，当作单个条目加载维基中。这些可以是各种标记语言的代码段的集合。然后，可以更改每个条目的 `type` 字段，匹配其语言。例如，维基文本的 "text/vnd.tiddlywiki"，或 markdown 档的 "text/markdown" 。然后，使用 $:/config/FileSystemPaths 和 $:/config/FileSystemExtentions 条目与以下行，我们可以导致这些条目的任何更改，并将 "*.txt" 文件与附随的 "*.txt.meta" 文件，保存回其开始的目录。然后，当服务器重新启动时，这些 meta 文件将依需要生成，并且将取代从配置 "tiddlywiki.file" 文件（如条目的 `type` 字段）生成的任何字段。

从[自定义条目文件命名](Customising Tiddler File Naming)中的示例，我们看到 $:/config/FileSystemPaths 条目中的最终的 `[![tag[externalnote]addprefix[wiki/]]` 筛选器，排除具有 `externalnotes` 标签的所有条目（与早期筛选器不匹配）。这些条目从启动时生成的 $:/config/OriginalTiddlerPaths 中检索其文件路径。

然后，在 $:/config/FileSystemExtensions 条目中的 `[tag[.txt]then[.txt]]` 筛选器，强制将所有这些条目保存回磁盘为 *.txt 和随附的 *.txt.meta 文件（将一般的条目型，重写为文件类型映射）。在这种情况下，允许 ~Tiddlywiki 维基文本的片段或 markdown-text 保存回到 "文本" *.txt 文件

## 导入和自动标签图像

此示例将 `files` 目录及其所有子目录中的所有图像文件导入为外部图像条目，并根据其文件路径为其设置标签。每个条目都设置了以下字段：

* **title** - 设置为文本文件的 URI 解码基本文件名称
* **created** - 设置为文本文件的创建日期/时间
* **modified** - 设置为文本文件的修改日期/时间
* **type** - 设置为 `image/jpeg`。目前无法从文件中推断出图条目的正确 ContentType，但是 `image/jpeg` 条目即使使用 png 或 gif 图像也应该正确呈现。作为替代方案，您可以分别使用 `image/jpeg`、`image/png` 和 `image/gif` 类型，为 jpg、png 和 gif 文件创建单独的定义。
* **tags** - 生成基于图像相对于父目录（在本例中为`files` ）的路径。例如，在 `files/photos` 中的图像将设其标签为 `photos`，在 `files/photos/family` 中的图像将设其标签为 `photos` 和 `family`，而在根 `files` 目录中的图像将没有标签。
* **text** - 设置为空字符串
* **_canonical_uri** - 设置为图像相对于维基根目录的完整文件路径


```
{
    "directories": [
        {
            "path": "../../files/",
            "filesRegExp": "^.*\\.(?:jpg|jpeg|png|gif)$",
            "isTiddlerFile": false,
	        "searchSubdirectories": true,
            "fields": {
                "title": {"source": "basename-uri-decoded"},
                "created": {"source": "created"},
                "modified": {"source": "modified"},
                "type": "image/jpeg",
                "tags": { "source": "subdirectories" },
                "text": "",
                "_canonical_uri": { "source": "filepath", "prefix": "files/" }
            }
        }
    ]
}
```