const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



router.get('/', (req, res) => {
// select from messages table database will show us an updated list of tasks
    let queryText = 'SELECT * FROM messages ORDER BY "task";';
    pool.query(queryText).then(result => {
            // Sends back the results in an object
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error getting task', error);
            res.sendStatus(500);
        });
});




router.post('/', (req, res) => {
    let newTask = req.body; // storing object from client into newTask
    console.log(`Adding task`, newTask); // console logging newTask onto server console
    let queryText = `INSERT INTO messages ("task") 
                   VALUES ($1);`;  // query is a request for data
    pool.query(queryText, [newTask.task]) // communicating to database, a command to insert new value
        .then(result => { // once database receives data correctly, we receive the updated status
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new task`, error);
            res.sendStatus(500);
        });
});


router.put('/:id', (req, res) => {
    let task = req.body; // task with updated content
    let id = req.params.id; // id of the book to update
    let sqlText = '';
    console.log(`Updating task ${id} with `, task.status);
    // add conditional
    if (task.status === 'Incomplete') {
        sqlText = `UPDATE messages SET status='Complete' WHERE id=$1;`
    } else {
        sqlText = `UPDATE messages SET status='Incomplete' WHERE id=$1;`
    }

    pool.query(sqlText, [id])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error from db:', error);
            res.sendStatus(500); // if you see a status of 500, come look at LOG on server
        })
});






router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log('-------------------- ID:', id);
    let sqlText = `DELETE FROM messages WHERE id=$1;`;
    pool.query(sqlText, [id])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error from db:', error);
            res.sendStatus(500);
        })
})










module.exports = router;
