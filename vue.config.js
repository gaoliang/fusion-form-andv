const path = require('path');

module.exports = {
    pages: {
        index: {
            // 页面入口
            entry: "examples/main.js",
            // 模板来源
            template: "pubilc/index.html",
            // 输出文件名
            filename: "index.html"
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
        return {
            resolve: {
                alias: {
                    "@": require("path").resolve(__dirname, "examples"),
                    "~": require("path").resolve(__dirname, "components")
                }
            }
        }
    }
};