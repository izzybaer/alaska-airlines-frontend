'use strict';

// izzy - production settings
require('dotenv').config({ path: `${__dirname}/.env`});

// izzy - this line is setting up webpack to interface with dotenv
const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webPackConfig = (module.exports = {});

const production = process.env.NODE_ENV === 'production'; // izzy - true or false

webPackConfig.entry = `${__dirname}/src/main.js`;
webPackConfig.output = {
  filename: 'bundle.[hash].js',
  path: `${__dirname}/build`,
  publicPath: process.env.CDN_URL || '/',
};

webPackConfig.plugins = [
  new HTMLPlugin({ title: 'Full Stack Flight Tracker! ^-^' }),
  new EnvironmentPlugin(['NODE_ENV']),
  new DefinePlugin({
    __API_URL__: JSON.stringify(process.env.API_URL),
  }),
  new ExtractTextPlugin('bundle.[hash].css'),
];

if (production) {
  webPackConfig.plugins = webPackConfig.plugins.concat([
    new UglifyPlugin(),
    new CleanPlugin(),
  ]);
}

webPackConfig.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        use: [
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [`${__dirname}/src/style`],
            },
          },
        ],
      }),
    },
  ],
};

webPackConfig.devtool = production ? undefined : 'eval-source-map';

webPackConfig.devServer = {
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};
