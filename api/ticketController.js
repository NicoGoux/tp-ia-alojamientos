import tickets from './tickets.js';

const generateTicket = async (req, res) => {
	const { body } = req;
	const { tipo_ticket, numero_reserva, descripcion } = body;

	if (!descripcion) {
		return res.json({
			result: `Proporcione una descripción al problema`,
		});
	}

	let nroTicket = Math.floor(Math.random() * 1000);
	while (nroTicket <= 10) {
		nroTicket = Math.floor(Math.random() * 1000);
	}

	return res.json({
		result: `El ticket fue creado con éxito. El numero de ticket es: ${nroTicket}`,
	});
};

const getTicket = async (req, res) => {
	const { body } = req;
	const { numero_ticket } = body;

	if (!numero_ticket) {
		return res.json({
			result: `Sus tickets son: <br/> ${formatTicketList()}`,
			response_code: 'NumberNotProvide',
		});
	}

	const ticket = tickets.find((ticket) => ticket.numeroTicket == numero_ticket);

	if (!ticket) {
		return res.json({
			result: `El ticket numero ${numero_ticket} no fue encontrado. Puede probar con alguno de estos:<br/> ${formatTicketList()}`,
			response_code: 'TicketNotFound',
		});
	}

	return res.json({
		result: `<h5 style="text-decoration: underline">N° de ticket: #${
			ticket.numeroTicket
		}</h5><b>Tipo</b>: ${ticket.tipoTicket || 'Otro'}<br/><b>Nro de reserva</b>: ${
			ticket.numeroReserva
		}<br/><b>Estado</b>: ${ticket.estado}<br/><b>Descripción</b>: ${
			ticket.descripcion
		}`,
		response_code: 'TicketFound',
	});
};

const formatTicketList = () => {
	return tickets
		.map(
			(t) =>
				`<h5 style="text-decoration: underline">N° de ticket: ${
					t.numeroTicket
				}</h5><b>Tipo</b>: ${t.tipoTicket || 'Otro'}`,
		)
		.join('<hr/>'); // Separador entre alojamientos
};

export { generateTicket, getTicket };

