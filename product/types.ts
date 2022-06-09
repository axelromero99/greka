export interface Option {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  discount?: number;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  gallery?: string;
  options?: Record<Option["category"], Option[]>;
  price: number;
  discount?: number;
}
