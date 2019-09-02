import React from 'react'//创建组件。虚拟dom 生命周期
import ReactDOM from 'react-dom'//吧创建好的组件和虚拟dom放到页面上去展示
// webpack-dev-server 打包好的main。js是托管到内存中

//创建虚拟dom 元素名称  元素属性对象   子节点
// const myH1 = React.createElement('h1',null,'这是一个大大的h1')
const myDiv = <div id="mydiv">
    这是一个div元素
    <h1>我是h1</h1>
</div>
// 使用reacDom 渲染 参数1 要渲染的dom元素  参数2 指定容器
ReactDOM.render(myDiv,document.getElementById('app'))