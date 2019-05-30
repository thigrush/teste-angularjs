module.exports = {
    entry: './public/src/app.js',
    output: {
        path: __dirname + '/public',
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3333
    }
}