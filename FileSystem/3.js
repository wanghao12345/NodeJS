
var fs = require('fs');





fs.open('test.js', 'r', function (err, fd) {
    if (err) {
        console.log('文件打开失败!');
    }else{
        var bf1 = new Buffer(10);

        console.log(bf1);

        fs.read(fd, bf1, 0, 4, null, function (err) {
            console.log(bf1);
        })


    }
})