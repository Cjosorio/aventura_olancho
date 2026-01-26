
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-30" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* Reemplaza 'logo.png' con la URL real de tu imagen de logo */}
    <img 
  src={`${import.meta.env.BASE_URL}principal/logo4.png`} 
  alt="Aventura Olancho Logo" 
  className="h-full w-auto object-contain"
/>

    </div>
  );
};

export default Logo;
