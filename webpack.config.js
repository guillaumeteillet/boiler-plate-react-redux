// env is passed in CLI
// default is development
// e.g. webpack --env=production
const buildConfig = (env) => {
  const envToLoad = env || 'development'
  const configToLoad = `./webpack.config.${envToLoad}`

  return require(configToLoad)(envToLoad)
}

module.exports = buildConfig
