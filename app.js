require('dotenv').config()
const express = require('express');
const { Pool } = require('pg')
const app = express()

const pool = new Pool({
    database: '',
    host: '',
    port: '',
    user: '',
    password: '',
    ssl: true
});



app.get('/users', (req,res)=>{
    pool.query('SELECT * FROM users WHERE id = $1', [1], (err, databaseResult) => {
        if (err) {
          res.status.json({error:"Can not get users"});
        }
        res.json({users: databaseResult.rows})
      })
})

app.listen(process.env.PORT);