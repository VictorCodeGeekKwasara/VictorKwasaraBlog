module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "victorkwasara",
  },
  plugins: [ 
    
    "gatsby-plugin-mdx",
    
    `gatsby-transformer-remark`,
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/blog/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/img`,
      },
      
    },
    
    "gatsby-transformer-sharp",
     "gatsby-plugin-sharp",
      "gatsby-plugin-image",

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins:[
          'gatsby-remark-relative-images-v2',
          'gatsby-remark-images'
        ]
      }
    },
    "gatsby-plugin-netlify-cms",
   
   
  ],
};
