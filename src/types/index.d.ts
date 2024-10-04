export interface Product {
  images: string[]; // Array of images
  name: string;
  originalPrice: string | number;
  salePrice?: number;
  onSale?: boolean;
  stock?: number;
  vendor?: string;
  availability?: string;
  type?: string;
  customersViewing?: number
}
  