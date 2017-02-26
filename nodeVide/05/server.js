/**
 * Created by Administrator on 2017/2/26 0026.
 */
var http=require('http');
var queryString=require('querystring');
http.createServer(function (req,res) {
    var str='';
    var i=0;
    req.on('data',function (data) {
        console.log('第'+(i++)+'次收到的数据');
        str+=data;
    });
    req.on('end',function () {
        console.log(queryString.parse(str));
    })
    res.end('hello');
}).listen(8080);