import { serveClient } from '../controllers/client.controller';
import * as express from 'express';
const router = express.Router();

router.get('/', serveClient);
module.exports = router;