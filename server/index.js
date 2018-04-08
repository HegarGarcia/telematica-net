const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const nunjucks = require('nunjucks');

const routes = require('./routes/');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use((err, req, res, next) => {
    reject(new Error('Something went wrong!, err:' + err))
    res.status(500).send('Something went wrong!')
});

app.set('view engine', 'njk');

const nunjucksEnv = nunjucks.configure(`${__dirname}/../templates`, {
    watch: true,
    express: app
});

//app.use(require('./routes'));
app.use(routes);

(async function() {
    app.listen('3000', () => {
        console.log('Listening')
    });
})();
