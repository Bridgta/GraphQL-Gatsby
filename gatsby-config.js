module.exports = {
    siteMetadata: {
        title: 'Full Stack Site',
        author: 'Bridget Asser'
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem', 
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark'
    ]
}

