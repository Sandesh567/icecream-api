const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const iceCreams = JSON.parse(fs.readFileSync('./icecreams.json', 'utf-8'));

app.get('/api/icecreams', (req, res) => {
    res.json(iceCreams);
});

app.listen(PORT, () => {
    console.log(`🍦 Ice cream API running at http://localhost:${PORT}/api/icecreams`);
});
