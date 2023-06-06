const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Database Connection
const conn = require('./db/conn');
conn();

// API Routes
const routes = require('./routes/router');
app.use('/api', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Running')
});