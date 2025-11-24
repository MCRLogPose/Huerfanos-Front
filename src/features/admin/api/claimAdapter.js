import { claimService } from "@/features/shared/api/service/claimService";
import { userService } from "@/features/shared/api/service/userService";
import { orderService } from "@/features/shared/api/service/orderService";

export const claimAdapter = {
    getFormattedPendingClaims: async (status) => {
        const claims = await claimService.getPendingClaims(status);
        
        // Mapeo avanzado en paralelo
        const formatted = await Promise.all(
            claims.map(async (claim) => {
                // Obtener usuario
                const user = await userService.getUserById(claim.userId);

                // Obtener orden
                const order = await orderService.getById(claim.orderId);

                // Producto principal del pedido
                const firstItem = order.items?.[0];

                return {
                    id: claim.id,
                    description: claim.description,
                    status: claim.status,
                    createdAt: claim.createdAt,
                    reviewedAt: claim.reviewedAt,
                    
                    // Usuario
                    customer: `${user.firstName} ${user.lastName}`,
                    email: user.email,
                    phone: user.phone,

                    // Orden
                    saleCode: order.orderCode,
                    productName: firstItem?.product?.name ?? "Producto no encontrado",
                    productCode: firstItem?.product?.code ?? "N/A",

                    // Evidencia
                    evidence: claim.images?.[0]?.url ?? null,
                };
            })
        );

        return formatted;
    }
};
