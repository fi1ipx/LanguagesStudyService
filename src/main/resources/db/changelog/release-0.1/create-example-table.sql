CREATE TABLE study.example
(
    id         BIGSERIAL                NOT NULL,
    word_id    BIGSERIAL                NOT NULL,
    FOREIGN KEY (word_id) REFERENCES study.word (id),
    created_at timestamp with time zone NOT NULL,
    text       text                     NOT NULL,
    PRIMARY KEY (id)
);
CREATE INDEX study_index_example_word_id
    ON study.example (word_id);