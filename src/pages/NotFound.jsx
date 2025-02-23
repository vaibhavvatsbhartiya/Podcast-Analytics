import React from 'react';
    import { motion } from 'framer-motion';

    const NotFound = () => {
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: 0.8,
          },
        },
      };

      return (
        <motion.div
          className="container mx-auto p-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            404 - Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The page you are looking for does not exist.
          </p>
        </motion.div>
      );
    };

    export default NotFound;
