import routerx from 'express-promise-router';
import tipoProductoController from '../controllers/TipoProductoController';
//import auth from '../middlewares/auth';

const router = routerx();

router.post('/add',/*auth.verifyAlmacenero,*/tipoProductoController.add);
router.get('/query',/*auth.verifyAlmacenero,*/tipoProductoController.query);
router.get('/list',/*auth.verifyAlmacenero,*/tipoProductoController.list);
router.put('/update',/*auth.verifyAlmacenero,*/tipoProductoController.update);
router.delete('/remove',/*auth.verifyAlmacenero,*/tipoProductoController.remove);
router.put('/activate',/*auth.verifyAlmacenero,*/tipoProductoController.activate);
router.put('/deactivate',/*auth.verifyAlmacenero,*/tipoProductoController.deactivate);

export default router;
