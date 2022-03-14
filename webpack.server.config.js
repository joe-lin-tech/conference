module.exports = {
    resolve: {  
        alias: {
            ['firebase/app']: path.resolve(__dirname, 'node_modules/firebase/app/dist/index.cjs.js')
        },
        extensions: ['.ts', '.js']
    },
}