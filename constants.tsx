
import { Municipality } from './types';

export const MUNICIPALITIES: Municipality[] = [
  {
    id: 'campamento',
    name: 'Campamento',
    slogan: 'Antigua Capital Minera',
    color: '#22c55e',
    description: 'Campamento es uno de los municipios con mayor valor histórico, cultural y natural del occidente del departamento de Olancho. Conocido a nivel nacional como la antigua capital minera de Honduras, este municipio conserva un importante legado histórico que forma parte de la identidad olanchana.\n\nSu clima fresco, su entorno montañoso y sus paisajes naturales lo convierten en un destino atractivo para el turismo cultural, histórico y de naturaleza. Campamento es ideal para visitantes que buscan conocer el pasado minero del país, recorrer senderos naturales y disfrutar de un ambiente tranquilo.\n\nEntre sus principales atractivos destacan las antiguas minas, vestigios históricos, ríos y zonas boscosas, así como miradores naturales que ofrecen vistas panorámicas del occidente de Olancho. Sus tradiciones locales, gastronomía típica y festividades patronales complementan la experiencia turística. Campamento también funciona como un punto estratégico de conexión hacia otros destinos importantes del departamento.\n\nMunicipios cercanos: Juticalpa, San Francisco de la Paz, Gualaco.',
    cardImage: 'principal/mini Campamento.jpg.jpeg',
    heroImage: 'principal/campamento.jpg',
    mapPos: { x: 18, y: 65 },
    attractions: [
      { id: 'c1', name: 'Antiguas Minas de Oro', description: 'Recorridos históricos por los túneles y vestigios de la era minera del municipio.', imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800' },
      { id: 'c2', name: 'Reserva Biológica El Chile', description: 'Senderos naturales entre bosques vírgenes nublados.', imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800' }
    ],
    activities: [{ name: 'Senderismo', icon: 'Mountain' }],
    accommodations: [
      { 
        name: 'Hotel La Posada', 
        type: 'Montaña', 
        rating: 4,
        description: 'Un refugio acogedor rodeado de pinos y aire puro.',
        address: 'Barrio El Centro, Campamento.',
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2785-1122',
        whatsapp: '+504 9988-7766',
        amenities: ['WiFi', 'Desayuno Incluido', 'Parqueo'],
        rooms: [{ name: 'Sencilla', price: 850, capacity: '1 Persona', description: 'Cama matrimonial y TV.' }]
      }
    ],
    restaurants: [
      { 
        name: 'El Portal Grill', 
        specialty: 'Carnes asadas',
        description: 'El mejor sabor a la leña de la zona.',
        address: 'Carretera principal, KM 145.',
        imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2785-5544',
        whatsapp: '+504 9876-5432',
        menu: [{ name: 'Puyazo Olanchano', description: 'Corte de 12oz.', price: 380, category: 'Plato Fuerte' }]
      }
    ],
    events: [{ name: 'Feria Patronal San Sebastián', date: 'Enero', description: 'Celebraciones religiosas y desfiles hípicos.' }],
    visitorInfo: 'Ubicado a 2 horas de Tegucigalpa.'
  },
  {
    id: 'juticalpa',
    name: 'Juticalpa',
    slogan: 'Corazón y Tradición',
    color: '#0ea5e9',
    description: 'Juticalpa, capital del departamento de Olancho, es el principal centro administrativo, comercial y urbano de la región. Es una ciudad dinámica que combina modernidad con profundas tradiciones culturales, siendo un eje clave para la organización y conexión de rutas turísticas departamentales.\n\nEl municipio ofrece una variada oferta gastronómica, espacios culturales, comercio y servicios turísticos. Juticalpa es además sede de eventos culturales, ferias, actividades religiosas y encuentros deportivos que atraen visitantes de distintas partes del país.\n\nEntre sus atractivos se encuentran parques urbanos, iglesias históricas, centros culturales, mercados tradicionales y su cercanía con ríos y zonas naturales que permiten actividades recreativas. Su ubicación estratégica la convierte en punto de partida ideal para explorar otros municipios de Olancho.\n\nMunicipios cercanos: Campamento, San Francisco de la Paz, Santa María del Real, Catacamas.',
    cardImage: 'principal/mini Juticalpa.jpeg',
    heroImage: 'principal/juticalpa.jpg',
    mapPos: { x: 38, y: 60 },
    attractions: [
      { id: 'j1', name: 'Catedral Inmaculada Concepción', description: 'Una joya arquitectónica del siglo XVIII.', imageUrl: 'https://images.unsplash.com/photo-1548625361-1250003b1458?auto=format&fit=crop&q=80&w=800' }
    ],
    activities: [{ name: 'City Tour', icon: 'Map' }],
    accommodations: [
      { 
        name: 'Hotel Boquerón', 
        type: 'Lujo Urbano', 
        rating: 5,
        description: 'El hotel más emblemático de la ciudad.',
        address: 'Avenida principal, Juticalpa.',
        imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2885-0011',
        whatsapp: '+504 3344-5566',
        amenities: ['Piscina', 'Gimnasio', 'Restaurante 24h'],
        rooms: [{ name: 'Standard Executiva', price: 1550, capacity: '2 Personas', description: 'Cama King y escritorio.' }]
      },
      { 
        name: 'Hotel Las Gemelas', 
        type: 'Ejecutivo', 
        rating: 4,
        description: 'Servicio personalizado para el viajero de negocios.',
        address: 'Barrio de Jesús, Juticalpa.',
        imageUrl: 'https://images.unsplash.com/photo-1517840901100-8179e982ad91?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2885-4422',
        whatsapp: '+504 9455-1122',
        amenities: ['Aire Acondicionado', 'WiFi'],
        rooms: [{ name: 'Individual', price: 950, capacity: '1 Persona', description: 'Confortable y silenciosa.' }]
      },
      { 
        name: 'Posada del Sol', 
        type: 'Familiar', 
        rating: 3,
        description: 'Ambiente tranquilo y acogedor cerca del parque central.',
        address: 'Barrio El Centro, Juticalpa.',
        imageUrl: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2885-9988',
        whatsapp: '+504 8877-0022',
        amenities: ['Desayuno Casero', 'Patio Central'],
        rooms: [{ name: 'Doble Familiar', price: 1100, capacity: '4 Personas', description: 'Dos camas matrimoniales.' }]
      }
    ],
    restaurants: [
      { 
        name: 'El Tablón', 
        specialty: 'Tapado Olanchano',
        description: 'Auténtica comida criolla olanchana.',
        address: 'Barrio El Centro, Juticalpa.',
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2885-3399',
        whatsapp: '+504 9900-1122',
        menu: [{ name: 'Tapado Olanchano', description: 'Receta tradicional.', price: 450, category: 'Plato Fuerte' }]
      },
      { 
        name: 'Hacienda Real', 
        specialty: 'Cortes y Mariscos',
        description: 'Elegancia y sabor en el corazón de Juticalpa.',
        address: 'Salida a Catacamas.',
        imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2885-8877',
        whatsapp: '+504 8877-6655',
        menu: [{ name: 'Filete Mignon', description: '12oz de suavidad.', price: 420, category: 'Plato Fuerte' }]
      },
      { 
        name: 'Café de la Plaza', 
        specialty: 'Café gourmet y Repostería',
        description: 'El mejor café de altura servido con tradición.',
        address: 'Frente al Parque Central.',
        imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2885-1234',
        menu: [{ name: 'Capuchino Olanchano', description: 'Café local con canela.', price: 55, category: 'Bebida' }]
      }
    ],
    events: [{ name: 'Gran Feria Inmaculada', date: 'Diciembre', description: 'La fiesta más grande de Olancho.' }],
    visitorInfo: 'Centro logístico ideal.'
  },
  {
    id: 'catacamas',
    name: 'Catacamas',
    slogan: 'Ciudad de las Cuevas',
    color: '#f97316',
    description: 'Catacamas es uno de los municipios más extensos, productivos y representativos del departamento de Olancho. Reconocido a nivel nacional por su fuerte identidad agrícola y ganadera, este municipio es un referente del desarrollo productivo y cultural de la región.\n\nEs un punto estratégico para el turismo rural, productivo y de naturaleza, gracias a su amplia extensión territorial y su cercanía con áreas protegidas de gran importancia ecológica. Catacamas destaca por su vida cultural activa, sus ferias, tradiciones y su gente hospitalaria.\n\nEntre sus principales atractivos turísticos se encuentran las Cuevas de Talgua, uno de los sitios arqueológicos más importantes de Honduras; el acceso a la Reserva de la Biosfera del Río Plátano; ríos, montañas y paisajes naturales ideales para el ecoturismo y la aventura. También es reconocida por la producción de café, ganadería y productos agrícolas.\n\nMunicipios cercanos: Juticalpa, Santa María del Real, Dulce Nombre de Culmí, San Francisco de Becerra.',
    cardImage: 'principal/mini Catacamas.jpeg',
    heroImage: 'principal/catacamas.jpeg',
    mapPos: { x: 58, y: 48 },
    attractions: [
      { id: 'cat1', name: 'Cuevas de Talgua', description: 'Conocidas como "Las Calaveras Luminosas".', imageUrl: 'https://images.unsplash.com/photo-1502726299822-6f583f972e02?auto=format&fit=crop&q=80&w=800' }
    ],
    activities: [{ name: 'Espeleología', icon: 'Flashlight' }],
    accommodations: [
      { 
        name: 'Hotel La Colonia', 
        type: 'Residencial', 
        rating: 4,
        description: 'Ubicado en la zona más exclusiva.',
        address: 'Colonia El Prado, Catacamas.',
        imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2799-1144',
        whatsapp: '+504 9566-7788',
        amenities: ['Aire Acondicionado', 'Desayuno Buffet'],
        rooms: [{ name: 'Matrimonial Confort', price: 1100, capacity: '2 Personas', description: 'Aire acondicionado y TV.' }]
      },
      { 
        name: 'Gran Hotel Catacamas', 
        type: 'Gran Turismo', 
        rating: 4,
        description: 'Confort y modernidad para grupos grandes.',
        address: 'Entrada principal de la ciudad.',
        imageUrl: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&q=80&w=1200',
        phone: '+504 2799-2233',
        whatsapp: '+504 9900-3344',
        amenities: ['Piscina', 'Bar', 'Centro de Negocios'],
        rooms: [{ name: 'Triple Junior', price: 1800, capacity: '3 Personas', description: 'Tres camas individuales.' }]
      }
    ],
    restaurants: [
      { 
        name: 'Asados El Toro', 
        specialty: 'Cortes premium',
        description: 'Donde la tradición ganadera se convierte en sabor.',
        address: 'Entrada principal, Catacamas.',
        imageUrl: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2799-5500',
        whatsapp: '+504 3322-1100',
        menu: [{ name: 'T-Bone Steak', description: 'Corte de exportación.', price: 550, category: 'Plato Fuerte' }]
      }
    ],
    events: [{ name: 'Feria de San Francisco', date: 'Octubre', description: 'Festivales culturales y jaripeos.' }],
    visitorInfo: 'Visite las cuevas con calzado de montaña.'
  },
  {
    id: 'santa-maria',
    name: 'Sta. María del Real',
    slogan: 'Arquitectura Colonial',
    color: '#d946ef',
    description: 'Santa María del Real es uno de los municipios con mayor valor histórico y cultural de Olancho. Fundado en la época colonial, conserva una arquitectura tradicional y un ambiente que refleja la historia y el origen del departamento.\n\nEste municipio es ideal para el turismo cultural, educativo y religioso, ofreciendo a los visitantes una experiencia auténtica ligada a las tradiciones olanchanas. Sus calles, iglesias y edificaciones antiguas narran parte importante de la historia regional.\n\nEntre sus atractivos destacan su iglesia colonial, festividades religiosas, tradiciones locales, gastronomía típica y su cercanía con ríos y zonas rurales que permiten el turismo comunitario. Santa María del Real también funciona como un punto de enlace entre Juticalpa y Catacamas.\n\nMunicipios cercanos: Juticalpa, Catacamas, San Francisco de Becerra, Guarizama.',
    cardImage: 'principal/mini Santa Maria del Real.jpeg',
    heroImage: 'principal/santa-maria.jpg',
    mapPos: { x: 52, y: 55 },
    attractions: [{ id: 's1', name: 'Iglesia Colonial', description: 'Parroquia histórica con valiosas imágenes coloniales.', imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Turismo Religioso', icon: 'Church' }],
    accommodations: [
      { 
        name: 'Cabañas El Real', 
        type: 'Rural', 
        rating: 4,
        description: 'Experiencia rústica y auténtica.',
        address: 'Sector Los Ríos.',
        imageUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2799-8800',
        whatsapp: '+504 8899-2211',
        amenities: ['Área de Fogata', 'Hamacas'],
        rooms: [{ name: 'Cabaña Familiar', price: 2100, capacity: '6 Personas', description: 'Dos plantas y terraza.' }]
      }
    ],
    restaurants: [
      { 
        name: 'Comedor Doña María', 
        specialty: 'Sopa de Mondongo',
        description: 'El sabor de hogar que todo viajero busca.',
        address: 'Calle Real, Santa María.',
        imageUrl: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2799-3322',
        menu: [{ name: 'Sopa de Mondongo', description: 'Especialidad de la casa.', price: 180, category: 'Plato Fuerte' }]
      }
    ],
    events: [{ name: 'Feria del Retorno', date: 'Enero', description: 'Tradición local.' }],
    visitorInfo: 'Los ríos son seguros.'
  },
  {
    id: 'culmi',
    name: 'D. Nombre de Culmí',
    slogan: 'Tierra Multicultural',
    color: '#ef4444',
    description: 'Dulce Nombre de Culmí es uno de los municipios más grandes y diversos del departamento de Olancho, caracterizado por su riqueza natural, agrícola y multicultural. Su amplio territorio alberga comunidades rurales, ríos, montañas y extensas zonas de producción agrícola y ganadera.\n\nEs un destino clave para el ecoturismo, el turismo de aventura y el turismo comunitario, ofreciendo experiencias auténticas en contacto directo con la naturaleza y las comunidades locales.\n\nEntre sus principales atractivos se encuentran ríos caudalosos, zonas montañosas, paisajes naturales poco explorados y su cercanía con áreas de gran valor ambiental. Culmí destaca también por su producción agrícola, ganadera y por la diversidad cultural de sus comunidades.\n\nMunicipios cercanos: Catacamas, San Esteban, Gualaco y municipios de la zona nororiental del país.',
    cardImage: 'principal/mini culmi.jpeg',
    heroImage: 'principal/culmi.jpg',
    mapPos: { x: 78, y: 35 },
    attractions: [{ id: 'cu1', name: 'Aldeas Pech', description: 'Encuentro cultural directo con las comunidades ancestrales.', imageUrl: 'https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Etnoturismo', icon: 'Users' }],
    accommodations: [
      { 
        name: 'Eco-Lodges Culmí', 
        type: 'Inmersión', 
        rating: 3,
        description: 'Alojamiento básico para exploradores.',
        address: 'Salida hacia la Reserva.',
        imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2799-0099',
        amenities: ['Guías Locales', 'Energía Solar'],
        rooms: [{ name: 'Litera en Dormitorio', price: 350, capacity: '1 Persona', description: 'Cama individual.' }]
      }
    ],
    restaurants: [
      { 
        name: 'Fogón de la Selva', 
        specialty: 'Sopa de gallina india',
        description: 'Ingredientes orgánicos cosechados en la zona.',
        address: 'Centro poblado de Culmí.',
        imageUrl: 'https://images.unsplash.com/photo-1547928576-a4a33237ce35?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2799-5566',
        menu: [{ name: 'Sopa de Gallina India', description: 'Receta ancestral.', price: 210, category: 'Plato Fuerte' }]
      }
    ],
    events: [{ name: 'Encuentro Intercultural Pech', date: 'Mayo', description: 'Festivales de danza ancestral.' }],
    visitorInfo: 'Uso de guías obligatorio.'
  },
  {
    id: 'concordia',
    name: 'Concordia',
    slogan: 'Paz Occidental',
    color: '#16a34a',
    cardImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 12, y: 70 },
    description: 'Concordia es un pequeño pero vibrante municipio en el occidente de Olancho. Su geografía montañosa le otorga un clima envidiable y vistas espectaculares hacia los valles vecinos. Es un lugar donde el tiempo parece detenerse, ideal para el descanso y la conexión con la naturaleza.',
    attractions: [{ id: 'co1', name: 'Mirador del Valle', description: 'Vista ininterrumpida de las cordilleras que rodean el municipio.', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Caminata de Montaña', icon: 'Mountain' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: 'Lugar tranquilo y seguro para familias.'
  },
  {
    id: 'el-rosario',
    name: 'El Rosario',
    slogan: 'Aroma de Café',
    color: '#854d0e',
    cardImage: 'https://images.unsplash.com/photo-1495107334309-fcf20504fa5f?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1495107334309-fcf20504fa5f?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 15, y: 55 },
    description: 'El Rosario es tierra de caficultores. Ubicado en las zonas altas, su economía y cultura giran en torno al "grano de oro". Las fincas de café ofrecen recorridos donde los visitantes pueden aprender sobre la cosecha y el procesamiento de uno de los mejores cafés de la región.',
    attractions: [{ id: 'er1', name: 'Fincas de Café', description: 'Tour de procesos del café desde la planta a la taza.', imageUrl: 'https://images.unsplash.com/photo-1524350300060-305312788e0b?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Agroturismo', icon: 'Sprout' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: 'No olvide comprar café local antes de irse.'
  },
  {
    id: 'esquipulas-norte',
    name: 'Esquipulas del Norte',
    slogan: 'Frontera Norte',
    color: '#2563eb',
    cardImage: 'https://images.unsplash.com/photo-1519011985187-444d62641929?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1519011985187-444d62641929?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 30, y: 15 },
    description: 'Esquipulas del Norte es un municipio remoto de gran belleza natural, limitando con las majestuosas montañas de la Sierra de Agalta. Su aislamiento ha preservado sus bosques y ríos en un estado casi virgen, ofreciendo un paraíso para el turismo de aventura extremo.',
    attractions: [{ id: 'en1', name: 'Río Mame', description: 'Río de aguas frías y cristalinas ideal para refrescarse.', imageUrl: 'https://images.unsplash.com/photo-1437482012494-097970ba3900?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Exploración Forestal', icon: 'Tree' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: 'Se recomienda vehículo 4x4 para el acceso.'
  },
  {
    id: 'gualaco',
    name: 'Gualaco',
    slogan: 'Cascadas de Cristal',
    color: '#059669',
    cardImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 45, y: 35 },
    description: 'Gualaco es un santuario del ecoturismo. Con cascadas inexploradas, densos bosques nublados y cuevas con ríos subterráneos, es el destino predilecto para los amantes de la naturaleza que buscan salirse de los senderos trillados.',
    attractions: [{ id: 'gu1', name: 'Cueva de Susmay', description: 'Una impresionante cueva con un río subterráneo que se puede navegar en balsas pequeñas.', imageUrl: 'https://images.unsplash.com/photo-1502726299822-6f583f972e02?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Espeleología', icon: 'Flashlight' }, { name: 'Ecoturismo', icon: 'Waves' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: 'Clima húmedo y lluvioso, traiga equipo adecuado.'
  },
  {
    id: 'guata',
    name: 'Guata',
    slogan: 'Rincón de Montaña',
    color: '#4d7c0f',
    cardImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 35, y: 25 },
    description: 'Ubicado en las entrañas de la sierra, Guata es un municipio que respira paz. Sus bosques de coníferas proporcionan un clima fresco y revitalizante, perfecto para retiros de fin de semana y observación de fauna local.',
    attractions: [{ id: 'gt1', name: 'Sendero Los Pinos', description: 'Camino boscoso ideal para avistamiento de aves.', imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Senderismo', icon: 'Footprints' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: ''
  },
  {
    id: 'guayape',
    name: 'Guayape',
    slogan: 'Valles Fértiles',
    color: '#65a30d',
    cardImage: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 25, y: 50 },
    description: 'Guayape es el corazón agrícola del departamento. Sus extensos valles son testimonio del arduo trabajo de su gente, produciendo gran parte de los granos básicos que alimentan a la región. El turismo aquí se centra en la vida rural y las ferias agrícolas.',
    attractions: [{ id: 'gy1', name: 'Río Guayape', description: 'Legendario río conocido históricamente por sus pepitas de oro.', imageUrl: 'https://images.unsplash.com/photo-1437482012494-097970ba3900?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Pesca Artesanal', icon: 'Waves' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: ''
  },
  {
    id: 'guarizama',
    name: 'Guarizama',
    slogan: 'Pueblo de Piedra',
    color: '#7c3aed',
    cardImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 48, y: 65 },
    description: 'Guarizama destaca por su arquitectura rústica y sus calles empedradas que evocan la Honduras de antaño. Es un municipio de tradiciones vivas, donde la artesanía y la alfarería siguen siendo parte del día a día.',
    attractions: [{ id: 'gz1', name: 'Taller de Alfarería', description: 'Visite a las familias que mantienen viva la técnica del barro rojo.', imageUrl: 'https://images.unsplash.com/photo-1565191999001-551c187427bb?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Taller de Barro', icon: 'Palette' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: ''
  },
  {
    id: 'jano',
    name: 'Jano',
    slogan: 'Alturas de Olancho',
    color: '#0284c7',
    cardImage: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 40, y: 20 },
    description: 'Jano es un balcón hacia el norte del departamento. Situado en una de las zonas más altas, ofrece panoramas de nubes y montañas que quitan el aliento. Es el lugar perfecto para quienes buscan soledad y paisajes de postal.',
    attractions: [{ id: 'ja1', name: 'Mirador de Jano', description: 'Punto más alto del pueblo con visibilidad de 360 grados.', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Fotografía de Paisaje', icon: 'Camera' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: ''
  },
  {
    id: 'la-union',
    name: 'La Unión',
    slogan: 'Cruce de Caminos',
    color: '#3b82f6',
    cardImage: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 32, y: 40 },
    description: 'La Unión actúa como un punto de convergencia en el norte de Olancho. Su actividad comercial y su hospitalidad lo hacen un lugar de parada obligatoria para los viajeros que exploran la ruta hacia la costa norte.',
    attractions: [{ id: 'lu1', name: 'Parque Central', description: 'Corazón de la vida social del municipio con kioscos tradicionales.', imageUrl: 'https://images.unsplash.com/photo-1548625361-1250003b1458?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Caminata Urbana', icon: 'Map' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: ''
  },
  {
    id: 'mangulile',
    name: 'Mangulile',
    slogan: 'Legado Ganadero',
    color: '#ca8a04',
    cardImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 22, y: 30 },
    description: 'Mangulile es tierra de hombres y mujeres de campo. Su herencia ganadera se refleja en sus amplias praderas y en la calidad de sus productos lácteos. Las ferias hípicas aquí son de las más apasionadas del departamento.',
    attractions: [{ id: 'ma1', name: 'Haciendas Tradicionales', description: 'Visite haciendas centenarias y aprenda sobre el manejo del ganado.', imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Cabalgatas', icon: 'Users' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: ''
  },
  {
    id: 'manto',
    name: 'Manto',
    slogan: 'Antigua Metrópolis',
    color: '#9333ea',
    cardImage: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 42, y: 45 },
    description: 'Manto fue en su día la capital del departamento. Sus calles guardan los ecos de esa gloria colonial con casonas de adobe y teja. Es un destino obligado para historiadores y amantes de la arquitectura colonial hondureña.',
    attractions: [{ id: 'mn1', name: 'Ruinas de la Catedral Antigua', description: 'Vestigios de la importancia religiosa de Manto en la colonia.', imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Recorrido Histórico', icon: 'Book' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: ''
  },
  {
    id: 'patuca',
    name: 'Patuca',
    slogan: 'Poder de las Aguas',
    color: '#0891b2',
    cardImage: 'https://images.unsplash.com/photo-1437482012494-097970ba3900?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1437482012494-097970ba3900?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 75, y: 75 },
    description: 'Patuca es el nombre del gigante que atraviesa este municipio. Hogar de uno de los ríos más caudalosos de Centroamérica, ofrece un espectáculo de fuerza natural inigualable y es vital para la energía del país.',
    attractions: [{ id: 'pa1', name: 'Represa Patuca III', description: 'Obra de ingeniería moderna integrada en el paisaje fluvial.', imageUrl: 'https://images.unsplash.com/photo-1437482012494-097970ba3900?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Tour Fluvial', icon: 'Waves' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: ''
  },
  {
    id: 'salama',
    name: 'Salamá',
    slogan: 'Valles del Sol',
    color: '#eab308',
    cardImage: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 28, y: 60 },
    description: 'Salamá es un valle cálido donde el sol parece brillar con más fuerza. Sus tierras son ricas en cítricos y otros frutales, llenando el aire con aromas dulces durante la época de cosecha.',
    attractions: [{ id: 'sl1', name: 'Huertos de Naranjales', description: 'Extensas plantaciones que se tornan color naranja en temporada.', imageUrl: 'https://images.unsplash.com/photo-1495107334309-fcf20504fa5f?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Visita a Huertos', icon: 'Sprout' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: ''
  },
  {
    id: 'san-esteban',
    name: 'San Esteban',
    slogan: 'Oro Verde',
    color: '#facc15',
    cardImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 65, y: 25 },
    description: 'San Esteban es famoso por su producción láctea y ganadera de altísimo nivel. Su "oro verde" son las pasturas que alimentan a los mejores ejemplares bovinos de la región, ganadores de múltiples certámenes nacionales.',
    attractions: [{ id: 'se1', name: 'Planta de Lácteos', description: 'Vea cómo se produce el auténtico queso olanchano con estándares modernos.', imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Gira Tecnológica', icon: 'CheckCircle' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: ''
  },
  {
    id: 'san-francisco-becerra',
    name: 'San Francisco de Becerra',
    slogan: 'Sabor Criollo',
    color: '#14b8a6',
    cardImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 50, y: 72 },
    description: 'Ubicado a pocos minutos de Juticalpa, Becerra es el escape gastronómico de la capital. Sus comedores son famosos por servir las mejores cuajadas y tortillas de maíz recién salidas del comal.',
    attractions: [{ id: 'sf1', name: 'Río Boquerón', description: 'Balneario natural muy popular entre los locales los fines de semana.', imageUrl: 'https://images.unsplash.com/photo-1437482012494-097970ba3900?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Balneario', icon: 'Waves' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: ''
  },
  {
    id: 'san-francisco-paz',
    name: 'San Francisco de La Paz',
    slogan: 'Armonía y Valles',
    color: '#06b6d4',
    cardImage: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 42, y: 52 },
    description: 'Este municipio destaca por su orden y limpieza. Situado estratégicamente en la ruta hacia el norte, ofrece servicios de calidad y una atmósfera de paz que hace honor a su nombre.',
    attractions: [{ id: 'sp1', name: 'Parque de la Paz', description: 'Uno de los parques mejor cuidados y con mayor iluminación nocturna.', imageUrl: 'https://images.unsplash.com/photo-1548625361-1250003b1458?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Turismo de Paso', icon: 'Compass' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: ''
  },
  {
    id: 'silca',
    name: 'Silca',
    slogan: 'Secretos de Olancho',
    color: '#10b981',
    cardImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 38, y: 48 },
    description: 'Silca es un municipio que guarda sus mejores paisajes para los más aventureros. Sus cerros verdes esconden cuevas y nacimientos de agua que solo los guías locales conocen a la perfección.',
    attractions: [{ id: 'si1', name: 'Cerro La Peña', description: 'Formación rocosa ideal para escalada básica y observación.', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Ecoturismo', icon: 'Tree' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: ''
  },
  {
    id: 'yocon',
    name: 'Yocón',
    slogan: 'Historia de Valles',
    color: '#f43f5e',
    cardImage: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200',
    mapPos: { x: 20, y: 40 },
    description: 'Yocón es un rincón de gran calidez humana en el occidente. Sus valles han sido históricamente productivos y sus habitantes mantienen vivas las leyendas y cuentos de camino de Olancho.',
    attractions: [{ id: 'yo1', name: 'Plaza del Recuerdo', description: 'Sitio de reunión con bustos de personajes ilustres del pueblo.', imageUrl: 'https://images.unsplash.com/photo-1518998053574-53f1f61fdb50?auto=format&fit=crop&q=80&w=800' }],
    activities: [{ name: 'Turismo Cultural', icon: 'Book' }],
    accommodations: [], restaurants: [], events: [], visitorInfo: ''
  }
];

// Added PRODUCTS constant to resolve the error in App.tsx
export const PRODUCTS = [
  {
    id: 'p1',
    name: 'Gorra "Orgullo Olanchano"',
    price: 'L. 280.00',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    name: 'Camiseta "Aventura Olancho"',
    price: 'L. 350.00',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    name: 'Café Premium de El Rosario',
    price: 'L. 180.00',
    image: 'https://images.unsplash.com/photo-1559056191-753a3ef48483?auto=format&fit=crop&q=80&w=800'
  }
];
