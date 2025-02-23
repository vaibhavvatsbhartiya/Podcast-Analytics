import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import LineChartComponent from '../components/LineChartComponent';
    import BarChartComponent from '../components/BarChartComponent';
    import PieChartComponent from '../components/PieChartComponent';
    import AreaChartComponent from '../components/AreaChartComponent';
    import { containerVariants, itemVariants } from '../components/AnimationVariants';

    const AudienceInsightsPage = () => {
      const [demographicsData, setDemographicsData] = useState({
        ageGroups: [],
        genderDistribution: [],
        platformBreakdown: [],
      });
      const [geographicData, setGeographicData] = useState([]);
      const [listenerBehaviorData, setListenerBehaviorData] = useState([]);

      useEffect(() => {
        // Mock API data fetching
        const fetchAudienceInsightsData = async () => {
          // Simulate API call delay
          await new Promise((resolve) => setTimeout(resolve, 500));

          const mockDemographicsData = {
            ageGroups: [
              { age: '18-24', value: 300 },
              { age: '25-34', value: 450 },
              { age: '35-44', value: 200 },
              { age: '45+', value: 150 },
            ],
            genderDistribution: [
              { gender: 'Male', value: 600 },
              { gender: 'Female', value: 400 },
            ],
            platformBreakdown: [
              { platform: 'Spotify', value: 400 },
              { platform: 'Apple Podcasts', value: 300 },
              { platform: 'Google Podcasts', value: 200 },
              { platform: 'Other', value: 100 },
            ],
          };

          const mockGeographicData = [
            { country: 'US', value: 500 },
            { country: 'CA', value: 200 },
            { country: 'GB', value: 150 },
            { country: 'AU', value: 100 },
            { country: 'DE', value: 80 },
          ];

          const mockListenerBehaviorData = [
            { hour: 0, value: 50 },
            { hour: 4, value: 100 },
            { hour: 8, value: 200 },
            { hour: 12, value: 300 },
            { hour: 16, value: 250 },
            { hour: 20, value: 150 },
            { hour: 24, value: 100 },
          ];

          setDemographicsData(mockDemographicsData);
          setGeographicData(mockGeographicData);
          setListenerBehaviorData(mockListenerBehaviorData);
        };

        fetchAudienceInsightsData();
      }, []);

      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

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
            Audience Insights
          </motion.h2>

          {/* Demographics Section */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 mb-6"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Demographics</h3>

            {/* Age Groups */}
            <div className="mb-4">
              <PieChartComponent
                data={demographicsData.ageGroups}
                dataKey="value"
                nameKey="age"
                COLORS={COLORS}
                title="Age Groups"
              />
            </div>

            {/* Gender Distribution */}
            <div className="mb-4">
              <PieChartComponent
                data={demographicsData.genderDistribution}
                dataKey="value"
                nameKey="gender"
                COLORS={COLORS}
                title="Gender Distribution"
              />
            </div>

            {/* Platform Breakdown */}
            <div>
              <PieChartComponent
                data={demographicsData.platformBreakdown}
                dataKey="value"
                nameKey="platform"
                COLORS={COLORS}
                title="Platform Breakdown"
              />
            </div>
          </motion.div>

          {/* Geographic Insights Section */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 mb-6"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Geographic Insights</h3>
            <BarChartComponent
              data={geographicData}
              dataKey="value"
              fill="#8884d8"
              title="Geographic Distribution"
            />
          </motion.div>

          {/* Listener Behavior Analysis */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Listener Behavior Analysis</h3>
            <LineChartComponent
              data={listenerBehaviorData}
              dataKey="value"
              stroke="#82ca9d"
              title="Peak Listening Hours"
            />
          </motion.div>
        </motion.div>
      );
    };

    export default AudienceInsightsPage;
