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