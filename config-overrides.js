module.exports = function override(config, env) {
    if (env === 'development' || env === 'test') {
      const oneOfRule = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
  
      oneOfRule.forEach((rule) => {
        if (rule.loader && rule.loader.includes('babel-loader')) {
          rule.options.plugins = [
            ...(rule.options.plugins || []),
            'istanbul',
          ];
        }
      });
    }
  
    return config;
  };