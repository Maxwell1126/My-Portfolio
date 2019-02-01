const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "projects" JOIN tags ON "projects"."tags_id" = tags."id";`
    pool.query(queryText).then((result) => {
        console.log('in result', result);
        res.send(result.rows);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('in error', error);
    })
});