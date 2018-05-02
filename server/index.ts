import express =  require("express");
import * as helmet from "helmet";
import * as morgan from "morgan";
import * as nunjucks from "nunjucks";
import routes from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use((err: express.Errback, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(new Error("Something went wrong!, err:" + err));
    const meta: object = {title: "Error"};
    res.status(500).render("404", meta);
});

app.set("view engine", "njk");
app.disable("etag");

const nunjucksEnv = nunjucks.configure(`${__dirname}/../pages`, {
    express: app,
    watch: true,
});

app.use(routes);

(async () => {
    app.listen("3000", () => {
        console.log("Listening");
    });
})();
