CREATE SCHEMA study;
CREATE TABLE study.word
(
    id   BIGSERIAL NOT NULL,
    name text,
    CONSTRAINT id
        PRIMARY KEY (id)
);
CREATE INDEX study_index_word_name
    ON study.word (name);