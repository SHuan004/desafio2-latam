import { products, sales, clients } from "../data/inventory";

      
export const getVipClients = (): (typeof clients[0] & { totalSpent: number })[] => {

    // PASO 1: Calculamos el gasto total por cliente.
    const totalSpend = sales.reduce((acc, sale) => {
        // Buscamos el producto correspondiente a la venta
        const product = products.find((p) => p.id === sale.productId);

        // Si el producto existe, calculamos el costo de la venta (precio * cantidad)
        // y lo sumamos al total acumulado del cliente.
        if (product) {
            acc[sale.clientId] = (acc[sale.clientId] || 0) + product.price * sale.quantitySold;
        }
        return acc; // Retornamos el acumulador con los totales actualizados
    }, {} as Record<number, number>); // Inicializamos un objeto para acumular los totales por cliente.

    // PASO 2: Mapeamos a los clientes para incluir cuánto han gastado en total.
    // Luego filtramos a los que han gastado más de $1,000,000.
    return clients
        .map((client) => ({
            // Retornamos al cliente original, pero agregamos el campo `totalSpent`
            ...client,
            totalSpent: totalSpend[client.id] || 0, // Si no hay ventas, asumimos 0
        }))
        .filter((client) => client.totalSpent > 1000000); // Filtramos solo los que son VIP.
};