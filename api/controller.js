import alojamientos from './alojamientos.js';

const getAlojamientos = async (req, res) => {
	console.log(req);
	const cards = alojamientos.map(createCard);
	return res.json({
		response_type: 'carousel',
		cards: cards,
	});
};

const createCard = (alojamiento) => {
	return {
		title: alojamiento.nombre,
		description: `
        Ciudad: ${alojamiento.ciudad}
        Tipo de Alojamiento: ${alojamiento.tipoAlojamiento}
        Ubicación: ${alojamiento.ubicacion}
        Facilidades: ${alojamiento.facilidades.join(', ')}
        `,
		buttons: [
			{
				text: 'Más detalles',
				url: '#',
			},
		],
	};
};

export { getAlojamientos };

