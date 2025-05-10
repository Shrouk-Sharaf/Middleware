const express = require('express');

const app = express();

app.use(express.json());

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}` + new Date().toISOString());
    next();
});

app.get('/', (req, res) => {
    res.send('Session 17!')
});

app.post('/api', (req, res) => {
    res.send('Session 17 !!')
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});