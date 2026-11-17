export enum ScreenId {
  BERANDA = 'beranda',
  DESTINASI = 'destinasi',
  PAKET = 'paket',
}

export enum DestinationCategory {
  SEMUA = 'Semua',
  ALAM = 'Alam & Trekking',
  EDUKASI = 'Edukasi & Budaya',
  AGRO = 'Agro & Kuliner',
  PENGINAPAN = 'Homestay',
}

export enum DifficultyLevel {
  MUDAH = 'Mudah',
  SEDANG = 'Sedang',
  MENANTANG = 'Menantang',
}

export enum PackageDurationFilter {
  SEMUA = 'Semua Paket',
  SETENGAH_HARI = 'Setengah Hari',
  SATU_HARI = '1 Hari Penuh',
  MENGINAP = 'Menginap 2H1M',
  ROMBONGAN = 'Rombongan',
}

export type ArtworkVariant =
  | 'hero-panorama'
  | 'sunrise-peak'
  | 'waterfall'
  | 'tea-coffee'
  | 'pine-forest'
  | 'batik-craft'
  | 'strawberry-farm'
  | 'river-tubing'
  | 'homestay-joglo';

export interface Destination {
  id: string;
  name: string;
  category: Exclude<DestinationCategory, DestinationCategory.SEMUA>;
  shortDesc: string;
  fullDesc: string;
  ticketPrice: number;
  priceUnit: string;
  parkingFee: string;
  openHours: string;
  durationEstimate: string;
  elevation: string;
  difficulty: DifficultyLevel;
  rating: string;
  reviewCount: number;
  localGuideAvailable: boolean;
  artwork: ArtworkVariant;
  highlights: string[];
  facilities: string[];
  visitorTips: string;
  distanceFromGate: string;
  featuredOnHome?: boolean;
}

export interface PackageAddon {
  id: string;
  name: string;
  price: number;
  unitLabel: string;
  perPerson: boolean;
}

export interface TourPackage {
  id: string;
  name: string;
  durationLabel: string;
  filterType: Exclude<PackageDurationFilter, PackageDurationFilter.SEMUA>;
  pricePerPerson: number;
  minPax: number;
  maxPax: number;
  rating: string;
  summary: string;
  destinationsIncluded: string[];
  includedItems: string[];
  excludedItems: string[];
  rundown: { time: string; activity: string }[];
  artwork: ArtworkVariant;
  isPopular?: boolean;
}

export interface BookingContext {
  type: 'general' | 'destination' | 'itinerary' | 'package';
  title: string;
  subtitle?: string;
  unitPrice?: number;
  defaultPax: number;
  minPax?: number;
  selectedDestinations?: string[];
  selectedAddons?: { name: string; cost: number }[];
  estimatedTotal?: number;
}
