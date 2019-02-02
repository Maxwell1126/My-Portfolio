const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "tags" JOIN "projects" ON "projects"."tag_id" = "tags"."id";`
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
    const queryText = `INSERT INTO project ("name", "description", "website", "github", "date_completed")
                    VALUES ($1, $2, $3, $4, $5,)`;
    const queryValues = [
        newProject.name,
        newProject.description,
        newProject.website,
        newProject.github,
        newProject.date_completed,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing SELECT plant query', err);
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