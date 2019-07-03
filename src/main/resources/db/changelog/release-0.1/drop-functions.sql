create function study.drop_word(i_id bigint) returns boolean
    language plpgsql
as
$$
BEGIN
    DELETE FROM study.example WHERE word_id = i_id;
    DELETE FROM study.group_member WHERE word_id = i_id;
    DELETE FROM study.word WHERE id = i_id;
    RETURN TRUE;
END;
$$;

create function study.drop_group(i_id bigint) returns boolean
    language plpgsql
as
$$
BEGIN
    DELETE FROM study.group_member WHERE group_id = i_id;
    DELETE FROM study.group WHERE id = i_id;
    RETURN TRUE;
END;
$$;