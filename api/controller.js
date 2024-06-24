import alojamientos from './alojamientos.js';

const getAlojamientos = async (req, res) => {
	console.log(req);
	const cards = alojamientos.map(createCard);
	return res.json(cards);
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

return {
	response_type: 'carousel',
	cards: cards,
};

export { getAlojamientos };

