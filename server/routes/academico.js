const express = require('express');
const { readFileOr404 } = require('./lib');

const router = express.Router();

router.get('/Docentes', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

router.get('/Academias', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

router.get('/CuerposAcademicos', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

router.get('/Tutorias', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

module.exports = router;