import React from 'react';
    import { motion } from 'framer-motion';

    const Feature = ({ title, description, icon }) => {
      return (
        <motion.div
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-primary dark:text-secondary text-2xl mb-4">{icon}</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </motion.div>
      );
    };

    export default Feature;
