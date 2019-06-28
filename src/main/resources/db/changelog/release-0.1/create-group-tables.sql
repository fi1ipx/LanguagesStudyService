create table study.group
(
    id         bigserial not null
        constraint group_pk
            primary key,
    name       text      not null,
    created_at timestamp with time zone
);

create table study.group_member
(
    group_id bigint not null
        constraint group_member_group_id_fk
            references study."group",
    word_id bigint not null
        constraint group_member_word_id_fk
            references study.word,
    constraint group_member_pk
        primary key (group_id, word_id)
);
