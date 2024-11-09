import { Product, Sale, Client } from './interfaces';

// Productos diversificados con categorías variadas.
export const products: Product[] = [
  { id: 1, name: "Laptop", price: 900000, category: "Electronics", stock: 15 },
  { id: 2, name: "Phone", price: 600000, category: "Electronics", stock: 25 },
  { id: 3, name: "Desk", price: 120000, category: "Furniture", stock: 10 },
  { id: 4, name: "Chair", price: 80000, category: "Furniture", stock: 20 },
  { id: 5, name: "Notebook", price: 5000, category: "Stationery", stock: 100 },
  { id: 6, name: "Pen", price: 1000, category: "Stationery", stock: 500 },
  { id: 7, name: "Headphones", price: 80000, category: "Electronics", stock: 30 },
  { id: 8, name: "Shoes", price: 50000, category: "Fashion", stock: 40 },
  { id: 9, name: "Jacket", price: 200000, category: "Fashion", stock: 15 },
  { id: 10, name: "Smartwatch", price: 250000, category: "Electronics", stock: 10 },
];

// Ventas diversificadas reflejando diferentes productos y categorías.
export const sales: Sale[] = [
  { saleId: 1, productId: 1, quantitySold: 3, saleDate: "2024-11-01", clientId: 1 }, // Laptop
  { saleId: 2, productId: 2, quantitySold: 5, saleDate: "2024-11-01", clientId: 2 }, // Phone
  { saleId: 3, productId: 3, quantitySold: 2, saleDate: "2024-11-01", clientId: 1 }, // Desk
  { saleId: 4, productId: 4, quantitySold: 4, saleDate: "2024-11-01", clientId: 3 }, // Chair
  { saleId: 5, productId: 5, quantitySold: 50, saleDate: "2024-11-01", clientId: 4 }, // Notebook
  { saleId: 6, productId: 6, quantitySold: 100, saleDate: "2024-11-01", clientId: 2 }, // Pen
  { saleId: 7, productId: 7, quantitySold: 3, saleDate: "2024-11-01", clientId: 1 }, // Headphones
  { saleId: 8, productId: 8, quantitySold: 10, saleDate: "2024-11-01", clientId: 3 }, // Shoes
  { saleId: 9, productId: 9, quantitySold: 5, saleDate: "2024-11-01", clientId: 4 }, // Jacket
  { saleId: 10, productId: 10, quantitySold: 2, saleDate: "2024-11-01", clientId: 2 }, // Smartwatch
];

// Clientes (sin cambios en estructura, pero tipificados).
export const clients: Client[] = [
  { id: 1, name: "Carlos Pérez", email: "carlos@example.com" },
  { id: 2, name: "Ana Gómez", email: "ana@example.com" },
  { id: 3, name: "Juan Rodríguez", email: "jua@example.com" },
  { id: 4, name: "María García", email: "mar@example.com" },
];
