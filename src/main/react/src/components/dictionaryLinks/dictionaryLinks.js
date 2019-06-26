import React from "react";

export default function dictionaryLinks(props) {
    const word = props.word;

    return (
        <React.Fragment>
            <a href={"https://translate.google.ru/#view=home&op=translate&sl=en&tl=ru&text=" + word}
               className="badge badge-primary" rel="noopener noreferrer" target="_blank">G</a>&nbsp;
            <a href={"https://dictionary.cambridge.org/dictionary/english/" + word}
               className="badge badge-secondary" rel="noopener noreferrer" target="_blank">C</a>&nbsp;
            <a href={"https://www.urbandictionary.com/define.php?term=" + word}
               className="badge badge-info" rel="noopener noreferrer" target="_blank">U</a>&nbsp;
            <a href={"https://www.dictionary.com/browse/" + word}
               className="badge badge-light" rel="noopener noreferrer" target="_blank">D</a>&nbsp;
            <a href={"https://youglish.com/search/" + word + "/us"}
               className="badge badge-danger" rel="noopener noreferrer" target="_blank">Y</a>
        </React.Fragment>
    )
}
