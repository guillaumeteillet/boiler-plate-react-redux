// lib
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

// config
const commonConfig = require('./webpack.config.common')
const entryConfig = require('./entry.config')

// paths
const srcPath = path.join(__dirname, 'src')
const buildPath = path.join(__dirname, 'local/assets')

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
    loader: 'babel-loader',
    options: {
      presets: [
        ['es2015', { modules: false }],
        'react',
        'stage-0'
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

// handle images
rules.push({
  test: /\.(jpe?g|png|gif|svg)$/,
  include: srcPath,
  loaders: [
    'file-loader',
    'image-webpack-loader'
  ]
})

// handle apiGatewayEndpoint: string replacement
rules.push({
  test: /api\.js$/,
  use: [{
    loader: 'string-replace-loader',
    options: { search: '__API_ENDPOINT', replace: 'http://staging.RANDOM.com:9000' }
  }]
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
    chunks: ['common', name]
  }))
})

// chunk
plugins.push(new webpack.optimize.CommonsChunkPlugin({
  name: 'common'
}))

// -----------------------------------------------------------------------------
// main config
module.exports = (env) => webpackMerge(commonConfig(env), {
  module: {
    rules
  },
  output: {
    path: buildPath,
    filename: '[name].js',
    publicPath: '/'
  },
  entry: entryBuilder(entryConfig),
  plugins,
  devServer: {
    contentBase: 'local/'
  }
})
