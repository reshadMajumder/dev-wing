import React from 'react';
import { members } from '@/lib/members';
import MemberCard from './MemberCard';
import MemberCarousel from './MemberCarousel';
import { useIsMobile } from '@/hooks/use-mobile';
import ExecutiveGroup from './ExecutiveGroup';
import './Members.css';

const Members: React.FC = () => {
  const isMobile = useIsMobile();

  const getMembersByPosition = (position: string) => {
    return members.filter((member) => member.position === position);
  };

  if (isMobile) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>

          {/* Secretary and Deputies */}
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              {getMembersByPosition('Secretary').map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
            <div className="flex justify-center gap-8">
              {getMembersByPosition('Senior Deputy').map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
              {getMembersByPosition('Deputy').map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
              {getMembersByPosition('Junior Deputy').map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
          </div>

          {/* Executive Carousels */}
          <MemberCarousel 
            position="Senior Executive" 
            direction="left-to-right" 
            title="Senior Executives" 
          />
          <MemberCarousel 
            position="Executive" 
            direction="right-to-left" 
            title="Executives" 
          />
          <MemberCarousel 
            position="Junior Executive" 
            direction="left-to-right" 
            title="Junior Executives" 
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="tree-container">
          <div className="level">
            <div className="node">
              {getMembersByPosition('Secretary').map((member, index) => (
                <MemberCard key={index} {...member} delay={0} />
              ))}
            </div>
          </div>
          <div className="level">
            {getMembersByPosition('Senior Deputy').map((member, index) => (
              <div className="node" key={index}>
                <MemberCard {...member} delay={0.2} />
              </div>
            ))}
             {getMembersByPosition('Deputy').map((member, index) => (
              <div className="node" key={index}>
                <MemberCard {...member} delay={0.3} />
              </div>
            ))}
             {getMembersByPosition('Junior Deputy').map((member, index) => (
              <div className="node" key={index}>
                <MemberCard {...member} delay={0.4} />
              </div>
            ))}
          </div>
          <div className="level">
            {getMembersByPosition('Senior Executive').map((member, index) => (
              <div className="node" key={index}>
                <MemberCard {...member} delay={0.5 + index * 0.1} />
              </div>
            ))}
          </div>
          <div className="level">
            {getMembersByPosition('Executive').map((member, index) => (
              <div className="node" key={index}>
                <MemberCard {...member} delay={0.9 + index * 0.1} />
              </div>
            ))}
          </div>
          <div className="level">
            {getMembersByPosition('Junior Executive').map((member, index) => (
              <div className="node" key={index}>
                <MemberCard {...member} delay={1.5 + index * 0.1} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
