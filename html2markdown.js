//cnblogs导出的文章html转换为markdown
//作者：CSGrandeur
function d_h(html)
{
	//处理<hx></hx>
	var sp = "";
	for(var i = 1; i <= 6; i ++)
	{
		sp = sp + "#";
		var d_hx = new RegExp("<h"+i+".*?>(.*?)<\/h"+i+">", "g");
		html = html.replace(d_hx, sp+"$1\n");
	}
	return html;
}
function d_ec(html)
{
	// var ec = require("./ec.json");
	for(var key in ec)
	{
		var d_ec = new RegExp(key, "g");
		html = html.replace(d_ec, ec[key]);
	}
	return html;
}
module.exports = function(html, options)
{
	//如果有参数2md，则html转markdown。针对cnblogs的，对其他html不一定有效。
	if(options == '2md')
	{
		//去掉代码行号，因为这个行号放到ghost里会影响复制代码。。。
		var numremove = /<span style\=\"color: #008080;\">.*?<\/span>/g;
		html = html.replace(numremove, "");
		//先去掉所有<xxx>标签，但保留<pre>、<a>、<img>、<hx>
		var xxxremove = /<(?!((li)|(pre)|(code)|(a)|(h)|(img)|(\/p)|(\/li)|(\/pre)|(\/code)|(\/a)|(\/h)|(\/img))).*?>/g;
		html = html.replace(xxxremove, "");
		//处理</p>
		var d_p = /<\/p>/g;
		html = html.replace(d_p, "\n");
		//处理<a></a>
		var d_a = /<a.*?href=['"](.*?)['"].*?>(.*?)<\/a>/g;
		html = html.replace(d_a, "[$2]($1)\n");
		//处理<img />
		var d_img = /<img.*?src=['"](.*?)['"].*?>/g;
		html = html.replace(d_img, "![]($1)\n");
		//处理<pre></pre>
		var d_pre = /<pre>([\s\S]*?)<\/pre>/g;
		html = html.replace(d_pre, "```\n$1\n```\n");
		//处理<li></li>
		var d_li = /<li.*?>(.*?)<\/li>/g;
		html = html.replace(d_li, "*"+"$1\n");
		//处理<hx></hx>
		html = d_h(html);
		//cnblogs里有很多 “View Code”
		var d_viewcode = /View Code/g;
		html = html.replace(d_viewcode, "\n");
		//处理html转义字符
		html = d_ec(html);

		//也许有太多换行
		var d__n = /\s+\n/g;
		html = html.replace(d__n, "\n\n");
	}

	return html;
}


var ec = {
	"&quot;"	:	"\"",
	"&amp;"		:	"&",
	"&lt;"		:	"<",
	"&gt;"		:	">",
	"&nbsp;"	:	" ",
	"&iexcl;"	:	"?",
	"&cent;"	:	"￠",
	"&pound;"	:	"￡",
	"&curren;"	:	"¤",
	"&yen;"		:	"￥",
	"&brvbar;"	:	"|",
	"&sect;"	:	"§",
	"&uml;"		:	"¨",
	"&copy;"	:	"©",
	"&ordf;"	:	"a",
	"&laquo;"	:	"?",
	"&not;"		:	"?",
	"&shy;"		:	"/x7f",
	"&reg;"		:	"®",
	"&macr;"	:	"ˉ",
	"&deg;"		:	"°",
	"&plusmn;"	:	"±",
	"&sup2;"	:	"2",
	"&sup3;"	:	"3",
	"&acute;"	:	"′",
	"&micro;"	:	"μ",
	"&para;"	:	"?",
	"&middot;"	:	"·",
	"&cedil;"	:	"?",
	"&sup1;"	:	"1",
	"&ordm;"	:	"o",
	"&raquo;"	:	"?",
	"&frac14;"	:	"?",
	"&frac12;"	:	"?",
	"&frac34;"	:	"?",
	"&iquest;"	:	"?",
	"&Agrave;"	:	"À",
	"&Aacute;"	:	"Á",
	"&circ;"	:	"Â",
	"&Atilde;"	:	"Ã",
	"&Auml"		:	"Ä",
	"&ring;"	:	"Å",
	"&AElig;"	:	"Æ",
	"&Ccedil;"	:	"Ç",
	"&Egrave;"	:	"È",
	"&Eacute;"	:	"É",
	"&Ecirc;"	:	"Ê",
	"&Euml;"	:	"Ë",
	"&Igrave;"	:	"Ì",
	"&Iacute;"	:	"Í",
	"&Icirc;"	:	"Î",
	"&Iuml;"	:	"Ï",
	"&ETH;"		:	"Ð",
	"&Ntilde;"	:	"Ñ",
	"&Ograve;"	:	"Ò",
	"&Oacute;"	:	"Ó",
	"&Ocirc;"	:	"Ô",
	"&Otilde;"	:	"Õ",
	"&Ouml;"	:	"Ö",
	"&times;"	:	"&times;",
	"&Oslash;"	:	"Ø",
	"&Ugrave;"	:	"Ù",
	"&Uacute;"	:	"Ú",
	"&Ucirc;"	:	"Û",
	"&Uuml;"	:	"Ü",
	"&Yacute;"	:	"Ý",
	"&THORN;"	:	"Þ",
	"&szlig;"	:	"ß",
	"&agrave;"	:	"à",
	"&aacute;"	:	"á",
	"&acirc;"	:	"â",
	"&atilde;"	:	"ã",
	"&auml;"	:	"ä",
	"&aring;"	:	"å",
	"&aelig;"	:	"æ",
	"&ccedil;"	:	"ç",
	"&egrave;"	:	"è",
	"&eacute;"	:	"é",
	"&ecirc;"	:	"ê",
	"&euml;"	:	"ë",
	"&igrave;"	:	"ì",
	"&iacute;"	:	"í",
	"&icirc;"	:	"î",
	"&iuml;"	:	"ï",
	"&ieth;"	:	"ð",
	"&ntilde;"	:	"ñ",
	"&ograve;"	:	"ò",
	"&oacute;"	:	"ó",
	"&ocirc;"	:	"ô",
	"&otilde;"	:	"õ",
	"&ouml;"	:	"ö",
	"&divide;"	:	"÷",
	"&oslash;"	:	"ø",
	"&ugrave;"	:	"ù",
	"&uacute;"	:	"ú",
	"&ucirc;"	:	"û",
	"&uuml;"	:	"ü",
	"&yacute;"	:	"ý",
	"&thorn;"	:	"þ",
	"&yuml;"	:	"ÿ",
	"&mdash;"	:	"——",
	"&ldquo;"	:	"(",
	"&rdquo;"	:	")"
};