import { getAlojamientos } from './alojamientosController.js';
import { generateTicket, getTicket } from './ticketController.js';

const generalController = async (req, res) => {
	const { body } = req;
	const { type } = body;
	if (type === 'generate-ticket') {
		return await generateTicket(req, res);
	} else if (type === 'get-ticket-state') {
		return await getTicket(req, res);
	} else {
		return await getAlojamientos(req, res);
	}
};

export default generalController;

