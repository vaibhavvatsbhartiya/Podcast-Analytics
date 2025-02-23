import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import Feature from '../components/Feature';
    import PricingPlan from '../components/PricingPlan';
    import { containerVariants, itemVariants } from '../components/AnimationVariants';

    const LandingPage = () => {
      return (
        <motion.div
          className="container mx-auto p-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section
            className="text-center py-12"
            variants={itemVariants}
          >
            <h1 className="text-4xl font-bold text-primary dark:text-secondary mb-4">
              Unlock Your Podcast's Potential
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Get detailed analytics and insights to grow your audience.
            </p>
            <Link
              to="/signup"
              className="bg-primary dark:bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
            >
              Start Your Free Trial
            </Link>
          </motion.section>

          <motion.section
            className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12"
            variants={itemVariants}
          >
            <Feature
              title="Detailed Analytics"
              description="Track downloads, listener locations, and more."
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
            />
            <Feature
              title="Audience Insights"
              description="Understand your listeners' demographics and interests."
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3v6m-3-3v6M9 10h.01M3 15h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v5a2 2 0 002 2z" /></svg>}
            />
            <Feature
              title="Growth Strategies"
              description="Get personalized recommendations to grow your podcast."
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 4.75 7.5 4.75a12.742 12.742 0 00-3 1.516m9.75 0a12.742 12.742 0 013-1.516m-9.75 0C13.168 5.477 14.754 4.75 16.5 4.75a12.742 12.742 0 013 1.516m-2.25 0h2.25m-5.25 5.653c0 .857.611 1.522 1.384 1.522h2.624c.773 0 1.384-.665 1.384-1.522m-5.25 0c0-.857.611-1.522 1.384-1.522h2.624c.773 0 1.384.665 1.384 1.522" /></svg>}
            />
          </motion.section>

          <motion.section
            className="py-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6">
              Pricing Plans
            </h2>
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
          </motion.section>

          <motion.section
            className="text-center py-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Ready to Get Started?
            </h2>
            <Link
              to="/signup"
              className="bg-primary dark:bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
            >
              Sign Up Now
            </Link>
          </motion.section>
        </motion.div>
      );
    };

    export default LandingPage;
