
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
        imageUrl: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2799-2233',
        whatsapp: '+504 9900-3344',
        amenities: ['Piscina', 'Bar', 'Centro de Negocios'],
        rooms: [{ name: 'Triple Junior', price: 1800, capacity: '3 Personas', description: 'Tres camas individuales.' }]
      },
      { 
        name: 'Eco-Hotel Agalta', 
        type: 'Ecológico', 
        rating: 3,
        description: 'Rodeado de jardines botánicos locales.',
        address: 'KM 2 hacia la UNAG.',
        imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2799-0011',
        whatsapp: '+504 8844-5511',
        amenities: ['Senderos', 'Observación de aves'],
        rooms: [{ name: 'Cabaña Forest', price: 1300, capacity: '2 Personas', description: 'Ventilación natural y terraza.' }]
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
      },
      { 
        name: 'Pizzería La Cueva', 
        specialty: 'Pizzas Artesanales',
        description: 'Horno de leña y ambiente rústico único.',
        address: 'Barrio El Centro, Catacamas.',
        imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2799-6677',
        whatsapp: '+504 9466-2211',
        menu: [{ name: 'Pizza Olanchana', description: 'Con chorizo y queso local.', price: 290, category: 'Plato Fuerte' }]
      },
      { 
        name: 'Restaurante Talgua', 
        specialty: 'Comida Buffet',
        description: 'Rapidez y calidad para turistas en ruta.',
        address: 'Calle hacia las Cuevas de Talgua.',
        imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
        phone: '+504 2799-8811',
        menu: [{ name: 'Almuerzo Ejecutivo', description: 'Incluye refresco natural.', price: 155, category: 'Plato Fuerte' }]
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
    attractions: [{ id: 's1', name: 'Iglesia Colonial', description: 'Parroquia histórica.', imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800' }],
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
    attractions: [{ id: 'cu1', name: 'Aldeas Pech', description: 'Encuentro cultural directo.', imageUrl: 'https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?auto=format&fit=crop&q=80&w=800' }],
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
    events: [{ name: 'Encuentro Intercultural Pech', date: 'Mayo', description: 'Festivales de danza.' }],
    visitorInfo: 'Uso de guías obligatorio.'
  }
];
