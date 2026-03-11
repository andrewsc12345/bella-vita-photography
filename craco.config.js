module.exports={webpack:{configure(config){const HtmlPlugin=config.plugins.find(p=>p.constructor.name==="HtmlWebpackPlugin");if(HtmlPlugin)HtmlPlugin.userOptions.minify=false;return config}}};
