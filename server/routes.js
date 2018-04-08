const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);

const readDirOr404 = (...args) => readDir(...args).catch(err => {
    return '404';
});

const express = require('express');

const router = express.Router();

router.use('/material.css', express.static(`${__dirname}/../node_modules/material-components-web/dist/material-components-web.min.css`));
router.use('/material.js', express.static(`${__dirname}/../node_modules/material-components-web/dist/material-components-web.min.js`));

router.get('/sw.js', (req, res) => {
    const input = fs.createReadStream(`${__dirname}/../client/sw.js`);

    res.set('Content-Type', 'application/javascript');

    input.pipe(res);
});

router.get('/', async (req, res) => {
    const meta = JSON.parse(await readFile(`${__dirname}/../pages/home/meta.json`));
    
    res.render('home', {
        meta
    });
});

router.get('/:slug', async (req, res) => {
    res.send(`Hola ${req.params.slug}`);
});

module.exports = router;