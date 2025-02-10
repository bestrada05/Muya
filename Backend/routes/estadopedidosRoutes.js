import { Router } from 'express';
import { estadoPedidosController } from '../controllers/estadopedidosController.js';

const router = Router();

router.get("/", estadoPedidosController.getAllEstadoPedidos);
router.get("/:id", estadoPedidosController.getEstadoPedidosById);
router.post("/", estadoPedidosController.postCrearEstadoPedidos);
router.put("/:id", estadoPedidosController.putActualizarEstadoPedidos);
router.delete("/:id", estadoPedidosController.deleteEliminarEstadoPedidos);

router.all('*', (req, res) => {
    res.status(404).json({ message: 'Pagina no encontrada' });
});

export default router;