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
		result: `<h5 style="text-decoration: underline">N° de ticket: #${nroTicket}</h5><b>Tipo</b>: ${
			tipo || 'General'
		}\n<b>Descripción</b>: ${descripcion}`,
	});
};

export { generateTicket };

