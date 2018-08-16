// console.log(__filename);
// console.log(__dirname);

setInterval(function () {
    var d = new Date();
    console.log('现在是：' + d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
}, 1000)