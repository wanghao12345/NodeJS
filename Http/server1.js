/*
    搭建一个http服务器，用于处理用户发送的http请求
    需要使用node提供一个模块 http
 */

//加载一个http模块
var http = require('http');
//通过http模块下的createServer创建并返回一个web服务器对象
var server1 = http.createServer();


server1.on('error', function (err) {
    console.log(err);
})

server1.on('listening', function () {
    console.log('listening...');
})



server1.on('request', function (req, res) {
    console.log('有客户端请求了！');

    res.writeHead(200, 'miaov', {
        // 'content-type': 'text/plain'
        'content-type': 'text/html; charset=utf-8'
    });

    // res.write('hello');
    res.write('<h1>Hello</h1>');
    //放在res的最后调用
    res.end();

})



server1.listen(8080, 'localhost');

// console.log(server1.address());