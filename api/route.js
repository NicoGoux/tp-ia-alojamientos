import express from 'express';
import generalController from './controller.js';
import { getCiudades } from './ciudadesController.js';

const router = express.Router();

function routerApi(app) {
	app.use('/api', router);
}

router.get('/', (req, res) => {
	res.send('[Server] connected');
});

router.post('/chat', generalController);

router.get('/ciudades', getCiudades);

export { routerApi };

