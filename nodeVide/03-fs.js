/**
 * Created by Administrator on 2017/2/25 0025.
 */
var http=require('http');
var fs=require('fs');

// fs.readFile('./file/data.txt',function (err,data) {
//     err?console.log('读取文件失败:'+err):console.log(data.toString());
// });
var server=http.createServer(function (req,res) {
    var file_name='./file'+req.url;
    fs.readFile(file_name,function (err,data) {
        if(err){
            console.log(err);
            res.write('<h1>404</h1>')
        }else{
            res.write(data);
        }
        res.end();
    })
});
server.listen(8080);