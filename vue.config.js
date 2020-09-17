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
