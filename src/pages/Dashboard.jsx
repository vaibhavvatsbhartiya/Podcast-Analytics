import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import UserSettings from './UserSettings';
    import { containerVariants, itemVariants } from '../components/AnimationVariants';

    const Dashboard = ({ isLoggedIn, isSidebarOpen, toggleSidebar, content }) => {
      const [sidebarHeight, setSidebarHeight] = useState('100vh');
      const [hoveredItem, setHoveredItem] = useState(null);
      const [isSettingsOpen, setIsSettingsOpen] = useState(false);

      useEffect(() => {
        // Calculate sidebar height
        const calculateSidebarHeight = () => {
          const footerHeight = document.querySelector('footer')?.offsetHeight || 0;
          const windowHeight = window.innerHeight;
          setSidebarHeight(`${windowHeight - footerHeight}px`);
        };

        calculateSidebarHeight();
        window.addEventListener('resize', calculateSidebarHeight);

        return () => {
          window.removeEventListener('resize', calculateSidebarHeight);
        };
      }, []);

      const sidebarItems = [
        { id: 'overview', icon: '🏠', label: 'Overview', path: '/overview' },
        { id: 'podcast-analytics', icon: '📊', label: 'Podcast Analytics', path: '/podcast-analytics' },
        { id: 'episodes', icon: '🎙️', label: 'Episodes', path: '/episodes' },
        { id: 'audience-insights', icon: '👥', label: 'Audience Insights', path: '/audience-insights' },
        { id: 'marketing-attribution', icon: '📢', label: 'Marketing & Attribution', path: '/marketing-attribution' },
        { id: 'monetization', icon: '💰', label: 'Monetization', path: '/monetization' },
        { id: 'integrations', icon: '🔗', label: 'Integrations', path: '/integrations' },
        { id: 'settings', icon: '⚙️', label: 'Settings', path: '#' },
        { id: 'help-support', icon: '❓', label: 'Help & Support', path: '/help-support' },
      ];

      const [podcastData, setPodcastData] = useState([]);

      useEffect(() => {
        // Mock API data fetching
        const fetchData = async () => {
          // Simulate API call delay
          await new Promise((resolve) => setTimeout(resolve, 500));
          const mockData = [
            { date: '2023-01-01', downloads: 1200 },
            { date: '2023-01-08', downloads: 1500 },
            { date: '2023-01-15', downloads: 1800 },
            { date: '2023-01-22', downloads: 1600 },
            { date: '2023-01-29', downloads: 2000 },
            { date: '2023-02-05', downloads: 2200 },
            { date: '2023-02-12', downloads: 2500 },
          ];
          setPodcastData(mockData);
        };

        fetchData();
      }, []);

      const openSettings = () => {
        setIsSettingsOpen(true);
      };

      const closeSettings = () => {
        setIsSettingsOpen(false);
      };

      return (
        <div className="min-h-screen bg-light dark:bg-dark dark:text-light flex">
          {/* Sidebar */}
          <motion.div
            className={`bg-gray-100 dark:bg-gray-800 h-full transition-width duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ position: 'fixed', top: 0, left: 0, height: sidebarHeight }}
          >
            <div className="flex flex-col h-full justify-between items-center" style={{ marginTop: '2rem', marginBottom: '2rem', paddingLeft: '1rem' }}>
              <div>
                <button
                  onClick={toggleSidebar}
                  className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
                >
                  {isSidebarOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
                <h2 className={`text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100 text-center ${isSidebarOpen ? '' : 'sr-only'}`}>
                  Podcast Analytics
                </h2>
                <ul>
                  {sidebarItems.map(item => (
                    <li
                      key={item.id}
                      className="mb-2"
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      {item.id === 'settings' ? (
                        <button
                          onClick={openSettings}
                          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-secondary focus:outline-none"
                        >
                          <span className="mr-2">{item.icon}</span>
                          <span className={`${isSidebarOpen ? '' : 'sr-only'} ${hoveredItem === item.id && !isSidebarOpen ? 'inline' : 'hidden'} transition-opacity duration-200`}>
                            {item.label}
                          </span>
                          <span className={`${isSidebarOpen ? '' : 'sr-only'} text-sm sm:text-base truncate`}>{item.label}</span>
                        </button>
                      ) : (
                        <Link
                          to={item.path}
                          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-secondary"
                        >
                          <span className="mr-2">{item.icon}</span>
                          <span className={`${isSidebarOpen ? '' : 'sr-only'} ${hoveredItem === item.id && !isSidebarOpen ? 'inline' : 'hidden'} transition-opacity duration-200`}>
                            {item.label}
                          </span>
                          <span className={`${isSidebarOpen ? '' : 'sr-only'} text-sm sm:text-base truncate`}>{item.label}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div></div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className={`flex-1 flex flex-col transition-ml duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
            {/* Custom Navbar */}
            <nav className="bg-white dark:bg-gray-700 shadow p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Dashboard
                </h2>
                {isLoggedIn && (
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600 dark:text-gray-300">Welcome, User!</span>
                  </div>
                )}
              </div>
            </nav>

            <motion.div
              className="p-6 flex-grow"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {content}
            </motion.div>
          </div>

          {/* Settings Modal */}
          {isSettingsOpen && (
            <UserSettings onClose={closeSettings} />
          )}
        </div>
      );
    };

    export default Dashboard;
