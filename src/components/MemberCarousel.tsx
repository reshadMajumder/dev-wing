import React from 'react';
import { members } from '@/lib/members';
import MemberCard from './MemberCard';
import './MemberCarousel.css';

interface MemberCarouselProps {
  position: string;
  direction: 'left-to-right' | 'right-to-left';
  title: string;
}

const MemberCarousel: React.FC<MemberCarouselProps> = ({ position, direction, title }) => {
  const filteredMembers = members.filter((member) => member.position === position);
  const duplicatedMembers = [...filteredMembers, ...filteredMembers]; // Duplicate for seamless loop

  return (
    <div className="carousel-container-wrapper">
      <h3 className="text-2xl font-bold text-center mb-6">{title}</h3>
      <div className="carousel-container">
        <div className={`carousel-track ${direction}`}>
          {duplicatedMembers.map((member, index) => (
            <div className="carousel-item" key={index}>
              <MemberCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberCarousel;
