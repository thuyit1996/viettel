const express = require('express'),
    path = require('path');
const app = express();

app.use(express.static('./dist/APM'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/APM/index.html'));
})

app.listen(process.env.PORT || 8000, () => {
    console.log("Server running");
})