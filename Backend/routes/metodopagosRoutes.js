import { Router } from 'express';
import { metodopagosController } from '../controllers/metodopagosController.js';

const router = Router();

router.get("/", metodopagosController.getAllMetodoPagos);
router.get("/:id", metodopagosController.getMetodoPagosById);
router.post("/", metodopagosController.postCrearMetodoPagos);
router.put("/:id", metodopagosController.putActualizarMetodoPagos);
router.delete("/:id", metodopagosController.deleteEliminarMetodoPagos);

router.all('*', (req, res) => {
    res.status(404).json({ message: 'Pagina no encontrada' });
});

export default router;