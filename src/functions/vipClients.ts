import { products, sales, clients } from "../data/inventory";

export const getVipClients = (): (typeof clients[0] & { totalSpent: number })[] => {
    // Creamos un mapa de productos para facilitar búsquedas rápidas por ID.
    const productMap = new Map(products.map((p) => [p.id, p]));

    // Calculamos cuánto ha gastado cada cliente.
    const totalSpend = sales.reduce((acc, sale) => {
        // Buscamos el producto relacionado con la venta.
        const product = productMap.get(sale.productId);
        if (product) {
            // Sumamos el gasto del cliente (precio del producto * cantidad vendida).
            acc[sale.clientId] = (acc[sale.clientId] || 0) + product.price * sale.quantitySold;
        }
        return acc;
    }, {} as Record<number, number>);

    // Mapeamos los clientes, agregando su gasto total, y filtramos los que son VIP.
    return clients
        .map((client) => ({
            ...client, // Copiamos la información del cliente.
            totalSpent: totalSpend[client.id] || 0, // Añadimos el gasto total.
        }))
        .filter((client) => client.totalSpent > 1000000); // Filtramos los clientes con más de 1 millón de gasto.
};
