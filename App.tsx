import React, { useState, useEffect, useRef } from 'react';
import Logo from './components/Logo';
import MunicipalityCard from './components/MunicipalityCard';
import MunicipalityDetail from './components/MunicipalityDetail';
import TripPlanner from './components/TripPlanner';
import AIAssistant from './components/AIAssistant';
import { MUNICIPALITIES } from './constants';
import { Municipality } from './types';
import HeroCarousel from "./components/HeroCarousel";

import { 
  Mountain, Compass, MapPin, Search, Menu, X, Facebook, Instagram, Twitter, 
  Calendar, ChevronRight, Home, ArrowRight, Plane, Zap, Star, Users, 
  Target, ShieldCheck, ShoppingBag 
} from 'lucide-react';

// Actualizado para incluir 'shop'
type View = 'home' | 'municipalities' | 'activities' | 'trip-planner' | 'about' | 'shop';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedMunicipality, setSelectedMunicipality] = useState<Municipality | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAd, setShowAd] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const footerRef = useRef<HTMLElement>(null);

  const carouselImages = [
    `${import.meta.env.BASE_URL}principal/01.jpg`,
    `${import.meta.env.BASE_URL}principal/02.jpeg`,
    `${import.meta.env.BASE_URL}principal/03.jpeg`,
    `${import.meta.env.BASE_URL}principal/04.jpeg`,
    `${import.meta.env.BASE_URL}principal/05.jpg`
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const passedHero = scrollY > windowHeight * 0.8;
      
      let nearFooter = false;
      if (footerRef.current) {
        const footerTop = footerRef.current.offsetTop;
        nearFooter = (scrollY + windowHeight) > footerTop + 100;
      }

      setScrolled(scrollY > 50);
      setShowAd(passedHero && !nearFooter && (currentView === 'home' || currentView === 'about'));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  useEffect(() => {
    if (currentView === 'home') {
      const timer = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % carouselImages.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [currentView, carouselImages.length]);

  const handleMunicipalityClick = (id: string) => {
    const found = MUNICIPALITIES.find(m => m.id === id);
    if (found) {
      setSelectedMunicipality(found);
      window.scrollTo(0, 0);
    }
  };

  const navigateTo = (view: View) => {
    setCurrentView(view);
    setSelectedMunicipality(null);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const allEvents = MUNICIPALITIES.flatMap(m => 
    m.events.map(e => ({ ...e, municipalityName: m.name, muniId: m.id, color: m.color }))
  );

  const renderNavbar = () => (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || currentView !== 'home' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="cursor-pointer flex items-center gap-2" onClick={() => navigateTo('home')}>
          {(scrolled || currentView !== 'home') ? (
            <>
              <div className="w-15 h-15 flex items-center justify-center ">
                <img src={`${import.meta.env.BASE_URL}principal/logo4.png`} alt="Aventura Olancho" className="w-20 h-20 object-contain" />
              </div>
              <span className="font-bold text-slate-900 tracking-tighter uppercase text-xs">AVENTURA OLANCHO</span>
            </>
          ) : (
            <div className="h-10"></div>
          )}
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-wide">
          <button onClick={() => navigateTo('home')} className={`${(scrolled || currentView !== 'home') ? 'text-slate-600 hover:text-orange-500' : 'text-white hover:text-green-300'} transition-colors ${currentView === 'home' && (scrolled || currentView !== 'home') ? 'text-orange-500' : ''}`}>Inicio</button>
          <button onClick={() => navigateTo('municipalities')} className={`${(scrolled || currentView !== 'home') ? 'text-slate-600 hover:text-orange-500' : 'text-white hover:text-green-300'} transition-colors ${currentView === 'municipalities' ? 'text-orange-500' : ''}`}>Destinos</button>
          <button onClick={() => navigateTo('activities')} className={`${(scrolled || currentView !== 'home') ? 'text-slate-600 hover:text-orange-500' : 'text-white hover:text-green-300'} transition-colors ${currentView === 'activities' ? 'text-orange-500' : ''}`}>Actividades</button>
          
          {/* Botón Tienda Desktop */}
          <button onClick={() => navigateTo('shop')} className={`${(scrolled || currentView !== 'home') ? 'text-slate-600 hover:text-orange-500' : 'text-white hover:text-green-300'} transition-colors ${currentView === 'shop' ? 'text-orange-500' : ''}`}>Tienda</button>
          
          <button onClick={() => navigateTo('about')} className={`${(scrolled || currentView !== 'home') ? 'text-slate-600 hover:text-orange-500' : 'text-white hover:text-green-300'} transition-colors ${currentView === 'about' ? 'text-orange-500' : ''}`}>Quiénes Somos</button>
          <button onClick={() => navigateTo('trip-planner')} className={`bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 flex items-center gap-2`}>
            <Plane className="w-4 h-4" /> Planear Viaje
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={(scrolled || currentView !== 'home') ? 'text-slate-900' : 'text-white'} /> : <Menu className={(scrolled || currentView !== 'home') ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden">
          <button onClick={() => navigateTo('home')} className="text-left font-bold text-slate-900 py-2 border-b border-slate-50">Inicio</button>
          <button onClick={() => navigateTo('municipalities')} className="text-left font-bold text-slate-900 py-2 border-b border-slate-50">Destinos</button>
          <button onClick={() => navigateTo('activities')} className="text-left font-bold text-slate-900 py-2 border-b border-slate-50">Actividades</button>
          
          {/* Botón Tienda Mobile */}
          <button onClick={() => navigateTo('shop')} className="text-left font-bold text-slate-900 py-2 border-b border-slate-50 flex items-center justify-between">
            Tienda <ShoppingBag className="w-5 h-5 text-orange-500" />
          </button>
          
          <button onClick={() => navigateTo('about')} className="text-left font-bold text-slate-900 py-2 border-b border-slate-50">Quiénes Somos</button>
          <button onClick={() => navigateTo('trip-planner')} className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
            <Plane className="w-5 h-5" /> Planear Viaje
          </button>
        </div>
      )}
    </nav>
  );

  const renderFooter = () => (
    <footer ref={footerRef} className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800 relative z-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="mb-6">
            <Logo className="h-20" />
          </div>
          <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
            Empresa líder en turismo regional en Olancho, Honduras. Comprometidos con la excelencia, el desarrollo local y la conservación de nuestras maravillas naturales.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Municipios</h4>
          <ul className="space-y-4 text-slate-400">
            {MUNICIPALITIES.map(m => (
              <li key={m.id}>
                <button onClick={() => handleMunicipalityClick(m.id)} className="hover:text-white transition-colors">
                  {m.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Contacto</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>Catacamas, Olancho, Honduras</span>
            </li>
            <li>aventuraolancho@gmail.com</li>
            <li>+504 9289-4639</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <p>© 2025 Aventura Olancho. Todos los derechos reservados.</p>
      </div>
    </footer>
  );

  if (selectedMunicipality) {
    return (
      <>
        <MunicipalityDetail municipality={selectedMunicipality} onBack={() => setSelectedMunicipality(null)} />
        <AIAssistant />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-orange-200 overflow-x-hidden">
      {renderNavbar()}

      {/* PUBLICIDAD VERTICAL FIJA */}
      <aside className={`fixed left-4 top-1/2 -translate-y-1/2 w-32 md:w-48 z-40 transition-all duration-500 ${showAd ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'}`}>
        <div className="relative aspect-[1/2] rounded-[2rem] overflow-hidden shadow-2xl group">
          <img src="R.jpg" alt="Publicidad Vertical" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
             <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">Patrocinado</span>
             <h4 className="text-white text-sm font-bold leading-tight">Explora Olancho</h4>
          </div>
        </div>
      </aside>

      <main>
        {currentView === 'home' && (
          <>
            <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
              <HeroCarousel />
              <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
                <div className="mb-12 animate-fade-in-up">
                  <Logo className="md:h-64 lg:h-80 drop-shadow-[0_0px_0px_rgba(0,0,0,0.2)]" />
                </div>
                <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <button onClick={() => navigateTo("municipalities")} className="bg-white text-slate-900 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center gap-3 shadow-2xl">
                    Explorar Destinos <Compass className="w-5 h-5 text-orange-500" />
                  </button>
                  <button onClick={() => navigateTo("trip-planner")} className="bg-orange-500 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all flex items-center gap-3 shadow-2xl">
                    Planear Mi Viaje <Plane className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="absolute bottom-10 animate-bounce z-10">
                <div className="w-[2px] h-16 bg-gradient-to-b from-white to-transparent rounded-full opacity-60"></div>
              </div>
            </header>

            <section className="py-24 bg-white relative">
              <div className="max-w-7xl mx-auto px-6 pl-12 md:pl-64 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div>
                    <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-6 block">Bienvenidos</span>
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 font-brand leading-tight">
                      ¿Por qué<br/> visitar <span className="text-green-600">Olancho?</span>
                    </h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                      Olancho es el corazón natural de Honduras, un destino donde la aventura, la cultura y la tradición se encuentran en cada rincón...
                    </p>
                    <button onClick={() => navigateTo('municipalities')} className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3">
                       Comenzar ahora <ArrowRight className="w-5 h-5 text-orange-400" />
                    </button>
                  </div>
                  <div className="relative group">
                    <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative bg-slate-100">
                      {carouselImages.map((img, index) => (
                        <img key={index} src={img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${activeSlide === index ? 'opacity-100' : 'opacity-0'}`} alt={`Olancho Slide ${index + 1}`} />
                      ))}
                      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                        {carouselImages.map((_, index) => (
                          <button key={index} onClick={() => setActiveSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === index ? 'bg-orange-500 w-6' : 'bg-white/50'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {currentView === 'municipalities' && (
          <section className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16">
                <h2 className="text-5xl font-black text-slate-900 mb-4 font-brand">Nuestros Municipios</h2>
                <p className="text-slate-500 max-w-2xl text-lg">Descubre la identidad única de cada destino en Olancho.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {MUNICIPALITIES.map(m => (
                  <MunicipalityCard key={m.id} municipality={m} onClick={handleMunicipalityClick} />
                ))}
              </div>
            </div>
          </section>
        )}

        {currentView === 'activities' && (
          <section className="pt-32 pb-24 bg-slate-900 text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-5xl font-black mb-16 font-brand">Cartelera de Actividades</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allEvents.map((event, idx) => (
                  <div key={idx} className="bg-slate-800/50 p-8 rounded-[2rem] border border-slate-700">
                    <div className="text-orange-400 font-black text-xl mb-4">{event.date}</div>
                    <h3 className="text-2xl font-bold mb-4">{event.name}</h3>
                    <p className="text-slate-400 text-sm mb-6">{event.description}</p>
                    <button onClick={() => handleMunicipalityClick(event.muniId)} className="text-xs font-black uppercase tracking-widest text-white border-b border-orange-500 pb-1">Ver destino</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* VISTA DE TIENDA AGREGADA */}
        {currentView === 'shop' && (
          <section className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16 text-center">
                <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2 block">Productos Locales</span>
                <h2 className="text-5xl font-black text-slate-900 mb-4 font-brand">Tienda Aventura Olancho</h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">Lleva un pedacito de nuestra tierra contigo. Café artesanal, artesanías y equipo de aventura.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 text-center flex flex-col items-center">
                   <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                      <ShoppingBag className="w-10 h-10 text-orange-500" />
                   </div>
                   <h3 className="text-2xl font-bold mb-2">Próximamente</h3>
                   <p className="text-slate-500 mb-8">Estamos seleccionando lo mejor de Olancho para ti.</p>
                   <button onClick={() => navigateTo('home')} className="text-orange-500 font-bold hover:underline">Volver al inicio</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {currentView === 'about' && (
          <section className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 pl-12 md:pl-64">
              <div className="mb-16">
                <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2 block">Nuestra Historia</span>
                <h2 className="text-5xl font-black text-slate-900 mb-4 font-brand">¿Quiénes Somos?</h2>
                <p className="text-slate-500 max-w-3xl text-lg leading-relaxed">
                  Aventura Olancho es una promotora de turismo creada en el año 2016 por Alex Rojas...
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                <div className="space-y-8">
                  <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                    <Target className="w-12 h-12 text-orange-500 mb-6" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Nuestra Misión</h3>
                    <p className="text-slate-600 leading-relaxed">Promover el desarrollo turístico sostenible del departamento...</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Team" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {currentView === 'trip-planner' && <TripPlanner onCancel={() => navigateTo('home')} />}
      </main>

      {renderFooter()}
      <AIAssistant />

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>
    </div>
  );
};

export default App;
