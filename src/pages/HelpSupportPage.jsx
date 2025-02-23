import React from 'react';
    import { motion } from 'framer-motion';
    import { containerVariants, itemVariants } from '../components/AnimationVariants';
    import HelpSupportContent from '../components/HelpSupportContent';

    const HelpSupportPage = () => {
      return (
        <motion.div
          className="container mx-auto p-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HelpSupportContent />
        </motion.div>
      );
    };

    export default HelpSupportPage;
