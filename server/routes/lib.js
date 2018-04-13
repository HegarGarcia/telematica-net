const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);

const readFileOr404 = (...args) => readFile(...args).catch(err => '404');
const readDirOr404 = (...args) => readDir(...args).catch(err => '404');

const getPageInfo = slug => {
    let template;
    let meta = await readFileOr404(`${__dirname}/../pages/${slug.substr(1)}/meta.json`);

    switch (slug) {
        case 'Horario': 
            template = 'base';
            break;
        default:
            template = '404';
            break;
    }

    meta = meta !== '404' ? meta : {title: 'Error'};
    return [template, {meta}];
};

module.exports = {
    getPageInfo
};