import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center">
        <div className="w-24 h-24 bg-gradient-buzz rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-buzz">
          <span className="text-white font-bold text-4xl">!</span>
        </div>
        <h1 className="text-6xl font-bold mb-4 text-buzz-red">404</h1>
        <p className="text-xl text-buzz-text mb-4">Oops! Page not found</p>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-gradient-buzz text-white rounded-lg font-semibold hover:shadow-buzz transition-all duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
