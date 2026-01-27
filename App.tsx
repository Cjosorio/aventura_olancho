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
  Target, ShieldCheck, ShoppingBag, Tag 
} from 'lucide-react';

// --- CONFIGURACIÓN DE TIPOS Y CONSTANTES ---
type View = 'home' | 'municipalities' | 'activities' | 'trip-planner' | 'about' | 'shop';

const PRODUCTS = [
  { id: 1, name: 'Gorra Aventura Olancho', price: 'L 350', category: 'Accesorios', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Camisa Explorador Dry-Fit', price: 'L 450', category: 'Ropa', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Bote Térmico Inoxidable', price: 'L 650', category: 'Equipo', image: 'https://images.unsplash.com/photo-1602143307185-8444754505a4?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Hand Bag "Olancho Heritage"', price: 'L 850', category: 'Bolsos', image: 'https://images.unsplash.com/photo-1544816153-12ad5d7133a1?q=80&w=800&auto=format&fit=crop' },
  { id: 5, name: 'Camiseta Algodón Orgánico', price: 'L 300', category: 'Ropa', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop' },
  { id: 6, name: 'Mochila de Aventura', price: 'L 1,200', category: 'Equipo', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop' }
];

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

  // --- LÓGICA DE SCROLL Y NAVEGACIÓN ---
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

  // --- COMPONENTES DE INTERFAZ ---
  const renderNavbar = () => (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || currentView !== 'home' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="cursor-pointer flex items-center gap-2" onClick={() => navigateTo('home')}>
          {(scrolled || currentView !== 'home') ? (
            <>
              <img src={`${import.meta.env.BASE_URL}principal/logo4.png`} alt="Aventura Olancho" className="w-16 h-16 object-contain" />
              <span className="font-bold text-slate-900 tracking-tighter uppercase text-xs">AVENTURA OLANCHO</span>
            </>
          ) : (
            <div className="h-10 w-10"></div>
          )}
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-wide">
          <button onClick={() => navigateTo('home')} className={`${(scrolled || currentView !== 'home') ? 'text-slate-600' : 'text-white'} hover:text-orange-500 transition-colors`}>Inicio</button>
          <button onClick={() => navigateTo('municipalities')} className={`${(scrolled || currentView !== 'home') ? 'text-slate-600' : 'text-white'} hover:text-orange-500 transition-colors`}>Destinos</button>
          <button onClick={() => navigateTo('activities')} className={`${(scrolled || currentView !== 'home') ? 'text-slate-600' : 'text-white'} hover:text-orange-500 transition-colors`}>Actividades</button>
          <button onClick={() => navigateTo('shop')} className={`${(scrolled || currentView !== 'home') ? 'text-slate-600' : 'text-white'} hover:text-orange-500 transition-colors`}>Tienda</button>
          <button onClick={() => navigateTo('about')} className={`${(scrolled || currentView !== 'home') ? 'text-slate-600' : 'text-white'} hover:text-orange-500 transition-colors`}>Quiénes Somos</button>
          <button onClick={() => navigateTo('trip-planner')} className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all flex items-center gap-2 shadow-lg">
            <Plane className="w-4 h-4" /> Planear Viaje
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={(scrolled || currentView !== 'home') ? 'text-slate-900' : 'text-white'} /> : <Menu className={(scrolled || currentView !== 'home') ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden animate-fade-in-up">
          <button onClick={() => navigateTo('home')} className="text-left font-bold text-slate-900 py-2 border-b">Inicio</button>
          <button onClick={() => navigateTo('municipalities')} className="text-left font-bold text-slate-900 py-2 border-b">Destinos</button>
          <button onClick={() => navigateTo('shop')} className="text-left font-bold text-slate-900 py-2 border-b">Tienda</button>
          <button onClick={() => navigateTo('about')} className="text-left font-bold text-slate-900 py-2 border-b">Quiénes Somos</button>
          <button onClick={() => navigateTo('trip-planner')} className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold flex justify-center gap-2">
            <Plane className="w-5 h-5" /> Planear Viaje
          </button>
        </div>
      )}
    </nav>
  );

  const renderFooter = () => (
    <footer ref={footerRef} className="bg-slate-900 text-white pt-20 pb-10 relative z-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <Logo className="h-20 mb-6" />
          <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">Promover el desarrollo turístico sostenible del departamento de Olancho mediante la creación, difusión y comercialización de experiencias turísticas.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">Municipios</h4>
          <ul className="space-y-1 text-slate-400">
            {MUNICIPALITIES.slice(0, 5).map(m => (
              <li key={m.id}><button onClick={() => handleMunicipalityClick(m.id)} className="hover:text-white transition-colors">{m.name}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">Contacto</h4>
          <ul className="space-y-1 text-slate-400">
            <li className="flex items-start gap-2"><MapPin className="w-5 h-5 text-green-500" /> Catacamas, Olancho, Honduras</li>
            <li>aventuraolancho@gmail.com</li>
            <li>+504 9289-4639</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© 2026 Aventura Olancho. Todos los derechos reservados.</p>
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
          <img src="R.jpg" alt="Publicidad" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 flex flex-col justify-end p-4">
             <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-1">Patrocinado</span>
             <h4 className="text-white text-sm font-bold leading-tight">Explora Olancho</h4>
          </div>
        </div>
      </aside>

      <main>
        {/* VISTA: INICIO */}
        {currentView === 'home' && (
          <>
            <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
              <HeroCarousel />
              <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
                <div className="mb-8 animate-fade-in-up">
                  <Logo className="h-48 md:h-64 lg:h-80 drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]" />
                </div>
                <h1 className="text-white text-lg md:text-2xl font-light tracking-[0.4em] uppercase drop-shadow-md animate-fade-in-up"></h1>
              </div>
              <div className="absolute bottom-10 animate-bounce z-10 flex flex-col items-center gap-2">
                <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Descubrir</span>
                <div className="w-[2px] h-16 bg-gradient-to-b from-white to-transparent rounded-full opacity-60"></div>
              </div>
            </header>

            <section className="py-24 bg-white relative">
              <div className="max-w-7xl mx-auto px-6 pl-12 md:pl-64 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="order-2 lg:order-1">
                    <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-6 block">Bienvenidos a la aventura</span>
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 font-brand leading-tight">¿Por qué visitar <span className="text-green-600">Olancho?</span></h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">Olancho es el corazón natural de Honduras, un destino donde la aventura, la cultura y la tradición se encuentran en cada rincón. Es el departamento más grande del país y uno de los más diversos, ofreciendo paisajes que van desde imponentes montañas y ríos cristalinos hasta extensas tierras ganaderas y agrícolas que reflejan el espíritu trabajador de su gente.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button onClick={() => navigateTo("municipalities")} className="bg-slate-900 text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl hover:bg-orange-500 transition-all group">
                        Explorar Destinos <Compass className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                      </button>
                      <button onClick={() => navigateTo("trip-planner")} className="bg-orange-500 text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl hover:bg-orange-600 transition-all">
                        Planear Mi Viaje <Plane className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 relative group">
                    <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative bg-slate-100">
                      {carouselImages.map((img, index) => (
                        <img key={index} src={img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeSlide === index ? 'opacity-100' : 'opacity-0'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* VISTA: DESTINOS */}
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

        {/* VISTA: ACTIVIDADES */}
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

        {/* VISTA: TIENDA */}
        {currentView === 'shop' && (
          <section className="pt-32 pb-24 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16 text-center">
                <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2 block">Merchandising Oficial</span>
                <h2 className="text-5xl font-black text-slate-900 mb-4 font-brand">Tienda Aventura</h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">Lleva el espíritu de Olancho contigo.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {PRODUCTS.map((product) => (
                  <div key={product.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100">
                    <div className="aspect-square overflow-hidden relative">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-black text-slate-900 mb-2">{product.name}</h3>
                      <div className="flex items-center justify-between mt-6">
                        <span className="text-2xl font-black text-orange-500">{product.price}</span>
                        <button className="bg-slate-900 text-white p-4 rounded-2xl hover:bg-orange-500 transition-colors">
                          <ShoppingBag className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* VISTA: QUIÉNES SOMOS */}
       {currentView === 'about' && (
  <section className="pt-32 pb-24 bg-white min-h-screen">
    <div className="max-w-7xl mx-auto px-6 pl-12 md:pl-64">
      <div className="mb-16">
        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2 block">
          Nuestra Historia
        </span>
        <h2 className="text-5xl font-black text-slate-900 mb-4 font-brand">
          ¿Quiénes Somos?
        </h2>
        <p className="text-slate-500 max-w-3xl text-lg leading-relaxed">
          Aventura Olancho es una promotora de turismo creada en el año 2016 por Alex Rojas,
          con el firme compromiso de impulsar, posicionar y proyectar los destinos turísticos
          y la riqueza cultural del departamento de Olancho, el más grande de Honduras.
          <br /><br />
          Nacemos como una iniciativa local con visión nacional, enfocada en mostrar la identidad
          auténtica de Olancho a través de experiencias turísticas responsables, culturales y de
          aventura, conectando a visitantes con la naturaleza, la historia y la gente de nuestra
          región. Aventura Olancho forma parte de Grupo VALFER.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div className="space-y-8">
          <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Target className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Nuestra Misión</h3>
            <p className="text-slate-600 leading-relaxed">
              Promover el desarrollo turístico sostenible del departamento de Olancho mediante
              la creación, difusión y comercialización de experiencias turísticas que destaquen
              su cultura, tradiciones, recursos naturales y potencial económico, fortaleciendo
              a las comunidades locales.
            </p>
          </div>
          <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Users className="w-12 h-12 text-green-600 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Nuestra Visión</h3>
            <p className="text-slate-600 leading-relaxed">
              Ser la promotora de turismo líder del oriente de Honduras, reconocida a nivel
              nacional e internacional por la calidad de sus experiencias, el respeto por la
              identidad cultural y su contribución al desarrollo turístico de Olancho.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-slate-900 text-white p-10 rounded-[2rem] shadow-xl max-w-xs hidden md:block">
            <ShieldCheck className="w-10 h-10 text-orange-400 mb-4" />
            <p className="font-bold text-lg">Compromiso Total</p>
            <p className="text-sm text-slate-400 mt-2">Garantizamos la seguridad y satisfacción en cada una de nuestras rutas guiadas.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
          <h3 className="text-3xl font-black text-slate-900 mb-6">Objetivo Institucional</h3>
          <p className="text-slate-600 leading-relaxed">
            Promover los principales destinos turísticos y expresiones culturales del
            departamento de Olancho, tomando como base estratégica los cinco municipios
            más importantes del departamento, desde donde se articulan rutas, actividades
            y productos turísticos que integran naturaleza, cultura, agricultura, ganadería
            y turismo de aventura.
          </p>
        </div>
        <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
          <h3 className="text-3xl font-black text-slate-900 mb-6">Qué Promovemos</h3>
          <ul className="space-y-3 text-slate-600 list-disc list-inside">
            <li>Turismo cultural y comunitario</li>
            <li>Turismo de naturaleza y aventura</li>
            <li>Rutas agrícolas y ganaderas</li>
            <li>Patrimonio histórico y tradiciones locales</li>
            <li>Experiencias auténticas y sostenibles</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-900 rounded-[3rem] p-12 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-3xl font-black mb-4 font-brand">Únete a nuestra aventura</h3>
            <p className="text-slate-400 text-lg leading-relaxed">Estamos constantemente buscando nuevas formas de innovar en el turismo regional. Si eres un operador local o simplemente amas Olancho, ¡queremos escucharte!</p>
          </div>
          <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all">
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  </section>
)}
        {/* VISTA: PLANIFICADOR */}
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