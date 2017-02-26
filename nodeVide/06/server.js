/**
 * Created by Administrator on 2017/2/26 0026.
 */
var http=require('http');
var fs=require('fs');
var queryString=require('querystring');
var urlLib=require('url');

var users={};
var server=http.createServer(function (req,res) {
    //解析数据
    var str='';
    req.on('data',function (data) {
        str+=data;
    });
    req.on('end',function () {
        var obj=urlLib.parse(req.url,true);

        var url=obj.pathname;
        var GET=obj.query;
        var POST=queryString.parse(str);

        //区分一个接口、文件
        if(url=='/user'){//接口
            switch (GET.act){
                case 'reg':
                    //检查用户名是否存在
                    if(users[GET.user]){
                        res.write('{"ok":false, "msg":"此用户已存在"}')
                    }else{
                        //插入users
                        users[GET.user]=GET.password;
                        res.write('{"ok":true, "mag":"注册成功"}');
                    }
                    break;
                case 'login':
                    //检查用户名是否存在
                    if(users[GET.user]==null){
                        res.write('{"ok":false, "msg":"此用户不存在"}')
                    }else if(users[GET.user]!=GET.password){
                        res.write('{"ok":false, "msg":"用户名或密码错误"}');
                    }else{
                        res.write('{"ok":true, "msg":"登陆成功"}');
                    }
                    break;
                default:
                    res.write('{"ok":false,"msg":"未知的act"}');

            }
            res.end();
        }else{//文件
            //读取文件
            var file_name='./www'+url;
            fs.readFile(file_name,function (err,data) {
                if(err){
                    res.write('<h1 align="center">404</h1>')
                }else{
                    res.write(data);
                }
                res.end();
            })
        }
    })
});
server.listen(8080);