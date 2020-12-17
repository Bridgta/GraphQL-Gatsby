module.exports = {
    siteMetadata: {
        title: 'Full Stack Site',
        author: 'Bridget Asser'
    },
    plugins: [
        {
            resolve: 'atsby-source-filesystem', 
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        }
    ]
}

