// setar variável de ambiente
const modoDev = process.env.NODE_ENV !== 'production';

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {

    // modo e arquivo de entrada do webpack
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',

    // qual pasta e nome do arquivo que será gerado
    output: {
        filename: 'principal.js',
        path: __dirname + '/public',
    },

    // configura o webserver do webpack 
    devServer: {
        contentBase: "./public",
        port: 9000,
    },

    //otimizar os códigos gerados
    optimization: {
        minimizer: [
            //otimiza o arquivo css
            new OptimizeCSSAssetsPlugin({}),
        ]
    },


    plugins: [
        // otimiza o arquivo js
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),

        //otimiza o arquivo css
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],

    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader, // extrai o CSS pra um arquivo externo
                    //'style-loader', // Adiciona CSS à dom injetando a tag <style>
                    'css-loader', // interpreta @import, url(),
                    'sass-loader',
                ]
            }, {
                // carregar imagens
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }, 
        ]
    }
}