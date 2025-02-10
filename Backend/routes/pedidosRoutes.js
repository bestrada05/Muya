import { Router } from 'express';
import { pedidoController } from "../controllers/pedidoController.js"
const router = Router();

router.get("/", pedidoController.getAllPedido);
router.get("/usuario/:id", pedidoController.getPedidoByUser);
router.post("/", pedidoController.postCreatePedido);
router.put("/:id",pedidoController.putUpdatePedido);

export default router;