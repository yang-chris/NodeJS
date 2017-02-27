/**
 * Created by Administrator on 2017/2/27 0027.
 */
var express=require('express');

var server=express();

server.use('/',function (req,res) {
    res.send('根目录下');
    res.end();
});

server.use('/a.html',function (req,res) {
    res.send('a目录下');
    res.end();
});

server.use('/b.html',function (req,res) {
    res.send('b目录下');
    res.end();
});

server.listen(8080);