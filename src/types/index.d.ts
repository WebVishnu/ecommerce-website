export interface Product {
  id: number;
  images: string[]; // Array of images
  name: string;
  originalPrice: number;
  salePrice?: number; // Optional
  onSale?: boolean; // Optional
  stock?: number;
  vendor?: string;
  availability?: string;
  type?: string;
  customersViewing?: number;
}
  