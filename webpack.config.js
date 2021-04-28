import path from 'path';
import webpack from 'webpack';

export default {
  entry: './index.js',
  resolve: { fallback: { fs: false } },
  module:{
    rules:[{
        loader: 'babel-loader',
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        options: {
            presets: [
                      {
                      'plugins': ['@babel/plugin-proposal-class-properties']}]
        }
    }]
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'index.js',
    libraryTarget: 'window',
    library: 'Sugester',
  },
};