/**
 * Created by Administrator on 2017/2/26 0026.
 */
var http=require('http');
var querString=require('querystring');
http.createServer(function (req,res) {
    var getData={};
    if(req.url.indexOf('?')>-1){
        var arr1=req.url.split('?');
        getData=querString.parse(arr1[1]);
        console.log(getData);
    }
    res.end('hello')
}).listen(8080);