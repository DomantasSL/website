const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'emailDB'
});

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.post('/submit-email', (req, res) => {
    const email = req.body.email;
    if (!email) {
        return res.status(400).send({ message: 'Email is required' });
    }

   const query = 'INSERT INTO emails (email) VALUES (?)';
    connection.query(query, [email], (error, results) => {
        if (error) throw error;
        res.send({ message: 'Email saved successfully', id: results.insertId });
    });
});

const PORT = 6969;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});