const express = require('express');
const cookies = require('cookie-parser');

let access = new Map();

access.set('token_1', 'user_1');
access.set('token_2', 'user_2');
access.set('token_3', 'user_3');

const app = new express();

app.use(cookies());

app.get('/auth', (req, res) => {
    console.log("RECEIVED GET", req.headers);
    console.log("RECEIVED COOKIES", req.cookies);
    let token = 'null';
    if (req.cookies && req.cookies.TOKEN) {
        token = req.cookies.TOKEN;
        console.log("FOUND TOKEN ", token);
    }
    if (!access.has(token)) {
        res.status(403);
        return res.json({access: false});
    }
    console.log("USER FOUND SETTING HEADER");
    res.header('USER-ID', access.get(token));
    return res.json({access: true});
});


app.listen(80);

