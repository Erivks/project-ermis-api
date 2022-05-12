import express from 'express';

const app = express();
const env = process.env;
const PORT = env.PORT ? env.PORT : "8083";

app.get('/api/status', (req, res) => {
    return res.sendStatus(200).json({
        status: 200,
        message: "Common API ok!"
    });
});

app.listen(PORT, () => {
    console.info(`Listening on port ${PORT}!`);
});