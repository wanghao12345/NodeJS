
var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');


var server = http.createServer();

var HtmlDir = __dirname + /html/;

server.on('request', function (req, res) {

    var urlStr = url.parse(req.url);

    switch (urlStr.pathname) {
        case '/': //首页
            sendData(HtmlDir + 'index.html', req, res);
            break;
        case '/user': //用户首页
            sendData(HtmlDir + 'user.html', req, res);
            break;
        case '/login': //登录
            sendData(HtmlDir + 'login.html', req, res);
            break;
        case '/login/check': //登录请求
            console.log(req.method);
            // console.log(urlStr.query);
            // console.log(querystring.parse(urlStr.query));  //get请求
            if (req.method.toUpperCase() == 'POST') {
                var str = '';
                req.on('data', function (chunk) {
                    str += chunk;
                })
                req.on('end', function () {
                    console.log(querystring.parse(str));
                })
            }
            sendData(HtmlDir + 'index.html', req, res);
            break;
        default: //其它情况
            sendData(HtmlDir + 'err.html', reqs, res);
            break;
    }
})


function sendData(file, req, res){
    fs.readFile(file, function (err, data) {
        if (err) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf-8'
            });
            res.end('<h1>页面访问不到</h1>');
        } else {
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf-8'
            });
            res.end(data);
        }
    });
}

server.listen(8080, 'localhost');