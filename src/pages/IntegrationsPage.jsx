import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { containerVariants, itemVariants } from '../components/AnimationVariants';

    const IntegrationsPage = () => {
      const [connectedServices, setConnectedServices] = useState([]);
      const [syncData, setSyncData] = useState([]);
      const [integrationSettings, setIntegrationSettings] = useState({});

      useEffect(() => {
        // Mock API data fetching
        const fetchIntegrationsData = async () => {
          // Simulate API call delay
          await new Promise((resolve) => setTimeout(resolve, 500));

          const mockConnectedServices = [
            { id: 'spotify', name: 'Spotify', connected: true, lastSync: '2024-07-20 10:00', },
            { id: 'apple', name: 'Apple Podcasts', connected: false, lastSync: null, },
            { id: 'google', name: 'Google Analytics', connected: true, lastSync: '2024-07-20 09:30', },
          ];

          const mockSyncData = [
            { platform: 'Spotify', lastSync: '2024-07-20 10:00', status: 'success', },
            { platform: 'Google Analytics', lastSync: '2024-07-20 09:30', status: 'success', },
          ];

          const mockIntegrationSettings = {
            appleDemographics: true,
            googleReferralTraffic: false,
          };

          setConnectedServices(mockConnectedServices);
          setSyncData(mockSyncData);
          setIntegrationSettings(mockIntegrationSettings);
        };

        fetchIntegrationsData();
      }, []);

      const handleDisconnect = (id) => {
        setConnectedServices(connectedServices.map(service =>
          service.id === id ? { ...service, connected: false } : service
        ));
      };

      const handleReconnect = (id) => {
        setConnectedServices(connectedServices.map(service =>
          service.id === id ? { ...service, connected: true, lastSync: new Date().toLocaleString() } : service
        ));
      };

      const handleSettingsChange = (setting, value) => {
        setIntegrationSettings({ ...integrationSettings, [setting]: value });
      };

      return (
        <motion.div
          className="container mx-auto p-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100"
            variants={itemVariants}
          >
            Integrations
          </motion.h2>

          {/* Platform Connections */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 mb-6"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Platform Connections</h3>
            <ul>
              {connectedServices.map(service => (
                <li key={service.id} className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">{service.name}</span>
                      {service.connected ? (
                        <span className="ml-2 text-green-500">(Connected)</span>
                      ) : (
                        <span className="ml-2 text-red-500">(Disconnected)</span>
                      )}
                      {service.lastSync && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Last Sync: {service.lastSync}</p>
                      )}
                    </div>
                    <div>
                      {service.connected ? (
                        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline" onClick={() => handleDisconnect(service.id)}>
                          Disconnect
                        </button>
                      ) : (
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" onClick={() => handleReconnect(service.id)}>
                          Reconnect
                        </button>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Data Sync Overview */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 mb-6"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Data Sync Overview</h3>
            <ul>
              {syncData.map(sync => (
                <li key={sync.platform} className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">{sync.platform}</span>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Last Sync: {sync.lastSync}</p>
                    </div>
                    <div>
                      {sync.status === 'success' ? (
                        <span className="text-green-500">Success</span>
                      ) : (
                        <span className="text-red-500">Failed</span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Integration Settings */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Integration Settings</h3>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-primary dark:text-secondary"
                  checked={integrationSettings.appleDemographics}
                  onChange={(e) => handleSettingsChange('appleDemographics', e.target.checked)}
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300 text-sm">Pull Listener Demographics from Apple Podcasts</span>
              </label>
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-primary dark:text-secondary"
                  checked={integrationSettings.googleReferralTraffic}
                  onChange={(e) => handleSettingsChange('googleReferralTraffic', e.target.checked)}
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300 text-sm">Track Referral Traffic from Google Analytics</span>
              </label>
            </div>
          </motion.div>
        </motion.div>
      );
    };

    export default IntegrationsPage;
