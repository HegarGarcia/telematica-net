import express = require('express');
import fs = require('fs');

import { getPageInfo } from './lib';

const router = express.Router();

router.use('/material.css', express.static(`${__dirname}/../../node_modules/materialize-css/dist/css/materialize.min.css`));
router.use('/material.js', express.static(`${__dirname}/../../node_modules/materialize-css/dist/js/materialize.min.js`));
router.use('/css', express.static(`${__dirname}/../../css`));
router.use('/img', express.static(`${__dirname}/../../img`));

router.get('/', async (req:express.Request, res:express.Response) => {
    const [ template, meta ]:Array<any> = await getPageInfo('home');
    res.render('home', {meta});
});

router.get('/:slug', async (req:express.Request, res:express.Response) => {
    let status = 200;
    const [ template, meta ]:Array<any> = await getPageInfo(req.params.slug);
    
    if (template === '404')
        status = 404;

    res.status(status).render(template, {meta});
});

export default router;