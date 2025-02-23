import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import {
      LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    } from 'recharts';
    import { containerVariants, itemVariants } from '../components/AnimationVariants';

    const EpisodesPage = () => {
      const [episodes, setEpisodes] = useState([]);
      const [searchTerm, setSearchTerm] = useState('');
      const [sortBy, setSortBy] = useState('popularity');

      useEffect(() => {
        // Mock API data fetching
        const fetchEpisodesData = async () => {
          // Simulate API call delay
          await new Promise((resolve) => setTimeout(resolve, 500));

          const mockEpisodesData = [
            {
              id: 1,
              title: 'Episode 1: The Beginning',
              releaseDate: '2023-01-01',
              duration: '45:00',
              thumbnail: 'https://via.placeholder.com/150',
              plays: 500,
              downloads: 400,
              retentionRate: 0.8,
              completionPercentage: 0.7,
            },
            {
              id: 2,
              title: 'Episode 2: The Journey',
              releaseDate: '2023-01-08',
              duration: '52:00',
              thumbnail: 'https://via.placeholder.com/150',
              plays: 600,
              downloads: 500,
              retentionRate: 0.75,
              completionPercentage: 0.65,
            },
            {
              id: 3,
              title: 'Episode 3: The Discovery',
              releaseDate: '2023-01-15',
              duration: '38:00',
              thumbnail: 'https://via.placeholder.com/150',
              plays: 450,
              downloads: 380,
              retentionRate: 0.9,
              completionPercentage: 0.85,
            },
          ];

          setEpisodes(mockEpisodesData);
        };

        fetchEpisodesData();
      }, []);

      const sortedEpisodes = [...episodes].sort((a, b) => {
        switch (sortBy) {
          case 'date':
            return new Date(b.releaseDate) - new Date(a.releaseDate);
          case 'newest':
            return new Date(b.releaseDate) - new Date(a.releaseDate);
          case 'oldest':
            return new Date(a.releaseDate) - new Date(b.releaseDate);
          case 'popularity':
            return b.plays - a.plays;
          case 'retentionRate':
            return b.retentionRate - a.retentionRate;
          default:
            return 0;
        }
      });

      const filteredEpisodes = sortedEpisodes.filter(episode =>
        episode.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

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
            Episodes Management
          </motion.h2>

          {/* Search and Filter */}
          <motion.div
            className="flex items-center justify-between mb-4"
            variants={itemVariants}
          >
            <input
              type="text"
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800"
              placeholder="Search episodes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popularity">Popularity</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="retentionRate">Retention Rate</option>
            </select>
          </motion.div>

          {/* Episode List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredEpisodes.map(episode => (
              <motion.div
                key={episode.id}
                className="bg-white dark:bg-gray-700 shadow rounded-lg p-4"
                variants={itemVariants}
              >
                <img src={episode.thumbnail} alt={episode.title} className="w-full h-32 object-cover rounded-md mb-2" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">{episode.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Release Date: {episode.releaseDate}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Duration: {episode.duration}</p>

                {/* Performance Stats */}
                <div className="mb-2">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Plays: {episode.plays}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Downloads: {episode.downloads}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Retention Rate: {(episode.retentionRate * 100).toFixed(0)}%</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Completion: {(episode.completionPercentage * 100).toFixed(0)}%</p>
                </div>

                {/* Retention Chart */}
                <ResponsiveContainer width="100%" height={100}>
                  <LineChart data={[{ retentionRate: episode.retentionRate }]}>
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 1]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="retentionRate" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );
    };

    export default EpisodesPage;
