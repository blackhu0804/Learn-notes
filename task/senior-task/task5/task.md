## 题目1： 如何全局安装一个 node 应用?

```
npm install -g pkg
```

## 题目2： package.json 有什么作用？

package.json文件可以手工编写，也可以使用npm init命令自动生成。
`package.json`文件就是一个JSON对象，该对象的每一个成员就是当前项目的一项设置。

1. `name`就是项目名称
2. `version`是版本
3. `scripts`指定了运行脚本命令的npm命令行缩写，比如`start`指定了运行`npm run start`时，所要执行的命令。
4. `dependencies`字段指定了项目运行所依赖的模块，`devDependencies`指定项目开发所需要的模块。
5. `bin`项用来指定各个内部命令对应的可执行文件的位置。
6. `main`字段指定了加载的入口文件，`require('moduleName')`就会加载这个文件。这个字段的默认值是模块根目录下面的`index.js`。
7. `config`字段用于添加命令行的环境变量。

## 题目3： npm install --save app 与 npm install --save-dev app有什么区别?

两个命令都会在node_modules目录创建app

- `npm install --save app ` 在`[dependencies]` 添加 app:版本号 
- `npm install --save-dev app` 在`[devDependencies]`添加 app:版本号 
`[devDependencies]` 字段下的在用户使用时不会下载

## 题目4： node_modules的查找路径是怎样的?

请看一个例子。例如当前脚本文件 /home/ry/projects/foo.js 执行了 require('bar') 

依次搜索每一个目录。
```
/home/ry/projects/node_modules/bar
/home/ry/node_modules/bar
/home/node_modules/bar
/node_modules/bar
```     

## 题目5： npm3与 npm2相比有什么改进？yarn和 npm 相比有什么优势? 

- npm3遇到新的包就把它放在第一级目录，后面如果遇到一级目录已经存在的包，会先判断版本，如果版本一样则忽略，否则会按照 npm2 的方式依次挂在依赖包目录下


- 使用 npm 拉取依赖时，即使用的是相同的 package.json，在不同的设备上拉到的 packages 版本不一，这就可能为项目引入 bug。
Yarn 有一个锁定文件 (lock file) 记录了被确切安装上的模块的版本号。每次只要新增了一个模块，Yarn 就会创建（或更新）yarn.lock 这个文件。这么做就保证了，每一次拉取同一个项目依赖时，使用的都是一样的模块版本。

## 题目6： webpack是什么？和其他同类型工具比有什么优势？

> webpack 是一个现代 JavaScript 应用程序的模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成少量的 bundle - 通常只有一个，由浏览器加载。

- webpack是一个模块化加载器兼打包工具，它同时支持AMD、CMD等加载规范。
- webpack支持两种依赖加载：同步和异步。同步的依赖会在编译时直接打包输出到目的文件中；异步的依赖会单独生成一个代码块，只有在浏览器中运行需要的时候才会异步加载该代码块。
- webpack只能在本地处理JavaScript，但是加载器用于将其他资源转换为JavaScript
- webpack具有丰富的插件系统。这允许您根据需要自定义webpack，并将普通的插件作为开放源代码分发
- webpack有一个聪明的解析器，可以处理几乎每一个第三方库。

## 题目7：npm script是什么？如何使用？

npm 允许在`package.json`文件里面，使用scripts字段定义脚本命令。
```js
{
  // ...
  "scripts": {
    "build": "node build.js"
  }
}
```

上面代码是`package.json`文件的一个片段，里面的`scripts`字段是一个对象。它的每一个属性，对应一段脚本。比如，`build`命令对应的脚本是`node build.js`。
命令行下使用`npm run`命令，就可以执行这段脚本。
```python
$ npm run build
# 等同于执行
$ node build.js
```


## 题目8： 使用 webpack 替换 入门-任务15中模块化使用的 requriejs

[源码](https://github.com/hu970804/Learn-notes/tree/master/task/senior-task/task5/webpack)

## 题目9：gulp是什么？使用 gulp 实现图片压缩、CSS 压缩合并、JS 压缩合并

### Gulp：任务自动管理工具

- 使用 gulp 实现图片压缩、CSS 压缩合并、JS 压缩合并

[实现代码](https://github.com/hu970804/Learn-notes/blob/master/task/senior-task/task5/gulp/gulpfile.js)

## 题目10： 开发一个 node 命令行天气应用用于查询用户当前所在城市的天气，发布到 npm 上去。

[源码](https://github.com/hu970804/Learn-notes/blob/master/task/senior-task/task5/weather/index.js)