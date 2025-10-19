import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Development Wing, Software Engineering Club, DIU. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
