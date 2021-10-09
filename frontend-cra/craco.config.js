const CracoLessPlugin = require("craco-less");

module.exports = {
    webpack: {
        configure: {
            resolve: {
                symlinks: false,
            },
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // 自定义 ANTD 主题颜色
                        modifyVars: {
                            "@primary-color": "#1DA57A",
                            "@link-color": "#1DA57A",
                            "@border-radius-base": "2px",
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        }
    ],
};