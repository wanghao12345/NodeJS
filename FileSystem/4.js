
var fs = require('fs');

fs.open('test.js', 'r+', function(err, fd){
    if (err) {
        console.log('打开文件失败');
    } else {

        /*var bf = new Buffer('123');
        fs.write(fd, bf, 0, 3, 3, function () {
            console.log(arguments);
        })*/

     /*   fs.write(fd, '1234', 4, 'utf-8',function () {

        })*/

        fs.close(fd, function () {

        })



    }



})