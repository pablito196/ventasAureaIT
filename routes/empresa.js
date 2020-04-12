import routerx from 'express-promise-router';
import empresaController from '../controllers/EmpresaController';
//import auth from '../middlewares/auth';

const router = routerx();

router.post('/add',/*auth.verifyAlmacenero,*/empresaController.add);
router.get('/query',/*auth.verifyAlmacenero,*/empresaController.query);
router.get('/list',/*auth.verifyAlmacenero,*/empresaController.list);
router.put('/update',/*auth.verifyAlmacenero,*/empresaController.update);
router.delete('/remove',/*auth.verifyAlmacenero,*/empresaController.remove);
router.put('/activate',/*auth.verifyAlmacenero,*/empresaController.activate);
router.put('/deactivate',/*auth.verifyAlmacenero,*/empresaController.deactivate);

export default router;
