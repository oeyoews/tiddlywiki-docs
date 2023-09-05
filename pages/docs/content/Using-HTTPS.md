---
title: '使用 HTTPS'
---

默认情况下，TiddlyWiki 的网页服务器，通过不安全的 HTTP 协定，提供服务资源。如果只在私有的受信任的网络中使用，则风险极小，但在许多情况下，最好使用安全的 HTTPS 连接。

HTTPS 要求服务器通过 "凭证" 文件和 "密钥" 文件进行配置，并由 [tls-cert](WebServer Parameter: tls-cert) 和 [tls-key](WebServer Parameter: tls-key) 参数配置。

<<.from-version "5.2.2">> 可选的 [tls-passphrase](WebServer Parameter: tls-passphrase) 参数允许服务器使用已生成的具有密码短语/密码的凭证文件。

凭证可以从凭证授权单位 (如 <https://letsencrypt.org>/) 获得，也可以创建自我签章凭证进行内部测试。

可使用受欢迎的 [openssl](https://www.openssl.org/) 程序，创建所需的凭证文件：

```
openssl req -newkey rsa:2048 -new -nodes -keyout mywikifolder/key.pem -out mywikifolder/csr.pem
openssl x509 -req -days 365 -in mywikifolder/csr.pem -signkey mywikifolder/key.pem -out mywikifolder/server.crt
tiddlywiki mywikifolder --listen username=joe password=bloggs tls-key=key.pem tls-cert=server.crt
```

如果使用一个 [tls-passphrase](WebServer Parameter: tls-passphrase) 生成凭证文件，命令将更改如下：

* 删除 `-nodes` 旗标，其指定 "no encryption"
* 将以下命令的 `-passout` 和 `-passin` 参数中的 `TLS_PASSPHRASE` 替换为您选择的字符串。

这是将密码传递给凭证实用程序的最简单，但__最少的安全的方法__。请参阅在 openssl 实用程序文档中的 [this Stack Exchange anwser on openssl certificates](https://security.stackexchange.com/questions/106525/generate-csr-and-private-key-with-password-with-openssl) 、[openssl](https://www.openssl.org/docs/man1.0.2/man1/openssl.html) 和 [openssl-passphrase-options](https://www.openssl.org/docs/manmaster/man1/openssl-passphrase-options.html) 页面。

```
openssl req -newkey rsa:2048 -passout pass:TLS_PASSPHRASE -new -keyout mywikifolder/key.pem -out mywikifolder/csr.pem -passout pass:TLS_PASSPHRASE
openssl x509 -req -days 365 -in mywikifolder/csr.pem -signkey mywikifolder/key.pem -out mywikifolder/server.crt -passin pass:TLS_PASSPHRASE
tiddlywiki mywikifolder --listen username=joe password=bloggs tls-key=key.pem tls-cert=server.crt tls-passphrase=TLS_PASSPHRASE
```