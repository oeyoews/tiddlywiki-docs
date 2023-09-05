import fs from "fs";
import path from "path";
import { promisify } from "util";
import translate from "translate";

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

        // 翻译文件名
        const translatedFileName = await translate(file.replace(".md", ""), {
          from: "zh",
          to: "en",
        });

        const sanitizedFileName = translatedFileName
          .replace(/\s+/g, "-")
          .replace(/[^a-zA-Z0-9-]/g, "");

        // 构建frontmatter
        const frontmatter = `---
title: ${file.replace(".md", "")}
---

`;

        // 写入到content目录中
        const outputFile = path.join(contentDir, `${sanitizedFileName}.md`);
        fs.writeFileSync(outputFile, frontmatter + content);
      }
    }
    console.log("处理完成");
  })
  .catch((err) => {
    console.error("发生错误:", err);
  });