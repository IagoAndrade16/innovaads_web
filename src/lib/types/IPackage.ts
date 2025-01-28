
export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  details: {
    id: string;
    description: string;
  }[]
};