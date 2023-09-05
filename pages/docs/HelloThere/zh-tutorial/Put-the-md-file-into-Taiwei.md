---
title: 将md文件放到太微中
---

总览：就是在tiddlers文件夹下面，新建一个文件夹，然后再在此新建的文件夹下面新建一个tiddlywiki.files文件，然后把markdown文件全部和tiddlywiki.files放一起。重启服务就搞定了。

TiddlyWiki知识库目录树（“.”为根目录）

```
.
├─.github
│  └─workflows
├─plugins
│  └─github-external-image
├─public
├─scripts
└─tiddlers
    └─mdocs
```

在tiddlers文件夹下建立一个mdocs文件夹。如目录树所示。

在mdocs文件夹中创建tiddlywiki.files文件。文件内容如下：

```json
{
    "directories": [
        {
            "path": ".",
            "filesRegExp": "^.*\\.md$",
            "isTiddlerFile": false,
            "isEditableFile": true,
            "searchSubdirectories": true,
            "fields": {
                "title": {"source": "basename"},
                "created": {"source": "created"},
                "modified": {"source": "modified"},
                "type": "text/markdown"
            }
        }
  ]
}
```

再将markdown类型的文件放到mdocs文件夹中，之后重启服务就可以看到太微中出现md的文件条目了。条目名为基本文件名，无后缀。


推荐使用，导入Obsidian Vault插件（Import Obsidian Vault in TiddlyWiki5）：<https://github.com/tiddly-gittly/tidgi-obsidian-manager> —— [Obsidian-Vault插件：导入Ob库到你的TiddlyWiki中](#Obsidian-Vault%E6%8F%92%E4%BB%B6%EF%BC%9A%E5%AF%BC%E5%85%A5Ob%E5%BA%93%E5%88%B0%E4%BD%A0%E7%9A%84TiddlyWiki%E4%B8%AD)