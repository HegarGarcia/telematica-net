import util = require('util');
import * as fs from 'fs';

const readFile = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);

const readFileOr404 = (path:string) => readFile(path).catch(err => console.error(err));

export const getPageInfo:any = async (slug:string) => {
    slug = slug.toLowerCase();
    let template;
    let meta:any = await readFileOr404(`${__dirname}/../../pages/${slug}.json`);
    switch (slug) {
        case 'historia':
            template = 'historia';
            break;
        case 'Contacto':
            template = 'contacto';
            break;
        default:
            template = '404';
            break;
    }
    
    meta = meta !== undefined ? JSON.parse(meta.toString()) : {title: "Error"};

    return new Promise(resolve => resolve([template, meta]));
};