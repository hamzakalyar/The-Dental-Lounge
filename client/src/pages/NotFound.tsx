import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-6"
      >
        <h1 className="text-display-lg text-primary mb-4">404</h1>
        <h2 className="text-heading-xl text-neutral-dark mb-4">Page Not Found</h2>
        <p className="text-body-lg text-neutral-mid mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-soft-lg"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;
