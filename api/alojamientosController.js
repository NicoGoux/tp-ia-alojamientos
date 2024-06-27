import alojamientos from './alojamientos.js';

const getAlojamientos = async (req, res) => {
	const { body } = req;
	const filters = {
		ciudad: body.ciudad,
		fecha_desde: body.fecha_desde,
		fecha_hasta: body.fecha_hasta,
		cantidad_personas: body.cantidad_personas,
		tipo_alojamiento: body.tipo_alojamiento,
		ubicacion_alojamiento: body.ubicacion_alojamiento,
		precio_minimo: body.precio_minimo,
		precio_maximo: body.precio_maximo,
	};
	const alojamientosFiltrados = filterAlojamientos(filters, alojamientos);
	const text = formatAlojamientos(alojamientosFiltrados);
	return res.json({
		result: text != '' ? text : 'No se encontraron resultados',
	});
};

// Función para filtrar los alojamientos
const filterAlojamientos = (filters, alojamientos) => {
	return alojamientos.filter((alojamiento) => {
		let matches = true;

		if (
			filters.ciudad &&
			alojamiento.ciudad.toLowerCase() !== filters.ciudad.toLowerCase()
		) {
			matches = false;
		}

		if (filters.precio_minimo && alojamiento.precio < filters.precio_minimo) {
			matches = false;
		}

		if (filters.precio_maximo && alojamiento.precio > filters.precio_maximo) {
			matches = false;
		}

		if (
			filters.cantidad_personas &&
			alojamiento.cantidadPersonas < filters.cantidad_personas
		) {
			matches = false;
		}

		if (
			filters.tipo_alojamiento &&
			alojamiento.tipoAlojamiento.toLowerCase() !==
				filters.tipo_alojamiento.toLowerCase()
		) {
			matches = false;
		}

		if (
			filters.ubicacion_alojamiento &&
			alojamiento.ubicacion.toLowerCase() !==
				filters.ubicacion_alojamiento.toLowerCase()
		) {
			matches = false;
		}

		return matches;
	});
};

// Función para formatear los alojamientos en un string amigable para el usuario
const formatAlojamientos = (alojamientosFiltrados) => {
	return alojamientosFiltrados
		.map((alojamiento) => {
			const {
				ciudad,
				nombre,
				facilidades,
				tipoAlojamiento,
				ubicacion,
				cantidadPersonas,
				precio,
			} = alojamiento;

			return `<h5 style="text-decoration: underline">Nombre: ${nombre}</h5><b>Ciudad</b>: ${ciudad}\n<b>Tipo</b>: ${tipoAlojamiento}\n<b>Ubicación</b>: ${ubicacion}\n<b>Facilidades</b>: ${facilidades.join(
				', ',
			)}\n<b>Capacidad</b>: ${cantidadPersonas} personas\n<b>Precio por noche</b>: $${precio}`;
		})
		.join('\n------------------\n'); // Separador entre alojamientos
};

export { getAlojamientos };

