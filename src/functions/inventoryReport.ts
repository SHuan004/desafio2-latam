import { products, sales } from "../data/inventory";

export const getInventoryReport = () => {
    // Calculamos las ventas totales por producto, organizadas en un Map.
    const salesByProduct = sales.reduce((acc, sale) => {
        acc.set(sale.productId, (acc.get(sale.productId) ?? 0) + sale.quantitySold);
        return acc;
    }, new Map<number, number>());

    // Generamos el reporte de inventario.
    return products.map((product) => {
        const totalSold = salesByProduct.get(product.id) ?? 0; // Ventas totales del producto.
        const currentStock = product.stock - totalSold; // Calculamos el stock restante.

        // Retornamos el objeto del reporte con nombre, categoría, stock y estado.
        return {
            name: product.name, // Nombre del producto.
            category: product.category, // Categoría del producto.
            stock: currentStock, // Stock actualizado.
            // Estado del stock determinado con operadores ternarios.
            status:
                currentStock < 10
                    ? "Low Stock" // Menos de 10 unidades.
                    : currentStock < 20
                    ? "In Stock" // Entre 10 y 20 unidades.
                    : "Enough Stock", // Más de 20 unidades.
        };
    });
};
