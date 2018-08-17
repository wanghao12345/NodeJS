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
        1.__filename
            返回当前模块文件解析后的绝对路径，该属性其实并非全局的，而是模块作用域下的
        2.__dirname
            返回当前模块文件所在目录解析后的绝对路径，该属性也不是全局的，而是模块作用域下的
        3.process对象
            process对象是一个全局对象，可以在任何地方都能访问到他，通过这个对象提供的属性和法，
            使我们可以对当前运行的程序的进程进行访问和控制
            3.1 argv属性: process.argv返回一个数组，这个数组包含了启动Node.js进程时的命令行参数。
                         第一个参数为process.execPath。第二个元素为当前执行的JavaScript文件路径。
                         剩余的元素为其他命令行参数
            3.2 execPath属性：process.execPath返回启动Node.js进程的可执行文件所在的绝对路径
            3.3 env属性：process.env返回一个包含用户环境信息的对象See
            3.4 pid属性：process.pid返回当前运行程序的PID
            3.5 exit()属性：process.exit退出当前程序
            3.6 stdin、stdout属性：标准输入输出流（IO）
                标准输入设备：键盘，鼠标....
                标准输出设备：打印器，显示器...
                stdin和stdout提供了操作输入数据和输出数据的方法，我们也通常称为IO操作

                stdin: 默认情况下，输入流是关闭的，要监听处理输入流数据，首先要开启输入流
            ....

四、Buffer类
    一个用于更好的操作二进制数据的类，我们在操作文件或者网络数据的时候，其实操作的就是二进制数据流，
    Node为我们提供了一个更加方便的去操作这种数据流的类Buffer,它是一个全局的类
    实例方法：
        1.new Buffer(size)已经废弃 -> 使用Buffer.alloc(size)或Buffer.allocUnsafe(size)代替
            size [Number] 创建一个Buffer对象，并为这个对象分配一个大小。当我们为一个Buffer对象分配空间大小
            后，其长度是固定的，不能更改
        2.new Buffer(array)已经废弃 -> 使用Buffer.from(array)代替
            array <integer[]> 要从中复制的字节数组
        3.new Buffer(string, [encoding])已经废弃 -> 使用Buffer.from(string, [encoding])代替
            string <string> 要编码的字符串
            encoding <string> string的字符串编码。默认：'utf8'
        4.buffer.length
            buffer的bytes大小
        5.buffer[index]
            获取或者设置在指定index索引位置的8位字节内容
        6.buffer.write(string, [offset], [length], [encoding])
            根据参数offset偏移量和指定的encoding编码方式，将参数string数据写入buffer
        7.buffer.toString([encoding], [start], [end])
            根据encoding参数，默认是utf8，返回一个解码的string类型
        8.buffer.toJSON()
            返回一个JSON表示的Buffer实例，JSON.stringify将会默认调用来字符串序列化这个Buffer实例
        9.buffer.slice([start], [end])
            返回一个新的buffer，这个buffer将会和老的buffer引用相同的内存地址
            注意：修改新的这个buffer实例slice切片，也会改变原来的buffer
        10.buffer.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd])
            进行buffer的拷贝
    Buffer类方法：
        1.Buffer.isEncoding(encoding)
            如果给定的编码encoding是有效的，返回true，否则返回false
        2.Buffer.isBuffer(obj)
            测试这个obj是否是一个Buffer
        3.Buffer.byteLength(string, [encoding])
            将会返回这个字符串真实byte长度，encoding编码默认是utf-8
        4.Buffer.concat(list, [totalLength])
            返回一个保存着将传入buffer数组中所有buffer对象拼接在一起的buffer对象

五、File System文件系统模块

    该模块是核心模块，需要使用require导入后使用
    该模块提供了操作文件的一些API

    fs.open(path, flags, [mode], callback)
        异步版的打开一个文件
        path: 要打开的文件路径
        flags: 打开文件的方式 读/写
        mode: 设置文件的模式 读/写/执行  4/2/1
        callback(err, fd): 回掉函数
            err : 文件打开失败的错误保存在err里面，如果成功err为null
            fd: 被打开文件的标识和定时器
    fs.openSync(path, flags, [mode])
        fs.open()的同步版
    fs.read(fd, buffer, offset, length, position, callback)
        从指定的文档标识符fd读取文件数据
        fd: 通过open方法成功打开一个文件返回的编号
        buffer: buffer对象
        offset: 新的内容添加到buffer中的起始位置
        length: 添加到buffer中内容的长度
        position: 读取的文件的起始位置 null可以
        callback(err, len, newBf):
            err: 错误提示
            len: buffer的长度
            newBf: 返回buffer
    fs.readSync(fd, buffer, offset, length, position)
        fs.read函数的同步版本，返回bytesRead的个数
    fs.write(fd, buffer, offset, length[, position], callback)
        通过文件表示fd, 向指定的文件中写入buffer
        buffer: 要写入的数据
        offset: buffer对象中要写入的数据的起始位置
        length: 要写入的buffer数据的长度
        position: fd中的起始位置
        callback: 回掉
        注意：当我们要对打开的文件进行写操作的时候，打开文件的模式应该是读写方式 ‘r+’
    fs.write(fd, data[, position[, encoding]], callback)
        把data写入到文档中通过指定的fd,如果data不是buffer对象的实例,
        则会把值强制转化成一个字符串
    fs.writeSync(fd, buffer, offset, length[, position])
        fs.write()的同步版本
    fs.writeSync(fd, data[, position[, encoding]])
        fs.write()的同步版
    fs.close(fd, callback)
        关闭一个打开的文件
    fs.closeSync(fd)
        fs.close()的同步版本

    fs.writeFile(filename, data, [options], callback)
        异步的将数据写入一个文件，如果文件不存在则新建，如果文件原先存在，会被替换。
        data可以是一个string,也可以是一个原生buffer
    fs.writeFileSync(filename, data, [options])
        fs.writeFile的同步版本，注意没有callback,也不需要
    fs.appendFile(filename, data, [options], callback)
        异步的将数据添加到一个文件的尾部，如果文件不存在，会创建一个新的文件。
        data可以是一个string，也可以是一个原生buffer
    fs.appendFileSync(filename, data, [options])
        fs.appendFile的同步版本

    fs.readFile(filename, [options], callback)
        异步读取一个文件的全部内容
    fs.readFileSync(filename, [options])
        fs.readFile的同步版本
    fs.exists(path, callback)
        检查指定路径的文件或目录是否存在
    fs.existsSync(path)
        fs.exists的同步版本
    fs.unlink(path, callback)
        删除一个文件
    fs.unlinkSync(path)
        fs.unlink()的同步版本

    fs.rename(oldPath, newPath, callback)
        重命名
    fs.renameSync(oldPath, newPath)
        fs.rename()的同步版本
    fs.stat(path, callback)
        读取文件信息
    fs.statSync(path, callback)
        fs.stat()的同步版本
    fs.watch(filename, [options], [listener])
        观察指定路径的改变，filename路径可以是文件或者目录(不稳定)

    fs.mkdir(path, [mode], callback)
        创建文件夹
    fs.mkditSync(path, [mode])
        fs.mkdit的同步版本
    fs.readdir(path, callback)
        读取文件夹
    fs.readdirSync(path)
        fs.readdir同步版本
    fs.rmdir(path, callback)
        删除文件夹
    fs.rmdirSync(path)
        fs.rmdir的同步版本

六、前端项目自动化-项目构建（/FileSystem/9.js）
七、前端项目自动化-自动合并（/FileSystem/10.js）









