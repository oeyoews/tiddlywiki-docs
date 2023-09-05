---
title: '自定义条目文件命名'
---

默认情况下，一个 [TiddlyWiki 于 Node.js](TiddlyWiki on Node.js) 的实例使用一个[维基文件夹](TiddlyWikiFolders)，并创建新条目文件，通过使用消毒和消除歧义的条目名称作为文件名称。所有文件路径操作都相对于一个 `default-tiddler-location` 其默认为维基文件夹的 `tiddlers/` 目录。可以通过映射维基的 tiddlywiki.info 文件中的路径，使用 `config` 对象中的 `default-tiddler-location` 属性来覆盖此内容。

 `.tid` 的默认文件扩展名用于缺少 `type`字段的条目，或类型为 "text/vnd.tiddlywiki" 的条目。其他类型的条目会根据其 MIME 类型（在启动时定义）保存。

逻辑路径（目录和文件名）和扩展名，都可以通过创建可选的 [$:/config/FileSystemPaths](#%24%3A/config/FileSystemPaths) 和 [$:/config/FileSystemExtensions](#%24%3A/config/FileSystemExtensions) 来独立自定义。

# 文件系统路径

可以通过创建包含一个或多个[筛选器表达式](Filter Syntax) 的 [$:/config/FileSystemPaths](#%24%3A/config/FileSystemPaths) 条目，来自定义逻辑路径，每列一个。每次将条目保存到磁盘时，都会依序针对每个筛选器进行测试，并且第一个筛选器的第一个输出，用于生成任何输出，被视为用于条目文件的逻辑路径。如果逻辑路径已更改，则将创建一个新文件，并删除旧文件。

条目仅限于写入至[维基文件夹](TiddlyWikiFolders)，在 `default-tiddler-location` 设置中定义的路径，或保存在 $:/config/OriginalTiddlerPaths 条目中的特定路径 （详见 [tiddlywiki.files 文件](tiddlywiki.files Files)）。将条目保存到磁盘的任何错误，其逻辑路径不会以维基文件夹的路径开始，这是最常见的错误，会导致通过 Javascript 的 `encodeURIComponent()` 方法对文件路径进行编码，并且将条目保存为此档，在维基文件夹的 `default-tiddler-location` 中。

逻辑路径不包括磁盘上的扩展名（见下文），且可以使用 `/` 或 `\` 作为目录分隔符号（在生成物理路径时，此路径将被替换为 ~TiddlyWiki 运行所在平台的正确分隔符号）。如果所有筛选器都不匹配，则逻辑路径只是将标题中的所有字符 `/\<>~:"|?*^` 的匹配项替换为 `_`，以确保生成的路径，在所有受支持的平台上都是合法的。逻辑路径也限制为 200 个字符。如果具有此名称的文件已存在，则一个空格和数字将追加到最终的文件路径中，并且数字会递增，直到找到未使用的路径。

## 示例

```
[is[system]!has[draft.of]removeprefix[$:/]addprefix[_system/]]
[is[draft]search-replace:g:regexp[/|\\],[_]addprefix[drafts/]]
[tag[task]addprefix[mytasks/]]
[!tag[externalnote]addprefix[wiki/]]
```

<<.note "所有路径都相对于维基的 `default-tiddler-location`。">>

这将存放新创建的系统条目于 `./_system` (去除 `$:/` 首码之后)，不是其他条目的草稿。接下来，所有草稿名称中的路径分隔字符都替换为 `_`，并存放于 `./drafts/`。，标签为 [task]] 的条目，则存放于子目录 `./mytasks`。最后，标签不为 "externalnote" 的所有条目，将符合最终的 `[!tag[externalnote]addprefix[wiki/]]` 将其存放在 `/wiki/`。在此示例中，使用 [[tiddlywiki.files 文件](tiddlywiki.files_Files) 导入了具有标签 "externalnote" 的条目，其 "isEditableFile" 标志设置为 `true`，导致服务器记住其在 $:/config/OriginalTiddlerPaths 条目中的源文件案路径。

每当一个条目生成一个 $:/config/FileSystemPaths 筛选器匹配时，条目名称中的任何 `/` 或 `\` 都映射到路径分隔符号。使用上述筛选器，非系统、非草稿条目 `some/thing/entirely/new`（没有标签）将保存到 `./wiki/some/thing/entirely/new.tid`（即，名为 `entirely/` 的目录中的文件 `new.tid`）。因此， $:/config/FileSystemPaths 本身的最终结果为 `./_system/config/FileSystemPaths.tid` 或 `.\_system\config\FileSystemPaths.tid`，取决于平台。

# 文件系统扩展名

通常，磁盘上条目的文件系统扩展名，取决于（<<.field text>> 字段以外的，包含换行符号的字段值，或以空格开头或结尾的字段值，在这种情况下，使用单一文件 ".json" 条目文件格式。

如果条目没有这样的字段值，则参考 <<.field type>> 字段以查找匹配的文件类型，'. tid' 则用于无类型值的条目。引导引擎在 [$:/boot/boot.js](#%24%3A/boot/boot.js) 条目中，定义了一组这些条目类型到文件类型的关系。搜索 `// Add file extension information`，以寻找定义这些关系的代码部分。

可以通过创建包含一个或多个[筛选表达式](Filter Syntax)的条目 [$:/config/FileSystemExtensions](#%24%3A/config/FileSystemExtensions)，来自定义个别条目文件的扩展名，每个都在其自己的一行。每次将条目将保存到磁盘时，都会根据这些筛选器进行测试，并且以第一个筛选器的第一个输出，生成任任何输出，这些输出将用作条目文件的扩展名。扩展名应始终以前导句点开始（参见示例）。 如果没有筛选器匹配，则使用默认扩展名。如果扩展名已更改，则创建一个新档，并删除旧档。

<<.note """一个 ".tid" 的结果强制将条目当作单档文本条目写入磁盘。".json" 的结果强制将条目当作 json 格式的单档条目写入磁盘（数组中的单个条目字段对象），而不是当作类型为 "application/json" 的条目。所有其他已识别的文件类型，都将使用其定义的扩展名保存，''text'' 字段以外的所有字段，则以同文件名的 *.meta 文件保存。""">>

## 示例

```
[tag[.txt]then[.txt]]
[tag[.json]then[.json]]
[tag[.tid]then[.tid]]
```

这将导致具有标签 ".txt" 的所有条目，都保存在取决于文件系统路径筛选器的文件路径上，但其 <<.field text>> 字段保存为一个 *.txt 文件，且其他所有字段保存为 *.txt.meta 文件。

接下来，所有带有 ".json" 标签的条目，保存为 *.json 文件。最后，所有带有标签 ".tid" 的条目，均保存为单一文件。如果一个条目不匹配任何筛选器，则将使用取决于条目 `type` 字段的默认扩展名。
