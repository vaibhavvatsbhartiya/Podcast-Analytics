import React, { useState, useEffect } from 'react';
    import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
    import { motion } from 'framer-motion';
    import { containerVariants, itemVariants } from '../components/AnimationVariants';

    const Overview = () => {
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
            Overview
          </motion.h2>

          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-2 sm:p-4"
            variants={itemVariants}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800 dark:text-gray-100">
              Podcast Downloads
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={podcastData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="downloads" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            className="mt-6 bg-white dark:bg-gray-700 shadow rounded-lg p-4"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Key Statistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4">
                <p className="text-gray-600 dark:text-gray-400">Total Downloads: <span className="font-bold text-gray-800 dark:text-gray-100">15,000</span></p>
              </div>
              <div className="p-4">
                <p className="text-gray-600 dark:text-gray-400">Average Downloads per Episode: <span className="font-bold text-gray-800 dark:text-gray-100">800</span></p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      );
    };

    export default Overview;
