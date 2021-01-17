const express = require('express');

let access = new Map();

access.set('token_1', 'user_1');
access.set('token_2', 'user_2');
access.set('token_3', 'user_3');

const app = new express();

app.use(express.json());

app.post('/auth', (req, res) => {
    const token = req.body.token;
    if (!access.has(req.body.token)) {
        return res.status(403);
    }
    return res.json({user: access.get(token)});
});


app.listen(9999);

