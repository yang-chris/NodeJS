/**
 * Created by Administrator on 2017/2/27 0027.
 */
var express=require('express');
var expressStatic=require('express-static');

var server=express();
//用户数据
var users={
    'blue':'123',
    'yxw':'123',
    'qwe':'qwe',
    '123':'123'
};
console.log(users.blue);
server.listen(8080);
server.get('/login',function (req,res) {
    var user=req.query['user'];
    var pass=req.query['pass'];
    console.log(user,pass);
    if(users[user]==null){
        res.send({ok:false,msg:'此用户不存在'});
    }else{
        if(users[user]!=pass){
            res.send({ok:false,msg:'密码错误'})
        }else{
            res.send({ok:true,msg:'登录成功'})
        }
    }
});

server.use(expressStatic('./www'));

