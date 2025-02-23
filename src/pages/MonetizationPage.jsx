import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import {
      LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    } from 'recharts';
    import { containerVariants, itemVariants } from '../components/AnimationVariants';

    const MonetizationPage = () => {
      const [revenueData, setRevenueData] = useState([]);
      const [adPerformanceData, setAdPerformanceData] = useState([]);
      const [sponsorshipData, setSponsorshipData] = useState([]);

      useEffect(() => {
        // Mock API data fetching
        const fetchMonetizationData = async () => {
          // Simulate API call delay
          await new Promise((resolve) => setTimeout(resolve, 500));

          const mockRevenueData = [
            { month: 'Jan', subscription: 1000, adRevenue: 500, sponsorship: 200 },
            { month: 'Feb', subscription: 1200, adRevenue: 600, sponsorship: 250 },
            { month: 'Mar', subscription: 1500, adRevenue: 700, sponsorship: 300 },
            { month: 'Apr', subscription: 1300, adRevenue: 650, sponsorship: 280 },
            { month: 'May', subscription: 1600, adRevenue: 750, sponsorship: 320 },
          ];

          const mockAdPerformanceData = [
            { campaign: 'Campaign A', impressions: 10000, ctr: 0.02, engagement: 0.01 },
            { campaign: 'Campaign B', impressions: 12000, ctr: 0.025, engagement: 0.012 },
            { campaign: 'Campaign C', impressions: 8000, ctr: 0.018, engagement: 0.009 },
          ];

          const mockSponsorshipData = [
            { sponsor: 'Sponsor X', dealValue: 5000, conversions: 100, retentionImpact: 0.05 },
            { sponsor: 'Sponsor Y', dealValue: 6000, conversions: 120, retentionImpact: 0.06 },
            { sponsor: 'Sponsor Z', dealValue: 4000, conversions: 80, retentionImpact: 0.04 },
          ];

          setRevenueData(mockRevenueData);
          setAdPerformanceData(mockAdPerformanceData);
          setSponsorshipData(mockSponsorshipData);
        };

        fetchMonetizationData();
      }, []);

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
            Monetization
          </motion.h2>

          {/* Revenue Reports */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 mb-6"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Revenue Reports</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="subscription" stroke="#8884d8" name="Subscription" />
                <Line type="monotone" dataKey="adRevenue" stroke="#82ca9d" name="Ad Revenue" />
                <Line type="monotone" dataKey="sponsorship" stroke="#ffc658" name="Sponsorship" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Ad Performance Analytics */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 mb-6"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Ad Performance Analytics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={adPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="campaign" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="impressions" fill="#8884d8" name="Impressions" />
                <Bar dataKey="ctr" fill="#82ca9d" name="CTR" />
                <Bar dataKey="engagement" fill="#ffc658" name="Engagement" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Sponsorship Insights */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Sponsorship Insights</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sponsorshipData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="sponsor" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="dealValue" fill="#8884d8" name="Deal Value" />
                <Bar dataKey="conversions" fill="#82ca9d" name="Conversions" />
                <Bar dataKey="retentionImpact" fill="#ffc658" name="Retention Impact" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>
      );
    };

    export default MonetizationPage;
