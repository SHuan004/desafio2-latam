import { getTopProducts } from "./functions/topProducts";
import { getRevenueByCategory } from "./functions/revenueByCategory";
import { getVipClients } from "./functions/vipClients";
import { getInventoryReport } from "./functions/inventoryReport";

// Mostramos los 3 productos más vendidos.
console.log("=== Top 3 Best-Selling Products ===");
getTopProducts().forEach((product, index) => {
  // Mostramos el nombre, unidades vendidas y precio de cada producto.
  console.log(
    `${index + 1}. ${product.name} - Sold: ${product.sold} units - Price: $${product.price}`
  );
});

// Mostramos los ingresos totales por categoría de producto.
console.log("\n=== Revenue by Category ===");
const revenueByCategory = getRevenueByCategory();
Object.entries(revenueByCategory).forEach(([category, revenue]) => {
  // Mostramos la categoría y el total de ingresos generados.
  console.log(`Category: ${category} - Revenue: $${revenue}`);
});

// Mostramos la lista de clientes VIP.
console.log("\n=== VIP Clients ===");
getVipClients().forEach((client) => {
  // Mostramos el nombre, email y total gastado por cada cliente VIP.
  console.log(
    `Client: ${client.name} - Email: ${client.email} - Total Spent: $${client.totalSpent}`
  );
});

// Mostramos el reporte de inventario.
console.log("\n=== Inventory Report ===");
getInventoryReport().forEach((product) => {
  // Mostramos el nombre del producto, categoría, stock actual y estado.
  console.log(
    `Product: ${product.name} - Category: ${product.category} - Stock: ${product.stock} - Status: ${product.status}`
  );
});
