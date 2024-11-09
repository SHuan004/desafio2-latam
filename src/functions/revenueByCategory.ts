import { products, sales } from "../data/inventory";

export const getRevenueByCategory = (): Record<string, number> => {
    // Crear un mapa para asociar productos con sus IDs para búsquedas rápidas.
    const productMap = new Map(products.map((p) => [p.id, p]));

    // Agrupar ventas por categoría.
    const salesByCategory = sales.reduce((acc, { productId, quantitySold }) => {
        // Buscar el producto relacionado con la venta.
        const product = productMap.get(productId);
        if (product) {
            // Inicializar la categoría si no existe en el acumulador.
            if (!acc[product.category]) acc[product.category] = [];
            // Agregar los ingresos por esta venta a la categoría correspondiente.
            acc[product.category].push(product.price * quantitySold);
        }
        return acc;
    }, {} as Record<string, number[]>);

    // Calcular el total de ingresos por categoría.
    const revenueByCategory: Record<string, number> = {};
    Object.entries(salesByCategory).forEach(([category, revenues]) => {
        // Sumar los ingresos de cada categoría.
        revenueByCategory[category] = revenues.reduce((sum, revenue) => sum + revenue, 0);
    });

    return revenueByCategory;
};
