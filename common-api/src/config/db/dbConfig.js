import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import logger from '../../../../../common/functions/logger.js';

const env = dotenv.config().parsed;
const db = new Sequelize(env.DB, env.USER, env.PASS, {
    host: env.HOST,
    dialect: env.DIALECT,
    port: env.PORT,
    define: {
        freezeTableName: true
    },
    logging: (msg) => {
        logger("INFO", `Sequelize: ${msg}`);
    }
});

await db.authenticate().then(() => {
    logger("INFO", "Conexão foi estabelecida com sucesso!");
}).catch((err) => {
    logger("ERROR", err.message);
});

export default db;