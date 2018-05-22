import * as fs from "fs";
import util = require("util");

const readFile = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);
const readFileOr404: any = (path: string) => readFile(path, { encoding: "utf8" }).catch((err) => {
    console.log(err);
    return JSON.stringify({ title: "Error" });
});
const routes: Set<string> = new Set([
    "historia",
    "contacto",
    "calendario",
    "infraestructura",
    "maestria",
    "informes",
    "tramites",
    "reglamento",
    "bienvenida",
    "tutorias",
    "docentes",
    "cuerpos",
    "actividades",
]);

export const getPageInfo: any = async (slug: string) => {
    slug = slug.toLowerCase();
    const template = routes.has(slug) ? slug : "404";
    const meta: JSON = JSON.parse(await readFileOr404(`${__dirname}/../../meta/${slug}.json`));

    return Promise.resolve([template, meta]);
};
