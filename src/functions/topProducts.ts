import { products, sales } from "../data/inventory";

type ProductWithSales = typeof products[0] & { sold: number };

export const getTopProducts = (top: number = 3): ProductWithSales[] => {
    // Calcular las ventas totales por producto
    const totalSales = sales.reduce((acc, sale) => {
        acc[sale.productId] = (acc[sale.productId] || 0) + sale.quantitySold;
        return acc;
    }, {} as Record<number, number>);

    // Agregar campo `sold` a cada producto
    const productsWithSales = products.map((product) => ({
        ...product,
        sold: totalSales[product.id] || 0,
    }));

    // Ordenar productos por cantidad vendida (descendente) y retornar los primeros `top`
    return [...productsWithSales].sort((a, b) => b.sold - a.sold).slice(0, top);
};