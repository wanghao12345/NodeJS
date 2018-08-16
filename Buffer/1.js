/*
var bf = new Buffer('miaov', 'utf-8');
console.log(bf);

for (var i = 0; i < bf.length; i++){
    console.log(bf[i].toString(16));
    console.log(String.fromCharCode(bf[i]));
}*/

var str = 'miaov';
var bf1 = new Buffer(str);

console.log(str.length);
console.log(bf1.length);

var str2 = '苗伟';
var bf2 = new Buffer(str2);
console.log(str2.length);
console.log(bf2.length);