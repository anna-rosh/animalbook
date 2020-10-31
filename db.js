const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/animals"
);

////////////////////////////// Q U E R I E S ////////////////////////

module.exports.getAllAnimals = () => {
    return db.query(`SELECT * FROM animals ORDER BY id ASC`);
};

module.exports.getAnimalById = (animalId) => {
    return db.query(
        `SELECT * FROM animals
        WHERE id = $1`,
        [animalId]
    );
};

// used in quiz
module.exports.getRandomAnimal = () => {
    return db.query(
        `SELECT id, img, term_read, sound FROM animals
        ORDER BY RANDOM()
        LIMIT 1`
    );
};

// used in quiz
module.exports.getRandomAudios = (animalId) => {
    // get to random sound-urls which different than the correct answer
    return db.query(
        `SELECT id, term_read FROM animals
        WHERE id <> $1
        ORDER BY RANDOM()
        LIMIT 2`,
        [animalId]
    );
};

// used in memory
module.exports.getFourRandomAnimals = () => {
    return db.query(
        `SELECT id, img, term_read
        FROM animals
        ORDER BY RANDOM()
        LIMIT 4`
    );
};