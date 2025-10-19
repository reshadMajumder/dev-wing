import React, { useState } from 'react';
import { members } from '@/lib/members';
import MemberCard from './MemberCard';
import { ChevronDown } from 'lucide-react';

interface ExecutiveGroupProps {
  title: string;
  positions: string[];
}

const ExecutiveGroup: React.FC<ExecutiveGroupProps> = ({ title, positions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const groupMembers = members.filter(member => positions.includes(member.position));

  return (
    <div className="executive-group">
      <button 
        className="executive-group-header" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        <ChevronDown className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {groupMembers.map((member, index) => (
            <MemberCard key={index} {...member} delay={index * 0.1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExecutiveGroup;
