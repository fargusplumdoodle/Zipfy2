const React = require('react');

const FreqTable = (props) => {
    const TOP_WORD_FREQ = props.words[0].count;
    return (
        <table className="table table-striped table-bordered">
                <tr>
                    <th className="w-10">Rank</th>
                    <th className="w-40">Word</th>
                    <th className="w-50">Frequency</th>
                    <th className="w-50"> Est. Frequency</th>
                </tr>
            <tbody>
            {props.words.map((word, index) =>
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{word.word}</td>
                    <td>{word.count}</td>
                    <td>{(TOP_WORD_FREQ / (index + 1))}</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

module.exports = FreqTable;
/*
            { props.words.map((word, freq) =>
                <tr>
                    <td>0</td>
                    <td>{word}</td>
                    <td>{freq}</td>
                </tr>
            )}

 */