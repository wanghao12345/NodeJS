
var fs = require('fs')

var filename = '2.txt';

fs.watch(filename, function (ev, fn) {
    console.log(ev);

    if (fn) {
        console.log(fn + '发生了改变');
    } else {
        console.log('.....')
    }
})