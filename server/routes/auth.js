import { signin, validateUser } from '../controllers/auth.controller';
import * as express from 'express';
const router = express.Router()

router.post('/signin', signin)
router.post('/authenticate', validateUser);
module.exports = router