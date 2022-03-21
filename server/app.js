import express from 'express';
import bodyParser from 'body-parser';
import dao from './repositories/dao';
import { authenticated, authMiddleware } from './controllers/auth.controller';
import clientRoutes from './routes/client';
import authRoutes from './routes/auth';
const session = require('express-session');
const cookieParser = require('cookie-parser');
import * as sqlite3 from 'sqlite3'
import sqliteStoreFactory from 'express-session-sqlite'
var cors = require('cors')

const path = require('path');
const port = 3000;
export const app = express();

app.use(cors());

app.listen(port, () => console.log(`Node-JWT-SQLite-Starer is listening on port ${port}!`));

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(authMiddleware);
app.use(cookieParser());

app.use(session({ secret: "super secret string" }));
const SqliteStore = sqliteStoreFactory(session)
app.use(session({
    store: new SqliteStore({
        driver: sqlite3.Database,
        path: ':memory:',
        ttl: 604800000, // 1 week in miliseconds
    }),
}));

//  Script to setup sqlite DB in memory //
dao.setupDbForDev();
////////////////////////////////////
app.use('*', clientRoutes);
app.use('/api/auth', authRoutes);


