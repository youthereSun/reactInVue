#基于vuecli3

#1.安装依赖
yarn add vuera
yarn add react react-dom

#2.使用vuera 
//babel.config.js||.babelrc
module.exports = {
  presets: [
    ['@babel/preset-react'],
    ['@babel/preset-env']
    // '@vue/app'
  ],
  plugins: [
    ['transform-react-jsx'],
    ['@babel/plugin-syntax-dynamic-import'],
    ['@babel/plugin-proposal-class-properties']
  ]
}
===========================================

//main.js
import { VuePlugin } from 'vuera'
Vue.use(VuePlugin)
===========================================

//react 组件，纯react写法
demo.js



//.vue文件中引入react组件
<template>
    <div>
        <my-react-component/>
    </div>
</template>

<script>
    import MyReactComponent from './demo';
    export default {
        name: "reactUsage",
        components: { 'my-react-component': MyReactComponent },
    }
</script>

<style scoped>

</style>


//vue.config.js 配置解析jsx语法
const path=require('path')
module.exports = {
    configureWebpack:{

            module: {
                rules: [
                    {
                        test: /\.jsx$/,
                        use: [
                            {
                                loader: 'babel-loader',
                                options: {
                                    presets: [
                                        [
                                            "@babel/preset-react",
                                            {
                                                pragma:"React.createElement",
                                            }
                                        ]
                                    ],
                                    plugins: [
                                        [`@babel/plugin-proposal-decorators`, { legacy: true }]
                                    ]
                                }
                            }
                        ],
                        include: path.resolve(__dirname, 'src'),
                        exclude: path.resolve(__dirname, "node_modules/"),
                    }
                ]

            }
        }


}

