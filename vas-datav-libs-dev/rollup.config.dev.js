const path = require('path')
const resolve = require('rollup-plugin-node-resolve')


const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/imooc.datav.js')
const outputEsPath = path.resolve(__dirname, './dist/imooc.datav.es.js')

module.exports = {
    input: inputPath,
    output: [{
        file: outputUmdPath, format: 'umd', name: 'imoocDatav'
    }, {
        file: outputEsPath, format: 'es', name: 'imoocDatav'
    }],
    plugins: [
        resolve()
    ]
}