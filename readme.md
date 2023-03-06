"node": "14.18.2",
"webpack": "5.75.0",
"webpack-cli": "5.0.1"

1. 加载 webpack 核心和 webpack-cli(可以在 shell 中使用 webpack)
   `npm install webpack webpack-cli --save-dev`

2. 添加.gitignore
3. 使用 MiniCssExtractPlugin 来拆分 css 文件，bundle 使用 hash，并使用 hbs 模版生成 html
4. 添加 babel 转换代码，加载 React(18) 和 ReactDom - 打包后会导致 process 没有的问题(仅仅打包 React 才会发生)
