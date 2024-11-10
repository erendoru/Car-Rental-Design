export type CarType = 'SUV' | 'Sport' | 'Sedan' | 'Hatchback';
export type TransmissionType = 'Manual' | 'Automatic';

export interface ICar {
  id: string;
  name: string;
  type: CarType;
  transmission: TransmissionType;
  fuelCapacity: number;
  passengers: number;
  pricePerDay: number;
  image: string;
  isFavorite: boolean;
  isRecommended: boolean; 
}