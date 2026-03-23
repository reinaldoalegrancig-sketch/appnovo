export interface Product {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  count: string;
  description: string;
  icon?: string;
  featured?: boolean;
}

export const products: Product[] = [];
