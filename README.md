# cnblogs2ghost
从博客园cnblogs往ghost迁移
##安装
```bash
$ npm install cnblogs2ghost
```
##使用
cnblogs的备份功能导出xml，再用任意工具转换为json。为避免这个过程出什么幺蛾子，就没把xml转json集成到这个项目中。
```javascript
var cnblogs2ghost = require('cnblogs2ghost');
cnblogs2ghost(filename, option);
```
option为空则完整搬运cnblogs导出的每篇日志的html。
option为"2md"则将所有html转换为markdown。这个过程难以完美转换，根据需求选择。
例如做好的文件在 ./cnblogs.json 
```javascript
$ npm install cnblogs2ghost
$ node
> var cnblogs2ghost = require('cnblogs2ghost');
> cnblogs2ghost('cnblogs.json', '2md');
```

转换后会在当前目录生成posts.json文件，此文件内容对应ghost导出的posts部分，替换之后导入ghost即可。

ghost导出的文件格式是：
> {
> 	"db": [{
> 		"meta": {
> 		},
> 		"data": {
> 			"posts": [{}],
> 			"users": [{}]
> 			...
> 	}]
> }

uuid用的pnegri/uuid-js