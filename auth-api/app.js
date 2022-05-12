import express from 'express';
import { HTTP_STATUS } from './constants/httpStatus.js';

const app = express();
const env = process.env;
const PORT = env.PORT ? env.PORT : "8080";

app.get('/api/status', (req, res) => {
    res.sendStatus(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        message: "Auth API ok!"
    });
});

app.listen(PORT, () => {
    console.info(`Listening on port ${PORT}!`);
});