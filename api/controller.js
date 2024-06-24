import { getAlojamientos } from './alojamientosController.js';

const generalController = async (req, res) => {
	const { body } = req;
	const { type } = body;
	if (type === 'generate-ticket') {
		res.json({ result: 'generar ticket' });
	} else if (type === 'get-ticket-state') {
		res.json({ result: 'mostrar estado ticket' });
	} else {
		return await getAlojamientos(req, res);
	}
};

export default generalController;

