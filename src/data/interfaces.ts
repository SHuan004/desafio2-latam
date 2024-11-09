// Representa un producto con su información básica: nombre, precio, categoría y stock disponible.
export interface Product {
  id: number;         // ID único del producto.
  name: string;       // Nombre del producto.
  price: number;      // Precio del producto.
  category: string;   // Categoría a la que pertenece (por ejemplo, Electrónica, Muebles, etc.).
  stock: number;      // Cantidad disponible en inventario.
}

// Representa una venta, conectando un producto con un cliente, e incluye detalles como la fecha y la cantidad vendida.
export interface Sale {
  saleId: number;         // ID único de la venta.
  productId: number;      // ID del producto vendido.
  quantitySold: number;   // Cantidad de productos vendidos.
  saleDate: string;       // Fecha en la que se realizó la venta.
  clientId: number;       // ID del cliente que realizó la compra.
}

// Representa a un cliente, incluyendo su información básica como nombre y correo.
export interface Client {
  id: number;         // ID único del cliente.
  name: string;       // Nombre del cliente.
  email: string;      // Correo electrónico del cliente.
}
