# cnblogs2ghost
从博客园cnblogs往ghost迁移

目前用法：从cnblogs的备份导出xml，用网上的工具把xml转为json，nodejs运行cnblogs2ghost.js得到符合ghost格式的json，把这个json的内容替换ghost导出的json的posts部分，再导入ghost。
uuid用的pnegri/uuid-js