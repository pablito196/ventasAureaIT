import routerx from 'express-promise-router';
import tipoProductoRouter from './tipoproducto';
import empresaRouter from './empresa';
import productoRouter from './producto';

const router = routerx();

router.use('/tipoproducto',tipoProductoRouter);
router.use('/empresa',empresaRouter);
router.use('/producto',productoRouter);

export default router;