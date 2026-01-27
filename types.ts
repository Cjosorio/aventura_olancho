
export interface Attraction {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Activity {
  name: string;
  icon: string;
}

export interface RoomType {
  name: string;
  price: number;
  description: string;
  capacity: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: 'Entrada' | 'Plato Fuerte' | 'Postre' | 'Bebida';
}

export interface Accommodation {
  name: string;
  type: string;
  rating: number;
  description: string;
  address: string;
  imageUrl: string;
  rooms: RoomType[];
  amenities: string[];
  phone?: string;
  whatsapp?: string;
}

export interface Restaurant {
  name: string;
  specialty: string;
  description: string;
  address: string;
  imageUrl: string;
  menu: MenuItem[];
  phone?: string;
  whatsapp?: string;
}

export interface Event {
  name: string;
  date: string;
  description: string;
}

export interface Municipality {
  id: string;
  name: string;
  slogan: string;
  description: string;
  cardImage: string;
  heroImage: string;
  color: string;
  attractions: Attraction[];
  activities: Activity[];
  accommodations: Accommodation[];
  restaurants: Restaurant[];
  events: Event[];
  visitorInfo: string;
  mapPos: { x: number; y: number };
}

export type MunicipalityId = 'campamento' | 'juticalpa' | 'catacamas' | 'santa-maria' | 'culmi';
