
var fs = require('fs');

var filename = '1.txt';

// fs.writeFile(filename, 'hello', function () {
//     console.log(arguments);
// })

// fs.appendFile(filename, '-Good', function () {
//     console.log(arguments);
// })

/*
    fs.exists():检测文件是否存在
 */

//异步
// fs.exists(filename, function (isExists) {
//     if (!isExists) {
//         fs.writeFile(filename, 'miaov', function (err) {
//             if (err) {
//                 console.log('出错了');
//             } else {
//                 console.log('创建新文件成功');
//             }
//         })
//     } else {
//         fs.appendFile(filename, '-leo', function (err) {
//             if (err) {
//                 console.log('新的内容追加失败');
//             } else {
//                 console.log('新的内容追加成功');
//             }
//         })
//     }
// })


//同步
if (!fs.existsSync(filename)) {
    fs.writeFileSync(filename, 'miaov')
    console.log('新文件创建成功');

} else {
    fs.appendFileSync(filename, '-leo')
    console.log('新内容追加成功');
}
