const path = require(`path`);
const { orgs } = require('./src/lib/organizations')
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug =
      node.frontmatter.slug ||
      createFilePath({ node, getNode, basePath: `pages` }).replace(
        "README/",
        ""
      );

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges;
  const postsTemplate = path.resolve(`./src/templates/post.js`)

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: postsTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });

  const organizationTemplate = path.resolve('src/templates/organization.js');

  orgs.forEach(({ slug }) => {
    createPage({
      path: `orgs/${slug}`,
      component: organizationTemplate,
      context: {
        slug,
      }
    })
  });

};
