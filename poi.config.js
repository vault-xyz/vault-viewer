module.exports = {
    chainWebpack(config) {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                if (!options.transpileOptions) {
                    options.transpileOptions = {};
                }
                if (!options.transpileOptions.transforms) {
                    options.transpileOptions.transforms = {};
                }
                options.transpileOptions.transforms.dangerousTaggedTemplateString = true;

                return options;
            });
    }
};
