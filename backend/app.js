const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin: ['http://vhost1/', 'http://website.localhost/']
}));

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'password',
    database: 'emailDB'
});

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

app.post('/submit-email', (req, res) => {
    const email = req.body.email;
    console.log(email)
    if (!email) {
        return res.status(400).send({ message: 'Email is required' });
    }

   const query = 'INSERT INTO emails (email) VALUES (?)';
    connection.query(query, [email], (error, results) => {
        if (error) throw error;
        res.send({ message: 'Email saved successfully', id: results.insertId });
    });
    res.send({ message: 'Email saved successfully', id: 1 });
});

app.get('/show-email', (req, res) => {
   const query = 'SELECT * FROM emails';
    connection.query(query, (error, results) => {
        if (error) throw error;
        res.send({results});
    });
});

const PORT = 6969;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});