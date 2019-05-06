const React = require('react');

const Stats = (props) => {
    let uniqueWords = 0;
    for (let i = 0; i < props.words.length; i++) {
        if (props.words[i].count === 1) {
            uniqueWords += 1;
        }
    }

    return (
       <div className="info">
            <h3>Stats</h3>
            <p>Word count: <b>{props.wordCount}</b></p>
            <p>Total distict words: <b>{props.words.length}</b></p>
            <p>Unique words (only show up once): <b>{uniqueWords}</b></p>
       </div>
    );
};

module.exports = Stats;

/*
Word count:
unique words:
Number of words that show up only once:
 */
