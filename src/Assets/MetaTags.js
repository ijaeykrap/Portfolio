import React from "react";
import { Helmet } from "react-helmet-async";

const MetaTags = () => {
  return (
    <Helmet>
      {/* meta tag */}
      <meta charset="utf-8" />
      <title>Yeaji's Portfolio</title>
      <meta
        name="description"
        content="Explore my portfolio to see my work 🔭"
      />
      <meta name="keywords" content="Portfolio, webDevelopment" />
      <meta name="author" content="Park Yea Ji" />

      {/* open graph */}
      <meta property="og:title" content="Yeaji's portfolio" />
      <meta
        property="og:description"
        content="Explore my portfolio to see my work 🔭"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://portfoliodyeaji.netlify.app" />
      <meta
        property="og:image"
        content="https://portfoliodyeaji.netlify.app/img/preview.png"
      />
    </Helmet>
  );
};

export default MetaTags;
