import { products } from "../data/inventory";

export const getInventoryReport = () => {
    // Generamos un reporte de inventario con un campo adicional `status` basado en el stock.
    return products.map((product) => ({
        ...product, // Conservamos la información original del producto.
        // Determinamos el estado del stock según la cantidad disponible.
        status:
            product.stock < 10
                ? "Low Stock" // Si el stock es menor a 10.
                : product.stock < 20
                ? "Medium Stock" // Si el stock está entre 10 y 19.
                : "High Stock", // Si el stock es 20 o más.
    }));
};
