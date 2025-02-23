import React from 'react';
    import { motion } from 'framer-motion';

    const PricingPlan = ({ plan, price, features, cta }) => {
      return (
        <motion.div
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{plan}</h3>
          <div className="text-primary dark:text-secondary text-3xl font-bold mb-4">${price}/month</div>
          <ul className="mb-4">
            {features.map((feature, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-400 py-1">
                {feature}
              </li>
            ))}
          </ul>
          <a href={cta} className="bg-primary dark:bg-secondary text-white font-bold py-2 px-4 rounded hover:bg-blue-700 dark:hover:bg-yellow-600 focus:outline-none focus:shadow-outline block text-center">
            Get Started
          </a>
        </motion.div>
      );
    };

    export default PricingPlan;
