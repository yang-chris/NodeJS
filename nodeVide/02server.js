/**
 * Created by Administrator on 2017/2/25 0025.
 */
var http=require('http');
var server=http.createServer(function (req,res) {
    res.end('<h1>hello world</h1>');
    console.log(req.url);
});
server.listen(8080);
console.log('服务启动')