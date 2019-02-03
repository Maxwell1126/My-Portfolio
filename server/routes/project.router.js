const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "projects" JOIN "tags" ON 
                                    "projects"."tag_id" = "tags"."id";`
    pool.query(queryText).then((result) => {
        console.log('in result', result);
        res.send(result.rows);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('in error', error);
    })
});
router.post('/', (req, res) => {
    const newProject = req.body;
    const queryText = `INSERT INTO "projects" ("name", "description", 
                     "date_completed", "github",  "tag_id", "website")                   
                    VALUES ($1, $2, $3, $4, $5, $6);`;
    const queryValues = [
        newProject.name,
        newProject.description,
        newProject.date_completed,
        newProject.github,
        newProject.tag,
        newProject.website,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('error in post', err);
            res.sendStatus(500);
        });
});
router.delete('/:id', (req, res) => {
    const queryText = 'DELETE FROM "projects" WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((error) => {
            console.log('Error', error);
            res.sendStatus(500);
        });
});

module.exports = router;