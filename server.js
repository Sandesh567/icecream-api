const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());

// Read data from JSON file
const iceCreams = JSON.parse(fs.readFileSync('./icecreams.json', 'utf-8'));

// Route for the API
app.get('/api/icecreams', (req, res) => {
    res.json(iceCreams);
});

//  listen on port
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`🍦 Ice cream API running at http://localhost:${PORT}/api/icecreams`);
    });
}

//Export app for Vercel (this is required)
module.exports = app;
