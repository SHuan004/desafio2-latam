import { products, sales } from "../data/inventory";

export const getRevenueByCategory = (): Record<string, number> => {
    // Calculamos el total de ingresos por categoría de producto.
    return sales.reduce((acc, sale) => {
        // Buscamos el producto correspondiente a la venta.
        const product = products.find((p) => p.id === sale.productId);
        if (product) {
            // Sumamos el ingreso generado por esta venta al total de su categoría.
            acc[product.category] = (acc[product.category] || 0) + product.price * sale.quantitySold;
        }
        return acc; // Retornamos el acumulador actualizado.
    }, {} as Record<string, number>); // Inicializamos un objeto para acumular ingresos por categoría.
};
