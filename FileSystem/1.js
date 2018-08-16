var fs = require('fs');
/*
    fs.open(path, flags, [mode], callback)
        异步版的打开一个文件
        path: 要打开的文件路径
        flags: 打开文件的方式 读/写
        mode: 设置文件的模式 读/写/执行  4/2/1
        callback: 回掉函数
            err : 文件打开失败的错误保存在err里面，如果成功err为null
            fd: 被打开文件的标识和定时器
 */

fs.open('./test.js', 'r', function (err, fd) {
   if (err){
       console.log('文件打开失败！');
   } else {
       console.log('文件打开成功！');
       console.log(fd);
   }
})



























