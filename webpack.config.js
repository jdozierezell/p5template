const commonConfig = require('./build-utils/webpack.common')
const webpackMerge = require('webpack-merge')

const addons = (addonsArg) => {
  let addons = []
    .concat.apply([], [addonsArg]) // normalize array of addons
    .filter(Boolean) // if addons is undefined, filter it out

  return addons.map((addonName) => require(`./build-utils/addons/webpack.${addonName}.js`))
}

module.exports = (env) => {

  const envConfig = require(`./build-utils/webpack.${env.env}.js`)

  return webpackMerge(commonConfig, envConfig, ...addons(env.addons))
}