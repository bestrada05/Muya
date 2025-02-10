import { Router } from 'express';
import { pagoController } from '../controllers/pagoController.js';

const router = Router();

router.get("/", pagoController.getAllPago);
router.get("/:id", pagoController.getPagoById);
router.post("/", pagoController.postCrearPago);
router.put("/:id", pagoController.putActualizarPago);
router.delete("/:id", pagoController.deleteEliminarPago);

router.all('*', (req, res) => {
    res.status(404).json({ message: 'Pagina no encontrada' });
});

export default router;