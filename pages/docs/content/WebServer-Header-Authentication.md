---
title: '网页服务器功能参数身份验证'
---

功能参数身份验证是一种网页集成技术，使外部实体可以安全地，将经过身份验证的用户的详细信息，传递给应用程序。

若配置 [authenticated-user-header](WebServer Parameter: authenticated-user-header)，则激活功能参数身份验证

## 在 SSO 中的使用

功能参数身份验证通常用于企业环境中的 "单一登录"。进行功能参数身份验证时，不会提示用户在 ~TiddlyWiki 上输入用户名和密码。而是用户需要在 SSO 代理服务器上登录。当用户向 SSO 代理服务器验证自己时，代理服务器将用户请求重定向到 ~TiddlyWiki 服务器，并使用包含用户名的附加请求标头。然后 ~TiddlyWiki 服务器能够使用此请求标头的值来识别用户。 
