const express = require('express');
const app = express();
const compression = require('compression');
const cookieSession = require("cookie-session");
const csurf = require("csurf");
const db = require("./db");
const alg = require("./alg"); 

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
        // console.log('ROWS: ', rows);
        res.json(rows);

    } catch (err) {
        console.log('err in getAllAnimals: ', err);
    }
});

app.get("/animal-info/:id", async (req, res) => {
    try {
        const { rows } = await db.getAnimalById(req.params.id);
        // console.log('ROWS FOR ONE ANIMAL: ', rows);
        res.json(rows[0]);

    } catch (err) {
        console.log('err in getAnimalById');
    }
});

// send information with a quiz question and answers
app.get('/question', async (req, res) => {
    let question, audios;

    try {
        const { rows } = await db.getRandomAnimal();
        question = rows[0];

    } catch (err) {
        console.log('err in getRandomAnimal: ', err);
    }

    try {
        const { rows:resp } = await db.getRandomAudios(question.id);
        audios = resp;

    } catch (err) {
        console.log('err im getRandomAudios: ', err);
    }

    // create an arr only with audio files 
    const questions = [];
    audios.map(audio => questions.push(audio.term_read));
    questions.push(question.term_read);

    const shuffledQuestions = alg.shuffleArr(questions);

    res.json({ 
        question, 
        answers: shuffledQuestions,
        correctAnswer: question.term_read
    });

});

// send two arr ob objects with audios and imgs for the memory game
app.get('/memory-cards', async (req, res) => {
    let randomAnimals;

    try {
        const { rows } = await db.getFourRandomAnimals();
        // console.log('ROWS in memory cards: ', rows);
        randomAnimals = rows;

    } catch(err) {
        console.log('err in getFourRandomAnimals: ', err);
    }

    let imgs = [];
    let audios = [];
    // create two separate arr of images and audios
    randomAnimals.forEach(element => {
        const { id, img } = element;
        let imgObj = { id, img };
        imgs.push(imgObj);

        const { term_read } = element;
        let audioObj = { id, term_read};
        audios.push(audioObj);
    });

    const shuffledImgs = alg.shuffleArr(imgs);
    const shuffledAudios = alg.shuffleArr(audios);

    res.json({
        imgs: shuffledImgs,
        audios: shuffledAudios
    });

});



////////////////// DO NOT CHANGE THE CODE BELOW THIS LINE ////////////////
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
////////////////// DO NOT CHANGE THE CODE BELOW THIS LINE ///////////////

app.listen(process.env.PORT || 8080, function () {
    console.log("server of the final project is listening 🐱🐶🐨🦉");
});