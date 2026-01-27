
import { Municipality } from './types';

export const MUNICIPALITIES: Municipality[] = [
  {
    id: 'campamento',
    name: 'Campamento',
    slogan: 'Antigua Capital Minera',
    color: '#22c55e',
    description: 'Campamento es uno de los municipios con mayor valor histórico, cultural y natural del occidente del departamento de Olancho. Conocido a nivel nacional como la antigua capital minera de Honduras, este municipio conserva un importante legado histórico que forma parte de la identidad olanchana.\n\nSu clima fresco, su entorno montañoso y sus paisajes naturales lo convierten en un destino atractivo para el turismo cultural, histórico y de naturaleza. Campamento es ideal para visitantes que buscan conocer el pasado minero del país, recorrer senderos naturales y disfrutar de un ambiente tranquilo.\n\nEntre sus principales atractivos destacan las antiguas minas, vestigios históricos, ríos y zonas boscosas, así como miradores naturales que ofrecen vistas panorámicas del occidente de Olancho. Sus tradiciones locales, gastronomía típica y festividades patronales complementan la experiencia turística.\n\nCampamento también funciona como un punto estratégico de conexión hacia otros destinos importantes del departamento.\n\nMunicipios cercanos: Juticalpa, San Francisco de la Paz, Gualaco.',
    cardImage: 'principal/campamento_card.jpg',
    heroImage: 'principal/campamento.jpg',
    mapPos: { x: 18, y: 65 },
    attractions: [
      { id: 'c1', name: 'Antiguas Minas de Oro', description: 'Recorridos históricos por los túneles y vestigios de la era minera del municipio.', imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800' },
      { id: 'c2', name: 'Reserva Biológica El Chile', description: 'Senderos naturales entre bosques vírgenes nublados y avistamiento de fauna silvestre.', imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800' }
    ],
    activities: [{ name: 'Senderismo', icon: 'Mountain' }, { name: 'Cata de Café', icon: 'Coffee' }, { name: 'Ruta Minera', icon: 'Pickaxe' }],
    accommodations: [
      { name: 'Hotel La Posada', type: 'Montaña', rating: 4 },
      { name: 'Eco-Albergue El Pino', type: 'Ecológico', rating: 3 }
    ],
    restaurants: [
      { name: 'El Portal Grill', specialty: 'Carnes asadas y cortes nacionales' },
      { name: 'Café de la Montaña', specialty: 'Postres típicos y café de altura' }
    ],
    events: [{ name: 'Feria Patronal San Sebastián', date: 'Enero', description: 'Celebraciones religiosas, desfiles hípicos y ferias gastronómicas.' }],
    visitorInfo: 'Ubicado a 2 horas de Tegucigalpa, es la parada perfecta para conocer el legado minero de Olancho.'
  },
  {
    id: 'juticalpa',
    name: 'Juticalpa',
    slogan: 'Corazón y Tradición',
    color: '#0ea5e9',
    description: 'Juticalpa, capital del departamento de Olancho, es el principal centro administrativo, comercial y urbano de la región. Es una ciudad dinámica que combina modernidad con profundas tradiciones culturales, siendo un eje clave para la organización y conexión de rutas turísticas departamentales.\n\nEl municipio ofrece una variada oferta gastronómica, espacios culturales, comercio y servicios turísticos. Juticalpa es además sede de eventos culturales, ferias, actividades religiosas y encuentros deportivos que atraen visitantes de distintas partes del país.\n\nEntre sus atractivos se encuentran parques urbanos, iglesias históricas, centros culturales, mercados tradicionales y su cercanía con ríos y zonas naturales que permiten actividades recreativas. Su ubicación estratégica la convierte en punto de partida ideal para explorar otros municipios de Olancho.\n\nMunicipios cercanos: Campamento, San Francisco de la Paz, Santa María del Real, Catacamas.',
    cardImage: 'principal/juticalpa.jpg',
    heroImage: 'principal/juticalpa.jpg',
    mapPos: { x: 38, y: 60 },
    attractions: [
      { id: 'j1', name: 'Catedral Inmaculada Concepción', description: 'Una joya arquitectónica del siglo XVIII que domina el centro histórico.', imageUrl: 'https://images.unsplash.com/photo-1548625361-1250003b1458?auto=format&fit=crop&q=80&w=800' },
      { id: 'j2', name: 'Casa de la Cultura', description: 'Antigua casona que alberga exposiciones de artistas locales y vestigios históricos.', imageUrl: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=800' }
    ],
    activities: [{ name: 'City Tour', icon: 'Map' }, { name: 'Ruta del Vino de Coyol', icon: 'Glass' }],
    accommodations: [
      { name: 'Hotel Boquerón', type: 'Lujo Urbano', rating: 5 },
      { name: 'Hotel La Fuente', type: 'Turista', rating: 4 }
    ],
    restaurants: [
      { name: 'El Tablón', specialty: 'Tapado Olanchano y sopa de frijoles' },
      { name: 'Hacienda Real', specialty: 'Asados y quesos artesanales' }
    ],
    events: [{ name: 'Gran Feria Inmaculada', date: 'Diciembre', description: 'La fiesta más grande de Olancho con conciertos y exposiciones ganaderas.' }],
    visitorInfo: 'Es el centro logístico ideal. Aquí encontrará los principales bancos y servicios de transporte.'
  },
  {
    id: 'catacamas',
    name: 'Catacamas',
    slogan: 'Ciudad de las Cuevas',
    color: '#f97316',
    description: 'Catacamas es uno de los municipios más extensos, productivos y representativos del departamento de Olancho. Reconocido a nivel nacional por su fuerte identidad agrícola y ganadera, este municipio es un referente del desarrollo productivo y cultural de la región.\n\nEs un punto estratégico para el turismo rural, productivo y de naturaleza, gracias a su amplia extensión territorial y su cercanía con áreas protegidas de gran importancia ecológica. Catacamas destaca por su vida cultural activa, sus ferias, tradiciones y su gente hospitalaria.\n\nEntre sus principales atractivos turísticos se encuentran las Cuevas de Talgua, uno de los sitios arqueológicos más importantes de Honduras; el acceso a la Reserva de la Biosfera del Río Plátano; ríos, montañas y paisajes naturales ideales para el ecoturismo y la aventura. También es reconocida por la producción de café, ganadería y productos agrícolas.\n\nMunicipios cercanos: Juticalpa, Santa María del Real, Dulce Nombre de Culmí, San Francisco de Becerra.',
    cardImage: 'principal/catacamas.jpeg',
    heroImage: 'principal/catacamas.jpeg',
    mapPos: { x: 58, y: 48 },
    attractions: [
      { id: 'cat1', name: 'Cuevas de Talgua', description: 'Conocidas como "Las Calaveras Luminosas", es un sitio arqueológico de valor mundial.', imageUrl: 'https://images.unsplash.com/photo-1502726299822-6f583f972e02?auto=format&fit=crop&q=80&w=800' },
      { id: 'cat2', name: 'Cerro de la Cruz', description: 'Mirador panorámico tras una caminata por los famosos escalones de la fe.', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800' }
    ],
    activities: [{ name: 'Espeleología', icon: 'Flashlight' }, { name: 'Hiking', icon: 'Mountain' }],
    accommodations: [
      { name: 'Hotel La Colonia', type: 'Confort Residencial', rating: 4 },
      { name: 'Hotel Talgua', type: 'Aventura', rating: 3 }
    ],
    restaurants: [
      { name: 'Asados El Toro', specialty: 'Cortes premium y ambiente vaquero' },
      { name: 'Restaurante Talgua', specialty: 'Pescado frito y comida típica' }
    ],
    events: [{ name: 'Feria de San Francisco', date: 'Octubre', description: 'Festivales culturales, jaripeos y exposiciones agroindustriales.' }],
    visitorInfo: 'Para visitar Talgua se recomienda llegar temprano y llevar calzado con buena tracción.'
  },
  {
    id: 'santa-maria',
    name: 'Sta. María del Real',
    slogan: 'Arquitectura Colonial',
    color: '#d946ef',
    description: 'Santa María del Real es uno de los municipios con mayor valor histórico y cultural de Olancho. Fundado en la época colonial, conserva una arquitectura tradicional y un ambiente que refleja la historia y el origen del departamento.\n\nEste municipio es ideal para el turismo cultural, educativo y religioso, ofreciendo a los visitantes una experiencia auténtica ligada a las tradiciones olanchanas. Sus calles, iglesias y edificaciones antiguas narran parte importante de la historia regional.\n\nEntre sus atractivos destacan su iglesia colonial, festividades religiosas, tradiciones locales, gastronomía típica y su cercanía con ríos y zonas rurales que permiten el turismo comunitario. Santa María del Real también funciona como un punto de enlace entre Juticalpa y Catacamas.\n\nMunicipios cercanos: Juticalpa, Catacamas, San Francisco de Becerra, Guarizama.',
    cardImage: 'principal/santa-maria_card.jpg',
    heroImage: 'principal/santa-maria.jpg',
    mapPos: { x: 52, y: 55 },
    attractions: [
      { id: 's1', name: 'Iglesia Colonial', description: 'Parroquia histórica que conserva el encanto de la fundación del municipio.', imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800' }
    ],
    activities: [{ name: 'Turismo Religioso', icon: 'Church' }, { name: 'Fotografía Urbana', icon: 'Camera' }],
    accommodations: [{ name: 'Cabañas El Real', type: 'Ecoturismo Rural', rating: 4 }],
    restaurants: [{ name: 'Comedor Doña María', specialty: 'Sopa de Mondongo y cuajada fresca' }],
    events: [{ name: 'Feria del Retorno', date: 'Enero', description: 'Tradición local donde los realceños regresan a su tierra a celebrar.' }],
    visitorInfo: 'Ideal para visitar en familia. Los ríos cercanos son seguros y el ambiente es sumamente tranquilo.'
  },
  {
    id: 'culmi',
    name: 'D. Nombre de Culmí',
    slogan: 'Tierra Multicultural',
    color: '#ef4444',
    description: 'Dulce Nombre de Culmí es uno de los municipios más grandes y diversos del departamento de Olancho, caracterizado por su riqueza natural, agrícola y multicultural. Su amplio territorio alberga comunidades rurales, ríos, montañas y extensas zonas de producción agrícola y ganadera.\n\nEs un destino clave para el ecoturismo, el turismo de aventura y el turismo comunitario, ofreciendo experiencias auténticas en contacto directo con la naturaleza y las comunidades locales.\n\nEntre sus principales atractivos se encuentran ríos caudalosos, zonas montañosas, paisajes naturales poco explorados y su cercanía con áreas de gran valor ambiental. Culmí destaca también por su producción agrícola, ganadera y por la diversidad cultural de sus comunidades.\n\nMunicipios cercanos: Catacamas, San Esteban, Gualaco y municipios de la zona nororiental del país.',
    cardImage: 'principal/culmi_card.jpg',
    heroImage: 'principal/culmi.jpg',
    mapPos: { x: 78, y: 35 },
    attractions: [
      { id: 'cu1', name: 'Aldeas Pech', description: 'Encuentro cultural directo con una de las etnias más antiguas de Mesoamérica.', imageUrl: 'https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?auto=format&fit=crop&q=80&w=800' }
    ],
    activities: [{ name: 'Etnoturismo', icon: 'Users' }, { name: 'Expediciones', icon: 'Navigation' }],
    accommodations: [{ name: 'Eco-Lodges Culmí', type: 'Inmersión en Selva', rating: 3 }],
    restaurants: [{ name: 'Fogón de la Selva', specialty: 'Sopa de gallina india y comida típica Pech' }],
    events: [{ name: 'Encuentro Intercultural Pech', date: 'Mayo', description: 'Festivales de danza, música y gastronomía ancestral.' }],
    visitorInfo: 'Es obligatorio el uso de guías locales para adentrarse en la selva. No olvide repelente y equipo de campo.'
  }
];
