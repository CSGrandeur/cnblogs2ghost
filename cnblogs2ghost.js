var c=new Array();
function cnblogs2ghost()
{
	var UUID = require('./uuid.js');
	var a = require("./cnblogs.json");
	var b = a['rss']['channel']['item'];
	for(var i in b)
	{
		var thetime = new Date(b[i]['pubDate']);
		c[i] = {
			id: i+1,
			uuid: UUID.create().toString(),
			title: b[i]['title'],
			slug: b[i]['title'],
			markdown: b[i]['description'],
			html: b[i]['description'],
			image: null,
			featured: 0,
			page: 0,
			status: "published",
			language: "zh_CN",
			meta_title: null,
			meta_description: null,
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
function writefile()
{cnblogs2ghost()
	var fs = require('fs');
	var txt = JSON.stringify(c);

	//写入文件
	fs.writeFile('posts.json', txt, function (err) {
	    if (err) throw err;
	    console.log('It\'s saved!'); //文件被保存
	});


}
writefile();