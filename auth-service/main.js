const express = require('express');

let access = new Map();

access.set('token_1', 'user_1');
access.set('token_2', 'user_2');
access.set('token_3', 'user_3');

const app = new express();

app.use(express.json());

app.get('/auth', (req, res) => {
    console.log("RECEIVED GET", req.headers);
    const token = 'null';
    if (!access.has(req.body.token)) {
        return res.status(403);
    }
    console.log("USER FOUND SETTING HEADER");
    res.header('USER-ID', access.get(token));
    return res.json({ok: true});
});


app.listen(80);

