const express = require('express');
const { readFileOr404 } = require('./lib');

const router = express.Router();

router.get('/Horario', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

router.get('/Actividades', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

router.get('/Guia', async (req, res) => {
    let status, render;
    const meta = await readFileOr404(`${__dirname}/../pages/${req.originalUrl.substr(1)}/meta.json`);

    render = meta !== '404' ? 'home' : '404';

    res.status(200).send(render);
});

router.get('/Moodle', async (req, res) => res.redirect('//telematicanet.ucol.mx/moodle/'));
router.get('/Biblioteca', async (req, res) => res.redirect('//bvirtual.ucol.mx/'));

module.exports = router;