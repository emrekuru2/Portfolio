import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero h-full">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="py-6 text-xl">
            Don't know where you are? Me neither...
          </p>
          <Link to="/" className="btn btn-primary btn-outline">
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
