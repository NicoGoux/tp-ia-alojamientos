import alojamientos from './alojamientos.js';

const getAlojamientos = async (req, res) => {
	console.log(req);
	return res.json({ results: alojamientos });
};

export { getAlojamientos };

