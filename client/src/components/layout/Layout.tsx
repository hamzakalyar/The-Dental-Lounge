import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Header />
      {/* No padding-top since navbar is transparent and doesn't block content */}
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
