import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layouts/layout";
import Navbar from "../components/navbar";

const Post = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title },
      fields: { slug },
    },
  } = data;

  const showNavBar = /guia/.test(slug);

  return (
    <Layout title={title} className="bg-gray-100">
      {showNavBar && <Navbar currentPage={slug} className="mt-16 order-1" />}
      <article className="pt-20">
        <h1 className="mb-8 text-center font-bold text-purple-800 sm:text-lg md:text-xl lg:text-5xl xl:text-5xl ">
          {title}
        </h1>
        <section
          dangerouslySetInnerHTML={{ __html: html }}
          className="order-2 markdown max-w-3xl mx-auto px-6 lg:px-0"
        />
      </article>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;

export default Post;
