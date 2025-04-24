
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold text-primary">404</h1>
      <p className="text-xl mb-6">Page not found</p>
      <p className="text-muted-foreground text-center mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button>Return to Homepage</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
