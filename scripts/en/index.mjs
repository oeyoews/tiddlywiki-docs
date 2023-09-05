import fs from "fs";
import path from "path";
import { promisify } from "util";

// 设置要处理的目录和文件夹
const tiddlersDir = "./tiddlers";
const contentDir = "./content";

// 创建content目录（如果不存在）
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir);
}

// 使用异步方式读取tiddlers目录
const readdirAsync = promisify(fs.readdir);
readdirAsync(tiddlersDir)
  .then(async (files) => {
    // 循环处理每个md文件
    for (const file of files) {
      if (file.endsWith(".md")) {
        const filePath = path.join(tiddlersDir, file);
        const content = fs.readFileSync(filePath, "utf-8");

        const sanitizedFileName = file
          .replace(/\.md/g, "")
          .replace(/\s+/g, "-")
          .replace(/[^a-zA-Z0-9-]/g, "");

        // 获取md.meta文件路径
        const metaFilePath = path.join(tiddlersDir, `${file}.meta`);

        // 构建frontmatter
        let frontmatter;

        // 如果存在.md.meta文件，读取caption字段
        if (fs.existsSync(metaFilePath)) {
          const metaContent = fs.readFileSync(metaFilePath, "utf-8");
          const captionMatch = metaContent.match(/caption:\s(.+)/);
          if (captionMatch) {
            const caption = captionMatch[1];
            frontmatter = `---
title: '${caption}'
---

`;
          }
        }

        // 写入到content目录中
        const outputFile = path.join(contentDir, sanitizedFileName + ".md");
        frontmatter && fs.writeFileSync(outputFile, frontmatter + content);
      }
    }
    console.log("处理完成");
  })
  .catch((err) => {
    console.error("发生错误:", err);
  });
