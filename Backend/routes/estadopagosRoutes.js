import { Router } from 'express';
import { estadoPagosController } from '../controllers/estadopagosController.js';

const router = Router();

router.get("/", estadoPagosController.getAllEstadoPagos);
router.get("/:id", estadoPagosController.getEstadoPagosById);
router.post("/", estadoPagosController.postCrearEstadoPagos);
router.put("/:id", estadoPagosController.putActualizarEstadoPagos);
router.delete("/:id", estadoPagosController.deleteEliminarEstadoPagos);

router.all('*', (req, res) => {
    res.status(404).json({ message: 'Pagina no encontrada' });
});

export default router;