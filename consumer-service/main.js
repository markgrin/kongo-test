express = require('express');

const app = express();
app.get('/consume_one', (req, res) => {
    console.log("RECEIVED HEADERS:", req.headers);
    res.send('ok');
});
app.get('/consume_two', (req, res) => {
    console.log("RECEIVED HEADERS:", req.headers);
    res.send('ok');
});

app.listen(9999);

