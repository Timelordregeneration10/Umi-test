1. npm install gh-pages --save-dev
2. 修改package.json
    - "homepage": "https://xx.github.io/xxx"
    - "script"里：
        - "predeploy" : "npm run build", // 预部署，打包项目
        - "deploy" : "gh-pages -d dist"// 部署项目，将打包产物dist内的内容推送到github的gh-pages分支上
3. 推送远程仓库（add，commit，push）
4. 本地运行 npm run deploy
5. 在github的setting的pages里branch设置为gh-pages

- 可能遇到的问题：
    - 部署到github pages上是页面空白
        - 打开浏览器开发者工具，查看打印台，无报错，然后查看网络，发现js和css的请求都在https://xx.github.io下，找不到umi.js。而我们之前的github配置是把打包产物放到了https://xx.github.io/xxx下，所以需要修改下项目的打包配置，将publicPath修改为/xxx/ ，并且将路由设置为hash模式