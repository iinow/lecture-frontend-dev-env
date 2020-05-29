const { smart } = require('webpack-merge')
const path = require('path')

const config = smart({
    entry: {
        app: path.resolve('./src/app.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    }
})

module.exports = config