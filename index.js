const express = require('express');
const app = express();
const compression = require('compression');
const cookieSession = require("cookie-session");
const csurf = require("csurf");
const db = require("./db");

app.use(compression());

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(
    cookieSession({
        secret: `I'm always angry.`,
        maxAge: 1000 * 60 * 60 * 24 * 14,
    })
);

app.use(express.urlencoded({ extended: false }));

app.use(csurf());

app.use(function (req, res, next) {
    // provide my templates with csrfToken
    res.locals.csrfToken = req.csrfToken();
    // prevent clickjacking
    res.setHeader("x-frame-options", "deny");
    next();
});

app.use(express.json());

app.use(express.static("./public"));


////////////////////// R E Q U E S T S /////////////////////// R E Q U E S T S /////////////////////

app.get('/animals', async (req, res) => {
    try {
        const { rows } = await db.getAllAnimals();
        console.log('ROWS: ', rows);
        res.json(rows);

    } catch (err) {
        console.log('err in getAllAnimals: ', err);
    }

});







////////////////// DO NOT CHANGE THE CODE BELOW THIS LINE ////////////////
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
////////////////// DO NOT CHANGE THE CODE BELOW THIS LINE ///////////////

app.listen(8080, function() {
    console.log("server of the final project is listening 🐱🐶🐨🦉");
});