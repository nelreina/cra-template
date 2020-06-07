const rewiredReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = function override(config, env) {
  config = rewiredReactHotLoader(config, env);

  config.resolve.alias = {
    ...config.resolve.alias,
    'react-dom': '@hot-loader/react-dom'
  }

  return config;

}