const webpack = require('webpack');

module.exports = {
    // modo e arquivo de entrada do webpack
    mode: 'development',
    entry: './src/principal.js',

    // qual pasta e nome do arquivo que será gerado
    output: {
        filename: 'principal.js',
        path: __dirname + '/public',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', // Adiciona CSS a dom injetando a tag <style>
                    'css-loader' // interpreta @import, url()
                ]
            }
        ]
    }
}