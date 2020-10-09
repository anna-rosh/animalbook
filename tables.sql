DROP TABLE IF EXISTS animals;

CREATE TABLE animals (
    id SERIAL PRIMARY KEY,
    animal VARCHAR NOT NULL CHECK (animal != ''),
    img VARCHAR NOT NULL CHECK (animal != ''),
    term_read VARCHAR NOT NULL CHECK (term_read != ''),
    sound VARCHAR
);

INSERT INTO animals (animal, img, term_read, sound)
VALUES ('cat', '/img/cat.png', '/names/katze.mp3', '/sounds/cat.mp3');