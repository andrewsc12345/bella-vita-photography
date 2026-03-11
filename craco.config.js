module.exports = {
  webpack: {
    configure: (config) => {
      config.optimization.minimize = false;
      config.plugins.forEach(plugin => {
        if (plugin.constructor.name === 'HtmlWebpackPlugin') {
          plugin.userOptions.minify = false;
          if (plugin.options) plugin.options.minify = false;
        }
      });
      return config;
    }
  }
};
