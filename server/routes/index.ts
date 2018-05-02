import express = require("express");
import fs = require("fs");

import { getPageInfo } from "./lib";

const router = express.Router();
const cssStatic = express.static(`${__dirname}/../../node_modules/materialize-css/dist/css/materialize.min.css`);
const jsStatic = express.static(`${__dirname}/../../node_modules/materialize-css/dist/js/materialize.min.js`);

router.use("/material.css", cssStatic);
router.use("/material.js", jsStatic);
router.use("/css", express.static(`${__dirname}/../../css`));
router.use("/img", express.static(`${__dirname}/../../img`));

router.get("/", async (req: express.Request, res: express.Response) => {
    const [ template, meta ]: [any, any] = await getPageInfo("home");
    res.render("home", {meta});
});

router.get("/:slug", async (req: express.Request, res: express.Response) => {
    let status = 200;
    const [ template, meta ]: [any, any] = await getPageInfo(req.params.slug);

    if (template === "404") {
        status = 404;
    }

    res.status(status).render(template, {meta});
});

export default router;
