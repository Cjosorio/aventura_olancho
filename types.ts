
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

export interface Accommodation {
  name: string;
  type: string;
  rating: number;
}

export interface Restaurant {
  name: string;
  specialty: string;
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
  heroImage: string;
  color: string;
  attractions: Attraction[];
  activities: Activity[];
  accommodations: Accommodation[];
  restaurants: Restaurant[];
  events: Event[];
  visitorInfo: string;
  mapPos: { x: number; y: number }; // Percentage coordinates for SVG map
}

export type MunicipalityId = 'campamento' | 'juticalpa' | 'catacamas' | 'santa-maria' | 'culmi';
