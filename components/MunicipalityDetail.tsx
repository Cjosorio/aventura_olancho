
import React, { useState } from 'react';
import { Municipality } from '../types';
import { 
  ArrowLeft, MapPin, Calendar, Utensils, Hotel, 
  Info, Compass, ChevronRight, Share2, Star, 
  Tent, Coffee, Camera, Bike, Waves, Bird, Users, Navigation, 
  ExternalLink, Heart, CheckCircle
} from 'lucide-react';

interface MunicipalityDetailProps {
  municipality: Municipality;
  onBack: () => void;
}

const MunicipalityDetail: React.FC<MunicipalityDetailProps> = ({ municipality, onBack }) => {
  const [activeTab, setActiveTab] = useState<'info' | 'places' | 'logistics'>('info');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-orange-100">
      {/* Hero Header */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src={municipality.heroImage} 
          alt={municipality.name} 
          className="w-full h-full object-cover animate-scale-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-8 pb-24">
          <button 
            onClick={onBack}
            className="absolute top-8 left-8 flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full hover:bg-white/20 transition-all border border-white/20 group z-10"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-sm tracking-wide">Volver a la Guía</span>
          </button>
          
          <div className="animate-fade-in-up">
             <div 
               className="inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white mb-6 border border-white/30 backdrop-blur-sm"
               style={{ backgroundColor: municipality.color + '60' }}
             >
               Municipio Destacado de Olancho
             </div>
             <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl font-brand">
               {municipality.name}
             </h1>
             <p className="text-xl md:text-3xl text-orange-100 font-light italic drop-shadow-md max-w-2xl mx-auto leading-relaxed">
               "{municipality.slogan}"
             </p>
          </div>
        </div>
        
        {/* Decorative corner accent */}
        <div 
          className="absolute bottom-0 left-0 w-full h-4" 
          style={{ backgroundColor: municipality.color }}
        ></div>
      </div>

      {/* Quick Access Bar */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <div className="flex gap-8 overflow-x-auto no-scrollbar py-2">
            {[
              { id: 'descubrir', label: '¿Qué Hacer?', icon: Compass },
              { id: 'gastronomia', label: '¿Dónde Comer?', icon: Utensils },
              { id: 'alojamiento', label: '¿Dónde Dormir?', icon: Hotel },
              { id: 'eventos', label: 'Agenda Local', icon: Calendar }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                <item.icon className="w-4 h-4" /> {item.label}
              </button>
            ))}
          </div>
          <button className="hidden md:flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-orange-600 transition-all">
            <Share2 className="w-4 h-4" /> Compartir Destino
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Content Area (Col 1-8) */}
        <div className="lg:col-span-8 space-y-24">
          
          {/* Section: Overview */}
          <section id="descubrir" className="scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
               <div className="max-w-xl">
                 <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Experiencias Inolvidables</span>
                 <h2 className="text-4xl font-black text-slate-900 font-brand">Atractivos Principales</h2>
               </div>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-12 first-letter:text-5xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-slate-900">
              {municipality.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {municipality.attractions.map((attraction, idx) => (
                <div key={attraction.id} className={`group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ${idx === 0 ? 'md:col-span-2' : ''}`}>
                  <div className={`${idx === 0 ? 'h-96' : 'h-72'} overflow-hidden relative`}>
                    <img src={attraction.imageUrl} alt={attraction.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-black text-2xl text-slate-900 leading-tight">{attraction.name}</h4>
                      <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-slate-500 leading-relaxed mb-6">{attraction.description}</p>
                    <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-orange-500 hover:text-orange-600 transition-colors">
                       Ver Mapa de Acceso <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Gastronomy */}
          <section id="gastronomia" className="scroll-mt-24 bg-white p-12 rounded-[3rem] border border-slate-100 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <Utensils className="w-32 h-32" />
             </div>
             
             <div className="relative z-10">
                <span className="text-green-500 font-bold uppercase tracking-widest text-xs mb-3 block">Sabores de Nuestra Tierra</span>
                <h2 className="text-4xl font-black text-slate-900 mb-10 font-brand">Ruta Gastronómica</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {municipality.restaurants.map((rest, idx) => (
                    <div key={idx} className="flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-lg transition-all">
                       <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-500">
                         <Utensils className="w-8 h-8" />
                       </div>
                       <div>
                         <h4 className="font-bold text-lg text-slate-900 group-hover:text-orange-500 transition-colors">{rest.name}</h4>
                         <p className="text-slate-500 text-sm leading-snug mt-1">
                           <span className="font-bold text-slate-400">Especialidad:</span> {rest.specialty}
                         </p>
                       </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-8 bg-orange-50 rounded-3xl border border-orange-100 flex items-center gap-6">
                   <div className="p-4 bg-white rounded-2xl shadow-sm">
                      <Coffee className="w-8 h-8 text-orange-500" />
                   </div>
                   <p className="text-sm text-slate-700 leading-relaxed italic">
                     "No se puede visitar {municipality.name} sin probar los platos locales. Pregunte siempre por los productos del día para una experiencia 100% auténtica."
                   </p>
                </div>
             </div>
          </section>

          {/* Section: Events */}
          <section id="eventos" className="scroll-mt-24">
            <h3 className="text-3xl font-black mb-10 flex items-center gap-3 font-brand">
              <Calendar className="w-8 h-8 text-orange-500" />
              Cultura y Tradición
            </h3>
            <div className="space-y-6">
              {municipality.events.map((event, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-3xl border-2 border-slate-100 hover:border-orange-200 transition-all bg-white group">
                  <div className="flex-shrink-0 w-24 h-24 bg-slate-900 rounded-3xl flex flex-col items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Mes</span>
                    <span className="text-xl font-black">{event.date}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-black text-slate-900 mb-3">{event.name}</h4>
                    <p className="text-slate-600 leading-relaxed">{event.description}</p>
                    <div className="mt-6 flex gap-4">
                       <span className="px-3 py-1 bg-slate-50 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">Festival Cultural</span>
                       <span className="px-3 py-1 bg-slate-50 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">Patrimonio Local</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Content Area: Sidebar (Col 9-12) */}
        <div className="lg:col-span-4 space-y-12">
          
          {/* Quick Stats / Info */}
          <div className="bg-slate-900 text-white rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
             
             <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-400" />
                Guía Práctica
             </h3>
             
             <div className="space-y-8">
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Lo que debes saber</p>
                   <div className="space-y-4">
                      <div className="flex gap-4">
                         <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 shrink-0">
                            <Navigation className="w-5 h-5" />
                         </div>
                         <p className="text-sm text-slate-300 leading-snug">{municipality.visitorInfo}</p>
                      </div>
                      <div className="flex gap-4">
                         <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-green-400 shrink-0">
                            <CheckCircle className="w-5 h-5" />
                         </div>
                         <p className="text-sm text-slate-300 leading-snug">Ideal para turismo {municipality.id === 'culmi' ? 'de aventura extrema' : 'familiar y cultural'}.</p>
                      </div>
                   </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                   <button className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" /> Cómo Llegar Ahora
                   </button>
                </div>
             </div>
          </div>

          {/* Accommodation Sidebar */}
          <div id="alojamiento" className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100 scroll-mt-24">
             <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-slate-900">
                <Hotel className="w-5 h-5 text-orange-500" />
                Dónde Descansar
             </h3>
             
             <div className="space-y-6">
                {municipality.accommodations.map((hotel, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                       <span className="px-2 py-0.5 bg-orange-50 text-[10px] font-black text-orange-600 rounded-md uppercase tracking-tighter">{hotel.type}</span>
                       <div className="flex gap-0.5">
                          {[...Array(hotel.rating)].map((_, i) => <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                       </div>
                    </div>
                    <h4 className="font-bold text-slate-900 group-hover:text-orange-500 transition-colors">{hotel.name}</h4>
                    <div className="h-[1px] w-full bg-slate-50 mt-4"></div>
                  </div>
                ))}
             </div>
             
             <button className="w-full mt-10 border-2 border-slate-900 text-slate-900 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2">
                Ver Todas las Opciones
             </button>
          </div>

          {/* Activities Sidebar */}
          <div className="bg-green-500 rounded-[3rem] p-10 text-white shadow-xl shadow-green-200">
             <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Compass className="w-5 h-5" />
                Plan de Aventura
             </h3>
             <div className="space-y-4">
                {municipality.activities.map((act, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/10 p-3 rounded-2xl border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-white text-green-600 flex items-center justify-center">
                       <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm">{act.name}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
      
      {/* Visual Separation / Footer CTA */}
      <div className="bg-slate-900 py-20 px-6 mt-20 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
            <img src={municipality.heroImage} className="w-full h-full object-cover blur-sm" alt="" />
         </div>
         <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 font-brand leading-tight">
               ¿Listo para vivir la experiencia <br/> en {municipality.name}?
            </h2>
            <button 
              onClick={() => (document.querySelector('.ai-assistant-trigger') as HTMLButtonElement)?.click()}
              className="bg-orange-500 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/20"
            >
               Hablar con nuestro Guía AI
            </button>
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
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
      `}</style>
    </div>
  );
};

export default MunicipalityDetail;
