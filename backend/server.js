// server.js

const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    res.json({ message: 'Hello from the Backend!' });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Backend service running on port ${port}`);
});
