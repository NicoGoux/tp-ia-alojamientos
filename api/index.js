import express from 'express';
import cors from 'cors';

//Config
import cLog from './src/utils/cLog.js';

//Router
import { routerApi } from './route.js';

const app = express();

const corsOptions = {
	origin: function (origin, callback) {
		cLog.yellow(`[connection] from: ${origin}`);
		callback(null, true);
	},
};

app.use(cors(corsOptions));

const port = process.env.PORT || '3030';

app.use(express.json());

routerApi(app);

app.listen(port, () => {
	cLog.cyan(`\n[Server] Listening on ${port}\n`);
});

