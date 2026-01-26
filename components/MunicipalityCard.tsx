
import React from 'react';
import { Municipality } from '../types';
import { ArrowRight } from 'lucide-react';

interface MunicipalityCardProps {
  municipality: Municipality;
  onClick: (id: string) => void;
}

const MunicipalityCard: React.FC<MunicipalityCardProps> = ({ municipality, onClick }) => {
  return (
    <div 
      onClick={() => onClick(municipality.id)}
      className="group relative h-80 overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <img 
        src={municipality.heroImage} 
        alt={municipality.name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{municipality.name}</h3>
        <p className="text-sm text-slate-200 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {municipality.slogan}
        </p>
        <div className="flex items-center gap-2 text-white font-semibold text-sm">
          <span>Explorar</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>

      <div 
        className="absolute top-4 right-4 w-3 h-3 rounded-full" 
        style={{ backgroundColor: municipality.color }}
      ></div>
    </div>
  );
};

export default MunicipalityCard;
