'use strict'

const path = require('path')
const { babel } = require('@rollup/plugin-babel')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const replace = require('@rollup/plugin-replace')
const banner = require('./banner.js')

const BUNDLE = process.env.BUNDLE === 'true'
const ESM = process.env.ESM === 'true'

let fileDestination = `coreui${ESM ? '.esm' : ''}`
const external = ['@popperjs/core', 'date-fns']
const plugins = [
  babel({
    // Only transpile our source code
    exclude: 'node_modules/**',
    // Include the helpers in the bundle, at most one copy of each
    babelHelpers: 'bundled'
  })
]
const globals = {
  '@popperjs/core': 'Popper',
  'date-fns': 'dateFns'
}

if (BUNDLE) {
  fileDestination += '.bundle'
  // Remove last entry in external array to bundle Popper
  external.pop()
  delete globals['@popperjs/core']
  // Remove last entry in external array to bundle dateFns
  external.pop()
  delete globals['date-fns']
  plugins.push(
    replace({
      'process.env.NODE_ENV': '"production"',
      preventAssignment: true
    }),
    nodeResolve()
  )
}

const rollupConfig = {
  input: path.resolve(__dirname, `../js/index.${ESM ? 'esm' : 'umd'}.js`),
  output: {
    banner,
    file: path.resolve(__dirname, `../dist/js/${fileDestination}.js`),
    format: ESM ? 'esm' : 'umd',
    globals,
    generatedCode: 'es2015'
  },
  external,
  plugins
}

if (!ESM) {
  rollupConfig.output.name = 'coreui'
}

module.exports = rollupConfig
