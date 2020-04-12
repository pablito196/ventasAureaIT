import routerx from 'express-promise-router';
import productoController from '../controllers/ProductoController';
//import auth from '../middlewares/auth';

const router = routerx();

router.post('/add',/*auth.verifyAlmacenero,*/productoController.add);
router.get('/query',/*auth.verifyAlmacenero,*/productoController.query);
router.get('/list',/*auth.verifyAlmacenero,*/productoController.list);
router.put('/update',/*auth.verifyAlmacenero,*/productoController.update);
router.delete('/remove',/*auth.verifyAlmacenero,*/productoController.remove);
router.put('/activate',/*auth.verifyAlmacenero,*/productoController.activate);
router.put('/deactivate',/*auth.verifyAlmacenero,*/productoController.deactivate);

export default router;
