'use strict';

var webpack   = require('webpack'),
    path      = require('path'),
    widget    = require('./package.json').name,
    jsPath    = 'src/widget',
    jsEntry   = widget+'.js',
    buildPath = 'build/'+widget+'/widget',
    buildFile = widget+'.js';

var CopyWebpackPlugin = require('copy-webpack-plugin')

var config = {
    target: 'web',
    entry: {
        app: path.join(__dirname, jsPath, jsEntry)
    },
    output: {
        libraryTarget: 'amd',
        path: path.resolve(__dirname, buildPath),
        publicPath: '',
        filename: buildFile
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader',
                  options: {
                    attrs: [':data-src']
                  }
                }
              }
        ]
    },
    externals: {
        dojoBaseDeclare: "dojo/_base/declare",
        widgetBase: "mxui/widget/_WidgetBase",
        dijitTemplatedMixin: "dijit/_TemplatedMixin",
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        // Change the plugin do "production" before you go live! Don't forget!
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"development"'
          }
        }),
        new CopyWebpackPlugin([{
            from: './src/widget/template/*.html',
            to: 'template/' + widget + '.html'
        }])
      ]
};

module.exports = config;
