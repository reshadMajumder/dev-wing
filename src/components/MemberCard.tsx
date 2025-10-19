import React from 'react';
import { motion } from 'framer-motion';

interface MemberCardProps {
  name: string;
  position: string;
  imageUrl: string;
  delay?: number;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, position, imageUrl, delay = 0 }) => {
  const isPlaceholder = imageUrl === 'https://via.placeholder.com/150';

  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {isPlaceholder ? (
        <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center border-4 border-white/20 mb-4">
          <span className="text-black text-5xl font-bold">?</span>
        </div>
      ) : (
        <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full object-cover border-4 border-white/20 mb-4" />
      )}
      <h3 className="text-xl font-bold gradient-text">{isPlaceholder ? 'pending' : name}</h3>
      <p className="text-white/70">{position}</p>
    </motion.div>
  );
};

export default MemberCard;
