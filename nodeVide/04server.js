/**
 * Created by Administrator on 2017/2/26 0026.
 */
var http=require('http');
http.createServer(function (req,res) {
    var getData={};
    if(req.url.indexOf('?')>-1){
        var arr1=req.url.split('?');
        var arr2=arr1[1].split('&');
        for(var i=0;i<arr2.length;i++){
            var arr3=arr2[i].split('=');
            console.log(arr3);
            getData[arr3[0]]=arr3[1]
        }
        console.log(getData);

    }
    res.end('hello')
}).listen(8080);