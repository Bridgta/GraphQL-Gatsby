plugins: [
  {
    resolve: "gatsby-plugin-sass",
    options: {
      useResolveUrlLoader: {
        options: {
          sourceMap: true, //default is false
        },
      },
    },
  },
]