// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 8000,
        autoOpenBrowser: false,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        // 开发跨越解决方案---可以配置不同服务器接口
        proxyTable: {
            '/api': {
                target: 'http://40.00.100.100:3002/',//设置你调用的接口域名和端口号 别忘了加http
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'//‘/api’代替target里面的地址，掉接口时直接用api代替 'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                }
            },
            '/api2': {
                target: 'http://40.00.100.100:3003/',//设置你调用的接口域名和端口号 别忘了加http
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'//‘/api’代替target里面的地址，掉接口时直接用api代替 'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                }
            },
            // CSS Sourcemaps off by default because relative paths are "buggy"
            // with this option, according to the CSS-Loader README
            // (https://github.com/webpack/css-loader#sourcemaps)
            // In our experience, they generally work as expected,
            // just be aware of this issue when enabling this option.
            cssSourceMap: false
        }
    }
}
