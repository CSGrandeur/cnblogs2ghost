var c=new Array();
function readfile(filename)
{
	var rf = require("fs");  
	var data = rf.readFileSync(filename,"utf-8");  
	return JSON.parse(data);
}
var doit = function(filename, cn2md)
{
	var UUID = require('./uuid.js');
	var h2m = require('./html2markdown.js');

	var a = readfile(filename);
	var b = a['rss']['channel']['item'];
	for(var i in b)
	{
		var thetime = new Date(b[i]['pubDate']);
		c[i] = {
			"id": i+1,
			"uuid": UUID.create().toString(),
			"title": b[i]['title'],
			"slug": b[i]['title'],
			"markdown": h2m(b[i]['description'], cn2md),
			"html": "",
			"image": null,
			"featured": 0,
			"page": 0,
			"status": "published",
			"language": "zh_CN",
			"meta_title": null,
			"meta_description": null,
			"author_id": 1,
			"created_at": thetime.getTime(),
			"created_by": 1,
			"updated_at": thetime.getTime(),
			"updated_by": 1,
			"published_at": thetime.getTime(),
			"published_by": 1
		}
	}

}
module.exports = function(filename, cn2md)
{
	doit(filename, cn2md);
	var fs = require('fs');
	var txt = JSON.stringify(c);

	//写入文件
	fs.writeFile('posts.json', txt, function (err) {
	    if (err) throw err;
	    console.log('It\'s saved!'); //文件被保存
	});
}
