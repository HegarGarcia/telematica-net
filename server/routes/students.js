const express = require('express');

const router = express.Router();

router.get('/horario', (req, res) => {
    res.status(200).send('Horarios');
});

router.get('/', (req, res) => {
    res.status(200).send('Work');
});


module.exports = router;