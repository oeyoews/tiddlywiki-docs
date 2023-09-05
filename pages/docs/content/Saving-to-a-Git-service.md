---
title: '保存至 Git 服务'
---

TiddlyWiki 可以在单个文件配置中，直接保存变更到 GitHub 存储库。

保存到 Git 服务配置在[控制台]($:/ControlPanel)的 "保存" 选项卡下的 **Git 服务保存模块** 选项卡中。支持以下设置：

* **Type** - (必要) 服务的类型 (例如 GitHub、GitLab)
* **Username** - (必要) 用于保存变更的 Git 服务帐户的用户名
* **Password** - (必要) 指定帐户的密码、OAUTH 令牌或个人访问的令牌。请注意，GitHub 已弃用密码身份验证，允许的身份验证方法显示在 [API 文档](https://developer.github.com/v3/#authentication)
* **Repository** - (必要) Git 存储库的名称。必须同时指定拥有者名称和存储库名称。例如, `Jermolene/TiddlyWiki5`
* **Branch** - (可选) 要在 Git 存储库中使用的分支名称。默认值为 `main` (~GitHub) 或 `master` (~GitLab)
* **Path** - (可选) 目标文件的路径。默认值为 `/`
* **Filename** - (必要) 目标文件的文件名称

注意事项

* Git 服务的令牌或密码持续存放于浏览器本机保存区中。如果使用共用计算机，请务必清除密码。使用个人访问的令牌进行身份验证，提供了额外的安全层：如果意外公开访问的令牌，则可以在不需要重置帐户密码的情况下撤销该令牌

---

有关 ~GitHub 保存模块的更多详细信息，请参阅：[GitHub Saver Tutorial by Mohammad](#GitHub%20Saver%20Tutorial%20by%20Mohammad)