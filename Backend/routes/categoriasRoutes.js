import { Router } from 'express';
import { categoriaController } from '../controllers/categoriaController.js';

const router = Router();

router.get("/", categoriaController.getAllCategoria);
router.get("/:id", categoriaController.getCategoriaById);
router.post("/", categoriaController.postCrearCategoria);
router.put("/:id", categoriaController.putActualizarCategoria);
router.delete("/:id", categoriaController.deleteEliminarCategoria);

router.all('*', (req, res) => {
    res.status(404).json({ message: 'Pagina no encontrada' });
});

export default router;