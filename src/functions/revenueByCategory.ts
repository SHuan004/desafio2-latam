import { products, sales } from "../data/inventory";

export const getRevenueByCategory = (): Record<string, number> => {
    // Crear un mapa para productos por ID para búsquedas rápidas
    const productMap = new Map(products.map((p) => [p.id, p]));
    // Calcular ingresos por categoría utilizando reduce
    return sales.reduce((acc, { productId, quantitySold }) => {
        const product = productMap.get(productId);
        if (product) {
            acc[product.category] = (acc[product.category] ?? 0) + product.price * quantitySold;
        }
        return acc;
    }, {} as Record<string, number>);
};