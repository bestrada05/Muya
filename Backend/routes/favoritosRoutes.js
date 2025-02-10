import { Router } from 'express';
import { favoritosController } from '../controllers/favoritoController.js';

const router = Router();

router.get("/", favoritosController.getAllFavoritos);
router.get("/:id", favoritosController.getFavoritosById);
router.get("/usuario/:user", favoritosController.getUserFavoritos);
router.get("/producto/:prod", favoritosController.getProdFavoritos);

router.post("/", favoritosController.postCrearFavoritos);
router.put("/:id", favoritosController.putActualizarFavoritos);
router.delete("/:id", favoritosController.deleteEliminarFavoritos);

router.all('*', (req, res) => {
    res.status(404).json({ message: 'Pagina no encontrada' });
});

export default router;