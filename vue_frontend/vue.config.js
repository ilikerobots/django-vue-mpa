const BundleTracker = require("webpack-bundle-tracker");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


const pages = {
    "stopwatch": {
        entry: "./src/stopwatch.js",
        chunks: ["chunk-moment", "chunk-vendors"],
    },
    "index": {
        entry: "./src/index.js",
        chunks: ["chunk-vendors"],
    },
    'vue_app_01': {
        entry: './src/main.js',
        chunks: ['chunk-vendors']
    },
    'vue_app_02': {
        entry: './src/newhampshir.js',
        chunks: ['chunk-vendors']
    },
}

module.exports = {
    pages: pages,
    filenameHashing: false,
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? 'static/vue'
        : 'http://localhost:8080/',
    outputDir: '../django_vue_mpa/static/vue/',

    chainWebpack: config => {

        config.optimization
            .splitChunks({
                cacheGroups: {
                    moment: {
                        test: /[\\/]node_modules[\\/]moment/,
                        name: "chunk-moment",
                        chunks: "all",
                        priority: 5
                    },
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "chunk-vendors",
                        chunks: "all",
                        priority: 1
                    },
                },
            });

        Object.keys(pages).forEach(page => {
            config.plugins.delete(`html-${page}`);
            config.plugins.delete(`preload-${page}`);
            config.plugins.delete(`prefetch-${page}`);
        })

        config
            .plugin('BundleTracker')
            .use(BundleTracker, [{filename: '../vue_frontend/webpack-stats.json'}]);

        // Uncomment below to analyze bundle sizes
        // config.plugin("BundleAnalyzerPlugin").use(BundleAnalyzerPlugin);
        
        config.resolve.alias
            .set('__STATIC__', 'static')

        config.devServer
            .public('http://localhost:8080')
            .host('localhost')
            .port(8080)
            .hotOnly(true)
            .watchOptions({poll: 1000})
            .https(false)
            .headers({"Access-Control-Allow-Origin": ["*"]})

    }
};
