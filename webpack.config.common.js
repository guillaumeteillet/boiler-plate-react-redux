// lib
const webpack = require('webpack')
const path = require('path')

// paths
const srcPath = path.join(__dirname, 'src')

// -----------------------------------------------------------------------------
// rules
const rules = []

// -----------------------------------------------------------------------------
// plugins
const plugins = []

// -----------------------------------------------------------------------------
// main config
module.exports = (env) => ({
  context: srcPath,
  module: { rules },
  plugins: [...plugins, new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(env)
    }
  })]
})
