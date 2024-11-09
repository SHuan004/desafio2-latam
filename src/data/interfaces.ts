export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    stock: number;
  }
  
  export interface Sale {
    saleId: number;
    productId: number;
    quantitySold: number;
    saleDate: string;
    clientId: number;
  }
  
  export interface Client {
    id: number;
    name: string;
    email: string;
  }
  