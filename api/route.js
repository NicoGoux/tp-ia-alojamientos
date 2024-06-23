import express from 'express';
import { getAlojamientos } from './controller.js';

const router = express.Router();

function routerApi(app) {
	app.use('/api', router);
}

router.get('/', (req, res) => {
	res.send('[Server] connected');
});

router.post('/alojamientos', getAlojamientos);

export { routerApi };

