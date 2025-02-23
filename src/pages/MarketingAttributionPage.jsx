import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import LineChartComponent from '../components/LineChartComponent';
    import BarChartComponent from '../components/BarChartComponent';
    import PieChartComponent from '../components/PieChartComponent';
    import { containerVariants, itemVariants } from '../components/AnimationVariants';

    const MarketingAttributionPage = () => {
      const [smartLinksData, setSmartLinksData] = useState([]);
      const [referralData, setReferralData] = useState([]);
      const [campaignData, setCampaignData] = useState([]);

      useEffect(() => {
        // Mock API data fetching
        const fetchMarketingData = async () => {
          // Simulate API call delay
          await new Promise((resolve) => setTimeout(resolve, 500));

          const mockSmartLinksData = [
            { date: '2023-01-01', clicks: 100, conversions: 20 },
            { date: '2023-01-08', clicks: 150, conversions: 30 },
            { date: '2023-01-15', clicks: 120, conversions: 25 },
            { date: '2023-01-22', clicks: 180, conversions: 35 },
            { date: '2023-01-29', clicks: 200, conversions: 40 },
          ];

          const mockReferralData = [
            { source: 'Social Media', value: 400 },
            { source: 'Email Campaigns', value: 300 },
            { source: 'Websites', value: 200 },
            { source: 'Other', value: 100 },
          ];

          const mockCampaignData = [
            { channel: 'Facebook Ads', impressions: 1000, engagementRate: 0.05, roi: 0.1 },
            { channel: 'Twitter Ads', impressions: 800, engagementRate: 0.04, roi: 0.08 },
            { channel: 'Newsletter', impressions: 1200, engagementRate: 0.06, roi: 0.12 },
          ];

          setSmartLinksData(mockSmartLinksData);
          setReferralData(mockReferralData);
          setCampaignData(mockCampaignData);
        };

        fetchMarketingData();
      }, []);

      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
            Marketing & Attribution
          </motion.h2>

          {/* SmartLinks Section */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 mb-6"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">SmartLinks Management</h3>
            <LineChartComponent
              data={smartLinksData}
              dataKey="clicks"
              stroke="#8884d8"
              title="Clicks and Conversions"
            />
          </motion.div>

          {/* Referral Tracking Section */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 mb-6"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Referral Tracking</h3>
            <PieChartComponent
              data={referralData}
              dataKey="value"
              nameKey="source"
              COLORS={COLORS}
              title="Traffic Sources"
            />

            {/* Referral Table */}
            <table className="w-full mt-4">
              <thead>
                <tr>
                  <th className="text-left font-semibold text-gray-800 dark:text-gray-100">Source</th>
                  <th className="text-left font-semibold text-gray-800 dark:text-gray-100">Value</th>
                </tr>
              </thead>
              <tbody>
                {referralData.map(item => (
                  <tr key={item.source}>
                    <td className="py-2 text-gray-600 dark:text-gray-400">{item.source}</td>
                    <td className="py-2 text-gray-600 dark:text-gray-400">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Promotional Campaigns Section */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Promotional Campaigns</h3>
            <BarChartComponent
              data={campaignData}
              dataKey="impressions"
              fill="#8884d8"
              title="Campaign Performance"
            />
          </motion.div>
        </motion.div>
      );
    };

    export default MarketingAttributionPage;
