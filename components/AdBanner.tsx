import React from 'react';

const AdBanner: React.FC = () => {
  return (
    <div className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-40">
      <div className="w-64 h-100 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
        <img
          src="public/R.jpg"
          alt="Publicidad"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AdBanner;
