const getCiudades = async (req, res) => {
	return res.json({
		result: ['Buenos Aires', 'Cordoba', 'Rosario', 'Santa Fe'],
	});
};

export { getCiudades };

