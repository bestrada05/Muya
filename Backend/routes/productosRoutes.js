import { Router } from 'express';
import { productoController } from '../controllers/productoController.js';
//import { verifyCredentials, verifyToken } from '../middlewares/usuariosMiddleware.js';

const router = Router();

router.get('/', productoController.getAllProductos);
router.get('/:id', productoController.getProductoById);
router.post('/', productoController.postCrearProducto);
router.put("/:id", productoController.putActualizarProducto);
router.delete("/:id", productoController.deleteEliminarProducto);

router.all('*', (req, res) => {
    res.status(404).json({ message: 'Pagina no encontrada' });
});

export default router;