import { RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { router } from "./Routes/routes";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Oscar Newman Concept Limited</title>
        <meta
          name="description"
          content="Providing top-notch security solutions for your needs."
        />
        <meta
          name="keywords"
          content="Security, Safety, Protection, Oscar Newman Concept"
        />
        <meta name="author" content="Oscar Newman Concept Limited" />
        <meta property="og:title" content="Oscar Newman Concept Limited" />
        <meta
          property="og:description"
          content="Providing top-notch security solutions for your needs."
        />
        <meta property="og:image" content="./assets/logo.svg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
