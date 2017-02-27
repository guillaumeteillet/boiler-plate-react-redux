// lib
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const path = require('path')

// config
const commonConfig = require('./webpack.config.common')
const entryConfig = require('./entry.config')

// paths
const srcPath = path.join(__dirname, 'src')
const buildPath = path.join(__dirname, 'dist/assets')

// constants
const cssModuleScopeName = 'RANDOM_[path]_[name]_[local]'

// -----------------------------------------------------------------------------
// entries
//
const entryBuilder = ({ entries }) => {
  const entryMap = {}

  entries.forEach(({name}) => {
    entryMap[name] = [`./entries/${name}.js`]
  })

  return entryMap
}

// -----------------------------------------------------------------------------
// rules
const rules = []

// handle js
rules.push({
  test: /\.js$/,
  include: srcPath,
  use: [{
    // this will remove block enclosed by special comment
    // /* devlblock:start/end */
    loader: 'webpack-strip-block'
  }, {
    loader: 'babel-loader',
    options: {
      presets: [
        ['es2015', { modules: false }],
        'react',
        'stage-1'
      ],
      plugins: [
        'transform-react-jsx',
        ['react-css-modules', { context: srcPath, generateScopeName: cssModuleScopeName }]
      ]
    }
  }]
})

// handle css
rules.push({
  test: /\.css$/,
  include: srcPath,
  use: [
    'style-loader',
    `css-loader?importLoader=1&modules&localIdentName=${cssModuleScopeName}`
  ]
})

// -----------------------------------------------------------------------------
// rules
const plugins = []

// build html
const { entries } = entryConfig
entries.forEach(({ name, title }) => {
  plugins.push(new HtmlWebpackPlugin({
    filename: `../${name}.html`,
    template: './entries/basic.html',
    htmlTitle: title || name,
    chunk: ['common', name]
  }))
})

// -----------------------------------------------------------------------------
// main config
module.exports = (env) => webpackMerge(commonConfig(env), {
  module: {
    rules
  },
  output: {
    path: buildPath,
    filename: '[name].js',
    publicPath: '/test/assets'
  },
  entry: entryBuilder(entryConfig),
  plugins,
  devServer: {
    contentBase: 'local/'
  }
})
