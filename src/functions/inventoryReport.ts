import { products, sales } from "../data/inventory";

export const getInventoryReport = () => {
    // Agrupar las ventas por productId en un Map para búsquedas rápidas.
    const salesByProduct = sales.reduce((acc, sale) => {
        acc.set(sale.productId, (acc.get(sale.productId) ?? 0) + sale.quantitySold);
        return acc;
    }, new Map<number, number>());

    // Generar el reporte de inventario actualizando el stock y el estado.
    return products.map((product) => {
        const totalSold = salesByProduct.get(product.id) ?? 0; // Ventas totales del producto.
        const currentStock = product.stock - totalSold; // Calcular stock actual.

        return {
            ...product,
            stock: currentStock,
            // Determinar el estado del stock.
            status:
                currentStock < 10
                    ? "Low Stock"
                    : currentStock < 20
                    ? "Medium Stock"
                    : "High Stock",
        };
    });
};
