
export interface Product {
  id: string;
  name: string;
  category: 'Cake' | 'Bakery';
  image: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  role?: string;
}
