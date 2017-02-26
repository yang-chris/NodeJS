/**
 * Created by Administrator on 2017/2/26 0026.
 */
/**
 * Created by Administrator on 2017/2/26 0026.
 */
var http=require('http');
var libURL=require('url');
http.createServer(function (req,res) {

    var obj=libURL.parse(req.url,true);
    var getData=obj.query;
    var getURL=obj.pathname;
    console.log(getData);
    res.end('hello')
}).listen(8080);