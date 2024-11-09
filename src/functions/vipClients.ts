import { products, sales, clients } from "../data/inventory";

export const getVipClients = (): (typeof clients[0] & { totalSpent: number })[] => {
    // Paso 1: Crear un mapa de productos para búsquedas rápidas
    const productMap = new Map(products.map((p) => [p.id, p]));

    // Paso 2: Calcular el gasto total por cliente
    const totalSpend = sales.reduce((acc, sale) => {
        const product = productMap.get(sale.productId); // Buscar el producto en el mapa
        if (product) {
            acc[sale.clientId] = (acc[sale.clientId] || 0) + product.price * sale.quantitySold;
        }
        return acc;
    }, {} as Record<number, number>);

    // Paso 3: Mapear y filtrar clientes VIP
    return clients
        .map((client) => ({
            ...client,
            totalSpent: totalSpend[client.id] || 0,
        }))
        .filter((client) => client.totalSpent > 1000000);
};
