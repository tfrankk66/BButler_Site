const path = require(`path`)

module.exports = {

  siteMetadata: {
      title: "Identity Worx",
      titleTemplate: "%s | Identity Worx",
      description:
        "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
      url: "https://www.identitywrx.com", // No trailing slash allowed!
      image: "/images/SC Pants.jpg", // Path to your image you placed in the 'static' folder
      twitterUsername: "@occlumency",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
