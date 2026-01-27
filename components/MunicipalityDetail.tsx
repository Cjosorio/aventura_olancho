
import React, { useState } from 'react';
import { Municipality, Accommodation, Restaurant } from '../types';
import { 
  ArrowLeft, MapPin, Calendar, Utensils, Hotel, 
  Info, Compass, ChevronRight, Share2, Star, 
  Heart, CheckCircle, FileText, Navigation, X,
  Wifi, Coffee, Car, Waves, Tv, Shield, Zap,
  Smartphone, Languages, Info as InfoIcon, Users,
  Phone, MessageCircle, Gift, Play
} from 'lucide-react';

interface MunicipalityDetailProps {
  municipality: Municipality;
  onBack: () => void;
}

type DetailTab = 'resumen' | 'que-hacer' | 'donde-comer' | 'donde-dormir' | 'agenda';

const MunicipalityDetail: React.FC<MunicipalityDetailProps> = ({ municipality, onBack }) => {
  const [activeTab, setActiveTab] = useState<DetailTab>('resumen');
  const [selectedHotel, setSelectedHotel] = useState<Accommodation | null>(null);
  const [selectedRest, setSelectedRest] = useState<Restaurant | null>(null);

  const formatPrice = (price: number) => `L. ${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

  const DiscountBanner = () => (
    <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 mb-10 flex items-start gap-4">
      <div className="bg-orange-500 p-3 rounded-xl shrink-0">
        <Gift className="w-6 h-6 text-white" />
      </div>
      <div>
        <h4 className="font-black text-orange-900 uppercase text-xs tracking-widest mb-1">Beneficio Exclusivo</h4>
        <p className="text-sm text-orange-800 font-medium leading-relaxed">
          ¡Atención viajero! Con <strong>AventuraOlancho</strong> tienes un <strong>10% de descuento</strong> al escribir o ir directamente al establecimiento. Menciona que nos viste aquí para canjearlo.
        </p>
      </div>
    </div>
  );

  const ContactButtons = ({ phone, whatsapp, name }: { phone?: string, whatsapp?: string, name: string }) => (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      {whatsapp && (
        <a 
          href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=Hola, vengo de Aventura Olancho y me interesa información sobre ${name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-all shadow-lg shadow-green-200"
        >
          <MessageCircle className="w-5 h-5" /> Reservar vía WhatsApp
        </a>
      )}
      {phone && (
        <a 
          href={`tel:${phone}`}
          className="flex-1 bg-slate-900 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
        >
          <Phone className="w-5 h-5" /> Llamar al Local
        </a>
      )}
    </div>
  );

  const DetailModal = ({ 
    isOpen, 
    onClose, 
    title, 
    image, 
    description, 
    address, 
    children 
  }: { 
    isOpen: boolean; 
    onClose: () => void; 
    title: string; 
    image: string; 
    description: string; 
    address: string;
    children?: React.ReactNode;
  }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in">
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={onClose}></div>
        <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 flex flex-col">
          <button onClick={onClose} className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/40 transition-all border border-white/20">
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="relative h-64 md:h-80">
              <img src={image} alt={title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-10">
                <h2 className="text-4xl font-black text-slate-900 font-brand">{title}</h2>
                <div className="flex items-center gap-2 text-slate-500 mt-2">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-medium">{address}</span>
                </div>
              </div>
            </div>

            <div className="p-10">
              <DiscountBanner />
              <p className="text-slate-600 text-lg leading-relaxed mb-10">{description}</p>
              {children}
            </div>
          </div>
          
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
             <div className="flex items-center gap-2 text-slate-400 text-xs">
                <Shield className="w-4 h-4" /> Reserva Protegida por Aventura Olancho
             </div>
             <button onClick={onClose} className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-sm">Cerrar Detalle</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-orange-100">
      {/* Modales */}
      <DetailModal 
        isOpen={!!selectedHotel} 
        onClose={() => setSelectedHotel(null)}
        title={selectedHotel?.name || ''}
        image={selectedHotel?.imageUrl || ''}
        description={selectedHotel?.description || ''}
        address={selectedHotel?.address || ''}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-orange-500 mb-6 flex items-center gap-2">
               <Zap className="w-4 h-4" /> Servicios Incluidos
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {selectedHotel?.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-bold text-slate-700">{amenity}</span>
                </div>
              ))}
            </div>
            
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mt-10 mb-4">Contacto Directo</h4>
            <ContactButtons name={selectedHotel?.name || ''} phone={selectedHotel?.phone} whatsapp={selectedHotel?.whatsapp} />
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-orange-500 mb-6 flex items-center gap-2">
               <Hotel className="w-4 h-4" /> Tipos de Habitación
            </h4>
            <div className="space-y-4">
              {selectedHotel?.rooms.map((room, idx) => (
                <div key={idx} className="p-5 border border-slate-200 rounded-2xl hover:border-orange-200 transition-all bg-white group">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-bold text-slate-900">{room.name}</h5>
                    <span className="text-orange-600 font-black">{formatPrice(room.price)}</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-3">{room.description}</p>
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {room.capacity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DetailModal>

      <DetailModal 
        isOpen={!!selectedRest} 
        onClose={() => setSelectedRest(null)}
        title={selectedRest?.name || ''}
        image={selectedRest?.imageUrl || ''}
        description={selectedRest?.description || ''}
        address={selectedRest?.address || ''}
      >
        <div className="space-y-10">
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4">Contacto Directo</h4>
            <ContactButtons name={selectedRest?.name || ''} phone={selectedRest?.phone} whatsapp={selectedRest?.whatsapp} />
          </div>

          {['Entrada', 'Plato Fuerte', 'Bebida'].map((cat) => (
            <div key={cat}>
              <h4 className="text-xs font-black uppercase tracking-widest text-orange-500 mb-6 flex items-center gap-2">
                 <Utensils className="w-4 h-4" /> {cat}s
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedRest?.menu.filter(m => m.category === cat).map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 border-b border-slate-100 hover:bg-slate-50 transition-all rounded-xl">
                    <div>
                      <h5 className="font-bold text-slate-900">{item.name}</h5>
                      <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
                    </div>
                    <span className="text-slate-900 font-black ml-4 whitespace-nowrap">{formatPrice(item.price)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DetailModal>

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
        
        {/* VIEW: Resumen */}
        {activeTab === 'resumen' && (
          <div className="animate-fade-in-up space-y-12">
            
            {/* 1. INFORMACIÓN SECTION (Text first) */}
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
                    <InfoIcon className="w-4 h-4 text-blue-400" /> Guía de Viaje
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
              </div>
            </div>

            {/* 2. MULTIMEDIA SECTION (Images later) */}
            <div className="w-full h-80 md:h-[450px] rounded-[3rem] overflow-hidden shadow-2xl relative group bg-slate-200">
               <img 
                 src={municipality.cardImage} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                 alt="Video/Foto destacada"
               />
               <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-all cursor-pointer">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                     <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
               </div>
               <div className="absolute bottom-8 left-8">
                  <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                    Multimedia Destacada
                  </span>
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
                <div 
                  key={idx} 
                  onClick={() => setSelectedRest(rest)}
                  className="bg-white p-8 rounded-[2rem] border border-slate-100 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:border-orange-200 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="w-full md:w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                    <img src={rest.imageUrl} alt={rest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{rest.name}</h4>
                    <p className="text-slate-400 text-xs mb-3 font-medium uppercase tracking-widest">{rest.specialty}</p>
                    <p className="text-slate-500 text-sm line-clamp-2">{rest.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-orange-500 font-black text-[10px] uppercase tracking-widest">
                       Ver Menú y Contacto <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: ¿Dónde Dormir? */}
        {activeTab === 'donde-dormir' && (
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-black text-slate-900 mb-12 font-brand">Alojamiento y Estancia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {municipality.accommodations.map((hotel, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedHotel(hotel)}
                  className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group overflow-hidden"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900">
                      Desde {formatPrice(hotel.rooms.length > 0 ? Math.min(...hotel.rooms.map(r => r.price)) : 0)}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-slate-100 text-[10px] font-black uppercase rounded-lg text-slate-500">{hotel.type}</span>
                      <div className="flex gap-0.5">
                         {[...Array(hotel.rating)].map((_, i) => <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-orange-500 transition-colors">{hotel.name}</h4>
                    <p className="text-slate-500 text-sm line-clamp-2 mb-6">{hotel.description}</p>
                    <button className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2 group-hover:gap-4 transition-all">
                      Detalles y Reserva <ArrowLeft className="w-4 h-4 rotate-180" />
                    </button>
                  </div>
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

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default MunicipalityDetail;
