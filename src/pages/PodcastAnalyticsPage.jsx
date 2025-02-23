import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import LineChartComponent from '../components/LineChartComponent';
    import BarChartComponent from '../components/BarChartComponent';
    import PieChartComponent from '../components/PieChartComponent';
    import AreaChartComponent from '../components/AreaChartComponent';
    import ComposedChartComponent from '../components/ComposedChartComponent';
    import { containerVariants, itemVariants } from '../components/AnimationVariants';

    const PodcastAnalyticsPage = () => {
      const [downloadsData, setDownloadsData] = useState([]);
      const [viewsData, setViewsData] = useState([]);
      const [retentionData, setRetentionData] = useState([]);
      const [demographicsData, setDemographicsData] = useState({
        ageGroups: [],
        geographicDistribution: [],
        deviceUsage: [],
        platformBreakdown: [],
      });
      const [episodePerformanceData, setEpisodePerformanceData] = useState([]);

      useEffect(() => {
        // Mock API data fetching
        const fetchAnalyticsData = async () => {
          // Simulate API call delay
          await new Promise((resolve) => setTimeout(resolve, 500));

          const mockDownloadsData = [
            { date: '2023-01-01', downloads: 150 },
            { date: '2023-01-08', downloads: 250 },
            { date: '2023-01-15', downloads: 320 },
            { date: '2023-01-22', downloads: 280 },
            { date: '2023-01-29', downloads: 400 },
          ];

          const mockViewsData = [
            { date: '2023-01-01', views: 200 },
            { date: '2023-01-08', views: 300 },
            { date: '2023-01-15', views: 380 },
            { date: '2023-01-22', views: 340 },
            { date: '2023-01-29', views: 450 },
          ];

          const mockRetentionData = [
            { episode: 'Episode 1', dropOff: 0.2, avgListenDuration: 35, completionRate: 0.8 },
            { episode: 'Episode 2', dropOff: 0.3, avgListenDuration: 40, completionRate: 0.7 },
            { episode: 'Episode 3', dropOff: 0.15, avgListenDuration: 25, completionRate: 0.9 },
            { episode: 'Episode 4', dropOff: 0.25, avgListenDuration: 30, completionRate: 0.75 },
          ];

          const mockDemographicsData = {
            ageGroups: [
              { age: '18-24', value: 300 },
              { age: '25-34', value: 450 },
              { age: '35-44', value: 200 },
              { age: '45+', value: 150 },
            ],
            geographicDistribution: [
              { country: 'US', value: 500 },
              { country: 'CA', value: 200 },
              { country: 'GB', value: 150 },
              { country: 'Other', value: 150 },
            ],
            deviceUsage: [
              { device: 'Mobile', value: 600 },
              { device: 'Desktop', value: 300 },
              { device: 'Tablet', value: 100 },
            ],
            platformBreakdown: [
              { platform: 'Spotify', value: 400 },
              { platform: 'Apple Podcasts', value: 300 },
              { platform: 'Google Podcasts', value: 200 },
              { platform: 'Other', value: 100 },
            ],
          };

          const mockEpisodePerformanceData = [
            { episode: 'Episode 1', downloads: 400, views: 500 },
            { episode: 'Episode 2', downloads: 350, views: 420 },
            { episode: 'Episode 3', downloads: 500, views: 600 },
            { episode: 'Episode 4', downloads: 420, views: 480 },
          ];

          setDownloadsData(mockDownloadsData);
          setViewsData(mockViewsData);
          setRetentionData(mockRetentionData);
          setDemographicsData(mockDemographicsData);
          setEpisodePerformanceData(mockEpisodePerformanceData);
        };

        fetchAnalyticsData();
      }, []);

      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
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
            Podcast Analytics
          </motion.h2>

          {/* Downloads Analytics */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 mb-6"
            variants={itemVariants}
          >
            <LineChartComponent
              data={downloadsData}
              dataKey="downloads"
              stroke="#8884d8"
              title="Downloads Analytics"
            />
          </motion.div>

          {/* Views Analytics */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 mb-6"
            variants={itemVariants}
          >
            <LineChartComponent
              data={viewsData}
              dataKey="views"
              stroke="#82ca9d"
              title="Views Analytics"
            />
          </motion.div>

          {/* Listener Retention */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 mb-6"
            variants={itemVariants}
          >
            <AreaChartComponent
              data={retentionData}
              dataKey="dropOff"
              stroke="#ffc658"
              fill="#ffc658"
              title="Listener Retention"
            />
          </motion.div>

          {/* Episode Performance */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 mb-6"
            variants={itemVariants}
          >
            <ComposedChartComponent
              data={episodePerformanceData}
              title="Episode Performance"
            />
          </motion.div>

          {/* Demographics Analysis */}
          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Demographics Analysis</h3>

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

            {/* Platform Breakdown */}
            <div className="mt-4">
              <PieChartComponent
                data={demographicsData.platformBreakdown}
                dataKey="value"
                nameKey="platform"
                COLORS={COLORS}
                title="Platform Breakdown"
              />
            </div>
          </motion.div>
        </motion.div>
      );
    };

    export default PodcastAnalyticsPage;
