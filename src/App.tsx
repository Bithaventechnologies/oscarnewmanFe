import { RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { router } from "./Routes/routes";
import { useEffect, useState } from "react";

const LoadingScreen = () => (
  <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#09032e] to-blue-800">
    <div className="relative">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-white"></div>

      {/* Inner spinner */}
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-4 border-blue-200 border-t-white animate-spin"></div>
      </div>
    </div>

    <div className="mt-8 text-center">
      <h1 className="text-white text-2xl font-bold mb-2">
        Oscar Newman Concept Limited
      </h1>
      <div className="text-blue-200 text-sm">
        Initializing Secure Environment
      </div>

      {/* Loading dots */}
      <div className="flex justify-center mt-4 space-x-1">
        <div
          className="w-2 h-2 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-2 h-2 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-2 h-2 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Add initialization logic here
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } catch (error) {
        console.error("Initialization error:", error);
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

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
