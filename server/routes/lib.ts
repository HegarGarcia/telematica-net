import util = require('util');
import * as fs from 'fs';

const readFile = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);

const readFileOr404 = (path:string) => readFile(path).catch(err => console.error(err));

export const getPageInfo:any = async (slug:string) => {
    let template;
    let meta:any = await readFileOr404(`${__dirname}/../pages/${slug}/meta.json`);

    switch (slug) {
        case 'Horario': 
            template = 'base';
            break;
        default:
            template = '404';
            break;
    }

    meta = meta !== undefined ? meta : {title: 'Error'};
    return [template, {meta}];
};