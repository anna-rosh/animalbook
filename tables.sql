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

INSERT INTO animals (animal, img, term_read, sound)
VALUES ('dog', '/img/dog.png', '/names/hund.mp3', '/sounds/dog.mp3');

INSERT INTO animals (animal, img, term_read, sound)
VALUES ('cow', '/img/cow.png', '/names/kuh.mp3', '/sounds/cow.mp3');

INSERT INTO animals (animal, img, term_read, sound)
VALUES ('rooster', '/img/rooster.png', '/names/hahn.mp3', '/sounds/rooster.mp3');

INSERT INTO animals (animal, img, term_read, sound)
VALUES ('sheep', '/img/sheep.png', '/names/schaf.mp3', '/sounds/sheep.mp3');