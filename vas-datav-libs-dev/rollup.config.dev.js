const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')
const {terser} = require('rollup-plugin-terser')
const polyfills = require('rollup-plugin-node-polyfills')


const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/imooc.datav.js')
const outputEsPath = path.resolve(__dirname, './dist/imooc.datav.es.js')

module.exports = {
    input: inputPath,
    output: [{
        file: outputUmdPath,
        format: 'umd',
        name: 'imoocDatav',
        globals: {
            'vue': 'Vue'
        }
    }, {
        file: outputEsPath,
        format: 'es',
        name: 'imoocDatav',
        globals: {
            'vue': 'Vue'
        }
    }],
    plugins: [
        vue(), // plugin有序，插件引入顺序有误，vue插件需要放到commonjs插件之前。
        resolve({
            browser: true,
        }),
        polyfills(),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        json(),
        postcss({
            plugins: []
        })
    ],
    external: ['vue']
}