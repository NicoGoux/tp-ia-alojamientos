import express from 'express';
import cors from 'cors';

//Router
import { routerApi } from './route.js';

const app = express();

const corsOptions = {
	origin: function (origin, callback) {
		console.log(`[connection] from: ${origin}`);
		callback(null, true);
	},
};

app.use(cors(corsOptions));

const port = process.env.PORT || '3030';

app.use(express.json());

routerApi(app);

app.listen(port, () => {
	console.log(`\n[Server] Listening on ${port}\n`);
});

