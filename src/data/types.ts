export interface BaseCategoryItem {
  title: string;
  subtitle?: string;
  phone?: string;
  address?: string;
  mapUrl?: string;
  schedule?: string[];
}

export interface Stop {
  name: string;
  time: string;
}

export interface TransportItem extends BaseCategoryItem {
  stops: Stop[];
}

export type OtherCategoryItem = BaseCategoryItem;

export type CategoryData = {
  transport: TransportItem[];
  contacts: OtherCategoryItem[];
  pharmacy: OtherCategoryItem[];
  hospitals: OtherCategoryItem[];
  emergency: OtherCategoryItem[];
  [key: string]: OtherCategoryItem[] | TransportItem[];
};

export type Direction = "forward" | "backward";

export interface TrainStop {
  name: string;
  arrival: string;
  departure: string;
  platform?: string;
}

export interface ElectricTrainRoute {
  id: string;
  title: string;
  direction: Direction;
  stops: TrainStop[];
  subtitle?: string;
}
