
const path = require('path')
const htmlWebPackPligin = require('html-webpack-plugin')//导入 在内存中自动生成 index页面的插件

const htmlPlugin = new htmlWebPackPligin({
template: path.join(__dirname,'./src/index.html'),//源文件
filename: 'index.html'//生成的内存首页名称npm run dev
})

module.exports = {
    mode: 'development',
    plugins:[
        htmlPlugin
    ],
    module: {
          rules:[
            { test: /\.js$/, use: 'babel-loader',exclude:/node_modules/},
          ]

    }

    //webpack 4.x 默认吧index.js当做入口文件
}