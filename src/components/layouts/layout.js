import React from "react";
import PropTypes from "prop-types";

import Header from "../header.js";
import Footer from "../footer.js";
import SEO from "../seo";
import "./layout.css";

const Layout = ({ children, className, title }) => {
  return (
    <div className={`flex flex-col max-h-screen ${className}`}>
      <SEO title={title} />
      <Header />
      <div
        className="overflow-y-auto"
        //For smooth scrolling (There's no in Tailwind)
        style={{ scrollBehavior: "smooth" }}
      >
        <main className="flex-1 .overflow-y-scroll">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
