
import React, { useState } from 'react';
import { MUNICIPALITIES } from '../constants';
import { Municipality, Attraction, Accommodation } from '../types';
// Added Compass to the import list from lucide-react
import { ChevronRight, ChevronLeft, MapPin, Calendar, Check, Plane, Trash2, Star, Utensils, Printer, Share2, Users, Building2, Compass } from 'lucide-react';

interface TripPlannerProps {
  onCancel: () => void;
}

interface TripDay {
  dayNumber: number;
  municipalityId: string;
  activities: string[];
}

const TripPlanner: React.FC<TripPlannerProps> = ({ onCancel }) => {
  const [step, setStep] = useState(1);
  const [selectedMuniIds, setSelectedMuniIds] = useState<string[]>([]);
  const [duration, setDuration] = useState(3);
  const [peopleCount, setPeopleCount] = useState(2);
  const [itinerary, setItinerary] = useState<TripDay[]>([]);
  const [selectedHotels, setSelectedHotels] = useState<Record<string, string>>({});

  const handleToggleMuni = (id: string) => {
    setSelectedMuniIds(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const startPlanning = () => {
    if (selectedMuniIds.length === 0) return;
    
    const newItinerary: TripDay[] = [];
    const daysPerMuni = Math.floor(duration / selectedMuniIds.length);
    let remainingDays = duration % selectedMuniIds.length;

    let currentDay = 1;
    selectedMuniIds.forEach((muniId, index) => {
      let daysForThisMuni = daysPerMuni + (remainingDays > 0 ? 1 : 0);
      remainingDays--;

      for (let i = 0; i < daysForThisMuni; i++) {
        newItinerary.push({
          dayNumber: currentDay++,
          municipalityId: muniId,
          activities: []
        });
      }
    });

    setItinerary(newItinerary);
    setStep(3);
  };

  const toggleActivity = (dayIndex: number, activityName: string) => {
    const updated = [...itinerary];
    const day = updated[dayIndex];
    if (day.activities.includes(activityName)) {
      day.activities = day.activities.filter(a => a !== activityName);
    } else {
      day.activities = [...day.activities, activityName];
    }
    setItinerary(updated);
  };

  const handleSelectHotel = (muniId: string, hotelName: string) => {
    setSelectedHotels(prev => ({ ...prev, [muniId]: hotelName }));
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Mi Viaje por Olancho',
      text: `He planeado una aventura de ${duration} días en Olancho visitando ${selectedMuniIds.map(id => getMuni(id).name).join(', ')}.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        alert('Copiado al portapapeles: ' + shareData.text);
      }
    } catch (err) {
      console.error('Error al compartir', err);
    }
  };

  const resetPlanner = () => {
    setStep(1);
    setSelectedMuniIds([]);
    setDuration(3);
    setPeopleCount(2);
    setItinerary([]);
    setSelectedHotels({});
  };

  const getMuni = (id: string) => MUNICIPALITIES.find(m => m.id === id)!;

  // Group days for rendering
  const groupedItinerary = selectedMuniIds.map(muniId => ({
    municipality: getMuni(muniId),
    days: itinerary.filter(d => d.municipalityId === muniId)
  })).filter(group => group.days.length > 0);

  return (
    <section className="pt-32 pb-24 bg-white min-h-screen print:pt-0">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Progress Bar (Hide on print) */}
        <div className="mb-12 flex justify-between items-center relative print:hidden">
          <div className="absolute h-1 bg-slate-100 top-1/2 left-0 w-full -z-10 -translate-y-1/2"></div>
          {[1, 2, 3, 4].map((s) => (
            <div 
              key={s}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                step >= s ? 'bg-orange-500 text-white scale-110 shadow-lg' : 'bg-white border-2 border-slate-200 text-slate-400'
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Step 1: Destinos */}
        {step === 1 && (
          <div className="animate-fade-in-up">
            <div className="mb-10 text-center">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2 block">Paso 1</span>
              <h2 className="text-4xl font-black text-slate-900 mb-4 font-brand">¿Qué municipios quieres visitar?</h2>
              <p className="text-slate-500">Selecciona los destinos que te gustaría incluir en tu ruta olanchana.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {MUNICIPALITIES.map(m => (
                <div 
                  key={m.id}
                  onClick={() => handleToggleMuni(m.id)}
                  className={`relative p-6 rounded-3xl border-2 cursor-pointer transition-all ${
                    selectedMuniIds.includes(m.id) 
                      ? 'border-orange-500 bg-orange-50 shadow-md scale-[1.02]' 
                      : 'border-slate-100 bg-white hover:border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                      <MapPin className="w-6 h-6" style={{ color: m.color }} />
                    </div>
                    {selectedMuniIds.includes(m.id) && (
                      <div className="bg-orange-500 rounded-full p-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">{m.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{m.slogan}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4">
              <button onClick={onCancel} className="px-8 py-3 font-bold text-slate-400 hover:text-slate-600 transition-colors">Cancelar</button>
              <button 
                disabled={selectedMuniIds.length === 0}
                onClick={() => setStep(2)}
                className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all disabled:opacity-30"
              >
                Siguiente <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Duración y Personas */}
        {step === 2 && (
          <div className="animate-fade-in-up max-w-xl mx-auto">
            <div className="mb-10 text-center">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2 block">Paso 2</span>
              <h2 className="text-4xl font-black text-slate-900 mb-4 font-brand">Detalles del Viaje</h2>
              <p className="text-slate-500">¿Cuántas personas viajan y cuánto tiempo se quedarán?</p>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 mb-12 space-y-12">
              <div>
                <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">Duración del Viaje</p>
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setDuration(Math.max(1, duration - 1))}
                    className="w-16 h-16 bg-white rounded-2xl border border-slate-200 flex items-center justify-center text-3xl font-bold hover:bg-slate-50 transition-colors"
                  >
                    -
                  </button>
                  <div className="text-center">
                    <span className="text-6xl font-black text-slate-900">{duration}</span>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-2">Días</p>
                  </div>
                  <button 
                    onClick={() => setDuration(Math.min(15, duration + 1))}
                    className="w-16 h-16 bg-white rounded-2xl border border-slate-200 flex items-center justify-center text-3xl font-bold hover:bg-slate-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">Cantidad de Personas</p>
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
                    className="w-16 h-16 bg-white rounded-2xl border border-slate-200 flex items-center justify-center text-3xl font-bold hover:bg-slate-50 transition-colors"
                  >
                    -
                  </button>
                  <div className="text-center">
                    <span className="text-6xl font-black text-slate-900">{peopleCount}</span>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-2">Viajeros</p>
                  </div>
                  <button 
                    onClick={() => setPeopleCount(Math.min(50, peopleCount + 1))}
                    className="w-16 h-16 bg-white rounded-2xl border border-slate-200 flex items-center justify-center text-3xl font-bold hover:bg-slate-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button onClick={() => setStep(1)} className="flex items-center gap-2 font-bold text-slate-400 hover:text-slate-600 transition-colors">
                <ChevronLeft className="w-5 h-5" /> Anterior
              </button>
              <button 
                onClick={startPlanning}
                className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all"
              >
                Crear Itinerario <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Itinerario y Hotel */}
        {step === 3 && (
          <div className="animate-fade-in-up">
            <div className="mb-10 text-center">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2 block">Paso 3</span>
              <h2 className="text-4xl font-black text-slate-900 mb-4 font-brand">Configura tu Estancia</h2>
              <p className="text-slate-500">Elige dónde dormirás y qué harás en cada municipio.</p>
            </div>

            <div className="space-y-16 mb-12">
              {groupedItinerary.map((group, gIdx) => (
                <div key={gIdx} className="space-y-6">
                  <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-4">
                     <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold" style={{ backgroundColor: group.municipality.color }}>
                       <MapPin className="w-6 h-6" />
                     </div>
                     <div>
                       <h3 className="text-2xl font-black text-slate-900">{group.municipality.name}</h3>
                       <p className="text-slate-500 text-sm italic">Estancia de {group.days.length} {group.days.length === 1 ? 'día' : 'días'}</p>
                     </div>
                  </div>

                  {/* Hotel Selection for this municipality */}
                  <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                    <h4 className="text-slate-900 font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
                      <Building2 className="w-4 h-4 text-blue-500" /> Selecciona tu Alojamiento
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {group.municipality.accommodations.map((hotel, hIdx) => (
                        <div 
                          key={hIdx}
                          onClick={() => handleSelectHotel(group.municipality.id, hotel.name)}
                          className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                            selectedHotels[group.municipality.id] === hotel.name
                              ? 'border-blue-500 bg-white shadow-md'
                              : 'border-slate-200 bg-white/50 hover:border-slate-300'
                          }`}
                        >
                          <div>
                            <p className="font-bold text-slate-900 leading-none mb-1">{hotel.name}</p>
                            <p className="text-[10px] text-slate-400 uppercase tracking-tighter">{hotel.type}</p>
                          </div>
                          <div className="flex gap-1">
                             {[...Array(hotel.rating)].map((_, i) => <Star key={i} className="w-2 h-2 text-yellow-400 fill-yellow-400" />)}
                          </div>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-slate-900 font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
                      <Compass className="w-4 h-4 text-orange-500" /> Actividades Diarias
                    </h4>
                    <div className="space-y-4">
                      {group.days.map((day, dIdx) => (
                        <div key={dIdx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                          <p className="text-xs font-black text-slate-400 mb-3 uppercase tracking-widest">Día {day.dayNumber}</p>
                          <div className="flex flex-wrap gap-2">
                            {group.municipality.attractions.map(att => (
                              <button
                                key={att.id}
                                onClick={() => toggleActivity(itinerary.indexOf(day), att.name)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border-2 ${
                                  day.activities.includes(att.name)
                                    ? 'bg-slate-900 border-slate-900 text-white shadow-lg'
                                    : 'bg-slate-50 border-slate-100 text-slate-500 hover:border-slate-200'
                                }`}
                              >
                                {att.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button onClick={() => setStep(2)} className="flex items-center gap-2 font-bold text-slate-400 hover:text-slate-600 transition-colors">
                <ChevronLeft className="w-5 h-5" /> Anterior
              </button>
              <button 
                onClick={() => setStep(4)}
                className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all"
              >
                Generar Resumen <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Resumen Final */}
        {step === 4 && (
          <div className="animate-fade-in-up">
            <div className="mb-10 text-center print:hidden">
              <span className="text-green-600 font-bold uppercase tracking-widest text-xs mb-2 block">¡Todo Listo!</span>
              <h2 className="text-4xl font-black text-slate-900 mb-4 font-brand">Tu Itinerario Personalizado</h2>
              <p className="text-slate-500">Esta es la ruta que has diseñado para vivir Olancho al máximo.</p>
            </div>

            <div className="bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden mb-12 border-8 border-slate-900 relative print:shadow-none print:border-none print:bg-white print:m-0">
              {/* Ticket Background Effect (Hide on print) */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full print:hidden"></div>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full print:hidden"></div>

              <div className="p-12 bg-white print:p-0">
                <div className="flex flex-col md:flex-row justify-between items-start border-b-2 border-dashed border-slate-200 pb-8 mb-8 print:border-solid">
                   <div>
                     <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white font-black">A</div>
                        <span className="font-bold tracking-tighter text-slate-900">AVENTURA OLANCHO</span>
                     </div>
                     <h3 className="text-2xl font-black text-slate-900 uppercase">Plan de Gira Turística</h3>
                   </div>
                   <div className="mt-4 md:mt-0 text-right">
                      <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Información General</p>
                      <div className="flex flex-col gap-1 mt-1">
                        <span className="text-2xl font-black text-orange-500 leading-none">{duration} DÍAS</span>
                        <span className="text-slate-800 font-bold flex items-center justify-end gap-1"><Users className="w-4 h-4" /> {peopleCount} Viajeros</span>
                      </div>
                   </div>
                </div>

                <div className="space-y-12">
                  {groupedItinerary.map((group, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="px-4 py-1 rounded-full text-white font-bold text-xs uppercase tracking-widest" style={{ backgroundColor: group.municipality.color }}>
                          {group.municipality.name}
                        </div>
                        <div className="flex-1 h-[1px] bg-slate-100"></div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-1">
                           <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-2">Alojamiento</p>
                           <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                             <Building2 className="w-4 h-4 text-blue-500 mb-2" />
                             <p className="font-bold text-slate-900 text-sm leading-tight">{selectedHotels[group.municipality.id] || 'Exploración Libre'}</p>
                           </div>
                        </div>
                        <div className="md:col-span-3 space-y-6">
                          {group.days.map((day, dIdx) => (
                            <div key={dIdx} className="flex gap-4">
                              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center font-black text-slate-300 text-xl border border-slate-100">
                                {day.dayNumber}
                              </div>
                              <div className="flex-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Día de Viaje</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {day.activities.length > 0 ? day.activities.map((act, aIdx) => (
                                    <span key={aIdx} className="px-3 py-1 bg-white border border-slate-100 rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-1">
                                      <Check className="w-3 h-3 text-green-500" /> {act}
                                    </span>
                                  )) : (
                                    <span className="text-slate-400 text-xs italic">Día de exploración y descanso libre</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-8 bg-green-50 rounded-[2rem] border border-green-100 flex flex-col md:flex-row items-center gap-6 print:bg-slate-50 print:border-slate-200">
                   <div className="p-4 bg-white rounded-2xl shadow-sm">
                      <Utensils className="w-8 h-8 text-green-600" />
                   </div>
                   <div className="text-center md:text-left">
                      <h5 className="font-bold text-slate-900">Recordatorio Gastronómico</h5>
                      <p className="text-sm text-slate-600">Recomendamos coordinar sus reservas de hotel con antelación, especialmente durante temporadas de feria.</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 print:hidden">
               <button onClick={() => window.print()} className="bg-white border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
                  <Printer className="w-5 h-5" /> Imprimir Itinerario
               </button>
               <button onClick={resetPlanner} className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all">
                  <Trash2 className="w-5 h-5" /> Empezar de Nuevo
               </button>
               <button onClick={handleShare} className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-green-700 transition-all">
                  <Share2 className="w-5 h-5" /> Compartir Plan
               </button>
            </div>
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }

        @media print {
          nav, footer, .ai-assistant-trigger, .print\:hidden {
            display: none !important;
          }
          body {
            background-color: white !important;
          }
          .bg-slate-50, .bg-white {
            background-color: transparent !important;
          }
          * {
            box-shadow: none !important;
            border-color: #eee !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TripPlanner;
