import { getTopProducts } from "./functions/topProducts";
import { getRevenueByCategory } from "./functions/revenueByCategory";
import { getVipClients } from "./functions/vipClients";
import { getInventoryReport } from "./functions/inventoryReport";

try {
  // Mostramos los 3 productos más vendidos.
  console.log("=== Top 3 Productos Más Vendidos ===");
  getTopProducts().forEach((product, index) => {
    console.log(
      `${index + 1}. ${product.name} - Vendidos: ${product.sold} unidades - Precio: $${product.price}`
    );
  });

  // Mostramos los ingresos totales por categoría de producto.
  console.log("\n=== Ingresos por Categoría ===");
  const revenueByCategory = getRevenueByCategory();
  Object.entries(revenueByCategory).forEach(([category, revenue]) => {
    console.log(`Categoría: ${category} - Ingresos: $${revenue}`);
  });

  // Mostramos la lista de clientes VIP.
  console.log("\n=== Clientes VIP ===");
  getVipClients().forEach((client) => {
    console.log(
      `Cliente: ${client.name} - Correo: ${client.email} - Total Gastado: $${client.totalSpent}`
    );
  });

  // Mostramos el reporte de inventario.
  console.log("\n=== Reporte de Inventario ===");
  console.table(
    getInventoryReport().map((product) => ({
      Producto: product.name,
      Categoría: product.category,
      Stock: product.stock,
      Estado: product.status,
    }))
  );
} catch (error) {
  console.error("Ocurrió un error al generar el reporte:", error);
}
