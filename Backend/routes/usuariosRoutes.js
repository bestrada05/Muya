import { Router } from 'express';
import { usuariosController } from '../controllers/usuariosController.js';
import { verifyCredentials } from '../middlewares/usuariosMiddleware.js';

const router = Router();

//usuariosController

router.get('/', usuariosController.getAllUsers);
// verifyCredentials: Se valida email + password
// usuariosController.login: Retorna el token + id
router.post('/login', verifyCredentials, usuariosController.login);
router.post('/registro', usuariosController.registerUser);


router.all('*', (req, res) => {
    res.status(404).json({ message: 'Pagina no encontrada' });
});

export default router;