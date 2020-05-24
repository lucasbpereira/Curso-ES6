module.exports = {
    entry: ['@babel/polyfill', './src/mod3.js'],
    output: {
        path: __dirname + '/public',
        filename: 'bundleEx3.js',
    },
    devServer: {
        contentBase: __dirname + '/public' 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};