
import React, { useState } from 'react';
import { Municipality } from '../types';
import { 
  ArrowLeft, MapPin, Calendar, Utensils, Hotel, 
  Info, Compass, ChevronRight, Share2, Star, 
  Heart, CheckCircle, FileText, Navigation
} from 'lucide-react';

interface MunicipalityDetailProps {
  municipality: Municipality;
  onBack: () => void;
}

type DetailTab = 'resumen' | 'que-hacer' | 'donde-comer' | 'donde-dormir' | 'agenda';

const MunicipalityDetail: React.FC<MunicipalityDetailProps> = ({ municipality, onBack }) => {
  const [activeTab, setActiveTab] = useState<DetailTab>('resumen');

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-orange-100">
      {/* Hero Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={municipality.heroImage} 
          alt={municipality.name} 
          className="w-full h-full object-cover animate-scale-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-8 pb-20">
          <button 
            onClick={onBack}
            className="absolute top-8 left-8 flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full hover:bg-white/20 transition-all border border-white/20 group z-10"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-sm tracking-wide">Volver</span>
          </button>
          
          <div className="animate-fade-in-up">
             <div 
               className="inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white mb-6 border border-white/30 backdrop-blur-sm"
               style={{ backgroundColor: municipality.color + '60' }}
             >
               Destino Olancho
             </div>
             <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl font-brand">
               {municipality.name}
             </h1>
             <p className="text-xl md:text-2xl text-orange-100 font-light italic drop-shadow-md max-w-2xl mx-auto">
               "{municipality.slogan}"
             </p>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center md:justify-start gap-2 md:gap-8 h-16 overflow-x-auto no-scrollbar">
          {[
            { id: 'resumen', label: 'Resumen', icon: FileText },
            { id: 'que-hacer', label: '¿Qué Hacer?', icon: Compass },
            { id: 'donde-comer', label: '¿Dónde Comer?', icon: Utensils },
            { id: 'donde-dormir', label: '¿Dónde Dormir?', icon: Hotel },
            { id: 'agenda', label: 'Agenda Local', icon: Calendar }
          ].map(item => (
            <button 
              key={item.id}
              onClick={() => {
                setActiveTab(item.id as DetailTab);
                window.scrollTo({ top: window.innerHeight * 0.55, behavior: 'smooth' });
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                activeTab === item.id 
                  ? 'bg-slate-900 text-white' 
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              <item.icon className="w-4 h-4" /> {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-6 py-20 min-h-[60vh]">
        
        {/* VIEW: Resumen (Only visible on start) */}
        {activeTab === 'resumen' && (
          <div className="animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-6 block">Información General</span>
                <div className="prose prose-slate prose-lg max-w-none">
                  {municipality.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className={`text-xl text-slate-600 leading-relaxed mb-8 text-justify ${idx === 0 ? 'first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-slate-900 first-letter:mt-1' : ''}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-80 space-y-8">
                <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 shadow-xl">
                  <h4 className="font-bold flex items-center gap-2 mb-6 text-sm">
                    <Info className="w-4 h-4 text-blue-400" /> Guía de Viaje
                  </h4>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <Navigation className="w-5 h-5 text-slate-500 shrink-0" />
                      <p className="text-sm text-slate-300 leading-snug">{municipality.visitorInfo}</p>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <p className="text-sm text-slate-300 leading-snug">Destino ideal para grupos y aventureros.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500 rounded-[2.5rem] p-8 text-white shadow-xl">
                   <h4 className="font-bold mb-4 text-sm">¿Planeando tu ruta?</h4>
                   <p className="text-sm opacity-90 mb-6">Usa nuestro planificador para organizar tu visita a {municipality.name}.</p>
                   <button className="w-full bg-white text-orange-600 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
                     Planear Ahora
                   </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: ¿Qué Hacer? */}
        {activeTab === 'que-hacer' && (
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-black text-slate-900 mb-12 font-brand">Atractivos y Actividades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {municipality.attractions.map((att) => (
                <div key={att.id} className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  <div className="h-64 overflow-hidden">
                    <img src={att.imageUrl} alt={att.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-bold mb-4">{att.name}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{att.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: ¿Dónde Comer? */}
        {activeTab === 'donde-comer' && (
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-black text-slate-900 mb-12 font-brand">Gastronomía Local</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {municipality.restaurants.map((rest, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 flex items-center gap-6 shadow-sm hover:border-orange-200 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                    <Utensils className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{rest.name}</h4>
                    <p className="text-slate-400 text-sm mt-1">{rest.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: ¿Dónde Dormir? */}
        {activeTab === 'donde-dormir' && (
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-black text-slate-900 mb-12 font-brand">Alojamiento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {municipality.accommodations.map((hotel, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-slate-100 text-[10px] font-black uppercase rounded-lg text-slate-500">{hotel.type}</span>
                    <div className="flex gap-0.5">
                       {[...Array(hotel.rating)].map((_, i) => <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">{hotel.name}</h4>
                  <button className="mt-6 text-xs font-black uppercase tracking-widest text-orange-500 border-b border-orange-500 pb-1">Ver disponibilidad</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: Agenda */}
        {activeTab === 'agenda' && (
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-black text-slate-900 mb-12 font-brand">Eventos y Ferias</h2>
            <div className="space-y-6">
              {municipality.events.map((event, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row gap-8 items-center shadow-sm">
                  <div className="w-32 h-32 bg-slate-900 rounded-[2rem] flex flex-col items-center justify-center text-white shrink-0">
                    <span className="text-[10px] font-bold uppercase opacity-50 mb-1 tracking-widest">Mes</span>
                    <span className="text-2xl font-black">{event.date}</span>
                  </div>
                  <div>
                    <h4 className="text-3xl font-black mb-4">{event.name}</h4>
                    <p className="text-slate-500 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      
      {/* Visual Footer CTA */}
      <div className="bg-slate-900 py-20 px-6 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 blur-xl">
            <img src={municipality.heroImage} className="w-full h-full object-cover" alt="" />
         </div>
         <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 font-brand leading-tight">
               Descubre la magia de <br/> {municipality.name}
            </h2>
            <div className="flex justify-center gap-4">
              <button className="bg-orange-500 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-2xl">
                 Contactar Operador
              </button>
            </div>
         </div>
      </div>

      <style>{`
        @keyframes scale-slow {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-scale-slow { animation: scale-slow 20s ease-in-out infinite alternate; }
        
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>
    </div>
  );
};

export default MunicipalityDetail;
