const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Use an absolute path for serving static files
const publicPath = path.join(__dirname, 'weather-app', 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
