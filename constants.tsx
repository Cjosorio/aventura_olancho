
import { Municipality } from './types';

export const MUNICIPALITIES: Municipality[] = [
  {
    id: 'campamento',
    name: 'Campamento',
    slogan: 'El Portal de Olancho',
    color: '#22c55e',
    description: 'Conocido como el "Portal de Olancho", Campamento le da la bienvenida con su clima fresco, extensos pinares y el aroma del mejor café de la región. Es un destino donde la paz de la montaña se encuentra con la hospitalidad genuina de su gente.',
    heroImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 18, y: 65 },
    attractions: [
      { id: 'c1', name: 'Fincas de Café Especial', description: 'Recorridos educativos por plantaciones galardonadas con la Taza de Excelencia.', imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800' },
      { id: 'c2', name: 'Reserva Biológica El Chile', description: 'Senderos naturales entre bosques vírgenes nublados y avistamiento de fauna silvestre.', imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800' },
      { id: 'c3', name: 'Salto del Río Guayape', description: 'Un impresionante mirador natural donde el río muestra su fuerza entre rocas milenarias.', imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800' }
    ],
    activities: [{ name: 'Senderismo', icon: 'Mountain' }, { name: 'Cata de Café', icon: 'Coffee' }, { name: 'Camping', icon: 'Tent' }],
    accommodations: [
      { name: 'Hotel La Posada', type: 'Montaña', rating: 4 },
      { name: 'Eco-Albergue El Pino', type: 'Ecológico', rating: 3 },
      { name: 'Hostal del Portal', type: 'Familiar', rating: 4 }
    ],
    restaurants: [
      { name: 'El Portal Grill', specialty: 'Carnes asadas y cortes nacionales' },
      { name: 'Café de la Montaña', specialty: 'Postres típicos y café de altura' },
      { name: 'Comedor Central', specialty: 'Desayunos olanchos tradicionales' }
    ],
    events: [{ name: 'Feria Patronal San Sebastián', date: 'Enero', description: 'Celebraciones religiosas, desfiles hípicos y ferias gastronómicas.' }],
    visitorInfo: 'Ubicado a 2 horas de Tegucigalpa, es la parada perfecta para aclimatarse al espíritu olanchano. Se recomienda traer ropa abrigada para las noches frescas.'
  },
  {
    id: 'juticalpa',
    name: 'Juticalpa',
    slogan: 'Corazón y Tradición',
    color: '#0ea5e9',
    description: 'La vibrante cabecera departamental, centro de la cultura, el comercio y la ganadería. Juticalpa es una ciudad que respira historia en cada esquina, desde sus casonas coloniales hasta su moderna vida nocturna.',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 38, y: 60 },
    attractions: [
      { id: 'j1', name: 'Catedral Inmaculada Concepción', description: 'Una joya arquitectónica del siglo XVIII que domina el centro histórico.', imageUrl: 'https://images.unsplash.com/photo-1548625361-1250003b1458?auto=format&fit=crop&q=80&w=800' },
      { id: 'j2', name: 'Casa de la Cultura', description: 'Antigua casona que alberga exposiciones de artistas locales y vestigios históricos.', imageUrl: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=800' },
      { id: 'j3', name: 'Haciendas Ganaderas', description: 'Visite haciendas reales para conocer la producción de lácteos y cultura vaquera.', imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800' }
    ],
    activities: [{ name: 'City Tour', icon: 'Map' }, { name: 'Ruta del Vino de Coyol', icon: 'Glass' }, { name: 'Fotografía', icon: 'Camera' }],
    accommodations: [
      { name: 'Hotel Boquerón', type: 'Lujo Urbano', rating: 5 },
      { name: 'Hotel La Fuente', type: 'Turista', rating: 4 },
      { name: 'Gran Hotel Juticalpa', type: 'Clásico', rating: 4 }
    ],
    restaurants: [
      { name: 'El Tablón', specialty: 'Tapado Olanchano y sopa de frijoles' },
      { name: 'Hacienda Real', specialty: 'Asados y quesos artesanales' },
      { name: 'Pizzería La Misión', specialty: 'Fusión italiana con ingredientes locales' }
    ],
    events: [{ name: 'Gran Feria Inmaculada', date: 'Diciembre', description: 'La fiesta más grande de Olancho con conciertos y exposiciones ganaderas.' }],
    visitorInfo: 'Es el centro logístico ideal. Aquí encontrará los principales bancos y servicios de transporte hacia el resto del departamento.'
  },
  {
    id: 'catacamas',
    name: 'Catacamas',
    slogan: 'Ciudad de las Cuevas',
    color: '#f97316',
    description: 'Famosa mundialmente por las Cuevas de Talgua, Catacamas es un epicentro de arqueología y naturaleza. Rodeada de montañas y valles fértiles, es la ciudad que invita a descubrir el pasado precolombino.',
    heroImage: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 58, y: 48 },
    attractions: [
      { id: 'cat1', name: 'Cuevas de Talgua', description: 'Conocidas como "Las Calaveras Luminosas", es un sitio arqueológico y natural de valor mundial.', imageUrl: 'https://images.unsplash.com/photo-1502726299822-6f583f972e02?auto=format&fit=crop&q=80&w=800' },
      { id: 'cat2', name: 'Cerro de la Cruz', description: 'Mirador panorámico tras una caminata por los famosos escalones de la fe.', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800' },
      { id: 'cat3', name: 'Polideportivo Catacamas', description: 'Uno de los centros de recreación más modernos de la zona norte de Olancho.', imageUrl: 'https://images.unsplash.com/photo-1526232761682-d26e47ac1740?auto=format&fit=crop&q=80&w=800' }
    ],
    activities: [{ name: 'Espeleología', icon: 'Flashlight' }, { name: 'Hiking', icon: 'Mountain' }, { name: 'Ciclismo', icon: 'Bike' }],
    accommodations: [
      { name: 'Hotel La Colonia', type: 'Confort Residencial', rating: 4 },
      { name: 'Hotel Talgua', type: 'Aventura', rating: 3 },
      { name: 'Hotel El Oasis', type: 'Ejecutivo', rating: 4 }
    ],
    restaurants: [
      { name: 'Asados El Toro', specialty: 'Cortes premium y ambiente vaquero' },
      { name: 'Restaurante Talgua', specialty: 'Pescado frito y comida típica' },
      { name: 'Cafetería Real', specialty: 'Pan artesanal y café gourmet' }
    ],
    events: [{ name: 'Feria de San Francisco', date: 'Octubre', description: 'Festivales culturales, jaripeos y exposiciones agroindustriales.' }],
    visitorInfo: 'Para visitar Talgua se recomienda llegar temprano y llevar calzado con buena tracción. El clima suele ser cálido y húmedo.'
  },
  {
    id: 'santa-maria',
    name: 'Sta. María del Real',
    slogan: 'Tierra de Encantos Naturales',
    color: '#d946ef',
    description: 'Un municipio que parece detenido en el tiempo, rodeado de ríos cristalinos y una biodiversidad asombrosa. Es el refugio perfecto para quienes buscan desconectarse del ruido y conectarse con la vida silvestre.',
    heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 52, y: 55 },
    attractions: [
      { id: 's1', name: 'Río Talgua (Parte Alta)', description: 'Pozas naturales de agua helada y cristalina rodeadas de bosque tropical.', imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800' },
      { id: 's2', name: 'Cerro Agalta', description: 'Puerta de entrada a una de las reservas forestales más importantes del país.', imageUrl: 'https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&q=80&w=800' },
      { id: 's3', name: 'Iglesia Colonial del Real', description: 'Pequeña pero histórica parroquia que conserva el encanto de los pueblos antiguos.', imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200' }
    ],
    activities: [{ name: 'Natación', icon: 'Waves' }, { name: 'Observación de Aves', icon: 'Bird' }, { name: 'Aviturismo', icon: 'Binoculars' }],
    accommodations: [
      { name: 'Cabañas El Real', type: 'Ecoturismo Rural', rating: 4 },
      { name: 'Hospedaje Santa María', type: 'Económico', rating: 2 }
    ],
    restaurants: [
      { name: 'Comedor Doña María', specialty: 'Sopa de Mondongo y cuajada fresca' },
      { name: 'La Cascada', specialty: 'Tilapia fresca al gusto' }
    ],
    events: [{ name: 'Feria del Retorno', date: 'Enero', description: 'Tradición local donde los realceños regresan a su tierra a celebrar.' }],
    visitorInfo: 'Ideal para visitar en familia. Los ríos son seguros y el ambiente es sumamente tranquilo. Respete siempre la limpieza de las pozas.'
  },
  {
    id: 'culmi',
    name: 'D. Nombre de Culmí',
    slogan: 'Puerta a la Biosfera',
    color: '#ef4444',
    description: 'El corazón verde de Honduras. Culmí es tierra de leyendas, de la milenaria cultura Pech y el último bastión de la selva virgen. Un destino para aventureros de verdad dispuestos a descubrir lo inexplorado.',
    heroImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 78, y: 35 },
    attractions: [
      { id: 'cu1', name: 'Aldeas Pech', description: 'Encuentro cultural directo con una de las etnias más antiguas de Mesoamérica.', imageUrl: 'https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?auto=format&fit=crop&q=80&w=800' },
      { id: 'cu2', name: 'Biosfera del Río Plátano', description: 'Acceso a una de las reservas de biodiversidad más grandes de América.', imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800' },
      { id: 'cu3', name: 'Río Wampú', description: 'Navegación en pipantes (canoas) a través de la densa selva tropical.', imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800' }
    ],
    activities: [{ name: 'Etnoturismo', icon: 'Users' }, { name: 'Expediciones', icon: 'Navigation' }, { name: 'Kayaking', icon: 'Ship' }],
    accommodations: [
      { name: 'Eco-Lodges Culmí', type: 'Inmersión en Selva', rating: 3 },
      { name: 'Posada de la Biosfera', type: 'Básico', rating: 2 }
    ],
    restaurants: [
      { name: 'Fogón de la Selva', specialty: 'Sopa de gallina india y comida típica Pech' },
      { name: 'Comedor Central Culmí', specialty: 'Plato típico olanchano' }
    ],
    events: [{ name: 'Encuentro Intercultural Pech', date: 'Mayo', description: 'Festivales de danza, música y gastronomía ancestral.' }],
    visitorInfo: 'Es obligatorio el uso de guías locales para adentrarse en la selva. No olvide repelente, mosquitero y vacunas al día.'
  }
];
