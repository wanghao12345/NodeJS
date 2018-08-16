# NodeJS

一、JavaScript和NodeJS的区别

JavaScript:

	ECMAScript  :语法，内置对象、方法
	DOM
	BOM
	顶层对象：window

NodeJs:

	ECMAScript  :语法，内置对象、方法
	OS
	File
	Net
	DataBase
    顶层对象: global

二、模块

    定义：
        一个文件就是一个模块，每个模块都有自己的作用域。
        我们使用var来申明的一个变量，他并不是全局的，而是属于当前模块下

    使用：
        require('模块路径')；
        模块路径：
           1.绝对路径: require('G:\....\xx.js');
           2.相对路径: require('./xx.js')
        注意：使用相对路径的时候，最前面必须有“./”，否则会去加载node中的核心模块，或者是node_modules

        当require('模块路径')中的模块路径没有后缀名时：require('./2')
            1.首先按照加载模块的文件名称进行查找
            2.如果没有找到，则会在模块文件名称后加上.js的后缀，进行查找
            3.如果还没有找到，则会在文件名称后加上.json的后缀，进行查找
            4.如果还没有，则会在文件名称后加上.node的后缀，进行查找

            文件名称 -> .js -> .json -> .node

    module和exports
        在一个模块中通过var定义的变量，其作用域范围是当前模块，外部不能够直接访问
        如果我们想在一个模块中访问另外一个模块中的定义的变量可以：
        1.把变量作为global对象的一个属性，但是这样的做法是不推荐的（global.a=100）
        2.使用模块对象，module

        module:
            保存提供和当前模块有关的一些信息
            在这个module对象中，有一个子对象：exports对象，
            我们可以通过这个对象把一个模块中的局部变量对象进行访问
        exports:
            在模块作用域，还有一个内置的模块对象：exports,它其实就是module.exports

        当使用module.exports = [];后，再使用exports.a = 200;最后导出的还是[]
        此时exports 和 module.exports 的指向关系已经断开了。因此在使用这两个属性的时候
        尽量去添加他们的属性，而不死去重写他们。

三、Global全局对象


































