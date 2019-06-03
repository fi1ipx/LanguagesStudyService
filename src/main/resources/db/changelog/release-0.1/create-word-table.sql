CREATE SCHEMA study;
CREATE TABLE study.word
(
    id         BIGSERIAL                NOT NULL,
    name       text,
    created_at timestamp with time zone NOT NULL,
    CONSTRAINT id
        PRIMARY KEY (id)
);
CREATE INDEX study_index_word_name
    ON study.word (name);