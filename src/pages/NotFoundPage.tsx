import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <SEOHead
        title="Page Not Found"
        description="The page you are looking for does not exist or has been moved."
        path="/404"
        noIndex={true}
      />
      <div className="max-w-md w-full text-center">
        <p className="text-7xl font-bold gradient-text">404</p>
        <h1 className="mt-4 text-2xl font-bold text-primary-500">Page Not Found</h1>
        <p className="mt-3 text-slate-brand leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary">
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <Link to="/news" className="btn-outline">
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
        </div>
      </div>
    </div>
  );
}
