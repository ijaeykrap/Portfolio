import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MetaTags from "./Assets/MetaTags";

import Main from "./Main/Main";
import WebDesign from "./WebDesign/WebDesign";
import Promotion from "./Branding/Branding";
import MobileDesign from "./MobileDesign/MobileDesign";
import Resume from "./Resume/Resume";

import BrandingDetail from "./Branding/BrandingDetail";
import MobileDesignDetail from "./MobileDesign/MobileDesignDetail";
import WebDesignDetail from "./WebDesign/WebDesignDetail";

import ScrollToTop from "./Assets/ScrollRestoration";

import RootLayout from "./Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <RootLayout />
          <ScrollToTop />
        </>
      ),
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
          path: "promotion",
          children: [
            { index: true, element: <Promotion /> },
            { path: ":promotionId", element: <BrandingDetail /> },
          ],
        },
        {
          path: "mobile-design",
          children: [
            { index: true, element: <MobileDesign /> },
            { path: ":mobileId", element: <MobileDesignDetail /> },
          ],
        },
        {
          path: "resume",
          children: [{ index: true, element: <Resume /> }],
        },
      ],
    },
  ]);
  return (
    <>
      <MetaTags />
      <RouterProvider
        router={router}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      />
    </>
  );
}

export default App;
