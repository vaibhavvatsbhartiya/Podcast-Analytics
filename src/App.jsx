import React, { useState, useEffect, useMemo, useCallback } from 'react';
    import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
    // import { motion } from 'framer-motion';
    import LandingPage from './pages/LandingPage';
    import Dashboard from './pages/Dashboard';
    import Login from './pages/Login';
    import Signup from './pages/Signup';
    import PricingPage from './pages/PricingPage';
    import PodcastDetails from './pages/PodcastDetails';
    import UserSettings from './pages/UserSettings';
    import NotFound from './pages/NotFound';
    import Overview from './pages/Overview';
    import PodcastAnalyticsPage from './pages/PodcastAnalyticsPage';
    import EpisodesPage from './pages/EpisodesPage';
    import AudienceInsightsPage from './pages/AudienceInsightsPage';
    import MarketingAttributionPage from './pages/MarketingAttributionPage';
    import MonetizationPage from './pages/MonetizationPage';
    import IntegrationsPage from './pages/IntegrationsPage';
    import HelpSupportPage from './pages/HelpSupportPage';

    function App() {
      const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true' || false);
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const navigate = useNavigate();
      const location = useLocation();
      const [isSidebarOpen, setIsSidebarOpen] = useState(true);
      const [hoveredItem, setHoveredItem] = useState(null);

      useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
        if (darkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [darkMode]);

      const toggleDarkMode = useCallback(() => {
        setDarkMode(!darkMode);
      }, [darkMode]);

      const handleLogin = useCallback(() => {
        setIsLoggedIn(true);
        navigate('/overview');
      }, [navigate]);

      const handleLogout = useCallback(() => {
        setIsLoggedIn(false);
        navigate('/');
      }, [navigate]);

      const toggleSidebar = useCallback(() => {
        setIsSidebarOpen(!isSidebarOpen);
      }, [isSidebarOpen]);

      // Conditionally render the header based on the route
      const renderHeader = useMemo(() => {
        if (location.pathname === '/dashboard' ||
          location.pathname === '/overview' ||
          location.pathname === '/podcast-analytics' ||
          location.pathname === '/episodes' ||
          location.pathname === '/audience-insights' ||
          location.pathname === '/marketing-attribution' ||
          location.pathname === '/monetization' ||
          location.pathname === '/integrations' ||
          location.pathname === '/help-support' ||
          location.pathname === '/settings'
        ) {
          return null; // Don't render the header on dashboard-related pages
        }

        return (
          <header className="bg-white dark:bg-gray-800 shadow">
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
              <Link to="/" className="text-xl font-bold text-primary dark:text-secondary">Podcast Analytics</Link>
              <div className="flex items-center space-x-4">
                <button onClick={toggleDarkMode} className="focus:outline-none">
                  {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
                {isLoggedIn ? (
                  <button onClick={handleLogout} className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline">
                    Logout
                  </button>
                ) : (
                  <>
                    <Link to="/login" className="text-primary dark:text-secondary hover:underline">Login</Link>
                    <Link to="/signup" className="bg-primary dark:bg-secondary text-white font-bold py-2 px-4 rounded hover:bg-blue-700 dark:hover:bg-yellow-600 focus:outline-none focus:shadow-outline">Sign Up</Link>
                  </>
                )}
              </div>
            </nav>
          </header>
        );
      }, [location.pathname, darkMode, isLoggedIn, toggleDarkMode, handleLogout]);

      const isDashboardRoute = useMemo(() => {
        return (
          location.pathname === '/dashboard' ||
          location.pathname === '/overview' ||
          location.pathname === '/podcast-analytics' ||
          location.pathname === '/episodes' ||
          location.pathname === '/audience-insights' ||
          location.pathname === '/marketing-attribution' ||
          location.pathname === '/monetization' ||
          location.pathname === '/integrations' ||
          location.pathname === '/help-support' ||
          location.pathname === '/settings'
        );
      }, [location.pathname]);

      return (
        <div className="min-h-screen bg-light dark:bg-dark dark:text-light flex flex-col">
          {renderHeader}

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/podcast/:id" element={<PodcastDetails />} />
            <Route path="/settings" element={<UserSettings />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/overview" element={<Dashboard isLoggedIn={isLoggedIn} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} content={<Overview />} />} />
            <Route path="/podcast-analytics" element={<Dashboard isLoggedIn={isLoggedIn} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} content={<PodcastAnalyticsPage />} />} />
            <Route path="/episodes" element={<Dashboard isLoggedIn={isLoggedIn} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} content={<EpisodesPage />} />} />
            <Route path="/audience-insights" element={<Dashboard isLoggedIn={isLoggedIn} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} content={<AudienceInsightsPage />} />} />
            <Route path="/marketing-attribution" element={<Dashboard isLoggedIn={isLoggedIn} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} content={<MarketingAttributionPage />} />} />
            <Route path="/monetization" element={<Dashboard isLoggedIn={isLoggedIn} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} content={<MonetizationPage />} />} />
            <Route path="/integrations" element={<Dashboard isLoggedIn={isLoggedIn} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} content={<IntegrationsPage />} />} />
            <Route path="/help-support" element={<Dashboard isLoggedIn={isLoggedIn} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} content={<HelpSupportPage />} />} />
          </Routes>

          <footer className="bg-gray-200 dark:bg-gray-900 text-center py-4 w-full" style={{ position: isDashboardRoute ? 'fixed' : 'relative', bottom: 0 }}>
            <p className="text-gray-600 dark:text-gray-300">
              &copy; {new Date().getFullYear()} Podcast Analytics. All rights reserved.
            </p>
          </footer>
        </div>
      );
    }

    export default App;
