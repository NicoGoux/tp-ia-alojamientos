import alojamientos from './alojamientos.js';

const getAlojamientos = async (req, res) => {
	console.log(req);
	const text = formatAlojamientos();
	return res.json({
		result: text || 'hola',
	});
};

// Función para formatear los alojamientos en un string amigable para el usuario
const formatAlojamientos = () => {
	return alojamientos
		.map((alojamiento) => {
			const { ciudad, nombre, facilidades, tipoAlojamiento, ubicacion } =
				alojamiento;

			return `Nombre: ${nombre}\nCiudad: ${ciudad}\nTipo: ${tipoAlojamiento}\nUbicación: ${ubicacion}\nFacilidades: ${facilidades.join(
				', ',
			)}\n`;
		})
		.join('\n------------------\n'); // Separador entre alojamientos
};

export { getAlojamientos };

