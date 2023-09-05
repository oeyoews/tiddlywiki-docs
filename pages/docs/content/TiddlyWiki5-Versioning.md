---
title: '版号说明'
---

TiddlyWiki5 的每个版本都由符合 [语义版本 2.0.0](http://semver.org/) 标准的版号标识。

# TiddlyWiki 核心版本

根据标准：

```
Given a version number MAJOR.MINOR.PATCH, increment the:

MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards-compatible manner, and
PATCH version when you make backwards-compatible bug fixes.
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.
```

## 开发和试用版

而在开发版 TiddlyWiki5 使用预发布标签 "alpha"，例如：

```
5.0.1-alpha
```

每一个新的开发或试用版本将冲撞 `PATCH` 版号。这违背了严谨的版本语义，因为 `PATCH` 增量应该保留给兼容的改变。

_注意，之前的 **5.0.1-alpha**，TiddlyWiki5 使用的版号格式为 **5.0.0-alpha.19**。这种变化是为了使升级机制从版本信息识别插件的更新。_

## 预览版

在开发过程中，当一个新的版本正在准备中，预览版的标签设置为 `prerelease`。

# 插件版本

版本号

TiddlyWiki5 使用附加到插件的版本信息来确定升级或导入过程中的其中两个插件何者是最新版。进行这些比较时，该预发布标签被忽略。
