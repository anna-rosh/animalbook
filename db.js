const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/animals"
);

////////////////////////////// Q U E R I E S ////////////////////////

module.exports.getAllAnimals = () => {
    return db.query(`SELECT * FROM animals ORDER BY id ASC`);
};