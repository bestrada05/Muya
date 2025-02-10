import { Router } from 'express';
import { rolController } from '../controllers/rolController.js';

const router = Router();

router.get("/", rolController.getAllRoles);
router.get("/:id", rolController.getRolById);
router.post("/", rolController.postCrearRol);
router.put("/:id", rolController.putActualizarRol);
router.delete("/:id", rolController.deleteEliminarRol);

router.all('*', (req, res) => {
    res.status(404).json({ message: 'Pagina no encontrada' });
});

export default router;