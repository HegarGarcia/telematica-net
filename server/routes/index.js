const express = require('express');
const fs = require('fs');
const { readFileOr404 } = require('./lib');

const router = express.Router();

const estudiantes = require('./estudiantes');
const academico = require('./academico');
const facultad = require('./facultad');
const oferta = require('./oferta_educativa');

router.use(estudiantes);
router.use(academico);
router.use(facultad);
router.use(oferta);


router.use('/material.css', express.static(`${__dirname}/../../node_modules/material-components-web/dist/material-components-web.min.css`));
router.use('/material.js', express.static(`${__dirname}/../../node_modules/material-components-web/dist/material-components-web.min.js`));

router.get('/', async (req, res) => {
    const meta = await readFileOr404(`${__dirname}/../pages/home/meta.json`);
    res.render('home', {
        meta
    });
});

module.exports = router;