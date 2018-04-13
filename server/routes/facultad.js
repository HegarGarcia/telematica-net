const express = require('express');
const { readFileOr404 } = require('./lib');

const router = express.Router();

router.get('/Historia', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

router.get('/Contacto', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

router.get('/Personal', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

router.get('/Reglamentos', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

router.get('/Infraestructura', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

router.get('/Informes', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

router.get('/Calendario', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

module.exports = router;