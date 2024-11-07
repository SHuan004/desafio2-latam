import { products, sales } from "../data/inventory";

// Extendemos el tipo de producto para incluir el campo `sold`, que indica cuántas unidades se han vendido.
type ProductWithSales = typeof products[0] & { sold: number };

export const getTopProducts = (): ProductWithSales[] => {
  // Calculamos el total de unidades vendidas para cada producto, agrupando por su ID.
  const totalSales = sales.reduce((acc, sale) => {
    acc[sale.productId] = (acc[sale.productId] || 0) + sale.quantitySold;
    return acc;
  }, {} as Record<number, number>);

  // Mapeamos los productos originales para agregar el campo `sold`, con el total de unidades vendidas.
  const productsWithSales = products.map((product) => ({
    ...product, // Conservamos la información original del producto.
    sold: totalSales[product.id] || 0, // Si no tiene ventas, asumimos 0.
  }));

  // Ordenamos los productos por la cantidad vendida en orden descendente.
  const sortedProducts = productsWithSales.sort((a, b) => b.sold - a.sold);

  // Retornamos los 3 primeros productos más vendidos.
  return sortedProducts.slice(0, 3);
};
