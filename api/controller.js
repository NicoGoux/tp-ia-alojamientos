import alojamientos from './alojamientos.js';

const getAlojamientos = async (req, res) => {
	return res.json(alojamientos);
};

export { getAlojamientos };

