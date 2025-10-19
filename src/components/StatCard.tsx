import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, delay }) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <p className="text-5xl font-bold gradient-text">{value}</p>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  );
};

export default StatCard;
