import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import HelpSupportContent from '../components/HelpSupportContent';
    import { containerVariants, itemVariants } from '../components/AnimationVariants';

    const ProfileSettings = () => {
      const [name, setName] = useState('John Doe');
      const [email, setEmail] = useState('john.doe@example.com');
      const [password, setPassword] = useState('');
      const [twoFactorAuth, setTwoFactorAuth] = useState(false);

      return (
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Profile Settings</h3>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Change Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800"
              id="password"
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-primary dark:text-secondary"
                checked={twoFactorAuth}
                onChange={(e) => setTwoFactorAuth(e.target.checked)}
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300 text-sm">Enable Two-Factor Authentication (2FA)</span>
            </label>
          </div>
          <button className="bg-primary dark:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700 dark:hover:bg-yellow-600">
            Update Profile
          </button>
        </div>
      );
    };

    const AccountPreferences = () => {
      const [emailNotifications, setEmailNotifications] = useState(true);
      const [pushNotifications, setPushNotifications] = useState(false);
      const [inAppNotifications, setInAppNotifications] = useState(true);
      const [darkMode, setDarkMode] = useState(false);
      const [language, setLanguage] = useState('en');
      const [region, setRegion] = useState('US');

      return (
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Account Preferences</h3>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-primary dark:text-secondary"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300 text-sm">Email Notifications</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-primary dark:text-secondary"
                checked={pushNotifications}
                onChange={(e) => setPushNotifications(e.target.checked)}
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300 text-sm">Push Notifications</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-primary dark:text-secondary"
                checked={inAppNotifications}
                onChange={(e) => setInAppNotifications(e.target.checked)}
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300 text-sm">In-App Notifications</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-primary dark:text-secondary"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300 text-sm">Dark Mode</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="language">
              Language
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800"
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="region">
              Region
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800"
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
            </select>
          </div>
          <button className="bg-primary dark:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700 dark:hover:bg-yellow-600">
            Update Preferences
          </button>
        </div>
      );
    };

    const SubscriptionBilling = () => {
      const [showUpgradeOptions, setShowUpgradeOptions] = useState(false);

      const handleUpgradeClick = () => {
        setShowUpgradeOptions(true);
      };

      return (
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Subscription & Billing</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">You are currently using the <b>Basic</b> plan, which is free of cost.</p>

          {!showUpgradeOptions ? (
            <>
              <div className="mb-4">
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-green-700" onClick={handleUpgradeClick}>
                  Upgrade Plan
                </button>
              </div>
              <div className="mb-4">
                <button className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-700 opacity-50 cursor-not-allowed" disabled>
                  Cancel Subscription
                </button>
              </div>
            </>
          ) : (
            <>
              <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-100">Choose a Plan</h4>
              <div className="mb-4">
                <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 mb-4">
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Pro</h5>
                  <p className="text-gray-600 dark:text-gray-400">$29/month</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li>Advanced analytics</li>
                    <li>Up to 100,000 downloads/month</li>
                    <li>Priority support</li>
                  </ul>
                  <button className="bg-primary dark:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700 dark:hover:bg-yellow-600 mt-2">Select Pro</button>
                </div>
                <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-4">
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Business</h5>
                  <p className="text-gray-600 dark:text-gray-400">$99/month</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li>Unlimited analytics</li>
                    <li>Unlimited downloads</li>
                    <li>Dedicated support</li>
                  </ul>
                  <button className="bg-primary dark:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700 dark:hover:bg-yellow-600 mt-2">Select Business</button>
                </div>
              </div>
            </>
          )}
        </div>
      );
    };

    const SecurityPrivacy = () => {
      return (
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Security & Privacy</h3>
          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-100">Login History</h4>
            <p className="text-gray-600 dark:text-gray-400">No login history available.</p>
          </div>
          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-100">Active Sessions</h4>
            <p className="text-gray-600 dark:text-gray-400">No active sessions.</p>
          </div>
          <div className="mb-4">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700">
              Download Account Data
            </button>
          </div>
          <div className="mb-4">
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-700">
              Delete Account Data
            </button>
          </div>
        </div>
      );
    };

    const UserSettings = ({ onClose }) => {
      const [activeSection, setActiveSection] = useState('profile');
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const settingsItems = [
        { id: 'profile', label: 'Profile Settings', icon: '👤' },
        { id: 'account', label: 'Account Preferences', icon: '⚙️' },
        { id: 'subscription', label: 'Subscription & Billing', icon: '💰' },
        { id: 'security', label: 'Security & Privacy', icon: '🔒' },
        { id: 'help', label: 'Help & Support', icon: '❓' },
      ];

      const renderSection = () => {
        switch (activeSection) {
          case 'profile':
            return <ProfileSettings />;
          case 'account':
            return <AccountPreferences />;
          case 'subscription':
            return <SubscriptionBilling />;
          case 'security':
            return <SecurityPrivacy />;
          case 'help':
            return <HelpSupportContent />;
          default:
            return <ProfileSettings />;
        }
      };

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg w-11/12 max-w-4xl flex"
            style={{ height: '80vh', margin: '2.5%' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Sidebar */}
            <div className={`p-4 border-r border-gray-200 dark:border-gray-600 ${isMenuOpen ? 'w-full' : 'hidden sm:block w-1/4'}`}>
              <div className="sm:hidden flex justify-end">
                <button onClick={toggleMenu} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Settings</h3>
              <ul>
                {settingsItems.map(item => (
                  <li
                    key={item.id}
                    className={`mb-2 ${activeSection === item.id ? 'text-primary dark:text-secondary' : 'text-gray-600 dark:text-gray-300'} hover:text-primary dark:hover:text-secondary cursor-pointer flex items-center`}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content */}
            <div className={`p-6 overflow-y-auto ${isMenuOpen ? 'hidden' : 'sm:w-3/4 w-full'}`}>
              <div className="flex justify-between items-center">
                <button onClick={onClose} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <button className="sm:hidden" onClick={toggleMenu}>
                  {isMenuOpen ? 'Close Menu' : 'Open Menu'}
                </button>
              </div>
              {renderSection()}
            </div>
          </motion.div>
        </div>
      );
    };

    export default UserSettings;
