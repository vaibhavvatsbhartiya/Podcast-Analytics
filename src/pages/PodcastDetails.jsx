import React, { useState, useEffect } from 'react';
    import { useParams } from 'react-router-dom';
    import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
    import { motion } from 'framer-motion';

    const PodcastDetails = () => {
      const { id } = useParams();
      const [podcastData, setPodcastData] = useState(null);

      useEffect(() => {
        // Mock API data fetching for a specific podcast
        const fetchData = async () => {
          // Simulate API call delay
          await new Promise((resolve) => setTimeout(resolve, 500));
          const mockData = {
            id: id,
            title: `Podcast ${id}`,
            downloads: [
              { date: '2023-01-01', downloads: 100 },
              { date: '2023-01-08', downloads: 150 },
              { date: '2023-01-15', downloads: 120 },
              { date: '2023-01-22', downloads: 180 },
              { date: '2023-01-29', downloads: 200 },
              { date: '2023-02-05', downloads: 250 },
              { date: '2023-02-12', downloads: 220 },
            ],
          };
          setPodcastData(mockData);
        };

        fetchData();
      }, [id]);

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.8,
            staggerChildren: 0.2,
          },
        },
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };

      if (!podcastData) {
        return (
          <motion.div
            className="container mx-auto p-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-gray-600 dark:text-gray-400">Loading...</p>
          </motion.div>
        );
      }

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
            {podcastData.title} Details
          </motion.h2>

          <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg p-4"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Podcast Downloads
            </h3>
            <LineChart width={730} height={250} data={podcastData.downloads}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="downloads" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
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
                <p className="text-gray-600 dark:text-gray-400">Total Downloads: <span className="font-bold text-gray-800 dark:text-gray-100">{podcastData.downloads.reduce((acc, curr) => acc + curr.downloads, 0)}</span></p>
              </div>
              <div className="p-4">
                <p className="text-gray-600 dark:text-gray-400">Average Downloads per Episode: <span className="font-bold text-gray-800 dark:text-gray-100">{(podcastData.downloads.reduce((acc, curr) => acc + curr.downloads, 0) / podcastData.downloads.length).toFixed(0)}</span></p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      );
    };

    export default PodcastDetails;
