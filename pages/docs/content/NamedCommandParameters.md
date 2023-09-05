---
title: '命名命令参数'
---

<<.from-version "5.1.18">> 大多数的 TiddlyWiki [指令](Commands)，使用基于位置的系统作为参数，其中每个参数必须按照命令定义的精确顺串行出。一些更复杂的命令提供了命名命令参数的替代方案。例如，这里我们提供两个名为 "port" 和 "host" 的参数：

```
--listen port=8090 host=0.0.0.0
```

请注意，参数的顺序无关紧要。

在参数中使用特殊字符需用引号。 Unix、Linux 和 Mac 使用单引号，Windows 则使用双引号：

```
--listen port=8090 username=joe 'password=s3cret(!'
--listen port=8090 username=joe "password=s3cret(!"
```

请注意，引号应用于整个成对的 name=value，而不仅仅是值部分。
