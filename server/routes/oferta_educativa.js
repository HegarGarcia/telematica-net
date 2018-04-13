const express = require('express');
const { readFileOr404 } = require('./lib');

const router = express.Router();

router.get('/Bienvenida', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

router.get('/Ing_Telematica', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

router.get('/Ing_Software', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

module.exports = router;