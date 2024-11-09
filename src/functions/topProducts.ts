import { products, sales } from "../data/inventory";

// Definimos un tipo que combina la información de un producto con la cantidad vendida.
type ProductWithSales = typeof products[0] & { sold: number };

export const getTopProducts = (top: number = 3): ProductWithSales[] => {
    // Calculamos las ventas totales por producto.
    // Usamos un objeto para acumular la cantidad vendida de cada producto por su ID.
    const totalSales = sales.reduce((acc, sale) => {
        acc[sale.productId] = (acc[sale.productId] || 0) + sale.quantitySold;
        return acc;
    }, {} as Record<number, number>);

    // Añadimos un campo `sold` a cada producto con la cantidad total vendida.
    const productsWithSales = products.map((product) => ({
        ...product,
        sold: totalSales[product.id] || 0, // Si no se vendió, asignamos 0.
    }));

    // Ordenamos los productos por cantidad vendida, de mayor a menor.
    // Retornamos los primeros `top` productos (por defecto, 3).
    return [...productsWithSales].sort((a, b) => b.sold - a.sold).slice(0, top);
};
