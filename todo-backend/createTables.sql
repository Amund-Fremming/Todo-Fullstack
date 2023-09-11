DROP TABLE IF EXISTS todouser CASCADE;
DROP TABLE IF EXISTS todo CASCADE;

CREATE TABLE todouser
(
    userid SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    passwordsalt VARCHAR NOT NULL
);

CREATE TABLE todo
(
    todoid SERIAL PRIMARY KEY,
    userid INTEGER REFERENCES todouser(userid),
    todoheader VARCHAR,
    todoinfo VARCHAR
);