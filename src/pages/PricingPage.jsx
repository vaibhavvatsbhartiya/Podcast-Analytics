import React from 'react';
    import { motion } from 'framer-motion';
    import PricingPlan from '../components/PricingPlan';

    const PricingPage = () => {
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

      return (
        <motion.div
          className="container mx-auto p-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6"
            variants={itemVariants}
          >
            Choose the Right Plan for Your Podcast
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingPlan
              plan="Basic"
              price="9"
              features={[
                "Basic analytics",
                "Up to 10,000 downloads/month",
                "Email support",
              ]}
              cta="/signup"
            />
            <PricingPlan
              plan="Pro"
              price="29"
              features={[
                "Advanced analytics",
                "Up to 100,000 downloads/month",
                "Priority support",
              ]}
              cta="/signup"
            />
            <PricingPlan
              plan="Business"
              price="99"
              features={[
                "Unlimited analytics",
                "Unlimited downloads",
                "Dedicated support",
              ]}
              cta="/signup"
            />
          </div>
        </motion.div>
      );
    };

    export default PricingPage;
