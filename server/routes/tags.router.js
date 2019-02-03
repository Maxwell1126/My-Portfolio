const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "tags";`
    pool.query(queryText).then((result) => {
        console.log('in result', result);
        res.send(result.rows);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('in error', error);
    })
});

module.exports = router;