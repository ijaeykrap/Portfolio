import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Main from "./Main/Main";
import WebDesign from "./WebDesign/WebDesign";
import Branding from "./Branding/Branding";
import SchoolWorks from "./SchoolWorks/SchoolWorks";
import Resume from "./Resume/Resume";

import BrandingDetail from "./Branding/BrandingDetail";
import SchoolWorksDetail from "./SchoolWorks/SchoolWorksDetail";
import WebDesignDetail from "./WebDesign/WebDesignDetail";

import ScrollToTop from "./Assets/ScrollRestoration";

import RootLayout from "./Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: [<RootLayout />, <ScrollToTop />],
      children: [
        { index: true, element: <Main /> },
        {
          path: "web-design",
          children: [
            { index: true, element: <WebDesign /> },
            { path: ":webId", element: <WebDesignDetail /> },
          ],
        },
        {
          path: "branding",
          children: [
            { index: true, element: <Branding /> },
            { path: ":brId", element: <BrandingDetail /> },
          ],
        },
        {
          path: "school-works",
          children: [
            { index: true, element: <SchoolWorks /> },
            { path: ":schoolId", element: <SchoolWorksDetail /> },
          ],
        },
        { path: "resume", element: <Resume /> },
      ],
    },
  ]);

  return (
    <>
      <Helmet>
        {/* meta tag */}
        <meta charset="utf-8" />
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
        <meta property="og:url" content="https://portfoliodyeaji.netlify.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://portfoliodyeaji.netlify.app/img/preview.png"
        />
      </Helmet>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
