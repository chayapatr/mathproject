module.exports = {
    entry: './src/script.js',
    output: {
        filename: 'app.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};