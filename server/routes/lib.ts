import util = require('util');
import * as fs from 'fs';

const readFile = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);

const readFileOr404: any = (path:string) => readFile(path, {encoding: 'utf8'}).catch(err => {
    console.error(err)
    return JSON.stringify({title: "Error"});
});

export const getPageInfo:any = async (slug:string) => {
    slug = slug.toLowerCase();
    let template;
    let meta:JSON = JSON.parse(await readFileOr404(`${__dirname}/../../meta/${slug}.json`));

    switch (slug) {
        case 'historia':
            template = 'historia';
            break;
        case 'contacto':
            template = 'contacto';
            break;
        default:
            template = '404';
            break;
    }

    return new Promise(resolve => resolve([template, meta]));
};