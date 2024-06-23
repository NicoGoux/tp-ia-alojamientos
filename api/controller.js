import alojamientos from './alojamientos.js';

const getAlojamientos = async (req, res) => {
	return res.json({ results: alojamientos });
};

export { getAlojamientos };

