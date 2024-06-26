// app.js

const express = require('express');
const app = express();
const axios = require('axios');

// Backend service URL
const backendUrl = 'http://backend-service:3000/greet';

app.get('/', async (req, res) => {
    try {
        // Make a request to the backend service
        const response = await axios.get(backendUrl);
        const greeting = response.data.message;

        // Serve the greeting message
        res.send(`<h1>${greeting}</h1>`);
    } catch (error) {
        console.error(error);
        res.send('<h1>Hello, World!</h1>');
    }
});

const port = 8080;
app.listen(port, () => {
    console.log(`Frontend service running on port ${port}`);
});

