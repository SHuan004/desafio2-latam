// Importamos las interfaces que definen cómo se estructuran los datos de productos, ventas y clientes.
import { Product, Sale, Client } from './interfaces';

// Lista de productos disponibles, con información básica como nombre, precio y stock.
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
  { id: 11, name: "Tablet", price: 300000, category: "Electronics", stock: 12 },
  { id: 12, name: "Backpack", price: 45000, category: "Fashion", stock: 50 },
  { id: 13, name: "Printer", price: 120000, category: "Electronics", stock: 8 },
  { id: 14, name: "Sofa", price: 300000, category: "Furniture", stock: 5 },
  { id: 15, name: "Book", price: 15000, category: "Stationery", stock: 80 },
  { id: 16, name: "Keyboard", price: 40000, category: "Electronics", stock: 25 },
  { id: 17, name: "Monitor", price: 180000, category: "Electronics", stock: 20 },
  { id: 18, name: "Lamp", price: 30000, category: "Furniture", stock: 30 },
  { id: 19, name: "Jeans", price: 70000, category: "Fashion", stock: 25 },
  { id: 20, name: "T-Shirt", price: 20000, category: "Fashion", stock: 60 },
];

// Lista de ventas realizadas, conectando productos con clientes y detallando las cantidades y fechas.
export const sales: Sale[] = [
  { saleId: 1, productId: 1, quantitySold: 3, saleDate: "2024-11-01", clientId: 1 },
  { saleId: 2, productId: 2, quantitySold: 5, saleDate: "2024-11-02", clientId: 2 },
  { saleId: 3, productId: 3, quantitySold: 2, saleDate: "2024-11-03", clientId: 3 },
  { saleId: 4, productId: 4, quantitySold: 4, saleDate: "2024-11-04", clientId: 4 },
  { saleId: 5, productId: 5, quantitySold: 50, saleDate: "2024-11-05", clientId: 5 },
  { saleId: 6, productId: 6, quantitySold: 100, saleDate: "2024-11-06", clientId: 6 },
  { saleId: 7, productId: 7, quantitySold: 3, saleDate: "2024-11-07", clientId: 7 },
  { saleId: 8, productId: 8, quantitySold: 10, saleDate: "2024-11-08", clientId: 8 },
  { saleId: 9, productId: 9, quantitySold: 5, saleDate: "2024-11-09", clientId: 9 },
  { saleId: 10, productId: 10, quantitySold: 2, saleDate: "2024-11-10", clientId: 10 },
  { saleId: 11, productId: 11, quantitySold: 4, saleDate: "2024-11-11", clientId: 11 },
  { saleId: 12, productId: 12, quantitySold: 8, saleDate: "2024-11-12", clientId: 12 },
  { saleId: 13, productId: 13, quantitySold: 1, saleDate: "2024-11-13", clientId: 13 },
  { saleId: 14, productId: 14, quantitySold: 2, saleDate: "2024-11-14", clientId: 14 },
  { saleId: 15, productId: 15, quantitySold: 15, saleDate: "2024-11-15", clientId: 15 },
  { saleId: 16, productId: 16, quantitySold: 6, saleDate: "2024-11-16", clientId: 16 },
  { saleId: 17, productId: 17, quantitySold: 2, saleDate: "2024-11-17", clientId: 17 },
  { saleId: 18, productId: 18, quantitySold: 5, saleDate: "2024-11-18", clientId: 18 },
  { saleId: 19, productId: 19, quantitySold: 7, saleDate: "2024-11-19", clientId: 19 },
  { saleId: 20, productId: 20, quantitySold: 10, saleDate: "2024-11-20", clientId: 20 },
];


// Lista de clientes, con sus nombres y correos electrónicos.
export const clients: Client[] = [
  { id: 1, name: "Carlos Pérez", email: "carlos@example.com" },
  { id: 2, name: "Ana Gómez", email: "ana@example.com" },
  { id: 3, name: "Juan Rodríguez", email: "juan@example.com" },
  { id: 4, name: "María García", email: "maria@example.com" },
  { id: 5, name: "Pedro Martínez", email: "pedro@example.com" },
  { id: 6, name: "Lucía López", email: "lucia@example.com" },
  { id: 7, name: "José Sánchez", email: "jose@example.com" },
  { id: 8, name: "Sofía Ramírez", email: "sofia@example.com" },
  { id: 9, name: "Luis Morales", email: "luis@example.com" },
  { id: 10, name: "Camila Ortiz", email: "camila@example.com" },
  { id: 11, name: "Andrés Vargas", email: "andres@example.com" },
  { id: 12, name: "Elena Díaz", email: "elena@example.com" },
  { id: 13, name: "Diego Torres", email: "diego@example.com" },
  { id: 14, name: "Gabriela Fernández", email: "gabriela@example.com" },
  { id: 15, name: "Miguel Rojas", email: "miguel@example.com" },
  { id: 16, name: "Clara González", email: "clara@example.com" },
  { id: 17, name: "Pablo Castro", email: "pablo@example.com" },
  { id: 18, name: "Valentina Herrera", email: "valentina@example.com" },
  { id: 19, name: "Jorge Vega", email: "jorge@example.com" },
  { id: 20, name: "Isabel Flores", email: "isabel@example.com" },
];

