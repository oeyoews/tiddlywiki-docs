---
title: '网页服务器授权'
---

**授权**是特定用户可以访问哪些资源的判定处理。它发生在[认证](WebServer Authentication)已确定用户的身份。TiddlyWiki 的网页服务器实现了一个简单的授权方案，允许独立控制谁对维基的读写访问权。

网页服务器参数 [admin](WebServer Parameter: admin)、[readers](WebServer Parameter: readers) 和 [writers](WebServer Parameter: writers)，每个都包含一个逗号分隔的//主体 的清单// (即用户名或某些特殊令牌)，其应分别具有读或写的访问权限。

可用的特殊令牌有：

* **(anon)** - 标示所有匿名用户
* **(authenticated)** - 标示所有经过身份验证的用户

## 管理功能

<<.tip """The **(anon)** 令牌为 [admin](WebServer Parameter: admin) 的无效参数。""">>

目前，没有服务器功能受限于未修改的 [Tiddlywiki 服务器](WebServer)中的 **admin** 授权用户。第三方插件可以利用这一点，将路由或命令限制为授权用户的子集。

## 唯读模式

当现行用户无权写入当前维基时，将使用唯读模式。

与添加或编辑内容有关的用户界面功能，在唯读模式下将被禁用：

* **拷贝**、''删除''、''添加子条目'' 和 **添加子日志** 条目工具栏按钮
* **导入**、''条目管理''、''添加条目'' **添加图像** 和 **添加日志** 页面控制按钮

当使用唯读模式时，条目 $:/status/IsReadOnly 设置为 `yes`。

## 示例

这些示例使用[凭证](WebServer Parameter: credentials)参数，用于指定包含用户名和密码的文件位置。

在第一个示例中，允许用户 "joe" 和 "mary" 进行读取，并仅限 "mary" 具写入权限：

```
tiddlywiki mywikifolder --listen credentials=myusers.csv readers=joe,mary writers=mary
```

在下列示例中，对所有经过身份验证的用户，授予读取权限，但只有 "mary" 被授予写入权限：

```
tiddlywiki mywikifolder --listen credentials=myusers.csv "readers=(authenticated)" writers=mary
```

在以下示例中，授予所有经过身份验证的用户，读取和写入访问权限，但仅 "mary" 被授予管理员访问权限：

```
tiddlywiki mywikifolder --listen credentials=myusers.csv "readers=(authenticated)" "writers=(authenticated)" admin=mary
```