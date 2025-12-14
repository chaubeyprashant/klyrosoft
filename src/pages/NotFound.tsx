import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="404 - Page Not Found | KlyroSoft"
        description="The page you're looking for doesn't exist. Return to KlyroSoft homepage for AI agents, workflow automation, and IT solutions."
        url="https://klyrosoft.com/404"
      />
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
          <p className="mb-4 text-xl text-foreground/80">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary-dark">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
