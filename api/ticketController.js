import tickets from './tickets.js';

const generateTicket = async (req, res) => {
	const { body } = req;
	const { tipo, descripcion } = body;

	if (!descripcion) {
		return res.json({
			result: `Proporcione una descripción al problema`,
		});
	}

	const nroTicket = Math.floor(Math.random() * 1000);

	return res.json({
		result: `El ticket fue creado con éxito. El numero de ticket es: ${nroTicket}`,
	});
};

const getTicket = async (req, res) => {
	const { body } = req;
	const { numero_ticket } = body;

	if (!numero_ticket) {
		return res.json({
			result: formatTicketList(),
		});
	}

	const ticket = tickets.find((ticket) => ticket.numeroTicket == numero_ticket);

	if (!ticket) {
		return res.json({
			result: `El ticket solicitado no fue encontrado`,
		});
	}

	return res.json({
		result: `<h5 style="text-decoration: underline">N° de ticket: #${
			ticket.numeroTicket
		}</h5><b>Tipo</b>: ${ticket.tipoTicket || 'Otro'}\n<b>Descripción</b>: ${
			ticket.descripcion
		}`,
	});
};

const formatTicketList = () => {
	return tickets
		.map(
			(t) =>
				`<h5 style="text-decoration: underline">N° de ticket: #${
					t.numeroTicket
				}</h5><b>Tipo</b>: ${t.tipoTicket || 'Otro'}\n<b>Descripción</b>: ${
					t.descripcion
				}`,
		)
		.join('\n------------------\n'); // Separador entre alojamientos
};

export { generateTicket, getTicket };

